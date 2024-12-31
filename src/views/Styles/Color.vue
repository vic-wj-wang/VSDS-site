<template>
    <main class="grow">
        <Herobanner  :showHeroBrief="false" class="bg-herobannerbg-style">
            <template #pageTitle>Color</template>
        </Herobanner>
        <div class="article flex mt-16 px-6 lg:px-20 box-border gap-10">
            <div class="mainbox w-full">
                <SectionTitle>
                    <template #sectionTitle>VSDS palettes</template>
                    <template #sectionBrief>VSDS defines two color palettes: foundation and neutral. Each is designed with specific functions and contexts. 
                        Learn more about how to apply each palette effectively across different products.
                    </template>
                </SectionTitle>
                <div class="article--main pb-14">
                    <div class="article-section mt-20 lg:mt-[120px]" id="foundation-colors">
                        <copyTitle>
                            <template #sectionTitle>Foundation colors</template>
                        </copyTitle>
                        <p>
                            To maintain brand consistency and diverse values across ViewSonic products, the Foundation colors offer a palette of 9 colors that can be flexibly applied to various contexts and components.
                        </p>
                        <div class="w-full mt-6 lg:mt-6">
                            <img src="./dataimg/color-1.jpg" alt="">
                        </div>
                    </div>
                    <div class="article-section mt-20" id="neutral-colors">
                        <copyTitle>
                            <template #sectionTitle>Neutral colors</template>
                        </copyTitle>
                        <p>
                            The neutral palette includes 21 shades of black, white, and grays, typically used for surfaces and text. Neutral tones also help establish visual hierarchy; for example, lighter neutral colors can be applied to surfaces to emphasize areas of primary focus.
                        </p>
                        <div class="w-full mt-6 lg:mt-6">
                            <img src="./dataimg/color-2.jpg" alt="">
                        </div>
                        <p class="mt-10">
                            Full color palette:
                        </p>
                        <a href="/VSDS-site/#/Foundations/Designtokens/Foundation-tokens" class="actbtn flex px-4 py-4 border border-outline rounded-xl gap-3 shadow-md mt-4">
                            <div class="icon">
                                <img src="/src/assets/images/icons/head.svg" alt="">
                            </div>
                            <div class="actbtn--inner">
                                <span class="text-sm text-on-surface">Foundation tokens</span>
                                <p class="text-xs text-on-surface-variant mt-2">Overview of all foundation token items</p>
                            </div>
                        </a>
                    </div>
                    <div class="article-section mt-20" id="segment-colors">
                        <copyTitle>
                            <template #sectionTitle>Segment colors</template>
                        </copyTitle>
                        <p>
                            There are three product segments under ViewSonic: <span class="font-bold">Brand</span>, <span class="font-bold">Education</span>, and <span class="font-bold">Enterprise</span>. each segment has its own primary color.
                            <br>The primary color for each Segment is fixed and CANNOT be changed.    
                        </p>
                        <div class="w-full mt-6 lg:mt-6">
                            <img src="./dataimg/color-3.jpg" alt="">
                        </div>
                        <p class="mt-10">
                            These segments correspond to three distinct themes, with each product belonging to its own Segment and styles extended based on the Segment’s primary color.
                        </p>
                        <a href="/VSDS-site/#/Foundations/Themes" class="actbtn flex px-4 py-4 border border-outline rounded-xl gap-3 shadow-md mt-4">
                            <div class="icon">
                                <img src="/src/assets/images/icons/palette.svg" alt="">
                            </div>
                            <div class="actbtn--inner">
                                <span class="text-sm text-on-surface">Theme</span>
                                <p class="text-xs text-on-surface-variant mt-2">Overview of themes for each segment</p>
                            </div>
                        </a>
                    </div>
                    <div class="article-section mt-20" id="semantic-colors">
                        <copyTitle>
                            <template #sectionTitle>Semantic colors</template>
                        </copyTitle>
                        <p>
                            Semantic colors provide instant, intuitive information—like red for danger, yellow for caution, and green for positive feedback—helping to reduce cognitive load by reinforcing real-world associations.    
                        </p>
                        <div class="w-full mt-6 lg:mt-6">
                            <img src="./dataimg/color-4.jpg" alt="">
                        </div>
                        <p class="mt-10">
                            Alias color naming architecture:
                        </p>
                        <a href="/VSDS-site/#/Foundations/Designtokens/Alias-tokens" class="actbtn flex px-4 py-4 border border-outline rounded-xl gap-3 shadow-md mt-4">
                            <div class="icon">
                                <img src="/src/assets/images/icons/head.svg" alt="">
                            </div>
                            <div class="actbtn--inner">
                                <span class="text-sm text-on-surface">Alias colors</span>
                                <p class="text-xs text-on-surface-variant mt-2">Alias colors naming list</p>
                            </div>
                        </a>
                    </div>
                    <div class="article-section mt-20" id="accessibility">
                        <copyTitle>
                            <template #sectionTitle>Accessibility</template>
                        </copyTitle>
                        <p>
                            When using VSDS colors, prioritize accessibility.
                        </p>
                        <ul class="list-decimal mt-6 mb-10">
                            <li>Ensure contrast that can be perceived by individuals with low vision or color blindness.</li>
                            <li>Avoid Using Color to Convey Information.</li>
                            <li>Avoid certain color combinations.</li>
                        </ul>
                        <p class="mt-10">
                            See the accessibility guidelines for more:
                        </p>
                        <a href="/#/Foundations/Accessibility/Overview" class="actbtn flex px-4 py-4 border border-outline rounded-xl gap-3 shadow-md mt-4">
                            <div class="icon">
                                <img src="/src/assets/images/icons/accessibility.svg" alt="">
                            </div>
                            <div class="actbtn--inner">
                                <span class="text-sm text-on-surface">Accessibility</span>
                                <p class="text-xs text-on-surface-variant mt-2">See VSDS’s accessibility guidelines for tips</p>
                            </div>
                        </a>
                    </div>
                    <div class="article-section mt-20" id="color-tokens">
                        <copyTitle>
                            <template #sectionTitle>Color tokens</template>
                        </copyTitle>
                        <p>
                            Color tokens enable unified and recognizable color usage. Foundation tokens store only numeric values (e.g., blue-50=#F6F9FF), while Alias tokens offer semantic context, making it easy to select the correct color without needing to track down hex codes.
                        </p>
                        <p class="mt-10">
                            See the token guidelines for more:
                        </p>
                        <a href="/VSDS-site/#/Foundations/Designtokens/Design-tokens" class="actbtn flex px-4 py-4 border border-outline rounded-xl gap-3 shadow-md mt-4">
                            <div class="icon">
                                <img src="/src/assets/images/icons/head.svg" alt="">
                            </div>
                            <div class="actbtn--inner">
                                <span class="text-sm text-on-surface">Design tokens</span>
                                <p class="text-xs text-on-surface-variant mt-2">Learn more about VSDS design token</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <ContentElm>
                <ul>
                    <li class="mb-4">
                        <router-link class="content-nav" :class="{ current: activeIndex === 0 }" @click="contentActive(0)" :to="{hash: '#foundation-colors' }">Foundation colors</router-link>
                    </li>
                    <li class="mb-4">
                        <router-link class="content-nav" :class="{ current: activeIndex === 1 }" @click="contentActive(1)" :to="{hash: '#neutral-colors' }">Neutral colors</router-link>
                    </li>
                    <li class="mb-4">
                        <router-link class="content-nav" :class="{ current: activeIndex === 2 }" @click="contentActive(2)" :to="{hash: '#segment-colors' }">Segment colors</router-link>
                    </li>
                    <li class="mb-4">
                        <router-link class="content-nav" :class="{ current: activeIndex === 3 }" @click="contentActive(3)" :to="{hash: '#semantic-colors' }">Semantic colors</router-link>
                    </li>
                    <li class="mb-4">
                        <router-link class="content-nav" :class="{ current: activeIndex === 4 }" @click="contentActive(4)" :to="{hash: '#accessibility' }">Accessibility</router-link>
                    </li>
                    <li class="mb-4">
                        <router-link class="content-nav" :class="{ current: activeIndex === 5 }" @click="contentActive(5)" :to="{hash: '#color-tokens' }">Color tokens</router-link>
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