<template>
    <main class="grow">
        <Herobanner :showHeroBrief="false">
            <template #pageTitle>Themes</template>
        </Herobanner>
        <div class="article w-[100vw] md:w-full overflow-x-auto flex mt-16 px-6 lg:px-20 box-border gap-10">
            <div class="mainbox w-full">
                <div class="article--main pb-14">
                    <div class="article-section" id="segment-theme">
                        <copyTitle>
                            <template #sectionTitle>Segment theme</template>
                        </copyTitle>
                        <section>
                            <p>
                                VSDS categorizes its products into three segments: <span class="font-bold">Brand</span>, <span class="font-bold">Education</span>, and <span class="font-bold">Enterprise</span>, 
                                each associated with a distinct theme. Each product is assigned to a 
                                specific segment with a unique, unchangeable primary color. 
                                Product styles are adapted and extended from this primary color, ensuring visual consistency within each segment’s theme.
                            </p>
                            <div class="imgbox w-full mt-6">
                                <img src="./dataimg/themes-1.jpg" alt="">
                            </div>
                        </section>
                    </div>
                    <div class="article-section mt-20">
                        <h4 class="name mb-3 mt-0">Product list</h4>
                        <div class="foundation-section w-full flex flex-wrap gap-12 mt-12">
                            <div class="wrapper w-full">
                                <div class="custom-table">
                                    <div class="tablebox">
                                        <div class="thead">
                                            <div class="tr">
                                                <div class="th w-2/5 pl-4">Segment</div>
                                                <div class="th w-3/5 ">Product</div>
                                            </div>
                                        </div>
                                        <div class="tbody">
                                            <div class="tr !py-4">
                                                <div class="td w-2/5 pl-4">Brand</div>
                                                <div class="td w-3/5 ">
                                                    <ul>
                                                        <li class="font-bold">ViewSonic Account <span class="font-normal">(ViewSonic Entity Management)</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="tr !py-4">
                                                <div class="td w-2/5 pl-4">Education</div>
                                                <div class="td w-3/5 ">
                                                    <ul>
                                                        <li class="font-bold">myViewBoard</li>
                                                        <li class="font-bold">myViewBoard.com</li>
                                                        <li class="font-bold">Content platform</li>
                                                        <li class="font-bold">ViewBoard OS (Education)</li>
                                                        <li class="font-bold">Manager</li>
                                                        <li class="font-bold">Insights</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="tr !py-4">
                                                <div class="td w-2/5 pl-4">Enterprise</div>
                                                <div class="td w-3/5 ">
                                                    <ul>
                                                        <li class="font-bold">TeamOne</li>
                                                        <li class="font-bold">AirSync</li>
                                                        <li class="font-bold">ViewBoard OS (Corporate)</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="article-section mt-20" id="default-theme">
                        <copyTitle>
                            <template #sectionTitle>Default Theme</template>
                        </copyTitle>
                        <section>
                            <p>
                                Under the principle of not changing the primary color, all style elements (Colors, Typography, Border Width, Radius, Shadow, Opacity, Blur, Spacing, Breakpoint) can be tailored to fit the product’s personality.
                            </p>
                            <div class="imgbox w-full mt-6">
                                <img src="./dataimg/themes-2.jpg" alt="">
                            </div>
                        </section>
                        <section>
                            <h4 class="name mb-3 mt-10">Theme component previews</h4>
                            <div class="imgbox w-full mt-6">
                                <img src="./dataimg/themes-3.jpg" alt="">
                            </div>
                        </section>
                        <div class="actbox mt-6 flex flex-wrap gap-6">
                            <a href="https://www.figma.com/design/T01QmXmsYxEPcZT53UHkco/Web-Design-Kit_VSDS?m=auto&node-id=4254-12653&fuid=985746651307671417" target="_blank">
                                <div class="actbtn px-4 py-3 border w-[255px] h-full box-border border-neutral-300 rounded-xl shadow-md cursor-pointer hover:bg-surface-200 duration-300">
                                    <div class="header flex justify-between items-start mb-2">
                                        <div class="flex items-start gap-1">
                                            <img src="/src/assets/images/icons/figma.svg" alt="">
                                            <!-- <div class="tag text-[10px] text-on-surface px-2 rounded-lg border border-surface-300">Plug-in</div> -->
                                        </div>
                                        <img src="/src/assets/images/icons/external.svg" alt="">
                                    </div>
                                    <div class="actbtn--inner">
                                        <span class="block text-sm text-on-surface">Web Design Kit</span>
                                        <span class="block text-xs text-on-surface-variant mt-2">Token guidance for web</span>
                                    </div>
                                </div>
                            </a>
                            <a href="https://www.figma.com/design/isKY3C4FK0mWm071TzIJhw/Icon-Library_VSDS?node-id=3923-13613&t=ANnFbBoQvPZCW1Ke-1&fuid=985746651307671417" target="_blank">
                                <div class="actbtn px-4 py-3 border w-[255px] h-full box-border border-neutral-300 rounded-xl shadow-md cursor-pointer hover:bg-surface-200 duration-300">
                                    <div class="header flex justify-between items-start mb-2">
                                        <div class="flex items-start gap-1">
                                            <img src="/src/assets/images/icons/figma.svg" alt="">
                                            <!-- <div class="tag text-[10px] text-on-surface px-2 rounded-lg border border-surface-300">Plug-in</div> -->
                                        </div>
                                        <img src="/src/assets/images/icons/external.svg" alt="">
                                    </div>
                                    <div class="actbtn--inner">
                                        <span class="block text-sm text-on-surface">Large Screen Design Kit</span>
                                        <span class="block text-xs text-on-surface-variant mt-2">Token guidance for IFP</span>
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
                        <router-link class="content-nav" :to="{hash: '#segment-theme' }">Segment theme</router-link>
                    </li>
                    <li class="mb-4">
                        <router-link class="content-nav" :to="{hash: '#default-theme' }">Default Theme</router-link>
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