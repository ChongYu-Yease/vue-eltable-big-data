<template>
  <div id="app">
    <el-button @click="toggleSelection(tableData[1])">切换第二行的选中状态</el-button>
    <el-button @click="toggleSelection()">取消选择</el-button>
    <div>{{ renderTime }}</div>
    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%">
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
        <template slot-scope="params">
          <div class="el-input">
            <input
              class="el-input__inner"
              v-model.lazy="params.row.name"
              placeholder="请输入内容"
            />
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="地址">
        <template slot-scope="params">
          <el-select v-model.lazy="params.row.address" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      renderTime: null,
      inputValue: '我爱我家',
      tableData: [],
      options: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],
    }
  },
  directive: {},
  methods: {
    toggleSelection(row) {
      const s = window.performance.now()
      if (row) {
        this.$refs.multipleTable.toggleRowSelection(row)
      } else {
        this.$refs.multipleTable.clearSelection()
      }
      setTimeout(() => {
        this.renderTime = (window.performance.now() - s).toFixed(2) + 'ms'
      })
    },
  },
  mounted() {
    for (let i = 0; i < 2000; i++) {
      this.tableData.push({
        id: i,
        date: '2016-05-02',
        name: '王小虎',
        address: '选项1',
      })
    }
  },
}
</script>

<style lang="less">
</style>
