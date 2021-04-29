<template>
<!-- 商铺详情Shop页面 -->
  <div class="wrapper">
    <div class="search">
      <div
        class="search__back iconfont"
        @click="handleBack"
        >&#xe605;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe6df;</span>
        <!-- 搜索框为纯静态，未添加相关功能接口 -->
        <input type="text" class="search__content__input" placeholder="请输入商品名称搜索"/>
      </div>
    </div>
    <ShopInfo :item="item" :hideBorder="true" :v-show="item.imgUrl"/>
  </div>
  <Content :shopName="item.name" />
  <Cart/>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import { reactive, toRefs } from 'vue'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo'
import Content from './Content.vue'
import Cart from './Cart.vue'
// 通过接口获取当前商铺的信息，响应式数据item为商铺信息，getItemData为获取信息的函数
const useShopInfoEffect = () => {
  const route = useRoute()
  const data = reactive({
    item: {}
  })
  const getItemData = async () => {
    // 将route.params.id数据传送给接口，获取相关商铺的信息
    const result = await get(`/api/shop/${route.params.id}`)
    if (result.data.errno === 0 && result.data.data) {
      data.item = result.data.data
    }
  }
  getItemData()
  const { item } = toRefs(data)
  return { item }
}
// 返回到Home页面,handleBack为返回按钮的句柄
const useHandleBack = () => {
  const router = useRouter()
  const handleBack = () => {
    router.push({ name: 'Home' })
  }
  return { handleBack }
}
export default {
  name: 'Shop',
  // ShopInfo组件实现商铺信息的展示，Content实现中间区域的商品信息展示
  components: { ShopInfo, Content, Cart },
  setup () {
    const { handleBack } = useHandleBack()
    const { item } = useShopInfoEffect()
    // 商铺信息 item,返回首页按钮的句柄 handleBack
    return { item, handleBack }
  }
}
</script>

<style lang='scss' scoped>
@import '../../style/viriables.scss';
  .wrapper{
    padding: 0 .18rem;
  }
  .search{
    margin: .16rem 0 .1rem 0;
    display: flex;
    &__back{
      width: .32rem;
      height: .3rem;
      color: #B6B6B6;
      font-size: .20rem;
      line-height: .30rem;
    }
    &__content{
      width: 3.1rem;
      height: .32rem;
      position: relative;
      &__icon{
        position: absolute;
        top: 0;
        left: .16rem;
        line-height: .32rem;
      }
      &__input{
        height: .32rem;
        background-color: $search-background;
        font-size: .14rem;
        line-height: .32rem;
        border-radius: .16rem;
        border: none;
        width: 100%;
        padding: 0 .44rem;
        box-sizing: border-box;
      }
    }
  }
</style>
