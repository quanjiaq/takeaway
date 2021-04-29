<template>
<!-- shop页面的商品内容 -->
  <div class="content">
    <!-- 左侧菜单 -->
    <div class="category">
      <ul>
        <li
          v-for="item in CATEGORIES"
          :key="item.tab"
          :class="{'category__item': true, 'category__item--active': currentTab == item.tab }"
          @click="() => handleCatgoryClick(item.tab)"
        >{{item.name}}</li>
      </ul>
    </div>
    <!-- 右侧商品列表 -->
    <div class="product">
      <div class="product__item" v-for="(item, index) in contentList" :key="index">
        <img class="product__item__img" :src="item.imgUrl"/>
        <div class="product__item__ditail">
          <h4 class="product__item__title">{{item.name}}</h4>
          <p class="product__item__sales">月售{{item.sales}}件</p>
          <p class="product__item__price">
            <span class="price__yuan">&yen;</span>{{item.price}}
            <span class="price__origin">&yen;{{item.oldPrice}}</span>
          </p>
        </div>
        <div class="product__number">
          <span
            class="product__number__minus"
            @click="() => { deleteItemToCart(shopId, item._id, shopName) }"
          >-</span>
          <span class="product__number__num">{{getProductCount(shopId, item._id, cartList)}}</span>
          <span
            class="product__number__plus"
            @click="() => { addItemToCart(shopId, item._id, item, shopName) }"
            >+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, watchEffect, ref } from 'vue'
import { useRoute } from 'vue-router'
import { get } from '../../utils/request'
import { useCartnumEffect } from '../../effects/commonCartEffect'
// 左侧菜单内容的常量
const CATEGORIES = [{
  name: '全部商品',
  tab: 'all'
},
{
  name: '秒杀',
  tab: 'seckill'
},
{
  name: '新鲜水果',
  tab: 'fruit'
}]
/*  currentTab切换函数
    给按钮绑定handleCatgoryClick句柄，并传入按钮的tab值
    currentTab值就会切换为此按钮的Tab值
 */
const useTabEffect = () => {
  const currentTab = ref(CATEGORIES[0].tab)
  const handleCatgoryClick = (tab) => {
    currentTab.value = tab
  }
  return { handleCatgoryClick, currentTab }
}
// 列表相关逻辑函数，传入响应式变量currentTab，返回商品列表渲染的响应式数据contentList
const useCurrentListEffect = (currentTab, shopId) => {
  const data = reactive({ contentList: [] })
  const getContentData = async (tabb) => {
    const result = await get(`/api/shop/${shopId}/products`, { tab: tabb.value })
    if (result.data.errno === 0 && result.data.data[0]) {
      data.contentList = result.data.data
    }
  }
  // 当currentTab变化的时候，重新渲染列表内容
  watchEffect(() => {
    getContentData(currentTab)
  })
  const { contentList } = toRefs(data)
  return { contentList }
}
const useCartEffect = () => {
  // 传入商铺ID shopId,商品ID productId,商品信息cartList,来获取商品数量getProductCount
  const getProductCount = (shopId, productId, cartList) => {
    return cartList?.[shopId]?.productList?.[productId]?.count || 0
  }
  return { getProductCount }
}
export default {
  name: 'Content',
  props: ['shopName'],
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { currentTab, handleCatgoryClick } = useTabEffect()
    const { contentList } = useCurrentListEffect(currentTab, shopId)
    const { cartList, addItemToCart, deleteItemToCart } = useCartnumEffect()
    const { getProductCount } = useCartEffect()
    // 左侧菜单内容的常量CATEGORIES, 商品列表渲染数据contentList,
    // 左侧菜单被选中按钮的Tab值currentTab, 菜单按钮句柄handleCatgoryClick, 此商铺的idshopId,
    // 商品信息cartList, 添加商品按钮的句柄函数addItemToCart, 减少商品按钮的句柄函数deleteItemToCart
    // 获取商品数量getProductCount
    return { CATEGORIES, contentList, currentTab, handleCatgoryClick, shopId, cartList, addItemToCart, deleteItemToCart, getProductCount }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixin.scss';
.content{
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: .5rem;
  .category{
    width: .76rem;
    background-color: $search-background;
    height: 100%;
    overflow-y:scroll;
    &__item{
      line-height: .4rem;
      text-align: center;
      font-size: .14rem;
      color: $content-fontcolor;
      &--active{
        background-color: $bg-color;
      }
    }
  }
  .product{
    overflow-y: scroll;
    flex:1;
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
        width: .68rem;
        height: .68rem;
        margin-right: .16rem;
      }
      &__title {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontcolor;
      @include ellipsis
      }
      &__sales {
        margin: .06rem 0;
        font-size: .12rem;
        color: $content-fontcolor;
      }
      &__price {
        margin: 0;
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
        bottom: .12rem;
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
}
</style>
