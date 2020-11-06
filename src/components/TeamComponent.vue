<template>
  <div class="team-component">
    <div class="col-8">
      <h3>{{ member.name }}</h3>
      <img :src="member.img" alt="">
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'TeamComponent',
  props: {
    teamProp: Object
  },
  setup(props) {
    return {
      member: computed(() => props.teamProp)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
