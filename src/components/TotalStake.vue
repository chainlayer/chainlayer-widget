<template>
    <div class="totalStake" style="width: 300px; display:inline-block; vertical-align:top">
        <h3>Currently Trusted to ChainLayer: {{totalstake}}</h3>
    </div>
</template>

<script>
    import Big from 'big.js';

    var curformatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    export default {
        name: "Results",
        props: {
            tezosStake: {
                type: Object,
                default: Big(0)
            },
            irisStake: {
                type: Object,
                default: Big(0)
            },
            terraStake: {
                type: Object,
                default: Big(0)
            },
            cosmosStake: {
                type: Object,
                default: Big(0)
            }
        },
        data: function() {
            return {
                totalstake: Big(0)
            };
        },
        watch: {
            tezosStake: function() {
                this.totalstake = Big(this.tezosStake.add(this.irisStake).add(this.terraStake).add(this.cosmosStake));
                this.totalstake = curformatter.format(this.totalstake)
            },
            irisStake: function() {
                this.totalstake = Big(this.tezosStake.add(this.irisStake).add(this.terraStake).add(this.cosmosStake));
                this.totalstake = curformatter.format(this.totalstake)
            },
            terraStake: function() {
                this.totalstake = Big(this.tezosStake.add(this.irisStake).add(this.terraStake).add(this.cosmosStake));
                this.totalstake = curformatter.format(this.totalstake)
            },
            cosmosStake: function() {
                this.totalstake = Big(this.tezosStake.add(this.irisStake).add(this.terraStake).add(this.cosmosStake));
                this.totalstake = curformatter.format(this.totalstake)
            }
        }
    };
</script>

