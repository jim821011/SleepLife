import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login'),
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: () => import('@/components/Backwork/Dashboard'),
      children: [
        {
          path: 'products',
          name: 'Product',
          component: () => import('@/views/Backwork/Products'),
          meta: { requiresAuth: true },
        },
        {
          path: 'orderlist',
          name: 'OrderList',
          component: () => import('@/views/Backwork/OrderList'),
          meta: { requiresAuth: true },
        },
        {
          path: 'coupon',
          name: 'Coupon',
          component: () => import('@/views/Backwork/Coupon'),
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      path: '/',
      // name:'Layout',
      component: () => import('@/components/Frontwork/Layout'),
      children: [
        {
          path: '',
          name: 'Index',
          component: () => import('@/views/Frontwork/Index'),
        },
        {
          path: 'production',
          name: 'Production',
          component: () => import('@/views/Frontwork/Production'),
        },
        {
          path: 'product_detail/:id',
          name: 'ProductDetail',
          component: () => import('@/views/Frontwork/ProductDetail'),
        },
        {
          path: 'attention',
          name: 'Attention',
          component: () => import('@/views/Frontwork/Attention'),
        },
        {
          path: 'cart',
          name: 'Cart',
          component: () => import('@/views/Frontwork/Cart'),
        },
        {
          path: 'order',
          name: 'Order',
          component: () => import('@/views/Frontwork/Order'),
        },
        {
          path: 'order_detail/:orderId',
          name: 'OrderDetail',
          component: () => import('@/views/Frontwork/OrderDetail'),
        },
      ],
    },
    {
      path: '*',
      redirect: '/login',
    },
  ],
});
