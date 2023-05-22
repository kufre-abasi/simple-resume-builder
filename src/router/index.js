import {
  createRouter,
  createWebHashHistory,

} from 'vue-router'

// Create the router instance
const router = createRouter({
  history: createWebHashHistory(), // Use hash mode for history

  // Compatibility: Hash-based routing is supported in all modern browsers
  // The router is set to use hash mode for history using `createWebHashHistory()`.
  // This mode adds a hash "#" to the URL, allowing the application to handle routing on the client-side without the need for server configuration.
  routes: [
    // Define the routes

    // Home route
    {
      path: '/',
      name: 'home',
    
      component: () => import('@/views/HomeView.vue'),
      props: true,
    },
    {
      path: '/edit/resume',
      name: 'edit.resume',
    
      component: () => import('@/views/ResumeBuilder.vue'),
      props: true,
    },

    // 404 Error route
    {
      path: '/:pathMatch(.*)*',
      name: '404Error',
      component: () => import('@/views/404Error.vue'),
    },
  ],
})

export default router
