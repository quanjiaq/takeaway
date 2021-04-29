<template>
<!-- 确认订单页面ConfirmOrder的顶部栏 -->
  <div class="top">
    <div class="top__header">
      <div class="iconfont top__header__back" @click="handleBack">&#xe605;</div>
      确认订单
    </div>
    <!-- 纯静态部分，未加逻辑 -->
    <div class="top__receiver">
      <div class="top__receiver__title">收货地址</div>
      <div class="top__receiver__address">浙江工业大学西和6号楼</div>
      <div class="top__receiver__info">
        <span class="top__receiver__info__name">全（女士）</span>
        <span class="top__receiver__info__name">1234567890</span>
      </div>
      <div class="iconfont top__receiver__icon">&#xe605;</div>
    </div>
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
// 返回到对应shop页面按钮的句柄handleBack
const useHandleBack = (shopId) => {
  const router = useRouter()
  const handleBack = () => {
    router.push({ path: `/shop/${shopId}` })
  }
  return { handleBack }
}
export default {
  name: 'Top',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { handleBack } = useHandleBack(shopId)
    // 返回到对应shop页面按钮的句柄handleBack
    return { handleBack }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixin.scss';
.top {
  position: relative;
  height: 1.96rem;
  background-size: 100% 1.59rem;
  background-image: linear-gradient(0deg, rgba(0,145,255,0.00) 4%, #0091FF 50%);
  background-repeat: no-repeat;
  &__header {
    position: relative;
    padding-top: .26rem;
    line-height: .24rem;
    color: $bg-color;
    text-align: center;
    font-size: .16rem;
    &__back {
      position: absolute;
      left: .18rem;
      font-size: .22rem;
    }
  }
  &__receiver {
    position: absolute;
    left: .18rem;
    right: .18rem;
    bottom: 0;
    height: 1.11rem;
    background: $bg-color;
    border-radius: .04rem;
    &__title {
      line-height: .22rem;
      padding: .16rem 0 .14rem .16rem;
      font-size: .16rem;
      color: $content-fontcolor;
    }
    &__address {
      line-height: .2rem;
      padding: 0 .4rem 0 .16rem;
      font-size: .14rem;
      color: $content-fontcolor;
    }
    &__info {
      padding: .06rem 0 0 .16rem;
      &__name {
        margin-right: .06rem;
        line-height: .18rem;
        font-size: .12rem;
        color: $border-color;
      }
    }
    &__icon {
      transform: rotate(180deg);
      position: absolute;
      right: .16rem;
      top: .5rem;
      color: $border-color;
      font-size: .2rem;
    }
  }
}
</style>
