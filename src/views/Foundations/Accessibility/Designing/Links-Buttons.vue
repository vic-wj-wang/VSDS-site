<template>
    <main class="grow overflow-x-auto">
        <Herobanner>
            <template #pageTitle>Designing</template>
            <template #pageBrief>In software or web design it involves incorporating design principles and techniques that ensure equal access, usability, and inclusion for all users, regardless of their abilities.</template>
        </Herobanner>
        <div class="overflow-x-auto pb-2">
            <div class="tabbox bg-neutral-100 rounded-full mt-8 lg:mt-16 mx-6 lg:mx-20 overflow-x-auto shadow-md">
                <div class="tabbox-wrapper inline-flex flex-nowrap">
                    <RouterLink class="tabbox-item" :to="{ name: 'AccessibilityDesigningColorTypography'}">Color & Typography</RouterLink>
                    <RouterLink class="tabbox-item" :to="{ name: 'AccessibilityDesigningLayoutNavigation'}">Layout & Navigation</RouterLink>
                    <RouterLink class="tabbox-item active" :to="{ name: 'AccessibilityDesigningLinksButtons'}">Links & Buttons</RouterLink>
                    <RouterLink class="tabbox-item" :to="{ name: 'AccessibilityFormsControlsDycontents'}">Forms, Controls, Dynamic Content</RouterLink>
                </div>
            </div>
        </div>
        <div class="article flex mt-6 lg:mt-16 px-6 lg:px-20 box-border gap-10">
            <div class="mainbox w-full">
                <div class="article--main pb-14">
                    <div class="article-section" id="links-buttons">
                        <copyTitle>
                            <template #sectionTitle>Links & Buttons</template>
                        </copyTitle>
                    </div>
                    <div class="article-section mt-8" id="accessibility-design-linksbuttons">
                        <div class=" border-l-4 border-green-500 pl-4 lg:pl-8">
                            <div class="sub-section">
                                <h4>
                                    Make sure interactive elements navigated via keyboard input have a visible focus style, and ensure controls include :focus states.
                                </h4>
                                <p class="text-sm">
                                    Ensure that individuals navigating with a keyboard, switch, voice control, or screen reader can easily identify their current location on the page. Visible focus styles indicate which interactive element is in focus, helping users perform actions like activating buttons or navigating links.
                                </p>
                                <div class="imgbox w-full mt-6">
                                    <img src="../dataimg/links-buttons-1.jpg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContentElm>
                <ul>
                    <li class="mb-4">
                        <router-link class="content-nav hidden" :class="{ current: activeIndex === 0 }" @click="contentActive(0)" :to="{hash: '#links-buttons' }">Links & Buttons</router-link>
                    </li>
                    <li class="mb-4">
                        <router-link class="content-nav" :class="{ current: activeIndex === 1 }" @click="contentActive(1)" :to="{hash: '#accessibility-design-linksbuttons' }">Links & Buttons</router-link>
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
import { ref } from "vue";
const activeIndex = ref(null);
const contentActive = (index) => {
  activeIndex.value = index;
};

</script>