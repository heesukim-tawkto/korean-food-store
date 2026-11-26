import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/home.vue';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'home',
		component: HomeView
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('@/views/about.vue')
	},
	{
		path: '/device/:id',
		name: 'device-detail',
		component: () => import('@/views/device-detail.vue')
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export default router;