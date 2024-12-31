<template>
    <main class="grow">
        <Herobanner :showHeroBrief="false">
            <template #pageTitle>Iconography</template>
        </Herobanner>
        <div class="article flex mt-16 px-6 lg:px-20 box-border gap-10">
            <div class="mainbox w-full">
                <div class="article--main pb-14">
                    <a href="https://www.figma.com/design/isKY3C4FK0mWm071TzIJhw/Icon-Library_VSDS?node-id=3923-13613&t=ANnFbBoQvPZCW1Ke-1&fuid=985746651307671417" target="_blank" class="actbtn w-[225px] h-[135px] flex flex-col relative px-5 py-4 border border-outline rounded-xl gap-3 shadow-md mt-8">
                        <div class="icon">
                            <img src="/src/assets/images/icons/figma.svg" alt="">
                        </div>
                        <div class="actbtn--inner">
                            <span class="text-sm text-on-surface">Icon Library</span>
                            <p class="text-xs text-on-surface-variant mt-2">Open sourced VSDS icons in all 3 themes</p>
                        </div>
                        <img src="/src/assets/images/icons/external.svg" class="absolute right-3 top-3" alt="">
                    </a>
                    <div class="article-section mt-20" id="overview">
                        <copyTitle>
                            <template #sectionTitle>Overview</template>
                        </copyTitle>
                        <section>
                            <p>
                                VSDS iconography system is crafted on a 24 grid. Be sure to always design your icons based on this grid. Also provided in the diagram to the right is an example of clear space around each glyph, as well as key-lines that should be used to align shapes.
                                <br>
                                For horizontally proportioned icons used the horizontal key-lines provided. For vertically proportioned icons, be sure to align your shapes to the vertically proportioned key-lines.    
                            </p>
                            <div class="imgbox w-full mt-6">
                                <img src="./dataimg/iconography-1.jpg" alt="">
                            </div>
                        </section>
                    </div>
                    <div class="article-section mt-20" id="theme">
                        <copyTitle>
                            <template #sectionTitle>Theme</template>
                        </copyTitle>
                        <section>
                            <h4>Uniformity</h4>
                            <p>
                                Key shapes define the default format of icons, UI designer can creates with similar ratios in a consistent way.
                            </p>
                            <div class="imgbox w-full mt-6">
                                <img src="./dataimg/iconography-2.jpg" alt="">
                            </div>
                        </section>
                        <section>
                            <h4>Personality</h4>
                            <p>
                                These icons are often more expressive, playful and unique in form, aligning with the creative tone and personality of specific products.
                            </p>
                            <div class="imgbox w-full mt-6">
                                <img src="./dataimg/iconography-3.jpg" alt="">
                            </div>
                        </section>
                    </div>
                    <div class="article-section mt-20" id="optical-sizes">
                        <copyTitle>
                            <template #sectionTitle>Optical sizes</template>
                        </copyTitle>
                        <section>
                            <p>
                                Key shapes define the default format of icons, UI designer can creates with similar ratios in a consistent way.
                            </p>
                            <div class="imgbox w-full mt-6">
                                <img src="./dataimg/iconography-4.jpg" alt="">
                            </div>
                        </section>
                    </div>
                    <div class="article-section mt-20" id="design-principle">
                        <copyTitle>
                            <template #sectionTitle>Design Principle</template>
                        </copyTitle>
                        <section>
                            <h4>Metaphor</h4>
                            <p>
                                Icons only work when they are recognizable. They can represent real-world objects, fantasy elements, actions, sounds, gestures, states or feelings — from simple shapes to a realistic 3D object. 
                                Users should be able to understand an icon’s meaning (its “metaphor”) without relying on text labels. Common symbols like a house, cogwheel, pencil or user are universally understood, making familiarity key to an icon’s functionality.
                            </p>
                            <div class="imgbox w-full mt-6">
                                <img src="./dataimg/iconography-5.jpg" alt="">
                            </div>
                        </section>
                        <section>
                            <h4>Key shape</h4>
                            <p>
                                Key shapes define the default format of icons, contributor can creates with similar ratios in a consistent way.
                            </p>
                            <div class="imgbox w-full mt-6">
                                <img src="./dataimg/iconography-6.jpg" alt="">
                            </div>
                        </section>
                        <section>
                            <h4>Angle</h4>
                            <p>
                                An angle of 45 degrees is generally used, and other angles in multiples of 60 degrees may be used if needed.
                            </p>
                            <div class="imgbox w-full mt-6">
                                <img src="./dataimg/iconography-7.jpg" alt="">
                            </div>
                        </section>
                        <section>
                            <h4>Stroke width</h4>
                            <p>
                                The default stroke is 1.7px(pt or dp). The stroke may be changed according to the size, location, and purpose of the icon. It is recommended to design your icons so the stroke outlines match the pixels.
                            </p>
                            <div class="imgbox w-full mt-6">
                                <img src="./dataimg/iconography-8.jpg" alt="">
                            </div>
                        </section>
                        <section>
                            <h4>Keep everything in modular</h4>
                            <p>
                                The modifier system works across the set of highlight an action on an established icon, we use solid modifier to make them legible as possible.
                            </p>
                            <div class="imgbox w-full mt-6">
                                <img src="./dataimg/iconography-9.jpg" alt="">
                            </div>
                        </section>
                    </div>
                    <div class="article-section mt-20" id="best-practices">
                        <copyTitle>
                            <template #sectionTitle>Best practices</template>
                        </copyTitle>
                        <section>
                            <h4>Create a recognizable, highly simplified design</h4>
                            <p>
                                Too many details can make an icon confusing or unreadable. Strive for a simple, universal design that most people will recognize quickly. In general, icons work best when they use familiar visual metaphors that are directly related to the actions they initiate or content they represent.
                            </p>
                        </section>
                    </div>
                    <div class="article-section mt-20" id="icon-naming-convention">
                        <copyTitle>
                            <template #sectionTitle>Icon Naming Convention</template>
                        </copyTitle>
                        <section>
                            <p>
                                In the VSDS icon system, components are named based on their shape and object rather than their scenario or feature. For example, a magnifier is used instead of “search”, and a trash can instead of “remove”. Secondary object names are included when necessary, and style variables are added as suffixes to differentiate between icon styles.
                            </p>
                            <div class="imgbox w-full mt-6">
                                <img src="./dataimg/iconography-10.jpg" alt="">
                            </div>
                        </section>
                    </div>
                    <div class="article-section mt-20" id="localization">
                        <copyTitle>
                            <template #sectionTitle>Localization</template>
                        </copyTitle>
                        <section>
                            <p>
                                Understand the cultural connotations of certain symbols in different cultures. While in most cases iconography doesn’t require localization, certain icons may be acceptable in one culture but not in another. Validate your iconography choices with the context in which they will be used.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <ContentElm>
                <ul>
                    <li class="mb-4">
                        <router-link class="content-nav" :class="{ current: activeIndex === 0 }" @click="contentActive(0)" :to="{hash: '#overview' }">Overview</router-link>
                    </li>
                    <li class="mb-4">
                        <router-link class="content-nav" :class="{ current: activeIndex === 1 }" @click="contentActive(1)" :to="{hash: '#theme' }">Theme</router-link>
                    </li>
                    <li class="mb-4">
                        <router-link class="content-nav" :class="{ current: activeIndex === 2 }" @click="contentActive(2)" :to="{hash: '#optical-sizes' }">Optical sizes</router-link>
                    </li>
                    <li class="mb-4">
                        <router-link class="content-nav" :class="{ current: activeIndex === 3 }" @click="contentActive(3)" :to="{hash: '#design-principle' }">Design Principle</router-link>
                    </li>
                    <li class="mb-4">
                        <router-link class="content-nav" :class="{ current: activeIndex === 4 }" @click="contentActive(4)" :to="{hash: '#best-practices' }">Best practices</router-link>
                    </li>
                    <li class="mb-4">
                        <router-link class="content-nav" :class="{ current: activeIndex === 5 }" @click="contentActive(5)" :to="{hash: '#icon-naming-convention' }">Icon Naming Convention</router-link>
                    </li>
                    <li class="mb-4">
                        <router-link class="content-nav" :class="{ current: activeIndex === 6 }" @click="contentActive(6)" :to="{hash: '#localization' }">Localization</router-link>
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