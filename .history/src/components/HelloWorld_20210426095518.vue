<template>
  <div>
    <p>{{msg}}</p>
    <b-button @click="hello">CLICK</b-button>
    <HelloWorld2
      :parentData="parentSendData"
      @childSendData="emitData"
    />
    <p>Child Data: {{childSendData}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator'
import HelloWorld2 from './HelloWorld2.vue'

// Component 宣告在最前面
@Component({
  components: {
    HelloWorld2
  }
})

export default class HelloWorld extends Vue {
  // Data
  private firstName = 'John'
  private lastName = 'Don'
  private data = []
  private apiURL = 'https://api.kcg.gov.tw/api/service/get/2c1d9959-d038-4918-bae3-409680f8193a'
  public parentSendData = 'parentSendData'
  public childSendData = ''

  // @Prop(props)
  @Prop() private msg!: string;
  // @Emit
  @Emit()
  private emitData (msg:string) {
    console.log(msg)
    this.childSendData = msg
  }

  // methods
  public hello () {
    console.log(this.firstName + ' ' + this.lastName)
  }

  // 生命週期
  public mounted () {
    this.$http.get(this.apiURL).then((res) => {
      this.data = res.data.data
      console.log('data', this.data)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
