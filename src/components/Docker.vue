<template>
<!-- Home页面的下方菜单栏 -->
<div class="docker">
    <div
      v-for="(item, index) in dockerList"
      :class="{'docker__item': true, 'docker__item--active': index === currentIndex}"
      :key="item.icon"
    >
      <router-link :to="item.to">
        <div class="iconfont" v-html="item.icon"></div>
        <span class="docker__title">{{item.text}}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Docker',
  props: ['currentIndex'],
  setup () {
    // dockerList为包含下方菜单信息的常量，icon: 字符图标, text: 文字, to: 跳转路由
    const dockerList = [
      { icon: '&#xf461;', text: '首页', to: { name: 'Home' } },
      { icon: '&#xe62d;', text: '购物车', to: { name: 'CartList' } },
      { icon: '&#xf462;', text: '订单', to: { name: 'OrderList' } },
      { icon: '&#xe617;', text: '我的', to: { name: 'Person' } }
    ]
    return { dockerList }
  }
}
</script>

<style lang='scss' scoped>
@import '../style/viriables.scss';
@import '../style/mixin.scss';
.docker{
  color: $content-fontcolor;
  position: absolute;
  left: 0;
  bottom: 0;
  width:100%;
  padding: 0 .18rem;
  height: 0.49rem;
  border-top: .01rem solid $content-bgcolor;
  box-sizing: border-box;
  display: flex;
    .docker__item{
      width: 25%;
      text-align: center;
      a{
        color: $content-fontcolor;
      }
      &--active{
        color: #1FA4FC;
          a{
          color: #1FA4FC;
          }
        }
        .iconfont{
          margin:.04rem 0 .02rem 0;
          font-size: .20rem;
        }
        .docker__title{
          font-size: .12rem;
        }
    }
}
</style>
