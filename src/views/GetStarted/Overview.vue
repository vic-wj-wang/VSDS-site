<script setup>
import Herobanner from '/src/layouts/Herobanner/Herobanner.vue'
import SectionTitle from '/src/layouts/SectionTitle/SectionTitle.vue'
import copyTitle from '/src/components/copyTitle/copyTitle.vue'
import ContentElm from '/src/layouts/ContentElm/ContentElm.vue'
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<template>
    <main class="grow">
        <Herobanner :showHeroBrief="false">
            <template #pageTitle>Get started</template>
        </Herobanner>
        <div class="article flex mt-16 px-6 lg:px-20 box-border gap-10">
            <div class="mainbox w-full">
                <SectionTitle>
                    <template #sectionTitle>Section Title</template>
                    <template #sectionBrief>VSDS defines two color palettes: foundation and neutral. Each is designed with specific functions and contexts. 
                        Learn more about how to apply each palette effectively across different products.
                    </template>
                </SectionTitle>
                <div class="article--main pb-14">
                    <div class="article-section mt-20 lg:mt-[120px]" id="vsds-palettes">
                        <copyTitle>
                            <template #sectionTitle>Article</template>
                        </copyTitle>
                        <p>
                            To maintain brand consistency and diverse values across ViewSonic products, the Foundation colors offer a palette of 9 colors that can be flexibly applied to various contexts and components.
                        </p>
                    </div>
                </div>
            </div>
            <ContentElm>
                <ul>
                    <li class="mb-4">
                        <router-link class="content-nav" :to="{hash: '#vsds-palettes' }">VSDS palettes</router-link>
                    </li>
                </ul>
            </ContentElm>
        </div>
    </main>
</template>
