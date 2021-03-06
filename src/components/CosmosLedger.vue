<template>
    <div class="cosmosLedger" style="width: 300px; display:inline-block; vertical-align:top">
        <img src="/img/logo-cosmos.svg" alt="Cosmos" title="Cosmos" style="height:46px"><br>
        <!--span v-if="this.staked!=''"><label>Staked by ChainLayer: </label><br>
            <span>{{staked}} {{denom}} ({{stakedUSD}})</span><br></span>
        <span v-if="this.price!=''">Price {{denom}}: $ {{price}}</span><br>
        <a class="button sg-popup-id-142 button_size_2 button_dark button_js" href=""><span class="button_label">Details</span></a-->
        <a class="button button_size_2 button_dark button_js" href="https://ledger.chainlayer.io" target="_blank" rel="noopener noreferrer"><span class="button_label">Delegate</span></a><br>
        <span class="button_label">&nbsp;</span>
    </div>
</template>

<script>
    var { CosmosDelegateTool } = require("cosmos-sdk-delegation-lib");
    import TransportU2F from '@ledgerhq/hw-transport-u2f';
    import Big from 'big.js';

    const transport = new TransportU2F();
    const cdt = new CosmosDelegateTool(transport);
    cdt.setNodeURL('https://cosmoshub-lcd.chainlayer.net');

    var curformatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    var amtformatter = new Intl.NumberFormat('en-US', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    export default {
        name: 'CosmosLedger',
        props: {
            restUrl: String,
        },
        data() {
            return {
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
            this.init();
        },
        methods: {
            show () {
                this.$modal.show('cosmos-modal');
            },
            hide () {
                this.$modal.hide('cosmos-modal');
            },
            onlyNumber ($event) {
                //console.log($event.keyCode); //keyCodes value
                let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
                if ((keyCode < 48 || keyCode > 57) && keyCode === 46) { // 46 is dot
                    $event.preventDefault();
                }
            },
            log: function (list, msg) {
                if (this.debug) {
                    // eslint-disable-next-line
                    console.log(msg);
                }
            },
            init: async function () {
                this.error = '';
                this.myAddr = null;
                this.denom = 'Atom';
                this.hrp = cdt.getHrp();
                this.readytodelegate = false;
                this.baseamount = 1000000;
                this.validator = 'cosmosvaloper1kgddca7qj96z0qcxr2c45z73cfl0c75p7f3s2e';
                this.chainId = 'cosmoshub-3';

                this.log(this.consoleLog, "Trying to connect...");

                // First get Validator Info
                this.validators = await cdt.retrieveValidators();
                this.staked = amtformatter.format(Big(this.validators[this.validator].totalShares / this.baseamount));

                this.price = await cdt.getPrice();
                this.stakedUSD = curformatter.format(Big(this.validators[this.validator].totalShares / this.baseamount * this.price));
                this.$emit("cosmosStake", Big(this.validators[this.validator].totalShares / this.baseamount * this.price));
            },
            tryConnect: async function () {
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
