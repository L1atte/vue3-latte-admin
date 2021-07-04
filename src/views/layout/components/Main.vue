<template>
  <router-view> 
  </router-view>
  <div>11111111111</div>
  <SvgIcon iconName="home" className="aside-svg"></SvgIcon>
</template>

<script>
import SvgIcon from '../../../components/Svgicon'
export default {
  name: 'Main',
  components: {
    SvgIcon,
  },
}
</script>

<style lang="scss" scoped>

</style>