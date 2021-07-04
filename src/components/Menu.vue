<template>
  <a-sub-menu :key="menudata.path">
    <template #title>
      <span>
        <!--AppstoreOutlined /-->
        <span class="anticon ">
          <svg-icon :iconName="menudata.meta && menudata.meta.icon" class="aside-svg"></svg-icon>
          <i class="icon icon-size-21" :class="menudata.meta && menudata.meta.icon"></i>
        </span>
        <span>{{ menudata.meta && menudata.meta.title }}</span>
      </span>
    </template>
    <template v-if="menudata.children.length > 0">
      <template v-for="item in menudata.children" :key="item.path">
        <!--不存在子级的栏目-->
        <a-menu-item v-if="!item.children" :key="item.path">
          <router-link :to="item.path">
            <svg-icon :iconName="item.meta && item.meta.icon" class="aside-svg"></svg-icon>
            <i class="icon icon-size-21" :class="item.meta && item.meta.icon"></i>
            {{ item.meta && item.meta.title }}
          </router-link>
        </a-menu-item>
        <!--存在子级栏目-->
        <Menu v-else :menudata="item" :key="item.path"></Menu>
      </template>
    </template>
  </a-sub-menu>
</template>

<script>
import { AppstoreOutlined } from '@ant-design/icons-vue'
export default {
  name: "Menu",
  components: {
    AppstoreOutlined,
  },
  props: {
    menudata: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  setup(props) {
    console.log(props)
  }
}
</script>

<style>
</style>