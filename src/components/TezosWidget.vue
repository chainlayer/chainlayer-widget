<template>
    <div class="tezosWidget" style="width: 300px; display:inline-block; vertical-align:top">
        <img src="/img/logo-tezos.png" alt="Tezos" title="Tezos" width="108" height="46"><br>
        <span v-if="this.staked!=''"><label>Staked by ChainLayer: </label><br>
            <span>{{staked}} {{denom}} ({{stakedUSD}})</span><br></span>
        <span v-if="this.price!=''">Price {{denom}}: $ {{price}}</span><br>
    </div>
</template>

<script>
    import axios from "axios";
    import Big from 'big.js';

    export default {
        name: 'TezosWidget',
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
                this.denom = 'Tezos';
                this.baseamount = 1000000;

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
                this.validators = await this.getStakingBalance();
                this.staked = amtformatter.format(Big(this.validators[0] / this.baseamount));

                this.price = await this.getPrice();
                this.stakedUSD = curformatter.format(Big(this.validators[0] / this.baseamount * this.price));
                this.$emit("tezosStake", Big(this.validators[0] / this.baseamount * this.price));
            },
            getPrice: async function () {
                const url = `https://min-api.cryptocompare.com/data/price?fsym=XTZ&tsyms=USD`;
                return axios.get(url).then((r) => {
                    return r.data.USD;
                });
            },
            getStakingBalance: async function () {
                const url = `https://api2.tzscan.io/v1/staking_balance/tz1PesW5khQNhy4revu2ETvMtWPtuVyH2XkZ`;
                return axios.get(url).then((r) => {
                    return r.data;
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
