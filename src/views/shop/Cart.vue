<template>
<!-- shop页面的购物车组件 -->
  <transition name="mask">
    <div
      class="mask"
      v-if="showCart && allCount > 0"
      @click="handleCartShow"
      ></div>
  </transition>
  <div class="cart">
    <transition name="product">
      <div class="product" v-if="showCart && allCount > 0">
        <div class="product__header">
          <div class="product__header__clearall" @click="cleanAllProducts">
            <span class="iconfont">&#xe62f;</span>
            清空购物车</div>
        </div>
        <template
          v-for="(item, index) in productList"
          :key="index">
          <div class="product__item" v-if="item.count > 0">
            <img class="product__item__img" :src="item.imgUrl"/>
            <div class="product__item__ditail">
              <h4 class="product__item__title">{{item.name}}</h4>
              <p class="product__item__price">
                <span class="price__yuan">&yen;</span>{{item.price}}
                <span class="price__origin">&yen;{{item.oldPrice}}</span>
              </p>
            </div>
            <div class="product__number">
              <span
                class="product__number__minus"
                @click="() => { deleteItemToCart(shopId, item._id) }"
              >-</span>
              <span class="product__number__num">{{item.count || 0}}</span>
              <span
                class="product__number__plus"
                @click="() => { addItemToCart(shopId, item._id, item) }"
                >+</span>
            </div>
          </div>
        </template>
      </div>
    </transition>

    <div class="check">
      <div class="check__icon" @click="handleCartShow">
        <img src="http://www.dell-lee.com/imgs/vue3/basket.png"  class="check__icon__img"/>
        <div class="check__icon__tag">{{allCount}}</div>
      </div>
      <div class="check__info">
        总计：<span class="check__info__price">&yen;{{allPrice}}</span>
      </div>
      <router-link :to="{ path: `/confirmOrder/${shopId}` }" v-if="allCount">
        <div class="check__btn">结算</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { computed, toRefs, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { useCartnumEffect } from '../../effects/commonCartEffect'
// 购物车逻辑函数，
// 返回所有商品的价格allPrice，数量allCount
// 清空购物车按钮句柄cleanAllProducts,展示购物车v-if变量 showCart,展示购物车按钮句柄 handleCartShow
const useCartEffect = (shopId) => {
  const store = useStore()
  // 从vuex里面获取购物车信息
  const { cartList } = toRefs(store.state)
  // 总数量allCount
  const allCount = computed(() => {
    // 获取此商铺下面的已入购物车商品列表
    const productList = cartList.value[shopId]?.productList
    let count = 0
    if (productList) {
      // 如果有信息，对列表进行循环遍历，计算总数
      for (const i in productList) {
        count += productList[i].count
      }
    }
    return count
  })
  // 总价格allPrice
  const allPrice = computed(() => {
    // 获取此商铺下面的已入购物车商品列表
    const productList = cartList.value[shopId]?.productList
    let price = 0
    if (productList) {
      // 如果有信息，对列表进行循环，计算总价
      for (const i in productList) {
        price += productList[i].count * productList[i].price
      }
    }
    // 保留两位小数，输出allPrice
    return price.toFixed(2)
  })
  // 清空购物车句柄
  const cleanAllProducts = () => {
    // 直接进行同步修改
    store.commit('cleanAllProducts', { shopId })
  }
  const showCart = ref(false)
  // 控制购物车check部分是否展示
  const handleCartShow = () => {
    showCart.value = !showCart.value
  }
  return { allCount, allPrice, cleanAllProducts, showCart, handleCartShow }
}
export default {
  name: 'Cart',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { allCount, allPrice, cleanAllProducts, showCart, handleCartShow } = useCartEffect(shopId)
    const { productList, addItemToCart, deleteItemToCart } = useCartnumEffect()
    // 总数量 allCount, 总价格 allPrice, 商品列表 productList, 商铺ID shopId,
    // 添加商品到购物车的句柄 addItemToCart,删除商品到购物车的句柄 deleteItemToCart,清空购物车的句柄 cleanAllProducts,
    // 控制购物车展示与否的变量 showCart,控制购物车check部分是否展示的句柄 handleCartShow
    return { allCount, allPrice, productList, shopId, addItemToCart, deleteItemToCart, cleanAllProducts, showCart, handleCartShow }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixin.scss';
.cart{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background-color: $bg-color;
}
.mask{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba($color: #000000, $alpha: .5);
  z-index: 1;
}
.product{
  overflow-y: scroll;
  flex:1;
  background-color: $bg-color;
  &__header{
    height: .4rem;
    border-bottom: .01rem solid #f1f1ff;
    overflow: hidden;
    position: relative;
    &__clearall{
      position: absolute;
      font-size: .12rem;
      color: #999;
      text-align: right;
      line-height: .4rem;
      right: .18rem;
      .iconfont{
        font-size: .12rem;
      }
    }
  }
  &__item{
    position: relative;
    display: flex;
    padding:.12rem 0;
    margin: 0 .16rem;
    border-bottom: .01rem solid #f1f1ff;
    &__ditail{
      overflow: hidden;
    }
    &__img{
      width: .46rem;
      height: .46srem;
      margin-right: .16rem;
    }
    &__title {
    margin: 0;
    line-height: .2rem;
    font-size: .14rem;
    color: $content-fontcolor;
    @include ellipsis
    }
    &__price {
      margin: 0.06rem 0 0 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $heigh-light;
      .price__yuan {
        font-size: .12rem;
      }
      .price__origin {
        margin-left: .06rem;
        line-height: .2rem;
        font-size: .12rem;
        color: #999;
        text-decoration: line-through;
      }
    }
    .product__number{
      position: absolute;
      right: .0rem;
      bottom: .25rem;
      &__minus,
      &__plus{
        width: .2rem;
        height: .2rem;
        display: inline-block;
        border-radius: 50%;
        font-size: .25rem;
        text-align: center;
        line-height: .17rem;
      }
      &__minus{
        border:.01rem solid $border-color;
        margin-right: .1rem;
      }
      &__plus{
        border:.01rem solid $btn-bgcolor;
        background-color: $btn-bgcolor;
        margin-left: .1rem;
        color: $bg-color;
      }
      &__num{
        position: relative;
        font-size: .14rem;
        top: -0.015rem;
        display: inline-block;
      }
    }
  }
}
.check{
  display: flex;
  line-height: .49rem;
  height: .49rem;
  border-top: .01rem solid  $content-bgcolor;
  &__icon{
    width: .84rem;
    position: relative;
    &__img{
      width: .28rem;
      display: block;
      height: .26rem;
      margin: .12rem auto;
    }
    &__tag{
      position: absolute;
      border-radius: .1rem;
      background-color: $heigh-light;
      color: $bg-color;
      line-height: .2rem;
      font-size: .12rem;
      min-width: .2rem;
      height: .2rem;
      top: .03rem;
      left: .46rem;
      text-align: center;
      transform: scale(.5);
    }
  }
  &__info{
    flex: 1;
    color: $content-fontcolor;
    font-size: .12rem;
    &__price{
      color: $heigh-light;
      font-size: .18rem;
    }
  }
  &__btn{
    width: .98rem;
    background-color: #4fb0f9;
    color: $bg-color;
    font-size: .14rem;
    text-align: center;
  }
}
// 上下收缩动画实现
.product-enter-from,
.product-leave-to{
  max-height: 0;
  opacity: 0;
}
.product-enter-to,
.product-leave-from{
  max-height: 4rem;
  opacity: 1;
}
.product-enter-active,
.product-leave-active{
  transition: all .4s;
}
.mask-enter-from,
.mask-leave-to{
  opacity: 0;
}
.mask-enter-to,
.mask-leave-from{
  opacity: 1;
}
.mask-enter-active,
.mask-leave-active{
  transition: all .4s;
}
</style>
