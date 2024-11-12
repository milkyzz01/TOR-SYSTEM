import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: () => import('../views/HomeLayout.vue'),
      children: [
        { path: '/login', component: () => import('../components/LogIn.vue') },
        { path: '/home', component: () => import('../components/Home.vue') },
        { path: '/contact', component: () => import('../components/Contacts.vue') },
        { path: '/program', component: () => import('../components/programs.vue') },
      ]
    },
    {
      path: '/Content',
      name: '',
      component: () => import('../views/ContentLayout.vue'),
      redirect: '/dashboard', // Redirect to the dashboard route
      children: [
        { path: '/dashboard', name: 'dashboard', component: () => import('../components/dashboard.vue') },
        { path: '/addStudent', component: () => import('../components/addStudent.vue') },
        { path: '/viewStudent/:id', name: 'viewStudent', component: () => import('../components/viewStudent.vue') },
       
  
      ]
    },
    
  ]
})

export default router
