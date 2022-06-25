<template>
  <header-app></header-app>
  <router-view/>
  <footer-app></footer-app>
</template>

<script>
  import HeaderApp from "@/components/HeaderApp/HeaderApp";
  import FooterApp from "@/components/FooterApp/FooterApp";
  export default {
    components: {
      HeaderApp, FooterApp
    }
  }
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Roboto Condensed', sans-serif;
}
</style>
