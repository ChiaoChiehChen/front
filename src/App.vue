<template lang="pug">
#app
  b-navbar(toggleable='lg' type='dark' variant='info')
    b-container
      b-navbar-brand(to='/') 購物網
      b-navbar-toggle(target='nav-collapse')
      b-collapse#nav-collapse(is-nav)
        b-navbar-nav.ml-auto
          b-nav-item(v-if="!user.isLogin" to='/register') 註冊
          b-nav-item(v-if="!user.isLogin" to='/login') 登入
          b-nav-item(v-if="user.isLogin" to='/cart')
            | 購物車
            b-badge(variant='danger') {{ user.cart }}
          b-nav-item(v-if="user.isLogin" to='/orders') 訂單
          b-nav-item(v-if="user.isLogin && user.isAdmin" to='/admin') 管理
          b-nav-item(v-if="user.isLogin" @click="logout") 登出
  //- 路由參數 :key='$router.fullPath' 進入網頁時複製網址a連結的id 到另一個b商品網址連結貼上a網址的id 網站就會從b商品換到a商品
  router-view(:key='$router.fullPath')
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('user/logout')
    }
  },
  async created () {
    this.$store.dispatch('user/getInfo')
  }
}
</script>
