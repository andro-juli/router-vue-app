import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '../views/SignUp.vue'
import Login from '../views/Login.vue'
import Test from '../views/Test.vue'
import categories from '../views/categories.vue'
import FAQ from '../views/FAQ.vue'
import BecomeAnAgent from '../views/BecomeAnAgent.vue'
import Dashboard from '../views/Dashboard/index.vue'
import Users from '../views/Users.vue'
import SinglePost from '../views/SinglePost.vue'
import ErrorPage from '../views/404.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/signup',
    name: 'signUp',
    component: SignUp
  },

  {
    path: '/login',
    name: 'logIn',
    component: Login
  },

  {
    path: '/test',
    name: 'test',
    component: Test
  },

  {
    path:'/categories',
    name:'categories',
    component: categories
  },

  {
    path:'/FAQ',
    name:'FAQ',
    component: FAQ
  },

  {
    path:'/BecomeAnAgent',
    name:'BecomeAnAgent',
    component: BecomeAnAgent

  },

  {
    path:'/user/:id',
    name:'users',
    component: Users
  },

  {
    path:'/user/:id/:post_id',
    name: 'single-post',
    component: SinglePost
  },

  {
    path:'*',
    name: '404',
    component: ErrorPage
  },

  {
    path:'/dashboard',
    name:'dashboard',
    component: Dashboard,
    children: [
      {
        path:'user',
        name:'dashboard-user',
        component: () => import('../views/Dashboard/user.vue'),
        children: [
          {
            path:':id',
            name:'dashboard-single-user',
            component: () => import('../views/Dashboard/SingleUser.vue'),
          },
          
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
