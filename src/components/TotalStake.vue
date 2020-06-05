<template>
    <div class="totalStake" style="width: 100%; display:inline-block; vertical-align:top">
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
            },
            kavaStake: {
                type: Object,
                default: Big(0)
            },
            wanchainStake: {
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
            irisStake: function() {
                this.totalstake = Big(this.irisStake.add(this.terraStake).add(this.cosmosStake).add(this.wanchainStake).add(this.kavaStake));
                this.totalstake = curformatter.format(this.totalstake)
            },
            terraStake: function() {
                this.totalstake = Big(this.irisStake.add(this.terraStake).add(this.cosmosStake).add(this.wanchainStake).add(this.kavaStake));
                this.totalstake = curformatter.format(this.totalstake)
            },
            cosmosStake: function() {
                this.totalstake = Big(this.irisStake.add(this.terraStake).add(this.cosmosStake).add(this.wanchainStake).add(this.kavaStake));
                this.totalstake = curformatter.format(this.totalstake)
            },
            kavaStake: function() {
                this.totalstake = Big(this.irisStake.add(this.terraStake).add(this.cosmosStake).add(this.wanchainStake).add(this.kavaStake));
                this.totalstake = curformatter.format(this.totalstake)
            },
            wanchainStake: function() {
                this.totalstake = Big(this.irisStake.add(this.terraStake).add(this.cosmosStake).add(this.wanchainStake).add(this.kavaStake));
                this.totalstake = curformatter.format(this.totalstake)
            }
        }
    };
</script>

