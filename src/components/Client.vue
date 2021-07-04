<template>
  <div id="bodys">
    <el-row :gutter="20" style="padding-buttom: 10px">
      <el-col :span="6">
        <el-input
          v-model="page.information"
          placeholder="请输入内容"
          style="padding: 10px 0px 10px 0px"
        ></el-input>
      </el-col>
      <el-col :span="6">
        <el-button
          type="primary"
          icon="el-icon-search"
          style="float: left; margin: 10px 0px 10px 0px"
          @click="searchFun"
          >搜索</el-button
        >
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="6">
        <el-button
          @click="toAddPage"
          type="primary"
          icon="el-icon-edit"
          style="float: right; margin: 10px 0px 10px 0px"
          >添加</el-button
        >
      </el-col>
    </el-row>
    <el-table :data="tableData" stripe style="width: 100%" empty-text="no data">
      <el-table-column prop="clientID" label="客户端ID" width="100"> </el-table-column>
      <el-table-column prop="resourceIDs" label="客户端资源ID">
      </el-table-column>
      <el-table-column prop="scope" label="访问范围" width="100"> </el-table-column>
      <el-table-column prop="additionalInformation" label="描述">
      </el-table-column>
      <el-table-column prop="webServerRedirectUri" label="重定向地址">
      </el-table-column>
      <el-table-column prop="accessTokenValidity" label="令牌有效时间">
      </el-table-column>
      <el-table-column prop="refreshTokenValidity" label="刷新令牌有效时间">
      </el-table-column>
      <el-table-column prop="authorizedGrantTypes" label="客户端类型">
      </el-table-column>
      <el-table-column prop="autoapprove" label="autoapprove">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template #default="scope">
          <el-button @click="handleUpdateClick(scope.row)" type="primary" icon="el-icon-edit" circle></el-button>
          <el-button @click="handleDeleteClick(scope.row)" type="danger" icon="el-icon-delete" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[10, 15, 20, 30]"
        :page-size="page.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getClients  , deleteClient} from "../api/api";
export default {
  name: "Client",
  props: {
    msg: String,
  },
  data() {
    return {
      tableData: [],
      page: {
        pageSize: 10,
        pageNo: 1,
        information: "",
      },
      total: 10,
    };
  },
  mounted() {
    getClients(this.page).then((r) => {
      if (r.data.data == null) {
        this.tableData = null;
      }
      this.total = r.data.data.total;
      this.tableData = r.data.data.clients;
      this.$forceUpdate();
    });
  },
  methods: {
    handleSizeChange(s) {
      this.page.pageSize = s;
      getClients(this.page).then((r) => {
        if (r.data.data == null) {
          this.tableData = null;
        }
        this.total = r.data.data.total;
        this.tableData = r.data.data.clients;
        this.$forceUpdate();
      });
    },
    handleCurrentChange(s) {
      this.page.pageNo = s;
      getClients(this.page).then((r) => {
        if (r.data.data == null) {
          this.tableData = null;
        }
        this.total = r.data.data.total;
        this.tableData = r.data.data.clients;
        this.$forceUpdate();
      });
    },
    searchFun() {
      getClients(this.page).then((r) => {
        if (r.data.data == null) {
          this.tableData = null;
        }
        this.total = r.data.data.total;
        this.tableData = r.data.data.clients;
        this.$forceUpdate();
      });
    },
    toAddPage() {
      this.$router.push("/add");
    },
    handleDeleteClick(entity){
      deleteClient(entity.clientID).then(result =>{
        if(result.data.status == 200){
          getClients(this.page).then((r) => {
            if (r.data.data == null) {
              this.tableData = null;
            }
            this.total = r.data.data.total;
            this.tableData = r.data.data.clients;
            this.$forceUpdate();
          });
        }
      })
    },
    handleUpdateClick(entity){
      this.$router.push({name: 'Update' , params:{entity : entity.clientID}})
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#bodys {
  background-color: rgb(255, 255, 255);
  height: 800px;
}
</style>
