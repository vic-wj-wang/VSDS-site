import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/GetStarted/Overview.vue'
import GetStarted_Overview from '/src/views/GetStarted/Overview.vue'
import AccessibilityOverview from '/src/views/Foundations/Accessibility/Overview.vue'
import AccessibilityChecklist from '/src/views/Foundations/Accessibility/Checklist.vue'
import AccessibilityDesigning from '/src/views/Foundations/Accessibility/Designing.vue'
// component: () => import('../views/GetStarted/Overview.vue'),

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        el: to.hash,
                        behavior: 'smooth',
                    });
                }, 300);
            });
        }

        return { top: 0, behavior: 'smooth' };
    },
    routes: [
        {
            path: '/',
            name: 'home',
            component: GetStarted_Overview,
        },
        {
            path: '/GetStarted/Overview',
            name: 'GetStart-Overview',
            component: GetStarted_Overview,
        },
        {
            path: '/Foundations/Accessibility/Overview',
            name: 'Fundation',
            component: AccessibilityOverview,
        },
        {
            path: '/Foundations/Accessibility/Overview',
            name: 'AccessibilityOverview',
            component: AccessibilityOverview,
        },
        {
            path: '/Foundations/Accessibility/Checklist',
            name: 'AccessibilityChecklist',
            component: AccessibilityChecklist,
        },
        {
            path: '/Foundations/Accessibility/Designing',
            name: 'AccessibilityDesigning',
            component: AccessibilityDesigning,
        },
    ],
})

export default router
