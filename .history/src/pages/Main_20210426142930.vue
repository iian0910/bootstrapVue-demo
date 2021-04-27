<template>
  <Navbar>
  <router-view></router-view>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Navbar from '../components/Navbar.vue'

@Component({
  components: {
    Navbar
  }
})
export default class Main extends Vue {

}
</script>
<style lang="scss">

</style>
