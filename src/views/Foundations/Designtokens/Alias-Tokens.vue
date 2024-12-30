<template>
    <main class="grow">
        <Herobanner :showHeroBrief="false">
            <template #pageTitle>Alias tokens</template>
        </Herobanner>
        <div class="article w-[100vw] md:w-full overflow-x-auto flex mt-16 px-6 lg:px-20 box-border gap-10">
            <div class="mainbox w-full">
                <div class="article--main pb-14">
                    <div class="article-section" id="naming-architecture">
                        <copyTitle>
                            <template #sectionTitle>Naming architecture</template>
                        </copyTitle>
                        <section>
                            <p>
                                Alias token names are constructed using the prefix <span class="font-bold">VSDS</span>,
                                combined with the visual element, role, size, and weight. The prefix is formatted by
                                adding VSDS followed by the initial letter of the Design Kit name. For example, for the
                                Web Design Kit, the prefix is <span class="font-bold">VSDSW</span>.
                            </p>
                            <div class="imgbox w-full mt-6">
                                <img src="./dataimg/alias-tokens-1.jpg" alt="">
                            </div>
                        </section>
                    </div>
                    <div class="article-section mt-20">
                        <h4 class="name mb-3 mt-0">Alias tokens name list</h4>
                        <div class="foundation-section color-palette">
                            <div class="wrapper">
                                <div class="custom-table">
                                    <div class="tablebox min-w-[520px]">
                                        <div class="thead">
                                            <div class="tr">
                                                <div class="th w-1/5 px-4 pb-3 box-border">Prefix</div>
                                                <div class="th w-1/5 px-4 pb-3 box-border">Visual element</div>
                                                <div class="th w-1/5 px-4 pb-3 box-border">Role</div>
                                                <div class="th w-1/5 px-4 pb-3 box-border">Size</div>
                                                <div class="th w-1/5 px-4 pb-3 box-border">Weight</div>
                                            </div>
                                        </div>
                                        <div class="tbody grid grid-cols-5">
                                            <div class="td flex items-center p-4 box-border border-b border-vsds-color-neutral-200">vsdsw</div>
                                            <div class="td flex items-center p-4 box-border border-b border-vsds-color-neutral-200"><span class="font-bold">color</span></div>
                                            <div class="td flex items-center p-4 box-border border-b border-vsds-color-neutral-200">primary<br>secondary<br>tertiary<br>neutral<br>surface<br>info<br>success<br>warning<br>error<br>link<br>disabled<br>outline<br>...</div>
                                            <div class="td flex items-center p-4 box-border border-b border-vsds-color-neutral-200"><img src="/src/assets/images/icons/x.svg" alt=""></div>
                                            <div class="td flex items-center p-4 box-border border-b border-vsds-color-neutral-200"><img src="/src/assets/images/icons/x.svg" alt=""></div>

                                            <div class="td flex items-center p-4 box-border border-b border-vsds-color-neutral-200">vsdsw</div>
                                            <div class="td flex items-center p-4 box-border border-b border-vsds-color-neutral-200"><span class="font-bold">blur</span></div>
                                            <div class="td flex items-center p-4 box-border border-b border-vsds-color-neutral-200"><img src="/src/assets/images/icons/x.svg" alt=""></div>
                                            <div class="td flex items-center p-4 box-border border border-vsds-color-neutral-200 border-t-0 row-span-8">...<br>2xs<br>xs<br>sm<br>md<br>lg<br>xl<br>2xl<br>...</div>
                                            <div class="td flex items-center p-4 box-border border-b border-vsds-color-neutral-200"><img src="/src/assets/images/icons/x.svg" alt=""></div>

                                            <div class="td flex items-center p-4 box-border border-b border-vsds-color-neutral-200">vsdsw</div>
                                            <div class="td flex items-center p-4 box-border border-b border-vsds-color-neutral-200"><span class="font-bold">border</span></div>
                                            <div class="td flex items-center p-4 box-border border-b border-vsds-color-neutral-200"><img src="/src/assets/images/icons/x.svg" alt=""></div>
                                            <div class="td flex items-center p-4 box-border border-b border-vsds-color-neutral-200"><img src="/src/assets/images/icons/x.svg" alt=""></div>

                                            <div class="td flex items-center p-4 box-border border-b border-vsds-color-neutral-200">vsdsw</div>
                                            <div class="td flex items-center p-4 box-border border-b border-vsds-color-neutral-200"><span class="font-bold">icon-size</span></div>
                                            <div class="td flex items-center p-4 box-border border-b border-vsds-color-neutral-200"><img src="/src/assets/images/icons/x.svg" alt=""></div>
                                            <div class="td flex items-center p-4 box-border border-b border-vsds-color-neutral-200"><img src="/src/assets/images/icons/x.svg" alt=""></div>

                                            <div class="td flex items-center p-4 box-border border-b border-vsds-color-neutral-200">vsdsw</div>
                                            <div class="td flex items-center p-4 box-border border-b border-vsds-color-neutral-200"><span class="font-bold">opacity</span></div>
                                            <div class="td flex items-center p-4 box-border border-b border-vsds-color-neutral-200"><img src="/src/assets/images/icons/x.svg" alt=""></div>
                                            <div class="td flex items-center p-4 box-border border-b border-vsds-color-neutral-200"><img src="/src/assets/images/icons/x.svg" alt=""></div>

                                            <div class="td flex items-center p-4 box-border border-b border-vsds-color-neutral-200">vsdsw</div>
                                            <div class="td flex items-center p-4 box-border border-b border-vsds-color-neutral-200"><span class="font-bold">rounded</span></div>
                                            <div class="td flex items-center p-4 box-border border-b border-vsds-color-neutral-200"><img src="/src/assets/images/icons/x.svg" alt=""></div>
                                            <div class="td flex items-center p-4 box-border border-b border-vsds-color-neutral-200"><img src="/src/assets/images/icons/x.svg" alt=""></div>

                                            <div class="td flex items-center p-4 box-border border-b border-vsds-color-neutral-200">vsdsw</div>
                                            <div class="td flex items-center p-4 box-border border-b border-vsds-color-neutral-200"><span class="font-bold">shadow</span></div>
                                            <div class="td flex items-center p-4 box-border border-b border-vsds-color-neutral-200">primary<br>secondary<br>neutral<br>neutral-inverse</div>
                                            <div class="td flex items-center p-4 box-border border-b border-vsds-color-neutral-200"><img src="/src/assets/images/icons/x.svg" alt=""></div>

                                            <div class="td flex items-center p-4 box-border border-b border-vsds-color-neutral-200">vsdsw</div>
                                            <div class="td flex items-center p-4 box-border border-b border-vsds-color-neutral-200"><span class="font-bold">spacing</span></div>
                                            <div class="td flex items-center p-4 box-border border-b border-vsds-color-neutral-200"><img src="/src/assets/images/icons/x.svg" alt=""></div>
                                            <div class="td flex items-center p-4 box-border border-b border-vsds-color-neutral-200"><img src="/src/assets/images/icons/x.svg" alt=""></div>

                                            <div class="td flex items-center p-4 box-border border-b border-vsds-color-neutral-200">vsdsw</div>
                                            <div class="td flex items-center p-4 box-border border-b border-vsds-color-neutral-200"><span class="font-bold">font</span></div>
                                            <div class="td flex items-center p-4 box-border border-b border-vsds-color-neutral-200">display<br>headline<br>title<br>body<br>label</div>
                                            <div class="td flex items-center p-4 box-border border-b border-vsds-color-neutral-200">thin<br>light<br>regular<br>medium<br>bold<br>black</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="article-section mt-20" id="alias-colors">
                        <copyTitle>
                            <template #sectionTitle>Alias colors</template>
                        </copyTitle>
                        <section>
                            <p>
                                Based on semantic principles, please refer to the following guidelines for the importance of alias colors. Naming conventions include: <span class="font-bold">‘variant’</span> for variations of a color (e.g., primary-variant), typically used for states like hover; <span class="font-bold">‘on’</span> for elements placed on a color (e.g., on-primary), such as text or icons; and <span class="font-bold">‘inverse’</span> for opposing colors (e.g., surface-inverse). Additionally, <span class="font-bold">‘link’</span> and <span class="font-bold">‘outline’</span> are incorporated to enhance versatility.
                            </p>
                        </section>
                        <div class="foundation-section w-full flex flex-wrap gap-12 mt-12">
                            <div class="wrapper w-full">
                                <div class="custom-table">
                                    <div class="tablebox">
                                        <div class="thead">
                                            <div class="tr">
                                                <div class="th w-1/2 pl-4">Name</div>
                                                <div class="th w-1/2 ">Required or optional</div>
                                            </div>
                                        </div>
                                        <div class="tbody">
                                            <div class="tr !py-4">
                                                <div class="td w-1/2 pl-4">primary</div>
                                                <div class="td w-1/2 "><div class="tag-required">Required</div></div>
                                            </div>
                                            <div class="tr !py-4">
                                                <div class="td w-1/2 pl-4">primary-variant</div>
                                                <div class="td w-1/2 "><div class="tag-optional">Optional</div></div>
                                            </div>
                                            <div class="tr !py-4">
                                                <div class="td w-1/2 pl-4">on-primary</div>
                                                <div class="td w-1/2 "><div class="tag-optional">Optional</div></div>
                                            </div>
                                            <div class="divider-bold w-full h-1 bg-vsds-color-neutral-200"></div>
                                            <div class="tr !py-4">
                                                <div class="td w-1/2 pl-4">secondary</div>
                                                <div class="td w-1/2 "><div class="tag-required">Required</div></div>
                                            </div>
                                            <div class="tr !py-4">
                                                <div class="td w-1/2 pl-4">secondary-variant</div>
                                                <div class="td w-1/2 "><div class="tag-optional">Optional</div></div>
                                            </div>
                                            <div class="tr !py-4">
                                                <div class="td w-1/2 pl-4">on-secondary</div>
                                                <div class="td w-1/2 "><div class="tag-optional">Optional</div></div>
                                            </div>
                                            <div class="divider-bold w-full h-1 bg-vsds-color-neutral-200"></div>
                                            <div class="tr !py-4">
                                                <div class="td w-1/2 pl-4">tertiary</div>
                                                <div class="td w-1/2 "><div class="tag-optional">Optional</div></div>
                                            </div>
                                            <div class="tr !py-4">
                                                <div class="td w-1/2 pl-4">tertiary-variant</div>
                                                <div class="td w-1/2 "><div class="tag-optional">Optional</div></div>
                                            </div>
                                            <div class="tr !py-4">
                                                <div class="td w-1/2 pl-4">on-tertiary</div>
                                                <div class="td w-1/2 "><div class="tag-optional">Optional</div></div>
                                            </div>
                                            <div class="divider-bold w-full h-1 bg-vsds-color-neutral-200"></div>
                                            <div class="tr !py-4">
                                                <div class="td w-1/2 pl-4">neutral</div>
                                                <div class="td w-1/2 "><div class="tag-required">Required</div></div>
                                            </div>
                                            <div class="tr !py-4">
                                                <div class="td w-1/2 pl-4">neutral-variant</div>
                                                <div class="td w-1/2 "><div class="tag-optional">Optional</div></div>
                                            </div>
                                            <div class="tr !py-4">
                                                <div class="td w-1/2 pl-4">on-neutral</div>
                                                <div class="td w-1/2 "><div class="tag-optional">Optional</div></div>
                                            </div>
                                            <div class="divider-bold w-full h-1 bg-vsds-color-neutral-200"></div>
                                            <div class="tr !py-4">
                                                <div class="td w-1/2 pl-4">surface-100</div>
                                                <div class="td w-1/2 "><div class="tag-required">Required</div></div>
                                            </div>
                                            <div class="tr !py-4">
                                                <div class="td w-1/2 pl-4">surface-200</div>
                                                <div class="td w-1/2 "><div class="tag-optional">Optional</div></div>
                                            </div>
                                            <div class="tr !py-4">
                                                <div class="td w-1/2 pl-4">surface-300</div>
                                                <div class="td w-1/2 "><div class="tag-optional">Optional</div></div>
                                            </div>
                                            <div class="tr !py-4">
                                                <div class="td w-1/2 pl-4">surface-variant-100</div>
                                                <div class="td w-1/2 "><div class="tag-optional">Optional</div></div>
                                            </div>
                                            <div class="tr !py-4">
                                                <div class="td w-1/2 pl-4">surface-variant-200</div>
                                                <div class="td w-1/2 "><div class="tag-optional">Optional</div></div>
                                            </div>
                                            <div class="tr !py-4">
                                                <div class="td w-1/2 pl-4">surface-inverse</div>
                                                <div class="td w-1/2 "><div class="tag-optional">Optional</div></div>
                                            </div>
                                            <div class="tr !py-4">
                                                <div class="td w-1/2 pl-4">on-surface</div>
                                                <div class="td w-1/2 "><div class="tag-required">Required</div></div>
                                            </div>
                                            <div class="tr !py-4">
                                                <div class="td w-1/2 pl-4">on-surface-variant</div>
                                                <div class="td w-1/2 "><div class="tag-optional">Optional</div></div>
                                            </div>
                                            <div class="tr !py-4">
                                                <div class="td w-1/2 pl-4">on-surface-inverse</div>
                                                <div class="td w-1/2 "><div class="tag-optional">Optional</div></div>
                                            </div>
                                            <div class="divider-bold w-full h-1 bg-vsds-color-neutral-200"></div>
                                            <div class="tr !py-4">
                                                <div class="td w-1/2 pl-4">info</div>
                                                <div class="td w-1/2 "><div class="tag-required">Required</div></div>
                                            </div>
                                            <div class="tr !py-4">
                                                <div class="td w-1/2 pl-4">info-variant</div>
                                                <div class="td w-1/2 "><div class="tag-optional">Optional</div></div>
                                            </div>
                                            <div class="tr !py-4">
                                                <div class="td w-1/2 pl-4">on-info</div>
                                                <div class="td w-1/2 "><div class="tag-optional">Optional</div></div>
                                            </div>
                                            <div class="divider-bold w-full h-1 bg-vsds-color-neutral-200"></div>
                                            <div class="tr !py-4">
                                                <div class="td w-1/2 pl-4">success</div>
                                                <div class="td w-1/2 "><div class="tag-required">Required</div></div>
                                            </div>
                                            <div class="tr !py-4">
                                                <div class="td w-1/2 pl-4">success-variant</div>
                                                <div class="td w-1/2 "><div class="tag-optional">Optional</div></div>
                                            </div>
                                            <div class="tr !py-4">
                                                <div class="td w-1/2 pl-4">on-success</div>
                                                <div class="td w-1/2 "><div class="tag-optional">Optional</div></div>
                                            </div>
                                            <div class="divider-bold w-full h-1 bg-vsds-color-neutral-200"></div>
                                            <div class="tr !py-4">
                                                <div class="td w-1/2 pl-4">warning</div>
                                                <div class="td w-1/2 "><div class="tag-required">Required</div></div>
                                            </div>
                                            <div class="tr !py-4">
                                                <div class="td w-1/2 pl-4">warning-variant</div>
                                                <div class="td w-1/2 "><div class="tag-optional">Optional</div></div>
                                            </div>
                                            <div class="tr !py-4">
                                                <div class="td w-1/2 pl-4">on-warning</div>
                                                <div class="td w-1/2 "><div class="tag-optional">Optional</div></div>
                                            </div>
                                            <div class="divider-bold w-full h-1 bg-vsds-color-neutral-200"></div>
                                            <div class="tr !py-4">
                                                <div class="td w-1/2 pl-4">error</div>
                                                <div class="td w-1/2 "><div class="tag-required">Required</div></div>
                                            </div>
                                            <div class="tr !py-4">
                                                <div class="td w-1/2 pl-4">error-variant</div>
                                                <div class="td w-1/2 "><div class="tag-optional">Optional</div></div>
                                            </div>
                                            <div class="tr !py-4">
                                                <div class="td w-1/2 pl-4">on-error</div>
                                                <div class="td w-1/2 "><div class="tag-optional">Optional</div></div>
                                            </div>
                                            <div class="divider-bold w-full h-1 bg-vsds-color-neutral-200"></div>
                                            <div class="tr !py-4">
                                                <div class="td w-1/2 pl-4">link</div>
                                                <div class="td w-1/2 "><div class="tag-optional">Optional</div></div>
                                            </div>
                                            <div class="tr !py-4">
                                                <div class="td w-1/2 pl-4">link-variant</div>
                                                <div class="td w-1/2 "><div class="tag-optional">Optional</div></div>
                                            </div>
                                            <div class="divider-bold w-full h-1 bg-vsds-color-neutral-200"></div>
                                            <div class="tr !py-4">
                                                <div class="td w-1/2 pl-4">disabled</div>
                                                <div class="td w-1/2 "><div class="tag-optional">Optional</div></div>
                                            </div>
                                            <div class="tr !py-4">
                                                <div class="td w-1/2 pl-4">disabled-variant</div>
                                                <div class="td w-1/2 "><div class="tag-optional">Optional</div></div>
                                            </div>
                                            <div class="tr !py-4">
                                                <div class="td w-1/2 pl-4">on-disabled</div>
                                                <div class="td w-1/2 "><div class="tag-optional">Optional</div></div>
                                            </div>
                                            <div class="divider-bold w-full h-1 bg-vsds-color-neutral-200"></div>
                                            <div class="tr !py-4">
                                                <div class="td w-1/2 pl-4">outline</div>
                                                <div class="td w-1/2 "><div class="tag-optional">Optional</div></div>
                                            </div>
                                            <div class="tr !py-4">
                                                <div class="td w-1/2 pl-4">outline-variant</div>
                                                <div class="td w-1/2 "><div class="tag-optional">Optional</div></div>
                                            </div>
                                            <div class="divider-bold w-full h-1 bg-vsds-color-neutral-200"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContentElm>
                <ul>
                    <li class="mb-4">
                        <router-link class="content-nav" :to="{hash: '#naming-architecture' }">Naming Architecture</router-link>
                    </li>
                    <li class="mb-4">
                        <router-link class="content-nav" :to="{hash: '#alias-colors' }">Alias colors</router-link>
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