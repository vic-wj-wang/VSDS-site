<template>
    <main class="grow">
        <Herobanner :showHeroBrief="false">
            <template #pageTitle>Overview</template>
        </Herobanner>
        <div class="article w-[100vw] md:w-full overflow-x-auto flex mt-16 px-6 lg:px-20 box-border gap-10">
            <div class="mainbox w-full">
                <div class="article--main pb-14">
                    <div class="article-section" id="segment-theme">
                        <div class="flex flex-wrap gap-6 gap-y-10 lg:gap-10">
                            <a href="#" class="card flex flex-col w-[calc((100%_-_24px)/2)] lg:w-[calc((100%_-_40px*2)/3)] group">
                                <div class="cover w-full">
                                    <img src="./dataimg/overview-1.jpg" alt="" class="w-full group-hover:brightness-105 duration-300">
                                </div>
                                <h4>Color</h4>
                                <p>Welcome to URL link, your gateway to the digital realm where possibilities are endless.</p>
                            </a>
                            <a href="#" class="card flex flex-col w-[calc((100%_-_24px)/2)] lg:w-[calc((100%_-_40px*2)/3)] group">
                                <div class="cover w-full">
                                    <img src="./dataimg/overview-2.jpg" alt="" class="w-full group-hover:brightness-105 duration-300">
                                </div>
                                <h4>Elevation</h4>
                                <p>Welcome to URL link, your gateway to the digital realm where possibilities are endless.</p>
                            </a>
                            <a href="#" class="card flex flex-col w-[calc((100%_-_24px)/2)] lg:w-[calc((100%_-_40px*2)/3)] group">
                                <div class="cover w-full">
                                    <img src="./dataimg/overview-3.jpg" alt="" class="w-full group-hover:brightness-105 duration-300">
                                </div>
                                <h4>Iconography</h4>
                                <p>Welcome to URL link, your gateway to the digital realm where possibilities are endless.</p>
                            </a>
                            <a href="#" class="card flex flex-col w-[calc((100%_-_24px)/2)] lg:w-[calc((100%_-_40px*2)/3)] group">
                                <div class="cover w-full">
                                    <img src="./dataimg/overview-4.jpg" alt="" class="w-full group-hover:brightness-105 duration-300">
                                </div>
                                <h4>Typography</h4>
                                <p>Welcome to URL link, your gateway to the digital realm where possibilities are endless.</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
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