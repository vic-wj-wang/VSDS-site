<template>
    <main class="grow">
        <Herobanner :showHeroBrief="false" class="bg-herobannerbg-component">
            <template #pageTitle>Design Kit</template>
        </Herobanner>
        <div class="article flex mt-16 px-6 lg:px-20 box-border gap-10">
            <div class="mainbox w-full">
                <div class="article--main pb-14">
                    <div class="flex flex-wrap gap-4">
                        <a href="https://www.figma.com/design/T01QmXmsYxEPcZT53UHkco/Web-Design-Kit_VSDS?m=auto&node-id=4254-12653&fuid=985746651307671417" target="_blank" class="actbtn w-[calc((100%_-_16px)/2)] lg:w-[225px] flex flex-col relative px-5 py-4 border border-outline rounded-xl gap-3 shadow-md mt-8">
                            <div class="icon">
                                <img src="/src/assets/images/icons/figma.svg" alt="">
                            </div>
                            <div class="actbtn--inner">
                                <span class="text-sm text-on-surface">Web Design Kit</span>
                                <p class="text-xs text-on-surface-variant mt-2">Token guidance for web</p>
                            </div>
                            <img src="/src/assets/images/icons/external.svg" class="absolute right-3 top-3" alt="">
                        </a>
                        <a href="https://www.figma.com/design/FxgJcFBCogPumA1awqPQKx/Large-Screen-Design-Kit_VSDS?m=auto&t=xgCzRXVGtXl3wpsp-6&fuid=985746651307671417" target="_blank" class="actbtn w-[calc((100%_-_16px)/2)] lg:w-[225px] flex flex-col relative px-5 py-4 border border-outline rounded-xl gap-3 shadow-md mt-8">
                            <div class="icon">
                                <img src="/src/assets/images/icons/figma.svg" alt="">
                            </div>
                            <div class="actbtn--inner">
                                <span class="text-sm text-on-surface">Large Screen Design Kit</span>
                                <p class="text-xs text-on-surface-variant mt-2">Token guidance for IFP</p>
                            </div>
                            <img src="/src/assets/images/icons/external.svg" class="absolute right-3 top-3" alt="">
                        </a>
                    </div>
                    <div class="article-section mt-20" id="vsds-in-figma">
                        <copyTitle>
                            <template #sectionTitle>VSDS in Figma</template>
                        </copyTitle>
                        <section>
                            <p>
                                Figma is used to build and manage the design kit, helping to ensure that product designs consistently align with the ViewSonic style.
                                For design kit access, please contact us.
                            </p>
                        </section>
                    </div>
                    <div class="article-section mt-20" id="design-kit-organization">
                        <copyTitle>
                            <template #sectionTitle>Design kit organization</template>
                        </copyTitle>
                        <section>
                            <p>
                                To simplify a complex asset system and enhance usability, each design kit includes styles and components tailored to its specific platform. Shared values and gradients—such as colors, fonts, and shadows—are connected to each design kit through VSDS Foundation tokens.
                            </p>
                            <div class="imgbox w-full mt-6">
                                <img src="./dataimg/design-kit-1.jpg" alt="">
                            </div>
                        </section>
                        <section>
                            <h4>Segment theme for design kit use</h4>
                            <p>
                                ViewSonic categorizes its products into three segments: <span class="font-bold">Brand</span>, <span class="font-bold">Education</span>, and <span class="font-bold">Enterprise</span>, each associated with a distinct theme. Every product aligns with one segment, extending its styles from that segment’s primary color.
                            </p>
                            <div class="imgbox w-full mt-6">
                                <img src="./dataimg/design-kit-2.jpg" alt="">
                            </div>
                            <a href="/VSDS-site/#/Foundations/Themes" class="actbtn flex px-4 py-4 border border-outline rounded-xl gap-3 shadow-md mt-4">
                                <div class="icon">
                                    <img src="/src/assets/images/icons/palette.svg" alt="">
                                </div>
                                <div class="actbtn--inner">
                                    <span class="text-sm text-on-surface">Theme</span>
                                    <p class="text-xs text-on-surface-variant mt-2">Overview of themes for each segment</p>
                                </div>
                            </a>
                        </section>
                    </div>
                    <div class="article-section mt-20" id="enabling-the-libraries">
                        <copyTitle>
                            <template #sectionTitle>Enabling the libraries</template>
                        </copyTitle>
                        <section>
                            <p>
                                To enable the VSDS design kit in your Figma file, go to the Assets panel and select the Libraries dialog. Here, you can activate the VSDS design kit along with other shared resources, such as the Icon library.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <ContentElm>
                <ul>
                    <li class="mb-4">
                        <router-link class="content-nav" :to="{hash: '#vsds-in-figma' }">VSDS in Figma</router-link>
                    </li>
                    <li class="mb-4">
                        <router-link class="content-nav" :to="{hash: '#design-kit-organization' }">Design kit organization</router-link>
                    </li>
                    <li class="mb-4">
                        <router-link class="content-nav" :to="{hash: '#enabling-the-libraries' }">Enabling the libraries</router-link>
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