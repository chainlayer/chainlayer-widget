<template>
  <div id="app" style="vertical-align:top">
    <h3>Validating Networks</h3>
    <CosmosLedger msg="Delegation" @cosmosStake="updateCosmos"/>
    <TerraLedger msg="Delegation" @terraStake="updateTerra"/>
    <IrisLedger msg="Delegation" @irisStake="updateIris"/>
    <TezosWidget msg="Delegation" @tezosStake="updateTezos"/>
    <hr>
    <TotalStake :tezosStake="tezosStake" :irisStake="irisStake" :terraStake="terraStake" :cosmosStake="cosmosStake"/>
    <hr>
    <h3>Testnet</h3>
    <div class="wanchainWidget" style="width: 300px; display:inline-block; vertical-align:top">
      <img src="/img/logo-wanchain.png" alt="Wanchain" title="wWnchain" height="46"><br>
    </div>
    <div class="regenWidget" style="width: 300px; display:inline-block; vertical-align:top">
      <img src="/img/logo-regen.png" alt="Regen" title="Regen" height="46"><br>
    </div>
    <div class="kavaWidget" style="width: 300px; display:inline-block; vertical-align:top">
      <img src="/img/logo-kava.svg" alt="Kava" title="Kava" height="40"><br>
    </div>
    <hr>
    <h3>Investigating</h3>
    <div class="polkadotWidget" style="width: 300px; display:inline-block; vertical-align:top">
      <img src="/img/logo-polkadot.svg" alt="Polkadot" title="Polkadot" height="46"><br>
    </div>
    <div class="emoneyWidget" style="width: 300px; display:inline-block; vertical-align:top">
      <img src="/img/logo-emoney.png" alt="e-Money" title="e-Money" height="46"><br>
    </div>
  </div>
</template>

<script>
import TotalStake from './components/TotalStake.vue'
import IrisLedger from './components/IrisLedger.vue'
import CosmosLedger from './components/CosmosLedger.vue'
import TerraLedger from './components/TerraLedger.vue'
import TezosWidget from './components/TezosWidget.vue'
import Big from 'big.js';

export default {
  name: 'app',
  components: {
    TotalStake,
    IrisLedger,
    CosmosLedger,
    TerraLedger,
    TezosWidget
  },
  data: function() {
    return {
      tezosStake: Big(0),
      cosmosStake: Big(0),
      terraStake: Big(0),
      irisStake: Big(0),
    };
  },
  methods: {
    updateTezos(variable) {
      this.tezosStake = variable;
    },
    updateCosmos(variable) {
      this.cosmosStake = variable;
    },
    updateTerra(variable) {
      this.terraStake = variable;
    },
    updateIris(variable) {
      this.irisStake = variable;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.v--modal-overlay {
  background: red;
}
div.v--modal {
  padding: 5px;
  text-align: center;
}
</style>
