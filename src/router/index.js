import { createRouter, createWebHistory } from 'vue-router'
import useAuthUser from '@/composables/UseAuthUser'

const { isLoggedIn } = useAuthUser()

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
      path: '/complete-registration',
      name: 'complete-registration',
      component: () => import('../views/CompleteRegistrationView.vue')
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
      name: 'invoices-root',
      meta: { requiresAuth: true },
      component: () => import('../views/InvoicesView.vue')
    },
    {
      path: '/new-invoice',
      name: 'createNewInvoice',
      meta: { requiresAuth: true },
      component: () => import('../views/CreateInvoiceView.vue')
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

// add route gaurds here to check if user is logged in
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.meta.requiresAuth
  console.log('requiresAuth', requiresAuth, 'isLoggedIn', isLoggedIn(), 'to', to)
  if (requiresAuth && !isLoggedIn()) {
    next('/login')
  } else {
    next()
  } ``
})

export default router
