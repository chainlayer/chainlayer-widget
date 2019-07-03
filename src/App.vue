<template>
  <div id="iris">
    <IrisLedger msg="Delegation"/>
  </div>
</template>

<script>
import IrisLedger from './components/IrisLedger.vue'

export default {
  name: 'app',
  components: {
    IrisLedger
  }
}
</script>

<style>
#iris {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
