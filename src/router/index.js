import Vue from 'vue';
import Router from 'vue-router';
import CSSLayout from '@/components/CSSLayout';
import Home from '@/components/Home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/css-layout',
      name: 'CSSLayout',
      component: CSSLayout
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
});
