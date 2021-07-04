<template>
  <div>
    <a-layout class="layout">
      <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible width="255px">
        <layout-aside></layout-aside>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <layout-header  @clickMenu="closeMenu"></layout-header>
        </a-layout-header>
        <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
        >
          <layout-main></layout-main>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import layoutAside from "./components/Aside.vue"
import layoutHeader from "./components/Header.vue"
import layoutMain from "./components/Main.vue"
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons-vue'
import { ref } from 'vue'
export default {
  name: 'Layout',
  components: {
    layoutAside,
    layoutHeader,
    layoutMain,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  },

  setup() {
    const onCollapse = (collapsed, type) => {
      console.log(collapsed, type);
    };

    const onBreakpoint = broken => {
      console.log(broken);
    };

    const collapsed = ref(JSON.parse(localStorage.getItem("collapsed")))

    const closeMenu = () => {
      collapsed.value = !collapsed.value
      localStorage.setItem("collapsed", collapsed.value)
    }

    return {
      selectedKeys: ref(['4']),
      onCollapse,
      onBreakpoint,
      closeMenu,
      collapsed
    };
  },
}
</script>

<style lang="scss">
.layout {
  height: 100vh;
}

#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.site-layout-sub-header-background {
  background: #fff;
}

.site-layout-background {
  background: #fff;
}

[data-theme="dark"] .site-layout-sub-header-background {
  background: #141414;
}
</style>