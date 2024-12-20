import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/GetStarted/Overview.vue'
import GetStarted_Overview from '../views/GetStarted/Overview.vue'
import AccessibilityOverview from '/src/views/Foundations/Accessibility/Overview/Overview.vue'
import AccessibilityChecklist from '/src/views/Foundations/Accessibility/Checklist/Checklist.vue'
import AccessibilityDesigning from '/src/views/Foundations/Accessibility/Designing/Designing.vue'
// component: () => import('../views/GetStarted/Overview.vue'),

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: GetStarted_Overview,
            children: [
                { path: '/GetStarted/Overview',name: 'GetStart-Overview', component: GetStarted_Overview },
            ],
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
