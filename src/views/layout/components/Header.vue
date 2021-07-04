<template>
  <div id="header">
    <div class="collapsed-button" @click="clickCollapsed">
      <svg-icon iconName="collapsed" className="collapsed-svg" ></svg-icon>
    </div>
    <div class="header-menu">
      <a-dropdown overlayClassName="menu-item">
        <a class="ant-dropdown-link" @click.prevent>
          <UserOutlined :style="{ fontSize: '25px' }" />
          <DownOutlined />
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item key="0">
              <div class="menu-text">latte</div>
            </a-menu-item>
            <a-menu-item key="1">
              <div class="menu-text menu-lang">
                <span
                  v-for="index in data.lang"
                  :key="index.value"
                  @click="toggleLang(index.value)"
                  :class="{'current': data.lang_current === index.value}"
                >{{ index.label }}</span>
              </div>
            </a-menu-item>
            <a-menu-item key="2">
              <div class="menu-text">{{ $t("header_menu.logout") }}</div>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script>
import { UserOutlined } from "@ant-design/icons-vue"
import { reactive } from '@vue/reactivity'
import { useI18n } from 'vue-i18n'
import { getCurrentInstance } from '@vue/runtime-core'
export default {
  name: 'Header',
  components: {
    UserOutlined
  },
  setup() {
    const { locale } = useI18n({ useScope: 'global' });

    const data = reactive({
      lang: [
        { label: "中文", value: "cn" },
        { label: "EN", value: "en" }
      ],
      lang_current: 'cn'
    })

    const toggleLang = (value) => {
      locale.value = value
      data.lang_current = value
    }

    const { emit } = getCurrentInstance()

    const clickCollapsed = () => {
      emit("clickMenu")
    }

    return {
      data,
      locale,
      toggleLang,
      clickCollapsed
    }
  }
}
</script>

<style lang="scss" scop>
#header {
  padding: 0 20px;
  height: 64px;
}

.header-menu {
  float: right;
  margin-top: 15px;
}
.menu-text {
  padding: 0px 10px;
  font-size: 15px;
  font-family: "黑体";
  color: #333333;
}
.menu-lang {
  color: #aeaeae;
  span {
    margin-right: 10px;
  }
  .current {
    color: red;
  }
}
.collapsed-button {
  float: left;
  cursor: pointer;
  font-size: 30px;
}
</style>