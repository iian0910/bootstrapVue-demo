<template>
  <div>
    <div class="container">
      <!-- Table -->
      <b-table striped hover :items="sliceDate">
        <template #cell(sqe)="data">22{{data.seq + 1}}</template>
      </b-table>
      <!-- <b-table
        striped hover
        :items="sliceDate"
        :per-page="perPage"
        :current-page="currentPage"
      ></b-table> -->
      <!-- Pagination -->
      <b-pagination
        v-model="currentPage"
        :total-rows="data.length"
        :per-page="perPage"
        aria-controls="my-table"
        @click.native="event(currentPage)"
      ></b-pagination>
      <!-- Other Component (props / emit) -->
      <HelloWorld2
        :parentData="parentSendData"
        @childSendData="emitData"
      />
      <p>Child Data: {{childSendData}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator'
import HelloWorld2 from './HelloWorld2.vue'

// interFace
interface Data {
  seq: string;
  materialYear: string;
  statisticsProject: string;
  taxCategory: string;
  dataUnit: string;
  value: string;
}

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
  private apiURL = 'https://api.kcg.gov.tw/api/service/get/2c1d9959-d038-4918-bae3-409680f8193a'
  public data = []
  public sliceDate = []
  public parentSendData = 'parentSendData'
  public childSendData = ''
  public currentPage = 1 // 預設目前頁面
  public perPage = 10 // 每頁顯示項目數

  // @Prop(props)
  @Prop()
  private msg!: string;

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

  private changeDataDTO (data:any) {
    this.data = data.map((res: any) => {
      const rowData = {} as Data
      rowData.seq = res.seq
      rowData.materialYear = res.資料年度
      rowData.statisticsProject = res.統計項目
      rowData.taxCategory = res.稅目別
      rowData.dataUnit = res.資料單位
      rowData.value = res.值
      return rowData
    })
  }

  public event (currentPage: number) {
    this.sliceData(currentPage)
  }

  private sliceData (currentPage: number) {
    this.sliceDate = this.data.slice(this.perPage * currentPage - this.perPage, this.perPage * currentPage)
  }

  // 生命週期
  public mounted () {
    this.$http.get(this.apiURL).then((res) => {
      this.data = res.data.data
      this.changeDataDTO(this.data)
      this.sliceData(this.currentPage)
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
