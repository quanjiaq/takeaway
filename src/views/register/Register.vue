<template>
<!-- 注册页面 -->
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png"/>
    <div class="wrapper__input">
      <input type="text" class="wrapper__input__content" placeholder="请输入手机号" v-model="username"/>
    </div>
    <div class="wrapper__input">
      <input type="password" class="wrapper__input__content" placeholder="请输入密码" autocomplete="new-password" v-model="password"/>
    </div>
    <div class="wrapper__input">
      <input type="password" class="wrapper__input__content" placeholder="确认密码" autocomplete="new-password" v-model="checkpassword"/>
    </div>
    <div class="wrapper__register-button" @click="handleRegister">注册</div>
    <div class="wrapper__register-link" @click="handleToLogin">已有账号去登录</div>
    <!-- 弹框组件Toast -->
    <Toast v-if="toastshow" :message="toastmessage"/>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { reactive, toRefs } from 'vue'
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/Toast'
/*
注册逻辑函数
输入：提示框处理函数showToast
输出：动态绑定数据-用户名username, 动态绑定数据-密码password,动态绑定-确认密码checkpassword，登录按钮句柄handleLogin，注册按钮句柄handleRegister
*/
const useRegisterEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({
    username: '',
    password: '',
    checkpassword: ''
  })
  const handleRegister = async () => {
    try {
      // 输入为空
      if (data.username === '' || data.password === '') {
        showToast('手机号和密码不能为空')
        return
      // 确认密码校验
      } else if (password !== checkpassword) {
        showToast('两次密码不一致')
        return
      }
      // 将username和password提交接口校验
      const result = await post('/api/user/register', {
        username: data.username,
        password: data.password
      })
      // 校验成功
      if (result.data.errno === 0) {
        router.push({ name: 'Login' })
      } else {
        // 校验失败
        showToast('注册失败')
      }
    } catch (e) {
      // 链接失败
      showToast('请求失败')
    }
  }
  const { username, password, checkpassword } = toRefs(data)
  return { username, password, checkpassword, handleRegister }
}
export default {
  name: 'Login',
  // Toast为提示框组件
  components: { Toast },
  setup () {
    const router = useRouter()
    // handleToLogin前往登录页面句柄
    const handleToLogin = () => {
      router.push({ name: 'Login' })
    }
    // 弹窗封装函数
    const { toastshow, toastmessage, showToast } = useToastEffect()
    // 注册封装函数
    const { username, password, checkpassword, handleRegister } = useRegisterEffect(showToast)
    // handleLogin登录按钮句柄, handleToRegister跳转到注册页面的句柄函数,
    // toastshow决定Toast是否展示, toastmessageToast展示的内容,
    // username用户名, password密码，checkpassword确认密码
    return { handleRegister, handleToLogin, username, password, checkpassword, toastshow, toastmessage }
  }
}
</script>
<style lang='scss' scoped>
@import '../../style/viriables.scss';
.wrapper{
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img{
    display: block;
    margin: 0 auto .4rem auto;
    width: .66rem;
    height: .66rem;
  }
  .wrapper__input{
    background: #F9F9F9;
    box-sizing: border-box;
    padding:0 .16rem 0 .16rem ;
    border: 1px solid rgba(0,0,0,0.10);
    border-radius: 6px;
    border-radius: 6px;
    height: .48rem;
    margin: 0 .4rem .16rem .4rem;
    .wrapper__input__content{
      border: none;
      outline: none;
      background:none;
      width: 100%;
      height: 100%;
      font-size: .16rem;
      &::placeholder{
        font-size: .16rem;
        color:$content-notice-fontcolor;
        letter-spacing: 0;
        line-height: .48rem;
      }
    }
  }
  &__register-button {
    margin: .32rem .4rem .16rem .4rem;
    line-height: .48rem;
    background: $btn-bgcolor;
    box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
    border-radius: .04rem;
    border-radius: .04rem;
    color: $bg-color;
    font-size: .16rem;
    text-align: center;
  }
  &__register-link {
    text-align: center;
    font-size: .14rem;
    color: $content-notice-fontcolor;
  }
}
</style>
