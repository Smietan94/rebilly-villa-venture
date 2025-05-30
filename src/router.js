export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./project/HomePage.vue')
  },
  // PROJECTS
  // PROJECT 8
  {
    path: '/project/8',
    name: 'Project8',
    component: () => import('./project/8/Project8.vue')
  },
  // PROJECT 9
  {
    path: '/project/9',
    name: 'Project9',
    component: () => import('./project/9/components/Project9.vue')
  },
  {
    path: '/project/9/course',
    name: 'Course',
    component: () => import('./project/9/components/Course.vue')
  },
  {
    path: '/project/9/ebook',
    name: 'Ebook',
    component: () => import('./project/9/components/Ebook.vue')
  },
  {
    path: '/project/9/hat',
    name: 'Hat',
    component: () => import('./project/9/components/Hat.vue')
  },
  {
    path: '/project/9/t-shirt',
    name: 'T-shirt',
    component: () => import('./project/9/components/T-shirt.vue')
  },
  {
    path: '/project/9/checkout',
    name: 'Checkout',
    component: () => import('./project/9/components/CheckoutForm.vue')
  },
  // PROJECT 10
  {
    path: '/project/10',
    name: 'Project10',
    component: () => import('./project/10/Project10.vue')
  },
  // CASINO
  {
    path: '/project/casino/',
    name: 'Casino',
    component: () => import('./project/casino/HomePage.vue'),
    children: [
      // PROJECT deposit
      {
        path: 'casino/deposit',
        name: 'Deposit',
        component: () => import('@/project/casino/deposit/Deposit.vue')
      },
      {
        path: 'casino/payout',
        name: 'Payout',
        component: () => import('@/project/casino/payout/Payout.vue')
      }
    ]
  },
  // DEBRIEFS
  {
    path: '/debriefs',
    name: 'Debriefs',
    component: () => import('./debriefs/Debriefs.vue')
  },
  {
    path: '/debriefs/8',
    name: 'Debrief8',
    component: () => import('./debriefs/8.vue')
  },
  {
    path: '/debriefs/9',
    name: 'Debrief9',
    component: () => import('./debriefs/9.vue')
  },
  {
    path: '/debriefs/10',
    name: 'Debrief10',
    component: () => import('./debriefs/10.vue')
  },
  {
    path: '/debriefs/deposit',
    name: 'Debrief11',
    component: () => import('./debriefs/11.vue')
  },
  {
    path: '/debriefs/12',
    name: 'Debrief12',
    component: () => import('./debriefs/12.vue')
  },
  {
    path: '/debriefs/13',
    name: 'Debrief13',
    component: () => import('./debriefs/13.vue')
  },
  {
    path: '/debriefs/14',
    name: 'Debrief14',
    component: () => import('./debriefs/14.vue')
  },
  {
    path: '/debriefs/15',
    name: 'Debrief15',
    component: () => import('./debriefs/15.vue')
  },
  {
    path: '/debriefs/16',
    name: 'Debrief16',
    component: () => import('./debriefs/16.vue')
  },
  {
    path: '/debriefs/17',
    name: 'Debrief17',
    component: () => import('./debriefs/17.vue')
  },
  {
    path: '/debriefs/18',
    name: 'Debrief18',
    component: () => import('./debriefs/18.vue')
  },
  {
    path: '/debriefs/19',
    name: 'Debrief19',
    component: () => import('./debriefs/19.vue')
  },
  {
    path: '/debriefs/20',
    name: 'Debrief20',
    component: () => import('./debriefs/20.vue')
  },
  {
    path: '/debriefs/21',
    name: 'Debrief21',
    component: () => import('./debriefs/21.vue')
  },
  {
    path: '/debriefs/22',
    name: 'Debrief22',
    component: () => import('./debriefs/22.vue')
  },
  {
    path: '/debriefs/23',
    name: 'Debrief23',
    component: () => import('./debriefs/23.vue')
  },
  {
    path: '/debriefs/24',
    name: 'Debrief24',
    component: () => import('./debriefs/24.vue')
  },
  {
    path: '/debriefs/25',
    name: 'Debrief25',
    component: () => import('./debriefs/25.vue')
  },
  {
    path: '/debriefs/26',
    name: 'Debrief26',
    component: () => import('./debriefs/26.vue')
  },
  {
    path: '/debriefs/38',
    name: 'Debrief38',
    component: () => import('./debriefs/38.vue')
  },
  {
    path: '/debriefs/39',
    name: 'Debrief39',
    component: () => import('./debriefs/39.vue')
  },
  {
    path: '/debriefs/41',
    name: 'Debrief41',
    component: () => import('./debriefs/41.vue')
  },
]
