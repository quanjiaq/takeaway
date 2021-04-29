<template>
<!-- 弹窗全局组件 -->
  <div class="toast">{{message}}</div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  // 父组件传递的显示内容
  props: ['message']
}
// 弹窗显示函数
// toastshow决定Toast是否展示，需要绑定在Toast标签上（v-if="toastshow"）,
// toastmessage是Toast展示的内容,通过showToast(toastmessage)函数传递，并绑定在Toast标签上（:message="toastmessage）
// showToast为Toast组件使用的函数，传入Toastmessage
export const useToastEffect = () => {
  const toastData = reactive({
    toastshow: false,
    toastmessage: ''
  })
  const showToast = (message) => {
    toastData.toastshow = true
    toastData.toastmessage = message
    // 提示框显示两秒后消失
    setTimeout(() => {
      toastData.toastshow = false
      toastData.toastmessage = ''
    }, 2000)
  }
  const { toastshow, toastmessage } = toRefs(toastData)
  return { toastshow, toastmessage, showToast }
}
</script>

<style lang='scss' scoped>
@import '../style/viriables.scss';
.toast{
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background-color: rgba(0,0,0,.5);
  color: $bg-color;
  padding: .1rem;
  border-radius: .05rem;
  box-shadow: 0 .04rem .08rem 0 rgba(255,255,255,0.32);
}
</style>
