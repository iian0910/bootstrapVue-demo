<template>
  <TablePagination/>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TablePagination from '../components/TablePagination.vue'

@Component({
  components: {
    TablePagination
  }
})
export default class App extends Vue {

}
</script>
<style lang="scss">

</style>
