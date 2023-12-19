import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: () => import('../views/ForgotPasswordView.vue')
    },
    {
      path: '/update-password',
      name: 'update-password',
      meta: { requiresAuth: true },
      component: () => import('../views/NewPasswordForm.vue')
    },
    {
      path: '/email-confirmation',
      name: 'email-confirmation',
      component: () => import('../views/EmailConfirmationView.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      meta: { requiresAuth: true },
      component: () => import('../views/SettingsView.vue')
    },
    {
      path: '/subscription',
      name: 'subscription',
      meta: { requiresAuth: true },
      component: () => import('../views/SubscriptionView.vue')
    },
    {
      path: '/invoices',
      name: 'invoices',
      meta: { requiresAuth: true },
      component: () => import('../views/InvoicesView.vue')
    },
    {
      path: '/',
      name: 'createNew',
      meta: { requiresAuth: true },
      component: () => import('../views/CreateInvoiceView.vue')
    },
    {
      path: '/v2',
      name: 'createNewv2',
      meta: { requiresAuth: true },
      component: () => import('../views/NewCreateInvoiceView.vue')
    },
    {
      path: '/schedule',
      name: 'schedule',
      meta: { requiresAuth: true },
      component: () => import('../views/ScheduleView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactUsView.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

// router.beforeEach(async (to) => {

//   const { getUser } = useAuthUser()
//   const user = await getUser()

//   if (user == null && to.meta.requiresAuth) {
//     return { name: 'login' }
//   }

//   if (user && !to.meta.requiresAuth) {
//     return  { name: 'dashboard' } 
//   }

// })

export default router
