// 商品选购逻辑函数
// 商品信息cartList, 添加商品按钮的句柄函数addItemToCart, 减少商品按钮的句柄函数deleteItemToCart
// 注意：由于cartList是被ToRefs赋值的，所以调用的时候需要写为cartList.value
import { useStore } from 'vuex'
import { toRefs, computed } from 'vue'
export const useCartnumEffect = (shopId) => {
  const store = useStore()
  const { cartList } = toRefs(store.state)
  const addItemToCart = (shopId, productId, productInfo, shopName) => {
    store.commit('addItemToCart', { shopId, productId, productInfo, shopName })
  }
  const deleteItemToCart = (shopId, productId) => {
    store.commit('deleteItemToCart', { shopId, productId })
  }
  const productList = computed(() => {
    const srcproductList = cartList.value[shopId]?.productList || {}
    const productList = {}
    // 遍历srcproductList，只有当里面商品的数量大于0时，才放入productList
    for (const i in srcproductList) {
      const item = srcproductList[i]
      if (item.count > 0) {
        productList[i] = item
      }
    }
    return productList
  })

  const shopName = computed(() => {
    const shopName = cartList.value[shopId]?.shopName || ''
    return shopName
  })
  const allPrice = computed(() => {
    const productList = cartList.value[shopId]?.productList
    let price = 0
    if (productList) {
      for (const i in productList) {
        price += productList[i].count * productList[i].price
      }
    }
    return price.toFixed(2)
  })
  return { allPrice, shopName, productList, cartList, addItemToCart, deleteItemToCart }
}
