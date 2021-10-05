<template>
  <div style="width: 100%;height: 100%;align-items: flex-start" class="rowcenter">
  <div class="side colstart">
    <el-menu
        default-active="2"
        style="width: 70%"
    >
      <el-menu-item index="1">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
  <div class="main">
    <el-carousel :interval="5000" arrow="always" height="250px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <PackageList></PackageList>
  </div>
  <div class="side colstart">
    <el-card style="width: 70%" shadow="never">
      <div v-for="o in 10" :key="o" class="text item">
        加点什么
      </div>
    </el-card>
  </div>
  </div>

</template>

<script>
import PackageList from "./PackageList.vue";
export default {
  name: "MainSection",
  components: {PackageList}
}
</script>

<style scoped>
.main{

  width: 56%;
  min-height: 90vh;
  /*background-color: rgb(242, 242, 244);*/
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  margin: 0;
}
.el-carousel__item{
  width: 100%;

}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>