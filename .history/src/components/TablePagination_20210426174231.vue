<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <div class="row">
        <div class="col-3 offset-1 my-3 key-word">
          關鍵字：<b-form-input
            v-model="filterText"
            type="text"
            placeholder="輸入稅目類別"
          ></b-form-input>
          <b-icon
            icon="plus-circle"
            @click="cleanText"
            v-if="filterText"
          ></b-icon>
        </div>
      </div>
      <div class="row">
        <div class="col-10 offset-1">
          <!-- Table: 基本款 -->
          <!-- <b-table striped hover :items="sliceDate"></b-table> -->

          <!-- Table: 客製化 -->
          <b-table
            striped hover
            :items="filterInput"
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
              :total-rows="matchData.length"
              :per-page="perPage"
              pills
              first-number
              last-number
              size="sm"
              @click.native="filterData(currentPage)"
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
  public sliceData = []
  public parentSendData = 'parentSendData'
  public childSendData = ''
  public currentPage = 1 // 預設目前頁面
  public perPage = 10 // 每頁顯示項目數
  public filterText = ''
  public matchData = []
  public sliceMatchData = []
  public isLoading = false
  public fullPage = true

  // Methods
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

  private filterData (currentPage: number) {
    this.sliceData = this.data.slice(this.perPage * currentPage - this.perPage, this.perPage * currentPage)
  }

  public cleanText () {
    this.filterText = ''
    this.currentPage = 1
  }

  // Computed
  get filterInput () {
    this.matchData = this.data.filter((item:Data) => item.taxCategory.match(this.filterText))
    this.sliceMatchData = this.matchData.slice(this.perPage * this.currentPage - this.perPage, this.perPage * this.currentPage)

    return this.sliceMatchData
  }

  // 生命週期
  public mounted () {
    this.isLoading = true
    this.$http.get(this.apiURL).then((res) => {
      this.data = res.data.data
      this.changeDataDTO(this.data)
      this.filterData(this.currentPage)
      this.isLoading = false
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.key-word {
  position: relative
}
.bi-plus-circle{
  position: absolute;
  top: 70%;
  right: 25px;
  transform: translateY(-50%) rotate(45deg);
  cursor: pointer;
}
</style>
