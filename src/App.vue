<template>
<!--  <MainPage></MainPage>-->
<!--  <Admin></Admin>-->
  <router-view></router-view>
</template>

<script>
import MainPage from "./view/MainPage";
import Admin from "./view/Admin";

export default {
  name: 'App',

  components: {
    MainPage,
    Admin
  },

  data: () => ({
    //
  }),
};
</script>
