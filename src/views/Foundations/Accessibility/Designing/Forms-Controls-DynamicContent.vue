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
                    <RouterLink class="tabbox-item" :to="{ name: 'AccessibilityDesigningLinksButtons'}">Links & Buttons</RouterLink>
                    <RouterLink class="tabbox-item active" :to="{ name: 'AccessibilityFormsControlsDycontents'}">Forms, Controls, Dynamic Content</RouterLink>
                </div>
            </div>
        </div>
        <div class="article flex mt-6 lg:mt-16 px-6 lg:px-20 box-border gap-10">
            <div class="mainbox w-full">
                <div class="article--main pb-14">
                    <div class="article-section" id="forms-controls-dynamic-content">
                        <copyTitle>
                            <template #sectionTitle>Forms, Controls, Dynamic Content</template>
                        </copyTitle>
                    </div>
                    <div class="article-section mt-8" id="accessibility-design-forms-controls">
                        <h3>Forms & Controls</h3>
                        <div class=" border-l-4 border-purple-200 pl-4 lg:pl-8">
                            <div class="sub-section">
                                <h4>
                                    Make sure that form input errors are displayed in list above the form after submission
                                </h4>
                                <p class="text-sm">
                                    This provides a way for assistive technology users to quickly have a high-level understanding of what issues are present in the form. This is especially important for larger forms with many inputs. Make sure that each reported error also has a link to the corresponding field with invalid input.
                                </p>
                                <div class="imgbox w-full mt-6">
                                    <img src="../dataimg/forms-controls-dycontent-1.jpg" alt="">
                                </div>
                            </div>
                            <div class="divider w-full h-[1px] bg-neutral-300 mt-14 mb-14"></div>
                            <div class="sub-section">
                                <h4>Make sure that error, warning, and success states are not visually communicated by just color</h4>
                                <p class="text-sm">
                                    People who are color blind, who have other low vision conditions, or different cultural understandings for color may not see the state change, or understand what kind of feedback the state represents if color is the only indicator.
                                </p>
                                <div class="imgbox w-full mt-6">
                                    <img src="../dataimg/forms-controls-dycontent-2.jpg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="text-sm"><br><br></p>
                    <div class="article-section mt-8" id="accessibility-design-dynamic-content">
                        <h3>Dynamic Content</h3>
                        <div class=" border-l-4 border-purple-200 pl-4 lg:pl-8">
                            <div class="sub-section">
                                <h4>
                                    Ensure animations are subtle and do not flash too much
                                </h4>
                                <p class="text-sm">
                                    Certain kinds of strobing or flashing animations will trigger seizures. Others may be distracting and disruptive, especially for certain kinds of cognitive disability such as ADHD.
                                </p>
                                <div class="imgbox w-full mt-6">
                                    <img src="../dataimg/forms-controls-dycontent-3.jpg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContentElm>
                <ul>
                    <li class="mb-4">
                        <router-link class="content-nav hidden" :class="{ current: activeIndex === 0 }" @click="contentActive(0)" :to="{hash: '#forms-controls-dynamic-content' }">Forms, Controls, Dynamic Content</router-link>
                    </li>
                    <li class="mb-4">
                        <router-link class="content-nav" :class="{ current: activeIndex === 1 }" @click="contentActive(1)" :to="{hash: '#accessibility-design-forms-controls' }">Forms & Controls</router-link>
                    </li>
                    <li class="mb-4">
                        <router-link class="content-nav" :class="{ current: activeIndex === 2 }" @click="contentActive(2)" :to="{hash: '#accessibility-design-dynamic-content' }">Dynamic Content</router-link>
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