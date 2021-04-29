<template>
<!-- Home页面的纯静态部分 -->
    <div class="position">
      <span class="iconfont position__icon">&#xe68c;</span>
      浙江工业大学西和6号楼
      <span class="iconfont position__notice">&#xe600;</span>
    </div>
    <!-- 仅作展示，没有添加任何接口 -->
    <div class="search">
      <span class="iconfont">&#xe6df;</span>
      <input type="text" class="search__input" placeholder="山姆会员商店优惠商品"/>
    </div>
    <div class="banner">
      <img class="banner__image" src="http://www.dell-lee.com/imgs/vue3/banner.jpg"/>
    </div>
    <div class="icons">
      <div
        class="icons__item"
        v-for="item in data"
        :key='item.desc'
      >
        <img :src="item.imgUrl" :alt="item.desc" class="icons__item__img"/>
        <span class="icons__item__desc">{{item.desc}}</span>
      </div>
    </div>
    <div class="gap"></div>
</template>
<script>
import { reactive } from 'vue'
import axios from 'axios'
// 获取icons部分的图标信息，data为图标信息，getdata为获取数据的函数
const usestaticPartEffect = () => {
  const data = reactive([])
  const getdata = () => {
    axios.get('./json/icon.json') // 模拟ajax请求，icon.json放在public/json下面
      .then((message) => {
        for (const i in message.data) {
          data.push(message.data[i])
        }
      })
  }
  return { data, getdata }
}
export default {
  name: 'StaticPart',
  setup () {
    const { data, getdata } = usestaticPartEffect()
    getdata()
    // data为图标的信息
    return { data }
  }
}
</script>
<style lang='scss' scoped>
@import '../../style/viriables.scss';
@import '../../style/mixin.scss';
.position{
  position: relative;
  padding: .16rem 0;
  line-height: .2rem;
  font-size: .16rem;
  @include ellipsis;
  padding-right: .24rem;
  & &__icon{
    position: relative;
    top: .02rem;
    font-size: .2rem;
    margin-right: .05rem;
  }
  & &__notice{
    position: absolute;
    top: .17rem;
    font-size: .2rem;
    right: 0;
  }
}
.search{
  margin-bottom: .12rem;
  position: relative;
  .search__input{
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
  .iconfont{
    position: absolute;
    left: .16rem;
    line-height: .32rem;
  }
}
.banner{
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  &__image{
    width: 100%;
  }
}
.icons{
  display: flex;
  flex-wrap: wrap;
  padding-bottom: .16rem;
  &__item{
    width: 20%;
    padding-top: .16rem;
    &__img{
      width: .4rem;
      display: block;
      margin: 0 auto;
    }
    &__desc{
      text-align: center;
      margin-top: .06rem;
      display: block;
      font-size: .12rem;
      color: $content-fontcolor;
    }
  }
}
.gap{
  height: .10rem;
  background-color: $content-bgcolor;
  margin: 0 -.18rem;
}
</style>
