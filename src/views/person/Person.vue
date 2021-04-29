<template>
<!-- 个人Person页面，纯静态无逻辑和接口 -->
  <div class="wrapper">
    <div class="header">
      <div class="header__info">
        <div class="header__info__user">{{userInfo.username}}</div>
        <div class="header__info__id">ID:{{userInfo._id}}</div>
      </div>
      <img
        class="header__avatar"
        :src="userInfo.userimg"
      />
    </div>
    <div class="list">
      <div class="list__item">
        <div class="list__item__icon iconfont">&#xe617;</div>
        <div class="list__item__test">我的地址</div>
        <div class="list__item__arrow iconfont">&#xe6f2;</div>
      </div>
    </div>
    <div class="logout" @click="handleLogout">退出登陆</div>
  </div>
  <Docker :currentIndex="3"/>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import Docker from '../../components/Docker'
import axios from 'axios'
// 模拟ajax获取用户信息，返回用户信息对象userInfo
const usestaticPartEffect = () => {
  const userInfo = reactive({ username: '', _id: '', userimg: '' })
  const getdata = () => {
    axios.get('./json/Person.json') // 模拟ajax请求，Person.json放在public/json下面
      .then((message) => {
        const { username, _id, userimg } = message.data
        userInfo.username = username || ''
        userInfo._id = _id || ''
        userInfo.userimg = userimg || ''
      })
  }
  getdata()
  return { userInfo }
}
// 退出登录逻辑，退出登录按钮的句柄handleLogout
const usehandleLogout = () => {
  const router = useRouter()
  const handleLogout = () => {
    // 退出登录后，登录标记isLogin删除，并且跳转到登录界面
    localStorage.removeItem('isLogin')
    router.replace({ name: 'Login' })
  }
  return { handleLogout }
}
export default {
  name: 'PersonalInfo',
  components: { Docker },
  setup () {
    const handleLogout = usehandleLogout()
    const { userInfo } = usestaticPartEffect()
    // 退出登录按钮的句柄handleLogout, 用户信息userInfo
    return { handleLogout, userInfo }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  background: $bg-color;
}
.header {
  position: relative;
  height: 1.5rem;
  background-image: linear-gradient(239deg, #3A6FF3 0%, #50C7FB 100%);
  padding-top: .4rem;
  &__info {
    margin: .3rem .18rem 0 .18rem;
    padding-top: .46rem;
    height: .66rem;
    background: $bg-color;
    border-radius: .08rem;
    &__user {
      font-size: .24rem;
      color: #262628;
      text-align: center;
      line-height: .36rem;
    }
    &__id {
      margin-top: .04rem;
      font-size: .14rem;
      color: #C1C0C9;
      text-align: center;
    }
  }
  &__avatar {
    position: absolute;
    left: 50%;
    top: .2rem;
    transform: translateX(-50%);
    width: .94rem;
    height: .94rem;
    border-radius: 50%;
  }
}
.list {
  margin: .16rem .18rem 0 .18rem;
  background: $bg-color;
  box-shadow: 0 .08rem .16rem 0 rgba(0, 0, 0, .08);
  border-radius: .08rem;
  &__item {
    display: flex;
    padding: .2rem;
    line-height: .22rem;
    font-size: .14rem;
    color: #262626;
    &__icon {
      margin-right: .12rem;
      width: .22rem;
      height: .22rem;
      background: #32C5FF;
      border-radius: .08rem;
      text-align: center;
      font-weight: bold;
      color: $bg-color;
    }
    &__test {
      flex: 1;
    }
    &__arrow {
      width: .2rem;
      transform: rotate(180deg);
      font-weight: bold;
      color: #C2C4CA;
    }
  }
}
.logout {
  margin: .18rem;
  line-height: .32rem;
  background: $btn-bgcolor;
  color: $bg-color;
  text-align: center;
  border-radius: .04rem;
}
</style>
