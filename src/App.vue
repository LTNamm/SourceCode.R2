<template>
  <div id="app">
    <Navigation/>
    <Projects/>
    <CardProj id="Card-prj"/>
    <RecentProj id="Recent-Proj"/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Projects from './components/Projects.vue'
import CardProj from './components/CardProj.vue'
import RecentProj from './components/RecentProj.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    Projects,
    CardProj,
    RecentProj
  }
}
</script>

<style>

#Recent-Proj{
    margin-top: 100px;
}

#Card-prj{
  margin-top: 100px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 4 0px;
}
</style>
