<template>
  <v-app>
    <TopToolbar></TopToolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <BottomNav></BottomNav>
  </v-app>
</template>

<script>
import TopToolbar from "./components/TopToolbar.vue";
import BottomNav from "./components/BottomNav.vue";

export default {
  components: {
    TopToolbar,
    BottomNav
  }
};
</script>
<style scoped>
.container {
  padding-top: 50px;
}
</style>