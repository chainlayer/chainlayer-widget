<template>
    <div class="cosmosLedger">
        <img src="/logo-irisnet.svg" data-src="/media/logo-cosmos.svg" alt="IrisNet" title="IrisNet" width="145" height="46"><br>
        <span v-if="this.staked!=''"><label>Staked by ChainLayer: </label><br>
            <span>{{staked}} Iris ({{stakedUSD}})</span><br></span>
        <span v-if="this.connected==false"><button v-on:click="tryConnect">Connect</button><br></span>
        <span v-if="this.error!=''">{{error}}</span><br>
        <label v-if="this.bech32!=''">Address: </label><span v-if="this.bech32!=''">{{bech32}}</span><br>
        <label v-if="this.balance_available!=''">Available Balance: </label><span v-if="this.balance_available!=''">{{balance_available}} {{denom}}</span><br>
        <label v-if="this.balance_delegated!=''">Delegated Balance: </label><span v-if="this.balance_delegated!=''">{{balance_delegated}} {{denom}}</span><br>
        <label v-if="this.balance_total!=''">Total Balance: </label><span v-if="this.balance_total!=''">{{balance_total}} {{denom}}</span><br>
        <label v-if="this.readytodelegate">Delegation amount in {{denom}}: </label><input v-model.number="delegation" type="number" v-if="this.readytodelegate"><br>
        <button v-on:click="delegate" v-if="this.readytodelegate">Delegate</button>
        <ul id="console-status" v-if="this.debug">
            <li v-for="item in consoleStatus" v-bind:key="item.index">
                {{ item.msg }}
            </li>
        </ul>
    </div>
</template>

<script>
    var { IrisDelegateTool } = require("cosmos-sdk-delegation-lib");
    import TransportU2F from '@ledgerhq/hw-transport-u2f';
    import Big from 'big.js';

    const transport = new TransportU2F();
    const cdt = new IrisDelegateTool(transport);
    cdt.setNodeURL('https://192.168.2.101');

    export default {
        name: 'CosmosLedger',
        props: {
            restUrl: String,
        },
        data() {
            return {
                consoleLog: [],
                myAddr: '',
                bech32: '',
                pk: '',
                path: '',
                accInfo: '',
                sequence: '',
                delegation: '',
                reply: '',
                balance_available: '',
                balance_delegated: '',
                balance_total: '',
                connected: false,
                readytodelegate: false,
                debug: false,
                denom: '',
                staked: '',
                stakedUSD: '',
                error: '',
                hrp: ''
            }
        },
        computed: {
            consoleStatus() {
                return this.consoleLog;
            },
        },
        created: function() {
            this.tryConnect();
        },
        methods: {
            log: function (list, msg) {
                if (this.debug) {
                    list.push({
                        index: list.length,
                        msg: msg
                    })
                } else {
                    // eslint-disable-next-line
                    console.log(msg);
                }
            },
            tryConnect: async function () {
                this.error = '';
                this.consoleLog = [];
                this.myAddr = null;
                this.denom = cdt.getDefaultDenom();
                this.hrp = cdt.getHrp();
                this.readytodelegate = false;
                this.spinning = true;

                this.log(this.consoleLog, "Trying to connect...");

                // First get Validator Info
                this.validators = await cdt.retrieveValidators();
                this.staked = Big(this.validators['iva1kgddca7qj96z0qcxr2c45z73cfl0c75pmw0meu'].totalShares).toString()

                this.price = await cdt.getPrice();
                var formatter = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                });

                this.stakedUSD = formatter.format(Big(this.validators['iva1kgddca7qj96z0qcxr2c45z73cfl0c75pmw0meu'].totalShares * this.price));

                try {
                    await cdt.connect();
                } catch(e) {
                    // TODO: Handle error if not logged in
                    this.log(this.consoleLog, e);
                    this.connected = false;
                    return;
                }
                if (!cdt.connected) {
                    this.connected = false;
                    this.log(this.consoleLog, cdt.lastError);
                    return;
                }
                this.connected = true;
                this.log(this.consoleLog, "Connected!");

                try {
                    this.myAddr = await cdt.retrieveAddress(0, 0);
                } catch(e) {
                    // TODO: Handle error if not logged in
                    this.log(this.consoleLog, e);
                    if (e=='Error: Unknown Status Code: 26628') {
                        this.connected = false;
                        this.error = 'Enter Pin on Ledger';
                    }
                    return
                }
                this.bech32 = this.myAddr.bech32;
                this.pk = this.myAddr.pk;
                this.path = this.myAddr.path;
                this.log(this.consoleLog, this.myAddr);
                this.log(this.consoleLog, `Address  : ${this.myAddr.bech32}`);
                this.log(this.consoleLog, `PublicKey: ${this.myAddr.pk}`);
                this.log(this.consoleLog, `Query ${this.myAddr.bech32}`);

                this.accInfo = await cdt.getAccountInfo(this.myAddr);
                if (this.accInfo.error) {
                    this.log(this.consoleLog, this.accInfo.error);
                    return
                } else {
                    this.log(this.consoleLog, this.accInfo.error);
                    this.log(this.consoleLog, this.accInfo);
                    this.sequence = this.accInfo.sequence;
                    this.balance_available = Big(this.accInfo.balance);
                    this.log(this.consoleLog, this.accInfo);
                }


                this.reply = await cdt.retrieveBalances([this.myAddr]);
                if (this.accInfo.error) {
                    this.log(this.consoleLog, this.reply.error);
                    return
                } else {
                    this.log(this.consoleLog, this.reply);
                    this.balance_delegated = Big(this.reply[0].delegationsTotal * 1000000000000000000);
                    this.balance_total = this.balance_delegated.add(this.balance_available);
                    this.log(this.consoleLog, this.reply[0].delegationsTotal);
                }
                this.readytodelegate = true;
                this.spinning = false;
            },
            delegate: async function () {
                if (!cdt.connected) {
                    this.log(this.consoleLog, "Try connecting first..");
                    return;
                }
                if (this.myAddr === null) {
                    this.log(this.consoleLog, "Retrieve the device address first");
                    return;
                }
                const txContext = {
                    chainId: 'irishub',
                    path: this.myAddr.path,
                    bech32: this.myAddr.bech32,
                    pk: this.myAddr.pk,
                };

                const dummyTx = await cdt.txCreateDelegate(
                    txContext,
                    'iva1kgddca7qj96z0qcxr2c45z73cfl0c75pmw0meu',
                    this.delegation,   // TODO change this
                    'Delegation to ChainLayer.io',
                );

                this.log(this.consoleLog, "Waiting for device to sign");

                const signedTx = await cdt.sign(dummyTx, txContext);

                this.log(this.consoleLog, "Broadcasting signed tx");
                const response = await  cdt.txSubmit(signedTx);

                this.log(this.consoleLog, response);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    button {
        padding: 5px;
        font-weight: bold;
        font-size: medium;
    }

    ul {
        padding: 10px;
        text-align: left;
        alignment: left;
        list-style-type: none;
        background: black;
        font-weight: bold;
        color: greenyellow;
    }
</style>
