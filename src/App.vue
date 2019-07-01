<template>
  <div id="app">
    <CosmosLedger msg="Minimal Cosmos+Ledger delegation example"/>
  </div>
</template>

<script>
import CosmosLedger from './components/CosmosLedger.vue'

export default {
  name: 'app',
  components: {
    CosmosLedger
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
