<template>
  <div class="account">
    <div class="form-wrap">
      <a-form name="custom-validation" ref="ruleForm">
        <a-form-item>
          <label>用户名</label>
          <a-input v-model="formState.userName" type="text" autocomplete="off"></a-input>
        </a-form-item>
        <a-form-item>
          <label >密码</label>
          <a-input v-model="formState.password" type="password" autocomplete="off"></a-input>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" block>
            登录
          </a-button>
        </a-form-item>
      </a-form>
      <a-button type="primary" @click="testAxios">
            test
          </a-button>
      <div class="fs-12 text-align">
        <router-link to="/forget" class="black-white">忘记密码</router-link> |
        <router-link to="/register" class="black-white">注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { getCurrentInstance } from '@vue/runtime-core'
export default {
  name: 'Login',
  setup() {
    const formState = reactive({
      password: '',
      userName: ''
    })

    const { ctx } = getCurrentInstance()

    const testAxios = () => {
      ctx.$axios.post("getSms")
      console.log("ctx",ctx)
      // console.log($axios)
    }

    return {
      formState,
      testAxios
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>