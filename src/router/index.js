import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/GetStarted/Overview.vue'
import GetStarted_Overview from '/src/views/GetStarted/Overview.vue'
import AccessibilityOverview from '/src/views/Foundations/Accessibility/Overview.vue'
import AccessibilityChecklist from '/src/views/Foundations/Accessibility/Checklist.vue'
// import AccessibilityDesigning from '/src/views/Foundations/Accessibility/Designing.vue'
import AccessibilityDesigningColorTypography from '/src/views/Foundations/Accessibility/Designing/Color-Typography.vue'
import AccessibilityDesigningLayoutNavigation from '/src/views/Foundations/Accessibility/Designing/Layout-Navigation.vue'
import AccessibilityDesigningLinksButtons from '/src/views/Foundations/Accessibility/Designing/Links-Buttons.vue'
import AccessibilityFormsControlsDycontents from '/src/views/Foundations/Accessibility/Designing/Forms-Controls-DynamicContent.vue'
import DesignTokensOverview from '/src/views/Foundations/DesignTokens/Design-Tokens.vue'
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
            path: '/Foundations/Accessibility/Designing/Color-Typograpy',
            name: 'AccessibilityDesigningColorTypography',
            component: AccessibilityDesigningColorTypography,
        },
        {
            path: '/Foundations/Accessibility/Designing/Layout-Navigation',
            name: 'AccessibilityDesigningLayoutNavigation',
            component: AccessibilityDesigningLayoutNavigation,
        },
        {
            path: '/Foundations/Accessibility/Designing/Links-Buttons',
            name: 'AccessibilityDesigningLinksButtons',
            component: AccessibilityDesigningLinksButtons,
        },
        {
            path: '/Foundations/Accessibility/Designing/Forms-Controls-DynamicContent',
            name: 'AccessibilityFormsControlsDycontents',
            component: AccessibilityFormsControlsDycontents,
        },
        {
            path: '/Foundations/Designtokens/Design-tokens',
            name: 'DesignTokensOverview',
            component: DesignTokensOverview,
        },
    ],
})

export default router
