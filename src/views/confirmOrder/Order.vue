<template>
<!-- 确认订单页面ConfirmOrder的底部栏 -->
  <div class="order">
    <div class="order__price">实付金额<span class="order__price__num">¥{{allPrice}}</span></div>
    <div class="order__btn" @click="handleMaskshow">提交订单</div>
  </div>
  <div class="mask" v-if="maskshow">
    <div class="mask__content">
      <div class="mask__content__title">确认要离开收银台？</div>
      <div class="mask__content__desc">请尽快完成支付，否则将被取消</div>
      <div class="mask__content__btn">
        <div class="mask__btn__cancel" @click="()=>{handlebtn(true)}">取消订单</div>
        <div class="mask__btn__confirm" @click="()=>{handlebtn(false)}">确认支付</div>
      </div>
    </div>
  </div>
  <Toast v-if="toastshow" :message="toastmessage" class="toast"/>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useCartnumEffect } from '../../effects/commonCartEffect'
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/Toast'
import { ref } from 'vue'
// 订单逻辑函数
// 输入 商铺ID shopId, 商铺名称 shopName, 商品列表 productList, 提示框显示函数 showToast
// 返回 订单确认提示框按钮的句柄 handlebtn,提交订单的句柄 handleMaskshow,订单提示框显示控制变量 maskshow
const useOrderEffect = (shopId, shopName, productList, showToast) => {
  const maskshow = ref(false)
  const router = useRouter()
  const store = useStore()
  // 订单确认提示框按钮的句柄，将订单信息传递给后端接口
  const handlebtn = async (isCanceled) => {
    const products = []
    for (const i in productList) {
      const item = productList[i]
      products.push({ id: item._id, num: item.count })
    }
    try {
      const result = await post('/api/order', {
        addressId: 1,
        shopId: shopId,
        shopName: shopName.value,
        isCanceled: isCanceled,
        products: products
      })
      if (result?.data?.errno === 0) {
        // 传递成功，将此次提交的内容从vuex内清空，并跳转到订单页面
        store.commit('cleanAllProducts', { shopId })
        router.push({ name: 'OrderList' })
      } else {
        // ajax信息返回为失败，则弹出提示框
        showToast('提交失败')
      }
    } catch (e) {
      // ajax获取失败，弹出提示框
      showToast('请求失败')
    }
  }
  // 提交订单的句柄handleMaskshow
  const handleMaskshow = () => {
    maskshow.value = true
  }
  return { handlebtn, handleMaskshow, maskshow }
}
export default {
  components: { Toast },
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { allPrice, shopName, productList } = useCartnumEffect(shopId)
    const { toastshow, toastmessage, showToast } = useToastEffect()
    const { handlebtn, handleMaskshow, maskshow } = useOrderEffect(shopId, shopName, productList, showToast)
    // 商品总价allPrice,Toast提示框显示控制变量 toastshow,Toast组件message绑定变量 toastmessage,
    // 订单确认提示框按钮的句柄 handlebtn,订单提示框显示控制变量 maskshow,提交订单的句柄 handleMaskshow
    return { allPrice, toastshow, toastmessage, handlebtn, maskshow, handleMaskshow }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixin.scss';
.order{
  display: flex;
  height: .49rem;
  line-height: .49rem;
  border-top: 1px solid $content-bgcolor;
  background-color: $bg-color;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  &__price{
    flex: 1;
    text-indent: .24rem;
    font-size: .14rem;
    &__num{
      font-weight: bold;
      display: inline-block;
      text-indent: .1rem;
    }
  }
  &__btn{
    width: .98rem;
    background-color: #4fb0f9;
    color: $bg-color;
    text-align: center;
    font-size: .14rem;
  }
}
.mask{
  z-index: 1;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: $content-notice-fontcolor;
  &__content{
    width: 3rem;
    height: 1.56rem;
    background-color: $bg-color;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: .04rem;
    text-align: center;
    &__title{
      font-size: .18rem;
      color: $content-fontcolor;
      margin-top: .24rem;
      line-height: .26rem;
      margin: .24rem 0 0 0;
      text-align: center;
    }
    &__desc {
      margin: .08rem 0 0 0;
      font-size: .14rem;
      color: $border-color;
    }
    &__btn {
      display: flex;
      margin: .24rem .58rem;
    }
    .mask__btn__cancel {
      flex: 1;
      width: .8rem;
      line-height: .32rem;
      border-radius: .16rem;
      font-size: .14rem;
      margin-right: .12rem;
      border: .01rem solid $btn-color;
      color: $btn-color;
      display: inline-block;

    }
    .mask__btn__confirm{
      flex: 1;
      width: .8rem;
      line-height: .32rem;
      border-radius: .16rem;
      font-size: .14rem;
      margin-left: .12rem;
      background: $btn-color;
      color: $bg-color;
      display: inline-block;
    }
  }
}
.toast{
  z-index: 2;
}
</style>
