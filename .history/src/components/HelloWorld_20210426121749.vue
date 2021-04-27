<template>
  <div>
    <div class="container">
      <!-- Table: 基本款 -->
      <!-- <b-table striped hover :items="sliceDate"></b-table> -->

      <!-- Table: 客製化 -->
      <b-table
        striped hover
        :items="sliceDate"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
      >
        <template #cell(seq)="sliceDate">{{sliceDate.item.seq}}</template>
        <template #cell(materialYear)="sliceDate">{{sliceDate.item.materialYear}}</template>
        <template #cell(statisticsProject)="sliceDate">{{sliceDate.item.statisticsProject}}</template>
        <template #cell(taxCategory)="sliceDate">{{sliceDate.item.taxCategory}}</template>
        <template #cell(value)="sliceDate">
          <div class="text-left">{{sliceDate.item.value | currencyChange}}</div>
        </template>
        <template #cell(dataUnit)="sliceDate">{{sliceDate.item.dataUnit}}</template>
      </b-table>
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
  value: string;
  dataUnit: string;
}

// Component 宣告在最前面
@Component({
  components: {
    HelloWorld2
  },
  filters: {
    currencyChange (val: string) {
      val = parseFloat(val.replace(/\s/g, '').replace(/,/g, ''))
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      if (val === 'NaN') {
        val = ''
      }
      return '$' + val
    }
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
  public sortBy = 'Value'
  public sortDesc = false

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
      rowData.value = res.值
      rowData.dataUnit = res.資料單位
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
