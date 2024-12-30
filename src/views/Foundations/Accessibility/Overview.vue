<template>
    <main class="grow">
        <Herobanner>
            <template #pageTitle>Accessibility</template>
            <template #pageBrief>In software or web design it involves incorporating design principles and techniques
                that ensure equal access, usability, and inclusion for all users, regardless of their
                abilities.</template>
        </Herobanner>
        <div class="article flex mt-16 px-6 lg:px-20 box-border gap-10">
            <div class="mainbox w-full">
                <SectionTitle :showTitle="false">
                    <template #sectionBrief>By implementing these accessible design principles, software and web
                        designers can create digital products that are more inclusive, usable, and accessible to a
                        diverse range of users, including those with disabilities.<br>Accessible design is not only
                        beneficial for individuals with disabilities but also for a broader range of users. It promotes
                        inclusivity, equal access to information and services, and a more user-friendly experience for
                        everyone. By considering diverse user needs from the beginning of the design process, accessible
                        design aims to create inclusive environments and products that can be enjoyed and utilized by
                        all individuals, regardless of their abilities or disabilities.</template>
                </SectionTitle>
                <div class="article--main pb-14">
                    <div class="article-section mt-20" id="accessibility-design-principle">
                        <copyTitle>
                            <template #sectionTitle>Accessibility design principle</template>
                        </copyTitle>
                        <img src="./dataimg/accessibility-1.jpg" alt="">
                    </div>
                    <div class="article-section mt-20" id="common-accessibility-design-aspects">
                        <copyTitle>
                            <template #sectionTitle>Common accessibility design aspects</template>
                        </copyTitle>
                        <section>
                            <h4>Visual accessibility</h4>
                            <p>This focuses on making information and visual content perceivable by individuals with
                                visual impairments. It involves using alternative text for images, providing clear color
                                contrast, using readable fonts, and incorporating screen reader compatibility.</p>
                            <h4>Auditory accessibility</h4>
                            <p>This addresses the needs of individuals with hearing impairments. It includes providing
                                captions or transcripts for audio and video content, using visual cues and alerts, and
                                utilizing assistive listening devices.</p>
                            <h4>Cognitive accessibility</h4>
                            <p>This considers the needs of individuals with cognitive impairments or learning
                                disabilities. It involves presenting information in a clear and concise manner, using
                                simple language, providing logical navigation, and avoiding unnecessary distractions.
                            </p>
                            <h4>User interface accessibility</h4>
                            <p>This focuses on designing user interfaces of digital products and websites to be easily
                                usable by individuals with disabilities. It includes features like keyboard
                                accessibility, proper labeling of form fields, logical tab order, and providing
                                sufficient time for interactions.</p>
                        </section>
                        <a href="/VSDS-site/#/Foundations/Accessibility/Checklist" class="actbtn flex px-4 py-4 border border-outline rounded-xl gap-3 shadow-md mt-8">
                            <div class="icon">
                                <img src="/src/assets/images/icons/accessibility.svg" alt="">
                            </div>
                            <div class="actbtn--inner">
                                <span class="text-sm text-on-surface">Checklist</span>
                                <p class="text-xs text-on-surface-variant mt-2">Overview of all foundation token items</p>
                            </div>
                        </a>

                    </div>
                    <div class="article-section mt-20" id="visual-impairment-users">
                        <copyTitle>
                            <template #sectionTitle>Visual impairment users<br>Dyslexic, Learning/Cognitive users
                            </template>
                        </copyTitle>
                        <section>
                            <ul class="list-disc text-2xl font-bold ml-2">
                                <li class="font-bold">Blindness</li>
                                <li class="font-bold">Central field loss </li>
                                <li class="font-bold">Clouded vision</li>
                                <li class="font-bold">Colour blindness</li>
                                <li class="font-bold">Contrast sensitivity</li>
                                <li class="font-bold">Poor acuity</li>
                                <li class="font-bold">Poor lighting</li>
                                <li class="font-bold">Tunnel vision</li>
                                <li class="font-bold">Reading disorder</li>
                            </ul>
                            <p>There are many different visual challenges people face ranging from full blindness to tunnel vision or the inability to see colour or certain colours, and over time as we age our vision deteriorates.Statistically, 20% of the population of the USA has a language-based learning disability. <span class="font-bold">It’s 1 in 5 persons</span>.</p>
                            <h4>Color blindness, Color vision deficiency</h4>
                            <ul class="mt-4">
                                <li>According to Colour Blind Awareness 4.5% of the population are color-blind. If your audience is mostly male this increases to 8% （<span class="font-bold">1 in 12 male</span>）</li>
                                <li>According to data from the Ministry of Health and Welfare, there are nearly one million people in Taiwan with color blindness (2008 data).</li>
                                <li>According to the data in 2007, there are about <span class="font-bold">350 million people</span> in the world who are colorblind and color vision deficiency (<span class="font-bold">Amount all population of the USA</span>)</li>
                                <li>caucasians 8% > Asian 5% > Africans 4%, mostly are male</li>
                            </ul>
                            <p>Understand what problems they are facing and design for a better environments and experience.</p>
                            <p>These problems can also be exacerbated by low-quality monitors, bad lighting, screen glare, tiny mobile screens and sitting far away from a huge screen</p>
                        </section>
                        <section class="flex gap-8 flex-wrap items-start lg:flex-nowrap">
                            <div class="w-full lg:w-1/2">
                                <h4 class="mt-6">Color blindness, Color vision deficiency</h4>
                                <span class="block mt-4">What they see</span>
                                <ul class="list-disc ml-4">
                                    <li>Swirling or blurring text</li>
                                    <li>Double text</li>
                                    <li>Size difference </li>
                                    <li>Crowed in middle</li>
                                    <li>Wibbly wobbly</li>
                                    <li>Fading/Missing</li>
                                </ul>
                            </div>
                            <div class="w-full lg:w-1/2 mt-0 lg:mt-6">
                                <img src="./dataimg/accessibility-2.jpg" alt="">
                            </div>
                        </section>
                        <a href="/VSDS-site/#/Foundations/Accessibility/Designing/Color-Typograpy" class="actbtn flex px-4 py-4 border border-outline rounded-xl gap-3 shadow-md mt-8">
                            <div class="icon">
                                <img src="/src/assets/images/icons/accessibility.svg" alt="">
                            </div>
                            <div class="actbtn--inner">
                                <span class="text-sm text-on-surface">How to design for accessibility</span>
                                <p class="text-xs text-on-surface-variant mt-2">Focuses on creating designs that meet accessibility needs</p>
                            </div>
                        </a>
                    </div>
                    <div class="article-section mt-20" id="accessibility-testing">
                        <copyTitle>
                            <template #sectionTitle>Accessibility testing
                            </template>
                        </copyTitle>
                        <section>
                            <p>To ensure compliance with accessibility standards, products should undergo accessibility testing using tools like:</p>
                        </section>
                        <div class="actbox mt-6 flex flex-wrap gap-6">
                            <a href="https://www.figma.com/community/plugin/732603254453395948/stark-contrast-accessibility-checker?fuid=985746651307671417" target="_blank">
                                <div class="actbtn px-4 py-3 border w-[255px] h-full box-border border-neutral-300 rounded-xl shadow-md cursor-pointer hover:bg-surface-200 duration-300">
                                    <div class="header flex justify-between items-start mb-2">
                                        <div class="flex items-start gap-1">
                                            <img src="/src/assets/images/icons/figma.svg" alt="">
                                            <div class="tag text-[10px] text-on-surface px-2 rounded-lg border border-surface-300">Plug-in</div>
                                        </div>
                                        <img src="/src/assets/images/icons/external.svg" alt="">
                                    </div>
                                    <div class="actbtn--inner">
                                        <span class="block text-sm text-on-surface">Stark - Contrast & Accessibility Checker</span>
                                        <span class="block text-xs text-on-surface-variant mt-2">Accessibility tools</span>
                                    </div>
                                </div>
                            </a>
                            <a href="https://www.figma.com/design/isKY3C4FK0mWm071TzIJhw/Icon-Library_VSDS?node-id=3923-13613&t=ANnFbBoQvPZCW1Ke-1&fuid=985746651307671417" target="_blank">
                                <div class="actbtn px-4 py-3 border w-[255px] h-full box-border border-neutral-300 rounded-xl shadow-md cursor-pointer hover:bg-surface-200 duration-300">
                                    <div class="header flex justify-between items-start mb-2">
                                        <div class="flex items-start gap-1">
                                            <img src="/src/assets/images/icons/w3c.svg" alt="">
                                            <div class="tag text-[10px] text-on-surface px-2 rounded-lg border border-surface-300">Plug-in</div>
                                        </div>
                                        <img src="/src/assets/images/icons/external.svg" alt="">
                                    </div>
                                    <div class="actbtn--inner">
                                        <span class="block text-sm text-on-surface">Techniques for WCAG 2.1</span>
                                        <span class="block text-xs text-on-surface-variant mt-2">Web Accessibility Initiative</span>
                                    </div>
                                </div>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>
            <ContentElm>
                <ul>
                    <li class="mb-4">
                        <router-link class="content-nav" :to="{hash: '#accessibility-design-principle' }">Accessibility design
                            principle</router-link>
                    </li>
                    <li class="mb-4">
                        <router-link class="content-nav" :to="{hash: '#common-accessibility-design-aspects' }">Common accessibility design
                            aspects</router-link>
                    </li>
                    <li class="mb-4">
                        <router-link class="content-nav" :to="{hash: '#visual-impairment-users' }">Visual impairment users Dyslexic,
                            Learning/Cognitive users</router-link>
                    </li>
                    <li class="mb-4">
                        <router-link class="content-nav" :to="{hash: '#accessibility-testing' }">Accessibility testing</router-link>
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