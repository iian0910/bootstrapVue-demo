<template>
  <div>
    <b-button @click="hello">CLICK</b-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  firstName = 'John'
  lastName = 'Don'
  data = []
  apiURL = 'https://api.kcg.gov.tw/api/service/get/2c1d9959-d038-4918-bae3-409680f8193a'

  public hello () {
    console.log(this.firstName + ' ' + this.lastName)
  }

  mounted () {
    this.$http.get(this.apiURL).then((res) => {
      console.log(res)
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
