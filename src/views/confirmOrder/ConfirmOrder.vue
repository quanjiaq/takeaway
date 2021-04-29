<template>
<!-- 确认订单页面 -->
  <div class="wrapper">
    <Top/>
    <Products/>
  </div>
  <Order/>
</template>

<script>
import Top from './Top'
import Products from './Products'
import Order from './Order'
export default {
  name: 'OrderConfirmation',
  components: { Top, Products, Order }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixin.scss';
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: .5rem;
  background-color: #eee;
  overflow-y:scroll ;
}
</style>
