<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-3 offset-1 my-3">
          關鍵字：<b-form-input
            v-model="filterText"
            type="text"
            placeholder="輸入關鍵字"
          ></b-form-input>
        </div>
      </div>
      <div class="row">
        <div class="col-10 offset-1">
          <!-- Table: 基本款 -->
          <!-- <b-table striped hover :items="sliceDate"></b-table> -->

          <!-- Table: 客製化 -->
          <b-table
            striped hover
            :items="sliceDate"
          >
            <template #cell(seq)="data">{{data.item.seq}}</template>
            <template #cell(materialYear)="data">{{data.item.materialYear}}</template>
            <template #cell(statisticsProject)="data">{{data.item.statisticsProject}}</template>
            <template #cell(taxCategory)="data">{{data.item.taxCategory}}</template>
            <template #cell(value)="data">
              <div class="text-left">{{data.item.value | currencyChange}}</div>
            </template>
            <template #cell(dataUnit)="data">{{data.item.dataUnit}}</template>
          </b-table>
          <!-- Pagination -->
          <div class="d-flex justify-content-center">
            <b-pagination
              v-model="currentPage"
              :total-rows="data.length"
              :per-page="perPage"
              pills
              first-number
              last-number
              size="sm"
              @click.native="sliceData(currentPage)"
            ></b-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

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

export default class TablePagination extends Vue {
  // Data
  private apiURL = 'https://api.kcg.gov.tw/api/service/get/2c1d9959-d038-4918-bae3-409680f8193a'
  public data = []
  public sliceDate = []
  public parentSendData = 'parentSendData'
  public childSendData = ''
  public currentPage = 1 // 預設目前頁面
  public perPage = 10 // 每頁顯示項目數
  public filterText = ''

  // methods
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

  private sliceData (currentPage: number) {
    this.sliceDate = this.data.slice(this.perPage * currentPage - this.perPage, this.perPage * currentPage)
  }

  // Computed

  get filterInput () {
    return this.data.filter((item:any) => item.taxCategory.match(this.filterText))
  }

  set filterInput (value) {
    console.log('value', value)
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

</style>
