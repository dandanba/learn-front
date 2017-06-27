import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Mock from '@/components/Mock';
import Swiper from '@/components/FreeSwiper';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/mock',
      name: 'mock',
      component: Mock
    }, {
      path: '/swiper',
      name: 'swiper',
      component: Swiper
    }
  ]
});
