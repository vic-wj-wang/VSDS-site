<template>
    <main class="grow">
        <Herobanner :showHeroBrief="false">
            <template #pageTitle>Design tokens</template>
        </Herobanner>
        <div class="article flex mt-16 px-6 lg:px-20 box-border gap-10">
            <div class="mainbox w-full">
                <SectionTitle :showTitle="false">
                    <template #sectionBrief>
                        VSDS design tokens are divided into two types: Foundation tokens and Alias tokens. Foundation tokens are used globally to store raw values, such as color hex codes, border radius, and border widths. Alias tokens, on the other hand, are utilized in the Design Kit for more complex elements, simplifying raw values into a more understandable format.
                    </template>
                </SectionTitle>
                <div class="article--main pb-14">
                    <div class="article-section mt-20" id="foundation-tokens">
                        <copyTitle>
                            <template #sectionTitle>Foundation tokens</template>
                        </copyTitle>
                        <section>
                            <p>
                                VSDS organizes tokens into two layers. Foundation tokens remain independent of context and store raw values, like color hex codes. Additionally, foundation tokens retain key details for typography, border radius, and border width.
                            </p>
                            <div class="imgbox w-full mt-6">
                                <img src="./dataimg/design-tokens-1.jpg" alt="">
                            </div>
                        </section>
                        <a href="/VSDS-site/#/Foundations/Designtokens/Foundation-tokens" class="actbtn flex px-4 py-4 border border-outline rounded-xl gap-3 shadow-md mt-8">
                            <div class="icon">
                                <img src="/src/assets/images/icons/head.svg" alt="">
                            </div>
                            <div class="actbtn--inner">
                                <span class="text-sm text-on-surface">Foundation tokens</span>
                                <p class="text-xs text-on-surface-variant mt-2">Overview of all foundation token items</p>
                            </div>
                        </a>
                    </div>
                    <div class="article-section mt-20" id="alias-tokens">
                        <copyTitle>
                            <template #sectionTitle>Alias tokens</template>
                        </copyTitle>
                        <section>
                            <p>
                                Alias tokens add intuitive semantic meaning to stored values, tailored for more complex components like blur and shadows. These tokens present values in a format that’s easier to understand, making them especially suitable for use in design kits and mockup files.
                            </p>
                            <div class="imgbox w-full mt-6">
                                <img src="./dataimg/design-tokens-2.jpg" alt="">
                            </div>
                        </section>
                        <a href="/VSDS-site/#/Foundations/Designtokens/Alias-tokens" class="actbtn flex px-4 py-4 border border-outline rounded-xl gap-3 shadow-md mt-8">
                            <div class="icon">
                                <img src="/src/assets/images/icons/head.svg" alt="">
                            </div>
                            <div class="actbtn--inner">
                                <span class="text-sm text-on-surface">Alias tokens</span>
                                <p class="text-xs text-on-surface-variant mt-2">Overview of all alias token items</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <ContentElm>
                <ul>
                    <li class="mb-4">
                        <router-link class="content-nav" :to="{hash: '#foundation-tokens' }">Foundation tokens</router-link>
                    </li>
                    <li class="mb-4">
                        <router-link class="content-nav" :to="{hash: '#alias-tokens' }">Alias tokens</router-link>
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