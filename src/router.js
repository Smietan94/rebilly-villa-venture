export const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./project/HomePage.vue'),
    },
    // PROJECTS
    // PROJECT 8
    {
        path: '/project/8',
        name: 'Project8',
        component: () => import('./project/8/Project8.vue'),
    },
    // PROJECT 9
    {
        path: '/project/9',
        name: 'Project9',
        component: () => import('./project/9/components/Project9.vue'),
    },
    {
        path: '/project/9/course',
        name: 'Course',
        component: () => import('./project/9/components/Course.vue'),
    },
    {
        path: '/project/9/ebook',
        name: 'Ebook',
        component: () => import('./project/9/components/Ebook.vue'),
    },
    {
        path: '/project/9/hat',
        name: 'Hat',
        component: () => import('./project/9/components/Hat.vue'),
    },
    {
        path: '/project/9/t-shirt',
        name: 'T-shirt',
        component: () => import('./project/9/components/T-shirt.vue'),
    },
    {
        path: '/project/9/checkout',
        name: 'Checkout',
        component: () => import('./project/9/components/CheckoutForm.vue'),
    },
    // PROJECT 10
    {
        path: '/project/10',
        name: 'Project10',
        component: () => import('./project/10/Project10.vue'),
    },
    // CASINO
    {
        path: '/project/casino/',
        name: 'Casino',
        component: () => import('./project/casino/HomePage.vue'),
        children: [
            // PROJECT 11
            {
                path: '/project/11',
                name: 'Project11',
                component: () => import('./project/casino/11/Project11.vue'),
            },
        ],
    },
    // DEBRIEFS
    {
        path: '/debriefs',
        name: 'Debriefs',
        component: () => import('./debriefs/Debriefs.vue'),
    },
    {
        path: '/debriefs/8.vue',
        name: 'Debrief8',
        component: () => import('./debriefs/8.vue'),
    },
    {
        path: '/debriefs/9.vue',
        name: 'Debrief9',
        component: () => import('./debriefs/9.vue'),
    },
    {
        path: '/debriefs/10.vue',
        name: 'Debrief10',
        component: () => import('./debriefs/10.vue'),
    },
    {
        path: '/debriefs/11.vue',
        name: 'Debrief11',
        component: () => import('./debriefs/11.vue'),
    },
];
