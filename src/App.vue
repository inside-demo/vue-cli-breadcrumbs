<template>
  <div id="app">
    <img src="./assets/logo.png">
    <breadcrumbs/>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.breadcrumb {
  list-style: none;
  background-color: #41b883;
  padding: 2px;
  border-radius: 4px;
}

.breadcrumb li {
  display: inline-flex;
  flex-wrap: nowrap;
}

.breadcrumb li a {
  color: #fff;
}


.breadcrumb li::after {
  content: '->';
  display: inline-block;
  margin: 0 4px;
}
</style>
