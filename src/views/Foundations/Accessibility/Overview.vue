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
                <div class="article--main">
                    <div class="article-section mt-20" id="accessibility-design-principle">
                        <copyTitle>
                            <template #sectionTitle>Accessibility design principle</template>
                        </copyTitle>
                        <img src="./dataimg/accessibility-1.png" alt="">
                    </div>
                    <div class="article-section mt-20" id="common-accessibility-design-aspects">
                        <copyTitle>
                            <template #sectionTitle>Common accessibility design aspects</template>
                        </copyTitle>
                        <section>
                            <h3>Visual accessibility</h3>
                            <p>This focuses on making information and visual content perceivable by individuals with
                                visual impairments. It involves using alternative text for images, providing clear color
                                contrast, using readable fonts, and incorporating screen reader compatibility.</p>
                            <h3 class="mt-6">Auditory accessibility</h3>
                            <p>This addresses the needs of individuals with hearing impairments. It includes providing
                                captions or transcripts for audio and video content, using visual cues and alerts, and
                                utilizing assistive listening devices.</p>
                            <h3 class="mt-6">Cognitive accessibility</h3>
                            <p>This considers the needs of individuals with cognitive impairments or learning
                                disabilities. It involves presenting information in a clear and concise manner, using
                                simple language, providing logical navigation, and avoiding unnecessary distractions.
                            </p>
                            <h3 class="mt-6">User interface accessibility</h3>
                            <p>This focuses on designing user interfaces of digital products and websites to be easily
                                usable by individuals with disabilities. It includes features like keyboard
                                accessibility, proper labeling of form fields, logical tab order, and providing
                                sufficient time for interactions.</p>
                        </section>
                        <div class="note flex px-4 py-4 border border-outline rounded-xl gap-3 shadow-sm mt-8">
                            <div class="icon">
                                <img src="/src/assets/images/icons/accessibility.svg" alt="">
                            </div>
                            <div class="note--inner">
                                <span class="text-sm text-on-surface">Checklist</span>
                                <p class="text-xs text-on-surface-variant">Overview of all foundation token items</p>
                            </div>
                        </div>

                    </div>
                    <div class="article-section mt-20" id="visual-impairment-users">
                        <copyTitle>
                            <template #sectionTitle>Visual impairment users<br>Dyslexic, Learning/Cognitive users
                            </template>
                        </copyTitle>
                        <section>
                            <ul class="list-disc text-2xl font-bold ml-8">
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
                            <h3 class="mt-6">Color blindness, Color vision deficiency</h3>
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
                                <h3 class="mt-6">Color blindness, Color vision deficiency</h3>
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
                        <div class="note flex px-4 py-4 border border-outline rounded-xl gap-3 shadow-sm mt-8">
                            <div class="icon">
                                <img src="/src/assets/images/icons/accessibility.svg" alt="">
                            </div>
                            <div class="note--inner">
                                <span class="text-sm text-on-surface">Checklist</span>
                                <p class="text-xs text-on-surface-variant">Overview of all foundation token items</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div class="content hidden sticky lg:block w-[120px] min-h-[200px] shrink-0">
                <h5 class="text-xs text-on-surface-variant mb-8">On this page</h5>
                <ul>
                    <li class="mb-4">
                        <router-link class="block text-on-surface-variant text-xs"
                            :to="{hash: '#accessibility-design-principle' }">Accessibility design
                            principle</router-link>
                    </li>
                    <li class="mb-4">
                        <router-link class="block text-on-surface-variant text-xs"
                            :to="{hash: '#common-accessibility-design-aspects' }">Common accessibility design
                            aspects</router-link>
                    </li>
                    <li class="mb-4">
                        <router-link class="block text-on-surface-variant text-xs"
                            :to="{hash: '#visual-impairment-users' }">Visual impairment users Dyslexic,
                            Learning/Cognitive users</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </main>
</template>

<script setup>
import Herobanner from '/src/layouts/Herobanner/Herobanner.vue'
import SectionTitle from '/src/layouts/SectionTitle/SectionTitle.vue'
import copyTitle from '/src/components/copyTitle/copyTitle.vue'
import { useRouter } from 'vue-router';
const router = useRouter();


</script>