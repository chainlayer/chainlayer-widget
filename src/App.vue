<template>
  <div id="app">
    <CosmosLedger msg="Delegation"/>
    <TerraLedger msg="Delegation"/>
    <IrisLedger msg="Delegation"/>
    <TezosWidget msg="Delegation"/>
  </div>
</template>

<script>
import IrisLedger from './components/IrisLedger.vue'
import CosmosLedger from './components/CosmosLedger.vue'
import TerraLedger from './components/TerraLedger.vue'
import TezosWidget from './components/TezosWidget.vue'

export default {
  name: 'app',
  components: {
    IrisLedger,
    CosmosLedger,
    TerraLedger,
    TezosWidget
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
</style>
