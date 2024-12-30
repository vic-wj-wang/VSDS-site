<template>
    <main class="grow">
        <Herobanner :showHeroBrief="false">
            <template #pageTitle>Interaction</template>
        </Herobanner>
        <div class="article w-[100vw] md:w-full overflow-x-auto flex mt-16 px-6 lg:px-20 box-border gap-10">
            <div class="mainbox w-full">
                <div class="article--main pb-14">
                    <div class="article-section" id="overview">
                        <copyTitle>
                            <template #sectionTitle>Overview</template>
                        </copyTitle>
                        <section>
                            <p>
                                The Interaction section of the design system establishes the foundational guidelines for creating consistent, intuitive, and accessible user interactions across all products. 
                                This ensures a seamless and engaging experience for users, regardless of the platform or context. 
                                Key principles include:
                            </p>
                            <ul>
                                <li>Consistency: Standardizing behaviors across components to create familiarity and predictability.</li>
                                <li>Responsiveness: Ensuring interactions adapt fluidly to various screen sizes, devices, and input methods.</li>
                                <li>Accessibility: Designing for inclusivity, allowing users of all abilities to engage effectively.</li>
                                <li>Feedback: Providing clear, timely feedback for user actions, such as loading states, success confirmations, or error handling.</li>
                            </ul>
                        </section>
                    </div>
                    <div class="article-section mt-20" id="gestures">
                        <copyTitle>
                            <template #sectionTitle>Gestures</template>
                        </copyTitle>
                        <section>
                            <p></p>
                        </section>
                    </div>
                    <div class="article-section mt-20" id="transitions">
                        <copyTitle>
                            <template #sectionTitle>Transitions</template>
                        </copyTitle>
                        <section>
                            <h4 class="name mb-3 mt-8">Types of gestures</h4>
                            <ul>
                                <li>Tap</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
            <ContentElm>
                <ul>
                    <li class="mb-4">
                        <router-link class="content-nav" :to="{hash: '#overview' }">Overview</router-link>
                    </li>
                    <li class="mb-4">
                        <router-link class="content-nav" :to="{hash: '#gestures' }">Gestures</router-link>
                    </li>
                    <li class="mb-4">
                        <router-link class="content-nav" :to="{hash: '#transitions' }">Transitions</router-link>
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