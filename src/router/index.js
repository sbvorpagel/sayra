import Vue from 'vue';
import Router from 'vue-router';
import Confirm from '@/components/Confirm';
import Location from '@/components/Location';
import HomeView from '@/components/Home';
import Information from '@/components/Information';
import Gift from '@/components/Gift';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/confirm',
      name: 'Confirm',
      component: Confirm,
    },
    {
      path: '/location',
      name: 'Location',
      component: Location,
    },
    {
      path: '/information',
      name: 'Information',
      component: Information,
    },
    {
      path: '/gift',
      name: 'Gift',
      component: Gift,
    },
  ],
});
