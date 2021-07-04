<template>
  <a-menu
    mode="inline"
    theme="dark"
    :inline-collapsed="collapsed"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    @click="selectMenu"
    @openChange="openMenu"
  >
    <template v-for="item in routers" :key="item.path">
      <template v-if="!item.hidden">
        <a-menu-item :key="item.path" v-if="!item.children">
          <span class="anticon">
            <svg-icon :iconName="item.meta && item.meta.icon" class="aside-svg"></svg-icon>
            <i class="icon icon-size-21" :class="item.meta && item.meta.icon"></i>
          </span>
          {{ item.meta && item.meta.title }}
        </a-menu-item>
        <Menu :menudata="item" v-else :key="item.path"></Menu>
      </template>
    </template>
  </a-menu>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
import { useRoute, useRouter } from 'vue-router'
import Menu from '../../../components/Menu.vue'
export default {
  name: 'Aside',
  components: { Menu },
  setup() {
    const { options } = useRouter()
    const routers = options.routes
    console.table(routers)

    const data = reactive({
      selectedKeys: localStorage.getItem("selected") ? [localStorage.getItem("selected")] : [],
      openKeys: localStorage.getItem("openKeys") ? JSON.parse(localStorage.getItem("openKeys")) : [],
    })

    const selectMenu = (({ item, key, keyPath }) => {
      console.table("keyPath", item, key, keyPath)
      data.selectedKeys = [key]
      localStorage.setItem("selectedKeys", key)
    })

    const openMenu = (openKeys) => {
      console.log("openKeys", openKeys)
      localStorage.setItem("openKeys", JSON.stringify(openKeys))
      data.openKeys = openKeys
    }

    // const hasOnlyChildren = (data) => {
    //   console.log("dataChildren",data)
    //   if(!data.children) { return false }

    //   const routers = data.children.filter(item => item.hidden ? false : true)
      
    //   if(routers.length === 1) {
    //     return true
    //   }
    //   return false
    // }

    return {
      ...toRefs(data),
      routers,
      selectMenu,
      openMenu,
      // hasOnlyChildren
    }
  }

}
</script>

<style lang="scss" scoped>
</style>