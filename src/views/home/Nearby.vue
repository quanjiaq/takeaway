<template>
<!-- Home页面的附近商铺部分 -->
<div class="nearby">
  <h3 class="nearby__title">附近店铺</h3>
  <!-- 路由跳转的按钮，并将item._id作为id加到url上区分不同店铺 -->
  <router-link
    v-for="item in nearbyList"
    :to="`/shop/${item._id}`"
    :key="item._id">
    <!-- 店铺信息的组件 -->
    <ShopInfo :item="item"/>
  </router-link>
</div>
</template>

<script>
import { reactive } from 'vue'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo'
// 从接口获取附近商铺的数据，nearbyList为附近店铺的数据, getNearbyList为获取数据的函数
const useNearbyListEffect = () => {
  const nearbyList = reactive([])
  const getNearbyList = async () => {
    const result = await get('/api/shop/hot-list')
    // 获取数据成功
    if (result.data.errno === 0) {
      for (const i in result.data.data) {
        nearbyList.push(result.data.data[i])
      }
    }
  }
  return { nearbyList, getNearbyList }
}
export default {
  name: 'Nearby',
  // ShopInfo为店铺信息的组件
  components: { ShopInfo },
  setup () {
    const { nearbyList, getNearbyList } = useNearbyListEffect()
    // 获取附近店铺的数据
    getNearbyList()
    // nearbyList店铺信息数据
    return { nearbyList }
  }
}
</script>
<style lang='scss' scoped>
@import '../../style/viriables.scss';
@import '../../style/mixin.scss';
.nearby{
  &__title{
    margin:.16rem 0 .02rem 0;
    font-size: .18rem;
    color: $content-fontcolor;
  }
}
</style>
