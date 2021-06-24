<template>
  <el-container class="app">
    <el-header class="header">ff14时间轴工具。。。。开发中</el-header>
    <el-main class="main">
      <SkillList class="skill-list-section"></SkillList>
      <TimeLines class="time-lines-section"></TimeLines>
    </el-main>
  </el-container>
</template>

<script>
import SkillList from './components/skill-list.vue';
import TimeLines from './components/time-lines.vue';

export default {
  name: "App",
  components: {
    SkillList,
    TimeLines,
  },
};
</script>

<style lang="scss">
#app {
  height: 100vh;
}
.app {
  height: 100%;
  
  .main {
    height: calc(100% - 60px);
  }

  .skill-list-section {
    margin-bottom: 10px;
  }
}
</style>
