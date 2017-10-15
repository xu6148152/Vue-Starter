import Vue from 'vue';
import Router from 'vue-router';
import home from '@/components/home';
import itemcontainer from '@/components/itemcontainer';
import App from '@/App'
import item from '@/components/item'
import score from '@/components/score'

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: App,
    children: [{
      path: '',
      component: r => require.ensure([], () => r(home), 'home')
    }, {
      path: '/item',
      component: r => require.ensure([], () => r(item), 'item')
    }, {
      path: '/score',
      component: r => require.ensure([], () => r(score), 'score')
    }]
  }, ],
})
