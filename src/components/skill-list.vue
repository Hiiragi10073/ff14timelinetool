<template>
  <el-card class="skill-list">
    <div class="job"></div>
    <div class="skill">
      <ul>
        <li v-for="item in skillList" :key="item.id">
          <SkillItem :="item"></SkillItem>
        </li>
      </ul>
    </div>
  </el-card>
</template>

<script>
import SkillItem from './skill-item.vue';
import icon1 from '../assets/icon/icon1.png';

export default {
  name: 'SkillList',
  components: {
    SkillItem,
  },
  data() {
    return {
      skillList: [
        {
          id: 1,
          name: '测试技能1',
          iconUrl: icon1,
          type: 'gcd',
          cd: 2.5,
          ct: 2.41,
          duration: 0,
        }
      ],
    }
  }
}
</script>