<template>
<!-- 商铺信息全局组件 -->
  <div class="shop__item">
    <img :src="item.imgUrl"  class="shop__item__img"/>
    <div :class="{'shop__content':true, 'shop__content--bordered': hideBorder ? false : true}">
      <div class="shop__content__title">{{item.name}}</div>
      <div class="shop__content__tags">
        <span class="shop__content_tag">月售{{item.sales}}</span>
        <span class="shop__content_tag">起送￥{{item.expressLimit}}</span>
        <span class="shop__content_tag">基础运费¥{{item.expressPrice}}</span>
      </div>
      <p class="shop__content__heightlight">{{item.slogan}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  // item为商铺信息数组，hiderBorder为是否隐藏下边框
  props: ['item', 'hideBorder']
}
</script>

<style lang='scss' scoped>
@import '../style/viriables.scss';
@import '../style/mixin.scss';
.shop__item{
  padding-top: .12rem;
  display: flex;

  .shop__item__img{
    margin-right: .16rem;
    width: 0.56rem;
    height: .56rem;
  }
  .shop__content{
    &--bordered{
      border-bottom: .01rem solid $content-bgcolor;
    }
    padding-bottom: .12rem;
    .shop__content__title{
      line-height: .22rem;
      font-size: .16rem;
      color: $content-fontcolor;
    }
    .shop__content__tags{
      margin-top: .08rem;
      line-height: .18rem;
      font-size: .13rem;
      color: $content-fontcolor;
      .shop__content_tag{
        margin-right: .16rem;
      }
    }
    .shop__content__heightlight{
      margin: .08rem 0 0 0;
      line-height: .18rem;
      font-size: .13rem;
      color: $heigh-light;
    }
  }
}
</style>
