<template>
<!-- 购物车CartList页面 -->
  <div class="wrapper">
    <div class="title">我的全部购物车</div>
    <div class="shops">
      <div
        class="empty"
        v-if="Object.keys(cartListWithProducts).length === 0"
      >购物车当前为空</div>
      <div
        class="shop"
        v-for="(item, index) in cartListWithProducts"
        :key="index"
      >
        <div class="shop__title">
          {{item.shopName}}
        </div>
        <div class="products">
          <div class="products__list">
            <template
              v-for="product in item.productList"
              :key="product._id"
            >
              <div
                v-if="product.count > 0"
                class="products__item"
              >
                <img class="products__item__img" :src="product.imgUrl" />
                <div class="products__item__detail">
                  <h4 class="products__item__title">{{product.name}}</h4>
                  <p class="products__item__price">
                    <span>
                      <span class="products__item__yen">&yen; </span>
                      {{product.price}} x {{product.count}}
                    </span>
                    <span class="products__item__total">
                      <span class="products__item__yen">&yen; </span>
                      {{(product.price * product.count).toFixed(2)}}
                    </span>
                  </p>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Docker :currentIndex="1"/>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Docker from '../../components/Docker'
// 购物车逻辑函数
// 返回加入购物车商品的信息cartListWithProducts
const useCartEffect = () => {
  const store = useStore()
  // 获取购物车数据cartList
  const cartList = store.state.cartList
  const cartListWithProducts = computed(() => {
    const newCartList = {}
    // 遍历每个商铺
    for (const shopId in cartList) {
      let total = 0
      const products = cartList[shopId].productList
      // 遍历每个商铺的商品
      for (const productId in products) {
        const product = products[productId]
        total += (product.count || 0)
      }
      // 如果商品总数大于0
      if (total > 0) {
        newCartList[shopId] = cartList[shopId]
      }
    }
    return newCartList
  })

  return { cartListWithProducts }
}
export default {
  name: 'CartList',
  components: { Docker },
  setup () {
    const { cartListWithProducts } = useCartEffect()
    // 购物车里的商品信息列表 cartListWithProducts
    return { cartListWithProducts }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixin.scss';
.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  background: $search-background;
}
.title {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  line-height: .44rem;
  background: $bg-color;
  font-size: .16rem;
  color: $content-fontcolor;
  text-align: center;
}
.empty {
  line-height: .44rem;
  color: #999;
  font-size: .16rem;
  text-align: center;
}
.shops {
  overflow-y: scroll;
  position: absolute;
  top: .6rem;
  right: .18rem;
  bottom: .1rem;
  left: .18rem;
  background: $bg-color;
}
.shop {
  &__title {
    padding: .16rem;
    font-size: .16rem;
    color: $content-fontcolor;
  }
  &__wrapper {
    overflow-y: scroll;
    margin: 0 .18rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: .6rem;
    top: 2.6rem;
  }
}
.products {
  &__list {
    background: $bg-color;
  }
  &__item {
    position: relative;
    display: flex;
    padding: 0 .16rem 0.16rem .16rem;
    &__img {
      width: .46rem;
      height: .46rem;
      margin-right: .16rem;
    }
    &__detail {
      flex: 1;
    }
    &__title {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }
    &__price {
      display: flex;
      margin: .06rem 0 0 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $heigh-light;
    }
    &__total {
      flex: 1;
      text-align: right;
      color: black;
    }
    &__yen {
      font-size: .12rem;
    }
  }
}
</style>
