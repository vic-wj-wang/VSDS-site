import { createRouter, createWebHashHistory } from 'vue-router'
import GetStartedOverview from '/src/views/GetStarted/Overview.vue'
import AccessibilityOverview from '/src/views/Foundations/Accessibility/Overview.vue'
import AccessibilityChecklist from '/src/views/Foundations/Accessibility/Checklist.vue'
import AccessibilityDesigningColorTypography from '/src/views/Foundations/Accessibility/Designing/Color-Typography.vue'
import AccessibilityDesigningLayoutNavigation from '/src/views/Foundations/Accessibility/Designing/Layout-Navigation.vue'
import AccessibilityDesigningLinksButtons from '/src/views/Foundations/Accessibility/Designing/Links-Buttons.vue'
import AccessibilityFormsControlsDycontents from '/src/views/Foundations/Accessibility/Designing/Forms-Controls-DynamicContent.vue'
import DesignTokensOverview from '/src/views/Foundations/DesignTokens/Design-Tokens.vue'
import DesignTokensFoundationTokens from '/src/views/Foundations/DesignTokens/Foundation-Tokens.vue'
import DesignTokensAliasTokens from '/src/views/Foundations/DesignTokens/Alias-Tokens.vue'
import Themes from '/src/views/Foundations/Themes/Themes.vue'
import Interaction from '/src/views/Foundations/Interaction/Interaction.vue'
import StylesOverview from '/src/views/Styles/Overview.vue'
import StylesColor from '/src/views/Styles/Color.vue'
import StylesElevation from '/src/views/Styles/Elevation.vue'
import StylesIconography from '/src/views/Styles/Iconography.vue'
import StylesLayout from '/src/views/Styles/Layout.vue'
import StylesTypography from '/src/views/Styles/Typography.vue'
import ComponentsDesignKit from '/src/views/Components/DesignKit.vue'
import ComponentsModularComponents from '/src/views/Components/ModularComponents.vue'
// component: () => import('../views/GetStarted/Overview.vue'),

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return { left: 0, top: savedPosition.top + 56 };
        }
        if (to.hash) {
            return {
                el: to.hash, // 滾動到具有此 id 的元素
                behavior: 'smooth', // 平滑滾動
                top: 56 // 滾動到元素的頂部
            };
        }
        return { top: 0, behavior: 'smooth' };
    },
    routes: [
        {
            path: '/',
            name: 'home',
            component: GetStartedOverview,
        },
        {
            path: '/GetStarted/Overview',
            name: 'GetStart-Overview',
            component: GetStartedOverview,
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
        {
            path: '/Foundations/Designtokens/Foundation-tokens',
            name: 'DesignTokensFoundationTokens',
            component: DesignTokensFoundationTokens,
        },
        {
            path: '/Foundations/Designtokens/Alias-tokens',
            name: 'DesignTokensAliasTokens',
            component: DesignTokensAliasTokens,
        },     
        {
            path: '/Foundations/Themes',
            name: 'Themes',
            component: Themes,
        },  
        {
            path: '/Foundations/Interaction',
            name: 'Interaction',
            component: Interaction,
        },
        {
            path: '/Styles/Overview',
            name: 'StylesOverview',
            component: StylesOverview,
        },
        {
            path: '/Styles/Color',
            name: 'StylesColor',
            component: StylesColor,
        },
        {
            path: '/Styles/Elevation',
            name: 'StylesElevation',
            component: StylesElevation,
        },
        {
            path: '/Styles/Iconography',
            name: 'StylesIconography',
            component: StylesIconography,
        },
        {
            path: '/Styles/Layout',
            name: 'StylesLayout',
            component: StylesLayout,
        }, 
        {
            path: '/Styles/Typography',
            name: 'StylesTypography',
            component: StylesTypography,
        },  
        {
            path: '/Components/Design-Kit',
            name: 'ComponentsDesignKit',
            component: ComponentsDesignKit,
        }, 
        {
            path: '/Components/Modular-Components',
            name: 'ComponentsModularComponents',
            component: ComponentsModularComponents,
        },                   
    ],
})

export default router
