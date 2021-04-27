<template>
  <div>
    <h3>HelloWorld2</h3>
    <p>{{parentData}}</p>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

// Component 宣告在最前面
@Component({
  components: {}
})

export default class HelloWorld2 extends Vue {
  @Prop() private parentData!: string;
}
</script>
<style lang="">

</style>
