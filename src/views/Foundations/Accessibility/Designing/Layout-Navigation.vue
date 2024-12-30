<template>
    <main class="grow">
        <Herobanner>
            <template #pageTitle>Designing</template>
            <template #pageBrief>In software or web design it involves incorporating design principles and techniques that ensure equal access, usability, and inclusion for all users, regardless of their abilities.</template>
        </Herobanner>
        <div class="tabbox bg-neutral-100 rounded-full mt-16 mx-6 lg:mx-20 overflow-x-auto shadow-md">
            <div class="tabbox-wrapper inline-flex flex-nowrap">
                <RouterLink class="tabbox-item" :to="{ name: 'AccessibilityDesigningColorTypography'}">Color & Typography</RouterLink>
                <RouterLink class="tabbox-item active" :to="{ name: 'AccessibilityDesigningLayoutNavigation'}">Layout & Navigation</RouterLink>
                <RouterLink class="tabbox-item" :to="{ name: 'AccessibilityDesigningLinksButtons'}">Links & Buttons</RouterLink>
                <RouterLink class="tabbox-item" :to="{ name: 'AccessibilityFormsControlsDycontents'}">Forms, Controls, Dynamic Content</RouterLink>
            </div>
        </div>
        <div class="article flex mt-16 px-6 lg:px-20 box-border gap-10">
            <div class="mainbox w-full">
                <div class="article--main pb-14">
                    <div class="article-section" id="layout-navigation">
                        <copyTitle>
                            <template #sectionTitle>Layout & Navigation</template>
                        </copyTitle>
                    </div>
                    <div class="article-section mt-8" id="accessibility-design-layout">
                        <h3>Layout</h3>
                        <div class=" border-l-4 border-red-200 pl-4 lg:pl-8">
                            <div class="sub-section">
                                <h4>
                                    Use a simple, straightforward, and consistent layout, and ensure that keyboard focus order aligns with the visual layout
                                </h4>
                                <p class="text-sm">
                                    Complicated layouts can be difficult to understand and use. Ensure that individuals navigating with a keyboard or screen reader can move through the page in a predictable and logical way.
                                </p>
                                <div class="imgbox w-full mt-6">
                                    <img src="../dataimg/layout-navigation-1.jpg" alt="">
                                </div>
                                <p class="text-sm"><br></p>
                                <p class="text-sm">
                                    For complex interfaces or components, clearly define the focus order.
                                </p>
                                <div class="imgbox w-full mt-6">
                                    <img src="../dataimg/layout-navigation-2.jpg" alt="">
                                </div>
                            </div>
                            <div class="divider w-full h-[1px] bg-neutral-300 mt-14 mb-14"></div>
                            <div class="sub-section">
                                <h4>Ensure that button and link icons can be activated with ease.</h4>
                                <p class="text-sm">
                                    It's good to make sure things like hamburger menus, social icons, gallery viewers, and other touch controls are usable by a wide range of hand and stylus sizes.<br>
                                    The design kit offers Button components in four sizes, each aligning with different WCAG levels. Extra Small (XS) Buttons should be used with caution.
                                </p>
                                <div class="imgbox w-full mt-6">
                                    <img src="../dataimg/layout-navigation-3.jpg" alt="">
                                </div>
                            </div>
                            <div class="divider w-full h-[1px] bg-neutral-300 mt-14 mb-14"></div>
                            <div class="sub-section">
                                <h4>Ensure sufficient space between interactive items in order to provide a scroll area.</h4>
                                <p class="text-sm">
                                    Some people who experience motor control issues such as hand tremors may have a very difficult time scrolling past interactive items which feature zero spacing.
                                </p>
                                <div class="imgbox w-full mt-6">
                                    <img src="../dataimg/layout-navigation-4.jpg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="text-sm"><br><br></p>
                    <div class="article-section mt-8" id="accessibility-design-navigation">
                        <h3>Navigation</h3>
                        <div class=" border-l-4 border-red-200 pl-4 lg:pl-8">
                            <div class="sub-section">
                                <h4>Use a simple, straightforward, and consistent layout.</h4>
                                <p class="text-sm">
                                    A complicated layout can be confusing to understand and use.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContentElm>
                <ul>
                    <li class="mb-4">
                        <router-link class="content-nav" :to="{hash: '#accessibility-design-layout' }">Layout</router-link>
                    </li>
                    <li class="mb-4">
                        <router-link class="content-nav" :to="{hash: '#accessibility-design-navigation' }">Navigation</router-link>
                    </li>
                </ul>
            </ContentElm>
        </div>
    </main>
</template>

<script setup>
import Herobanner from '/src/layouts/Herobanner/Herobanner.vue'
import SectionTitle from '/src/layouts/SectionTitle/SectionTitle.vue'
import copyTitle from '/src/components/copyTitle/copyTitle.vue'
import ContentElm from '/src/layouts/ContentElm/ContentElm.vue'
import { useRouter } from 'vue-router';
const router = useRouter();


</script>