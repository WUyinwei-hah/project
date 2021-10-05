<template>
  <div class="main">
  </div>
</template>

<script>
import PackageList from "./PackageList.vue";
export default {
  name: "ArticleDetail",
  components: {PackageList}
}
</script>

<style scoped>
.main{

  width: 56%;
  min-height: 90vh;
  background-color: #fff;
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