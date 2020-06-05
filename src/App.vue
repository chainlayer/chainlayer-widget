<template>
  <div id="app" style="vertical-align:top">
    <TotalStake :irisStake="irisStake" :terraStake="terraStake" :cosmosStake="cosmosStake" :wanchainStake="wanchainStake" :kavaStake="kavaStake"/>
    <hr>
    <h3>Validating Networks</h3>
    <CosmosLedger msg="Delegation" @cosmosStake="updateCosmos"/>
    <KavaLedger msg="Delegation" @kavaStake="updateKava"/>
    <div class="chainlinkWidget" style="width: 300px; display:inline-block; vertical-align:top">
      <img src="/img/logo-chainlink.png" alt="Chainlink" title="Chainlink" style="height:60px"><br>
      <!--label>Chainlayer Oracle for Chainlink</label><br>
      <br>&nbsp;
      <br>&nbsp;
      <a class="button sg-popup-id-146 button_size_2 button_dark button_js" href=""><span class="button_label">Details</span></a-->
    </div>
    <br>&nbsp;
    <br>
    <WanchainWidget msg="Delegation" @wanchainStake="updateWanchain"/>
    <div class="Solana" style="width: 300px; display:inline-block; vertical-align:top">
      <img src="/img/logo-solana.svg" alt="Solana" title="Solana" style="height:46px"><br>
      <span class="button_label">&nbsp;</span><br>
      <span class="button_label">&nbsp;</span>
    </div>
    <div class="Celo" style="width: 300px; display:inline-block; vertical-align:top">
      <img src="/img/logo-celo.png" alt="Celo" title="Celo" style="height:46px"><br>
      <span class="button_label">&nbsp;</span><br>
      <span class="button_label">&nbsp;</span>
    </div>
    <br>
    <br>
    <div class="E-Money" style="width: 300px; display:inline-block; vertical-align:top">
      <img src="/img/logo-emoney.png" alt="E-Money" title="E-Money" style="height:46px"><img
              src="../../../../../../Volumes/GoogleDrive/Shared drives/Shared Peter and Chris/Bookkeeping and Financials/Invoices 2020/logo-kusama.png"/><br>
      <span class="button_label">&nbsp;</span><br>
      <span class="button_label">&nbsp;</span>
    </div>
    <TerraLedger msg="Delegation" @terraStake="updateTerra"/>
    <IrisLedger msg="Delegation" @irisStake="updateIris"/>
    <br>
    <br>
    <div class="IOV" style="width: 300px; display:inline-block; vertical-align:top">
      <img src="/img/logo-iov.png" alt="IOV" title="IOV" style="height:46px"><br>
      <span class="button_label">&nbsp;</span><br>
      <span class="button_label">&nbsp;</span>
    </div>
    <div class="Empty" style="width: 300px; display:inline-block; vertical-align:top">
      &nbsp;
    </div>
    <div class="Empty" style="width: 300px; display:inline-block; vertical-align:top">
      &nbsp;
    </div>
    <hr>
    <h3>Testnet</h3>
    <div class="akashWidget" style="width: 300px; display:inline-block; vertical-align:top">
      <a href=""><img src="/img/logo-akash.svg" alt="Akash" title="Akash" style="height:46px"></a><br>
    </div>
    <div class="regenWidget" style="width: 300px; display:inline-block; vertical-align:top">
      <a href=""><img src="/img/logo-regen.png" alt="Regen" title="Regen" style="height:46px"></a><br>
    </div>
    <div class="polkadotWidget" style="width: 300px; display:inline-block; vertical-align:top">
      <a href=""><img src="/img/logo-polkadot.svg" alt="Polkadot" title="Polkadot" style="height:46px"></a><br>
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
