<template>
    <div class="cosmosLedger" style="width: 460px; display:inline-block;">
        <img src="/logo-cosmos.svg" alt="Cosmos" title="Cosmos" width="145" height="46"><br>
        <span v-if="this.staked!=''"><label>Staked by ChainLayer: </label><br>
            <span>{{staked}} {{denom}} ({{stakedUSD}})</span><br></span>
        <label v-if="this.price!=''">Price {{denom}}: </label><span>$ {{price}}</span><br>
        <span v-if="this.connecting==false && this.connected==false"><button v-on:click="tryConnect">Connect</button><br></span>
        <span v-if="this.connecting==true"><img src="/Spinner.gif" height="93" width="93"/></span>
        <span v-if="this.error!=''">{{error}}</span><br>
        <span v-if="this.bech32!=''"><b>Your information</b></span><br>
        <label v-if="this.bech32!=''">Address: </label><span v-if="this.bech32!=''">{{bech32}}</span><br>
        <label v-if="this.balance_available!=''">Available Balance: </label><span v-if="this.balance_available!=''">{{balance_available}} {{denom}}</span><br>
        <label v-if="this.balance_delegated!=''">Delegated Balance: </label><span v-if="this.balance_delegated!=''">{{balance_delegated}} {{denom}}</span><br>
        <label v-if="this.balance_total!=''">Total Balance: </label><span v-if="this.balance_total!=''">{{balance_total}} {{denom}}</span><br>
        <label v-if="this.rewards!=''">Rewards: </label><span v-if="this.rewards!=''">{{rewards}} {{denom}}</span><br>
        <label v-if="this.readytodelegate">Delegation amount in {{denom}}: </label><input v-model.number="delegation" type="number" v-if="this.readytodelegate" @keypress="onlyNumber"><br>
        <button v-on:click="delegate" v-if="this.readytodelegate">Delegate</button>
        <button v-on:click="withdraw" v-if="this.readytodelegate">Withdraw</button>
        <button v-on:click="tryConnect" v-if="this.readytodelegate">Refresh</button>
        <ul id="console-status" v-if="this.debug">
            <li v-for="item in consoleStatus" v-bind:key="item.index">
                {{ item.msg }}
            </li>
        </ul>
    </div>
</template>

<script>
    var { CosmosDelegateTool } = require("cosmos-sdk-delegation-lib");
    import TransportU2F from '@ledgerhq/hw-transport-u2f';
    import Big from 'big.js';

    const transport = new TransportU2F();
    const cdt = new CosmosDelegateTool(transport);
    cdt.setNodeURL('https://stargate.cosmos.network');

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
                connecting: false,
                readytodelegate: false,
                debug: false,
                denom: '',
                staked: '',
                stakedUSD: '',
                error: '',
                price: '',
                chainId: '',
                validator: '',
                rewards: '',
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
            onlyNumber ($event) {
                //console.log($event.keyCode); //keyCodes value
                let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
                if ((keyCode < 48 || keyCode > 57) && keyCode === 46) { // 46 is dot
                    $event.preventDefault();
                }
            },
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
                this.denom = 'Atom';
                this.hrp = cdt.getHrp();
                this.readytodelegate = false;
                this.baseamount = 1000000;
                this.validator = 'cosmosvaloper1kgddca7qj96z0qcxr2c45z73cfl0c75p7f3s2e';
                this.chainId = 'cosmoshub-2';

                this.log(this.consoleLog, "Trying to connect...");

                var curformatter = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                });
                var amtformatter = new Intl.NumberFormat('en-US', {
                    style: 'decimal',
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                });

                // First get Validator Info
                this.validators = await cdt.retrieveValidators();
                this.staked = amtformatter.format(Big(this.validators[this.validator].totalShares / this.baseamount));

                this.price = await cdt.getPrice();
                this.stakedUSD = curformatter.format(Big(this.validators[this.validator].totalShares / this.baseamount * this.price));

                try {
                    this.connecting = true;
                    await cdt.connect();
                } catch(e) {
                    // TODO: Handle error if not logged in
                    this.log(this.consoleLog, e);
                    this.connected = false;
                    this.connecting = false;
                    return;
                }
                this.connecting = false;
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
                    this.log(this.consoleLog, e);
                    if (e=='Error: Unknown Status Code: 26628') {
                        this.error = 'Enter Pin on Ledger';
                    }
                    this.connected = false;
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
                    this.balance_available = amtformatter.format(Big(this.accInfo.balance/this.baseamount));
                    this.delegation = parseInt(this.balance_available);
                    this.log(this.consoleLog, this.accInfo);
                }

                this.reply = await cdt.retrieveBalances([this.myAddr]);
                if (this.accInfo.error) {
                    this.log(this.consoleLog, this.reply.error);
                    return
                } else {
                    this.log(this.consoleLog, this.reply);
                    this.balance_delegated = amtformatter.format(Big(this.reply[0].delegationsTotal/this.baseamount));
                    this.balance_total = amtformatter.format(Big(this.reply[0].delegationsTotal/this.baseamount).add(Big(this.accInfo.balance/this.baseamount)));
                    this.log(this.consoleLog, this.reply[0].delegationsTotal);
                }

                this.reply = await cdt.getRewards(this.validator, this.myAddr);
                if (this.reply.error) {
                    this.log(this.consoleLog, this.reply.error);
                    return
                } else {
                    this.log(this.consoleLog, this.reply);
                    this.rewards = amtformatter.format(Big(this.reply/this.baseamount));
                }

                this.readytodelegate = true;
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
                    chainId: this.chainId,
                    path: this.myAddr.path,
                    bech32: this.myAddr.bech32,
                    pk: this.myAddr.pk,
                };

                const dummyTx = await cdt.txCreateDelegate(
                    txContext,
                    this.validator,
                    this.delegation,   // TODO change this
                    'Delegation to ChainLayer.io',
                );

                this.log(this.consoleLog, "Waiting for device to sign");

                const signedTx = await cdt.sign(dummyTx, txContext);

                this.log(this.consoleLog, "Broadcasting signed tx");
                const response = await  cdt.txSubmit(signedTx);

                this.log(this.consoleLog, response);
            },
            withdraw: async function () {
                if (!cdt.connected) {
                    this.log(this.consoleLog, "Try connecting first..");
                    return;
                }
                if (this.myAddr === null) {
                    this.log(this.consoleLog, "Retrieve the device address first");
                    return;
                }
                const txContext = {
                    chainId: this.chainId,
                    path: this.myAddr.path,
                    bech32: this.myAddr.bech32,
                    pk: this.myAddr.pk,
                };

                const dummyTx = await cdt.txCreateWithdrawl(
                    txContext,
                    this.validator,
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