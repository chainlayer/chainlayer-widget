<template>
  <div id="app" style="vertical-align:top">
    <TotalStake :irisStake="irisStake" :terraStake="terraStake" :cosmosStake="cosmosStake" :wanchainStake="wanchainStake" :kavaStake="kavaStake"/>
    <hr>
    <h3>Validating Networks</h3>
    <CosmosLedger msg="Delegation" @cosmosStake="updateCosmos"/>
    <TerraLedger msg="Delegation" @terraStake="updateTerra"/>
    <IrisLedger msg="Delegation" @irisStake="updateIris"/>
    <br>&nbsp;
    <br>
    <KavaLedger msg="Delegation" @kavaStake="updateKava"/>
    <WanchainWidget msg="Delegation" @wanchainStake="updateWanchain"/>
    <div class="chainlinkWidget" style="width: 300px; display:inline-block; vertical-align:top">
      <img src="/img/logo-chainlink.png" alt="Chainlink" title="Chainlink" width="128" height="46"><br>
      <label>Chainlayer Oracle for Chainlink</label><br>
      <br>&nbsp;
      <br>&nbsp;
      <a class="button sg-popup-id-146 button_size_2 button_dark button_js" href=""><span class="button_label">Details</span></a>&nbsp;
    </div>
    <hr>
    <h3>Testnet</h3>
    <div class="regenWidget" style="width: 300px; display:inline-block; vertical-align:top">
      <a href=""><img src="/img/logo-regen.png" alt="Regen" title="Regen" width="237" height="46"></a><br>
    </div>
    <br />&nbsp;<br />
    <div class="celoWidget" style="width: 300px; display:inline-block; vertical-align:top">
      <a href=""><img src="/img/logo-celo.png" alt="Celo" title="Celo" width="94" height="46"></a><br>
    </div>
    <div class="polkadotWidget" style="width: 300px; display:inline-block; vertical-align:top">
      <a href=""><img src="/img/logo-polkadot.svg" alt="Polkadot" title="Polkadot" width="159" height="46"></a><br>
    </div>
    <hr>
    <h3>Investigating</h3>
    <div class="emoneyWidget" style="width: 300px; display:inline-block; vertical-align:top">
      <a href=""><img src="/img/logo-emoney.png" alt="e-Money" title="e-Money" width="161" height="46"></a><br>
    </div>
    <div class="skaleWidget" style="width: 300px; display:inline-block; vertical-align:top">
      <a href=""><img src="/img/logo-skale.png" alt="Skale" title="Skale" width="180" height="46"></a><br>
    </div>
  </div>
</template>

<script>
import TotalStake from './components/TotalStake.vue'
import IrisLedger from './components/IrisLedger.vue'
import CosmosLedger from './components/CosmosLedger.vue'
import KavaLedger from './components/KavaLedger.vue'
import TerraLedger from './components/TerraLedger.vue'
import WanchainWidget from './components/WanchainWidget.vue'
import Big from 'big.js';

export default {
  name: 'app',
  components: {
    TotalStake,
    IrisLedger,
    CosmosLedger,
    KavaLedger,
    TerraLedger,
    WanchainWidget
  },
  data: function() {
    return {
      cosmosStake: Big(0),
      terraStake: Big(0),
      irisStake: Big(0),
      wanchainStake: Big(0),
      kavaStake: Big(0),
    };
  },
  methods: {
    updateCosmos(variable) {
      this.cosmosStake = variable;
    },
    updateKava(variable) {
      this.kavaStake = variable;
    },
    updateTerra(variable) {
      this.terraStake = variable;
    },
    updateIris(variable) {
      this.irisStake = variable;
    },
    updateWanchain(variable) {
      this.wanchainStake = variable;
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
a.button .button_label {
  padding: 6px 20px;
}
</style>
