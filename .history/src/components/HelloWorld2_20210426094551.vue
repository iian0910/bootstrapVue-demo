<template>
  <div>
    <h3>HelloWorld2</h3>
    <p>{{parentData}}</p>
    <b-button variant="outline-primary" @click="childSendData">CLICK</b-button>
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

  childData = 'childSendData'

  public childSendData () {
    this.$emit('childSendData', this.childData)
  }
}
</script>
<style lang="">

</style>
