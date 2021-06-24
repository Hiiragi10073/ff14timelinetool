<template>
  <div class="skill-item" :title="name">
    <img class="skill-item__img" :src="iconUrl" :alt="name">
  </div>
</template>

<script>
export default {
  name: 'SkillItem',
  props: {
    id: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    iconUrl: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    cd: {
      type: Number,
      require: true,
    },
    ct: {
      type: Number,
      require: true,
    },
    duration: {
      type: Number,
      default: 0,
    }
  }
}
</script>

<style lang="scss" scoped>
.skill-item {
  .skill-item__img {
    width: 50px;
    height: 50px;
  }
}
</style>