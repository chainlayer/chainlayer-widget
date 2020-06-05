<template>
    <div class="wanchainWidget" style="width: 300px; display:inline-block; vertical-align:top">
        <img src="/img/logo-wanchain.png" alt="Wanchain" title="Wanchain" style="height:46px"><br>
        <!--span v-if="this.staked!=''"><label>Staked by ChainLayer: </label><br>
            <span>{{staked}} {{denom}} ({{stakedUSD}})</span><br></span>
        <span v-if="this.price!=''">Price {{denom}}: $ {{price}}</span><br>
        <a class="button sg-popup-id-183 button_size_2 button_dark button_js" href=""><span class="button_label">Details</span></a-->
        <a class="button button_size_2 button_dark button_js" href="https://mywanwallet.io/#staking" target="_blank" rel="noopener noreferrer"><span class="button_label">Delegate</span></a><br>
        <span class="button_label">&nbsp;</span>
    </div>
</template>

<script>
    import axios from "axios";
    import Big from 'big.js';

    export default {
        name: 'WanchainWidget',
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
                this.denom = 'Wan';
                this.baseamount = 1000000000000000000;

                this.log(this.consoleLog, "Trying to connect...");

                var curformatter = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                });
                var amtformatter = new Intl.NumberFormat('en-US', {
                    style: 'decimal',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                });

                // First get Validator Info
                this.validators = await this.getStakingBalance();
                this.staked = amtformatter.format(Big(this.validators / this.baseamount));

                this.price = await this.getPrice();
                this.stakedUSD = curformatter.format(Big(this.validators / this.baseamount * this.price));
                this.$emit("wanchainStake", Big(this.validators / this.baseamount * this.price));
            },
            getPrice: async function () {
                const url = `https://min-api.cryptocompare.com/data/price?fsym=WAN&tsyms=USD`;
                return axios.get(url).then((r) => {
                    return r.data.USD;
                });
            },
            getStakingBalance: async function () {
                const url = `https://mywanwallet.nl/chainlayerstake.json`;
                return axios.get(url).then((r) => {
                    var amount = parseInt(r.data.amount);
                    var i = 0
                    for (i=0; i<r.data.clients.length; i++) {
                        amount += parseInt(r.data.clients[i].amount);
                    }
                    for (i=0; i<r.data.partners.length; i++) {
                        amount += parseInt(r.data.partners[i].amount);
                    }
                    return amount;
                });
            },
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
