<template>
<!-- 确认订单页面ConfirmOrder的商品栏部分 -->
  <div class="products">
    <div class="products__title">
      {{shopName}}
    </div>
      <div class="products__list">
        <template
        v-for="item in productList"
        :key="item._id"
        >
        <div class="products__item" v-if="item.count > 0">
          <img class="products__item__img" :src="item.imgUrl" />
          <div class="products__item__detail">
            <h4 class="products__item__title">{{item.name}}</h4>
            <p class="products__item__price">
              <span>
                <span class="products__item__yen">&yen; </span>
                {{item.price}} x {{item.count}}
              </span>
              <span class="products__item__total">
                <span class="products__item__yen">&yen; </span>
                {{(item.price * item.count).toFixed(2)}}
              </span>
            </p>
          </div>
        </div>
        </template>
      </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useCartnumEffect } from '../../effects/commonCartEffect'
export default {
  name: 'Products',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { shopName, productList } = useCartnumEffect(shopId)
    // 商品列表productList, 商店名称shopName
    return { productList, shopName }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixin.scss';
.products {
  margin: .16rem .18rem .55rem .18rem;
  background: $bg-color;
  &__title {
    padding: .16rem .16rem 0 .16rem;
    font-size: .16rem;
    color: $content-fontcolor;
  }
  &__item {
    position: relative;
    display: flex;
    padding: .16rem;
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
    }
    &__yen {
      font-size: .12rem;
    }
  }
}
</style>
