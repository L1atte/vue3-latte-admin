<template>
  <div class="account">
    <div class="form-wrap">
      <a-form
        name="custom-validation"
        ref="formRef"
        @finish="handleFinish"
        :rules="rules"
        :model="formState"
        layout="vertical"
      >
        <a-form-item has-feedback label="电话号码" labelAlign="left" name="phone">
          <a-input v-model:value="formState.phone" type="text" autocomplete="off"></a-input>
        </a-form-item>
        <a-form-item has-feedback label="密码" labelAlign="left" name="password">
          <a-input v-model:value="formState.password" type="password" autocomplete="off"></a-input>
        </a-form-item>
        <a-form-item has-feedback label="输入密码" labelAlign="left" name="password2">
          <a-input v-model:value="formState.password2" type="password" autocomplete="off"></a-input>
        </a-form-item>
        <a-form-item label="验证码" labelAlign="left" name="verification">
          <a-row type="flex" gutter="15">
            <a-col :span="14" :order="1">
              <a-input v-model:value="formState.verification" type="text" aria-autocomplete="off"></a-input>
            </a-col>
            <a-col :span="10" :order="2">
              <a-button
                type="primary"
                block
                :loading="buttonForm.loading"
                :disabled="buttonForm.disabled"
                @click="getVerification"
              >{{ buttonForm.text }}</a-button>
            </a-col>
          </a-row>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" block>重置密码</a-button>
        </a-form-item>
      </a-form>
      <div class="fs-12 text-align">
        <router-link to="/forget" class="black-white">登录</router-link>|
        <router-link to="/register" class="black-white">注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
import { checkPhone, checkPass } from '../../utils/verification.js'
import { message } from 'ant-design-vue'
export default {
  name: 'Forget',
  setup() {
    const formRef = ref();

    let validatePhone = async (rule, value) => {
      if (!checkPhone(value)) {
        return Promise.reject('请输入正确的电话号码')
      } else {
        return Promise.resolve()
      }
      // const regPhone = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
      // const flag = regPhone.test(value)
      // console.log(flag)
      // if ( !flag ){
      //   return Promise.reject( '请输入正确的电话号码' )
      // } else {
      //   return Promise.resolve()
      // }
    }

    let validatePass = async (rule, value) => {
      if (!checkPass(value)) {
        return Promise.reject('请输入至少6位字符')
      } else {
        return Promise.resolve()
      }
    }

    let validatePass2 = async (rule, value) => {
      if (!checkPass(value)) {
        return Promise.reject('请输入至少6位字符')
      } else if (value && formState.password && value !== formState.password) {
        return Promise.reject('两次输入不一致')
      } else {
        return Promise.resolve()
      }
    }

    let validateVerification = async (rule, value) => {
      const regVerification = /^[a-zA-Z0-9]{6}$/
      if (!regVerification.test(value)) {
        return Promise.reject('验证码错误')
      } else {
        return Promise.resolve()
      }
    }

    const formState = reactive({
      phone: '',
      password: '',
      password2: '',
      verification: ''
    })

    const rules = reactive({
      phone: [
        {
          validator: validatePhone,
          trigger: 'blur',
          required: true,
          type: 'number'
        },
      ],
      password: [
        {
          validator: validatePass,
          required: true,
          trigger: 'blur'
        }
      ],
      password2: [
        {
          validator: validatePass2,
          required: true,
          trigger: 'blur'
        }
      ],
      verification: [
        {
          validator: validateVerification,
          required: true,
          trigger: 'blur'
        }
      ],
    })

    const buttonForm = reactive({
      text: '获取验证码',
      loading: false,
      disabled: false,
      sec: 100,
      //定时器
      timer: null
    })

    const getVerification = () => {
      //优先判断定时器是否存在，存在则先清除再开启
      if (formState.phone && formState.password && formState.password2) {
        console.log(buttonForm.timer)
        if (buttonForm.timer) {
          clearInterval(buttonForm.timer)
        }
        buttonForm.timer = setInterval(() => {
          const s = buttonForm.sec--
          console.log(s)
          buttonForm.text = `${s}秒`
          if (s <= 0) {
            clearInterval(buttonForm.timer);
            buttonForm.text = "重新获取"
          }
        }, 1000)
      } else {
        message.error('用户信息为空')
        return false
      }
    }


    const handleFinish = (values) => {
      console.log(11)
    }

    return {
      formState,
      rules,
      formRef,
      buttonForm,
      handleFinish,
      getVerification
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>