<template>
    <main class="grow overflow-x-auto">
        <Herobanner>
            <template #pageTitle>Designing</template>
            <template #pageBrief>In software or web design it involves incorporating design principles and techniques that ensure equal access, usability, and inclusion for all users, regardless of their abilities.</template>
        </Herobanner>
        <div class="overflow-x-auto pb-2">
            <div class="tabbox bg-neutral-100 rounded-full mt-8 lg:mt-16 mx-6 lg:mx-20 overflow-x-auto shadow-md">
                <div class="tabbox-wrapper inline-flex flex-nowrap">
                    <RouterLink class="tabbox-item active" :to="{ name: 'AccessibilityDesigningColorTypography'}">Color & Typography</RouterLink>
                    <RouterLink class="tabbox-item" :to="{ name: 'AccessibilityDesigningLayoutNavigation'}">Layout & Navigation</RouterLink>
                    <RouterLink class="tabbox-item" :to="{ name: 'AccessibilityDesigningLinksButtons'}">Links & Buttons</RouterLink>
                    <RouterLink class="tabbox-item" :to="{ name: 'AccessibilityFormsControlsDycontents'}">Forms, Controls, Dynamic Content</RouterLink>
                </div>
            </div>
        </div>
        <div class="article flex mt-6 lg:mt-16 px-6 lg:px-20 box-border gap-10">
            <div class="mainbox w-full">
                <div class="article--main pb-14">
                    <div class="article-section" id="color-typography">
                        <copyTitle>
                            <template #sectionTitle>Color & Typography</template>
                        </copyTitle>
                    </div>
                    <div class="article-section mt-8" id="accessibility-design-color">
                        <h3>Color</h3>
                        <div class=" border-l-4 border-blue-500 pl-4 lg:pl-8">
                            <div class="sub-section">
                                <h4>Avoid using color to convey information </h4>
                                <p class="text-sm">
                                    For color blind, they won’t be able to see this indication, so it becomes difficult to understand which fields have errors:<br>
                                    For instance, green, red, and brown can look similar. The right side of the image below simulates Deuteranopia (green blindness) and Protanopia (red blindness):
                                </p>
                                <div class="imgbox w-full mt-6">
                                    <img src="../dataimg/color-typography-1.jpg" alt="">
                                </div>
                                <p class="text-sm"><br></p>
                                <p class="text-sm">
                                    Utilize patterns and textures Instead of color
                                </p>
                                <div class="imgbox w-full mt-6">
                                    <img src="../dataimg/color-typography-2.jpg" alt="">
                                </div>
                            </div>
                            <div class="divider w-full h-[1px] bg-neutral-300 mt-14 mb-14"></div>
                            <div class="sub-section">
                                <h4>Avoid certain color combinations</h4>
                                <ul class="pl-4 pt-2">
                                    <li>Avoid using color between yellow and green </li>
                                    <li>Avoid combination of colors with low saturation or low brightness</li>
                                    <li>Use Google Extensions -  Colorblindly for double checking </li>
                                </ul>
                                <p class="text-sm"><br></p>
                                <p class="text-sm">Simulate color perception for different types of color blindness through the color wheel.</p>
                                <div class="imgbox w-full mt-6">
                                    <img src="../dataimg/color-typography-3.jpg" alt="">
                                </div>
                                <p class="text-sm"><br></p>
                                <p class="text-sm">Avoid these combinations</p>
                                <div class="imgbox w-full mt-6">
                                    <img src="../dataimg/color-typography-4.jpg" alt="">
                                </div>
                                <p class="text-sm"><br></p>
                                <p class="text-sm">Suggested pairings of primary and secondary colors for VSDS Segment colors. Primary colors are fixed, while secondary colors can be adjusted to fit the product’s personality:</p>
                                <div class="imgbox w-full mt-6">
                                    <img src="../dataimg/color-typography-5.jpg" alt="">
                                </div>
                                <p class="text-sm">For more information about Segment colors, please refer to: Color</p>
                            </div>
                            <div class="divider w-full h-[1px] bg-neutral-300 mt-14 mb-14"></div>
                            <div class="sub-section">
                                <h4>Check your content in specialized browsing modes</h4>
                                <p class="text-sm">Simulate color perception for different types of color blindness through the color wheel.</p>
                                <div class="imgbox w-full mt-6">
                                    <img src="../dataimg/color-typography-6.jpg" alt="">
                                </div>
                            </div>
                            <div class="divider w-full h-[1px] bg-neutral-300 mt-14 mb-14"></div>
                            <div class="sub-section">
                                <h4>Check the contrast for text and icons</h4>
                                <p class="text-sm">Normal-sized text must meet Level AA with a contrast ratio of <span class="font-bold">4.5:1</span>, while large text and icons must meet Level AA with a ratio of <span class="font-bold">3:1</span>.<br>
                                    Use the Figma plug-in Stark to check.
                                </p>
                                <div class="imgbox w-full mt-6">
                                    <img src="../dataimg/color-typography-7.jpg" alt="">
                                </div>
                                <p class="text-sm"><br></p>
                                <p class="text-sm">
                                    The contrast of borders for input elements  (text input, radio buttons, checkboxes, etc.) must also meet Level AA with a ratio of <span class="font-bold">3:1</span>.
                                </p>
                                <div class="imgbox w-full mt-6">
                                    <img src="../dataimg/color-typography-8.jpg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="text-sm"><br><br></p>
                    <div class="article-section mt-8" id="accessibility-design-typography">
                        <h3>Typography</h3>
                        <div class=" border-l-4 border-blue-500 pl-4 lg:pl-8">
                            <div class="sub-section">
                                <h4>Use heading elements to introduce content</h4>
                                <p class="text-sm">
                                    Headings must provide a clear hierarchy and content structure and should not be used for decorative purposes. This helps assistive technology users navigate relevant sections of content. Use only one h1 element per page or view.
                                </p>
                            </div>
                            <div class="divider w-full h-[1px] bg-neutral-300 mt-14 mb-14"></div>
                            <div class="sub-section">
                                <h4>Heading elements should be written in a logical sequence</h4>
                                <p class="text-sm">
                                    The order of heading elements should descend, based on the “depth” of the content. For example, a h4 element should not appear on a page before the first h3 element declaration.
                                </p>
                                <div class="imgbox w-full mt-6">
                                    <img src="../dataimg/color-typography-9.jpg" alt="">
                                </div>
                            </div>
                            <div class="divider w-full h-[1px] bg-neutral-300 mt-14 mb-14"></div>
                            <div class="sub-section">
                                <h4>Check the typography style guide and text alignment</h4>
                                <ul class="pl-4 mt-2">
                                    <li class="text-sm">Use bold for emphasis, avoid underlining (non-link text) and italics.</li>
                                    <li class="text-sm">Avoid using all capital letters and uppercase letters.</li>
                                    <li class="text-sm">Use left-aligned text for left-to-right (LTR) languages, and right-aligned text for right-to-left (RTL) languages.</li>
                                    <li class="text-sm">Justified text is difficult to read.</li>
                                </ul>
                                <div class="imgbox w-full mt-6">
                                    <img src="../dataimg/color-typography-10.jpg" alt="">
                                </div>
                            </div>
                            <div class="divider w-full h-[1px] bg-neutral-300 mt-14 mb-14"></div>
                            <div class="sub-section">
                                <h4>Ensure proper spacing between text lines</h4>
                                <p class="text-sm">
                                    Maintaining proper spacing improves text readability.
                                </p>
                                <ul class="pl-0 pt-8">
                                    <div class="ul-title font-bold mb-1">Letter spacing</div>
                                    <li class="text-sm ml-4">To improves readability, ideally around 0.12 times of the front size. </li>
                                </ul>
                                <ul class="pl-0 pt-8">
                                    <div class="ul-title font-bold mb-1">nter-word spacing </div>
                                    <li class="text-sm ml-4">0.16 times the font size.</li>
                                </ul>
                                <ul class="pl-0 pt-8">
                                    <div class="ul-title font-bold mb-1">Line spacing</div>
                                    <li class="text-sm ml-4">1.5 times the font size.</li>
                                    <li class="text-sm ml-4">Spacing following paragraphs to at least 2 times the font size.</li>
                                </ul>
                                <div class="imgbox w-full mt-6">
                                    <img src="../dataimg/color-typography-11.jpg" alt="">
                                </div>
                            </div>
                            <div class="divider w-full h-[1px] bg-neutral-300 mt-14 mb-14"></div>
                            <div class="sub-section">
                                <h4>Use list elements (ol, ul, and dl elements) for list content</h4>
                                <p class="text-sm">
                                    This may include sections of related content, items visually displayed in a grid-like layout, or sibling a elements. Consider this in the UI design as well.
                                </p>
                                <div class="imgbox w-full mt-6">
                                    <img src="../dataimg/color-typography-12.jpg" alt="">
                                </div>
                            </div>
                            <div class="divider w-full h-[1px] bg-neutral-300 mt-14 mb-14"></div>
                            <div class="sub-section">
                                <h4>Use sans serif fonts</h4>
                                <p class="text-sm">
                                    As letters appear less crowded, sans-serif fonts are recommended. The primary font used in VSDS is Inter.
                                </p>
                                <div class="imgbox w-full mt-6">
                                    <img src="../dataimg/color-typography-13.jpg" alt="">
                                </div>
                            </div>
                            <div class="divider w-full h-[1px] bg-neutral-300 mt-14 mb-14"></div>
                            <div class="sub-section">
                                <h4>Make sure all images, including charts, graphs, and maps, have text alternatives, and every img element includes an alt attribute</h4>
                                <p class="text-sm">
                                    Alt attributes (alt text) provide descriptions of images for individuals who may not be able to view them. When an alt attribute is missing, screen readers may announce the image’s file name or path instead, failing to convey its content. For complex visuals like maps or flowcharts, include a plain text description that lists points on the map or sections of the flowchart. Ensure all visible information, such as graph axes, data points, labels, and the main message of the graphic, is fully described.
                                </p>
                            </div>
                            <div class="divider w-full h-[1px] bg-neutral-300 mt-14 mb-14"></div>
                            <div class="sub-section">
                                <h4>Provide adjustable text size functionality and ensure text can be scaled up to 200%</h4>
                                <p class="text-sm">
                                    Is the content still readable? Does increasing the text size cause content to overlap?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContentElm>
                <ul>
                    <li class="mb-4">
                        <router-link class="content-nav"  :class="{ current: activeIndex === 0 }" @click="contentActive(0)" :to="{hash: '#accessibility-design-color' }">Color</router-link>
                    </li>
                    <li class="mb-4">
                        <router-link class="content-nav"  :class="{ current: activeIndex === 1 }" @click="contentActive(1)" :to="{hash: '#accessibility-design-typography' }">Typography</router-link>
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