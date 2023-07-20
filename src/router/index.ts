import { createRouter, createWebHistory } from 'vue-router'
import PostViewVue from '@/views/PostView.vue'
import AddPost from '@/views/AddPostView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'posts', component: PostViewVue },
    { path: '/add-post', name: 'AddPost', component: AddPost }
  ]
})

export default router
