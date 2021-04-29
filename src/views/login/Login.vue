<template>
<!-- Login登录页面 -->
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png"/>
    <div class="wrapper__input">
      <input type="text" class="wrapper__input__content" placeholder="请输入手机号" v-model="username"/>
    </div>
    <div class="wrapper__input">
      <input type="password" class="wrapper__input__content" placeholder="请输入密码" v-model="password"/>
    </div>
    <div class="wrapper__login-button" @click="handleLogin">登录</div>
    <div class="wrapper__login-link" @click="handleToRegister">立即注册</div>
    <!-- 消息提醒框组件 -->
    <Toast v-if="toastshow" :message="toastmessage"/>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { reactive, toRefs } from 'vue'
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/Toast'
/*
登录逻辑函数
输入：提示框处理函数showToast
输出：动态绑定数据-用户名username, 动态绑定数据-密码password, 登录按钮句柄handleLogin
*/
const useLoginEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({
    username: '',
    password: ''
  })
  /*
  登录按钮句柄handleLogin
  当用户名username和密码password不为空时，
  将{username: ,password: }传递给接口，
  验证成功，则设置localStorage.isLogin为true，并跳转路由到Home页面
  */
  const handleLogin = async () => {
    try {
      // 输入为空
      if (data.username === '' || data.password === '') {
        showToast('手机号和密码不能为空')
        return
      }
      const result = await post('/api/user/login', {
        username: data.username,
        password: data.password
      })
      // 校验成功
      if (result.data.errno === 0) {
        localStorage.isLogin = true
        router.push({ name: 'Home' })
      // 校验失败
      } else {
        showToast('账号密码不匹配，或此账号不存在')
      }
    } catch (e) {
      // 链接失败
      showToast('请求失败')
    }
  }
  const { username, password } = toRefs(data)
  return { username, password, handleLogin }
}
export default {
  name: 'Login',
  // Toast组件为消息提醒框
  components: { Toast },
  setup () {
    /*
    toastshow决定Toast是否展示，需要绑定在Toast标签上（v-if="toastshow"）,
    toastmessage是Toast展示的内容,通过showToast(toastmessage)函数传递，并绑定在Toast标签上（:message="toastmessage）
    showToast为Toast组件使用的函数，传入Toastmessage
    */
    const { toastshow, toastmessage, showToast } = useToastEffect()
    const { username, password, handleLogin } = useLoginEffect(showToast)
    // 跳转到注册页面的句柄函数handleToRegister
    const router = useRouter()
    const handleToRegister = () => {
      router.push({ name: 'Register' })
    }
    // handleLogin登录按钮句柄, handleToRegister跳转到注册页面的句柄函数,
    // toastshow决定Toast是否展示, toastmessageToast展示的内容,
    // username用户名, password密码
    return { handleLogin, handleToRegister, toastshow, toastmessage, username, password }
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
  &__login-button {
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
  &__login-link {
    text-align: center;
    font-size: .14rem;
    color: $content-notice-fontcolor;
  }
}
</style>
