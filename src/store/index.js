import { createStore } from 'vuex'
// 将购物车数据持久存储于localStorage
const setLocalCarList = (state) => {
  const { cartList } = state
  const cartListString = JSON.stringify(cartList)
  localStorage.cartList = cartListString
}
// 返回localStorage里面的购物车数据
const getLocalCarList = () => {
  try {
    return JSON.parse(localStorage.cartList) || {}
  } catch (e) {
    return {}
  }
}

export default createStore({
  state: {
    // 购物车数据，第一层级商铺ID；第二层级商铺名称和商品列表；第三层级商品id；第三层级内容商品信息和购买数量
    cartList: getLocalCarList()
    // shopId: {
    //   shopName:'沃尔玛',
    //   productList:{
    //     productId: {
    //       _id: '1',
    //       name: '番茄250g/份',
    //       imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png',
    //       sales: 10,
    //       price: 33.6,
    //       oldPrice: 39.6,
    //       count: 2
    //     }
    //   }
    // }
  },
  mutations: {
    // 添加商品到购物车
    addItemToCart (state, payload) {
      const { shopId, productId, productInfo, shopName } = payload
      let shopInfo = state.cartList[shopId]
      // 如果没有商店信息，先传入商店信息
      if (!shopInfo) {
        shopInfo = { shopName: '', productList: {} }
        shopInfo.shopName = shopName
      }
      let product = shopInfo.productList[productId]
      // 如果没有商品信息，先传入商品信息
      if (!product) {
        product = productInfo
        product.count = 0
      }
      product.count += 1
      shopInfo.productList[productId] = product
      state.cartList[shopId] = shopInfo
      // 更新localStorage内购物车的信息
      setLocalCarList(state)
    },
    // 删除商品到购物车
    deleteItemToCart (state, payload) {
      const { shopId, productId } = payload
      const shopInfo = state.cartList[shopId]
      // 如果没有信息，直接返回
      if (!shopInfo) { return }
      const product = shopInfo.productList[productId]
      if (!product) { return }
      // 只有当此商品的数量大于0时，才减一
      if (state.cartList[shopId].productList[productId].count > 0) {
        state.cartList[shopId].productList[productId].count -= 1
      }
      // 更新localStorage内购物车的信息
      setLocalCarList(state)
    },
    // 清空购物车
    cleanAllProducts (state, payload) {
      const { shopId } = payload
      const shopInfo = state.cartList[shopId]
      if (!shopInfo) { return }
      // 将商品列表直接置为空对象
      state.cartList[shopId].productList = {}
      // 更新localStorage内购物车的信息
      setLocalCarList(state)
    }
  },
  actions: {
  },
  modules: {
  }
})
