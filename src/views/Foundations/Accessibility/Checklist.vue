<template>
    <main class="grow">
        <Herobanner>
            <template #pageTitle>Checklist</template>
            <template #pageBrief>In software or web design it involves incorporating design principles and techniques that ensure equal access, usability, and inclusion for all users, regardless of their abilities.</template>
        </Herobanner>
        <div class="article flex mt-16 px-6 lg:px-20 box-border gap-10">
            <div class="mainbox">
                <div class="article--main pb-14">
                    <section>
                        <div class="font-bold text-on-surface">Essential Accessibility Features for EdTech Products:</div>
                        <p>The following content outlines the essential accessibility features that educational products must include to comply with U.S. legal requirements and ensure that all students, particularly those with disabilities, can fully engage with the material. These features aren’t merely guidelines—they are mandated by laws such as the <span class="font-bold">ADA, Section 504</span>, and <span class="font-bold">IDEA</span>.</p>
                        <p>For web-based products, many features—like zoom controls and keyboard navigation—are already built into browsers. However, certain accessibility features need to be directly integrated into the product itself to ensure full compliance and provide an inclusive learning experience.</p>
                    </section>
                    <div class="article-section mt-20">
                        <div class="font-bold text-on-surface">Legal Standards to Meet:</div>
                        <ul class="mt-4 list-disc pl-4">
                                <li class="mb-2">
                                    <span class="font-bold block">Americans with Disabilities Act (ADA):</span>
                                    <p class="text-md mt-1">Requires that digital content and tools be accessible to people with disabilities, ensuring equal access to educational resources.</p>
                                </li>
                                <li class="mb-2">
                                    <span class="font-bold block">Section 504 of the Rehabilitation Act: </span>
                                    <p class="text-md mt-1">Requires schools receiving federal funding to provide accommodations for students with disabilities.</p>
                                </li>
                                <li class="mb-2">
                                    <span class="font-bold block">Individuals with Disabilities Education Act (IDEA): </span>
                                    <p class="text-md mt-1">Ensures students with disabilities receive appropriate public education in the least restrictive environment.</p>
                                </li>
                                <li class="mb-2">
                                    <span class="font-bold block">Web Content Accessibility Guidelines (WCAG): </span>
                                    <p class="text-md mt-1">Industry standards for web accessibility that must be met to ensure content is accessible to users with disabilities. The AA level of WCAG 2.1 is generally considered the standard to meet.</p>
                                </li>
                            </ul>
                    </div>
                
                    <div class="article-section mt-20" id="accessibility-checklist">
                        <copyTitle>
                            <template #sectionTitle>Accessibility checklist</template>
                        </copyTitle>
                        <p>The checklist was created based on the Web Content Accessibility Guidelines (WCAG). It focuses solely on the visual design aspect and does not cover development or code-related aspects.</p>
                        <div class="checklistbox mt-6">
                            <el-row class="filter block-col-2">
                                <el-col>
                                <el-dropdown class="w-full flex justify-end" @command="filterCategories">
                                    <span class="el-dropdown-link box-border w-[240px] py-2 pl-2 pr-3 flex items-center justify-between text-sm text-surface-300 border border-outline rounded-md outline-none ring-0 hover:border-on-surface-variant duration-500">
                                        <div class="flex items-center gap-2 text-on-surface">
                                            <el-icon class="el-icon--right ml-0 w-[14px] h-[14px]"><img src="/src/assets/images/icons/icon-filter.svg" alt=""></el-icon>
                                            {{ selectedFilterText }}
                                        </div>
                                        <el-icon class="el-icon--right self-end ml-0 h-full"><img src="/src/assets/images/icon-nav-arrow.svg" alt=""></el-icon>
                                    </span>
                                    <template #dropdown>
                                    <el-dropdown-menu>
                                        <el-dropdown-item command="All" :class="{ current: selectedFilter === 'All' }">All</el-dropdown-item>
                                        <el-dropdown-item command="cateA" :class="{ current: selectedFilter === 'cateA' }">Built into web browsers</el-dropdown-item>
                                        <el-dropdown-item command="cateB" :class="{ current: selectedFilter === 'cateB' }">Custom extensions</el-dropdown-item>
                                    </el-dropdown-menu>
                                    </template>
                                </el-dropdown>
                                </el-col>
                            </el-row>
                            <div class="checklist mt-6 flex flex-wrap lg:grid grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] gap-8">
                                <div data-type="cateA" class="checklist--category w-full px-6 py-6 box-border border border-neutral-300 rounded-2xl hover:shadow-md duration-300">
                                        <div class="category-color flex w-[120px]">
                                            <span class="bg-blue-500 w-full block h-1"></span>
                                            <span class="bg-red-400 w-full block h-1 bg-opacity-20"></span>
                                            <span class="bg-green-500 w-full block h-1 bg-opacity-20"></span>
                                            <span class="bg-purple-500 w-full block h-1 bg-opacity-20"></span>
                                        </div>
                                        <h4>Screen Reader Compatibility</h4>
                                        <p class="mt-3 text-xs">Ensure that all interactive elements (e.g., buttons, forms, links) are navigable and understandable by screen readers.</p>
                                        <div class="wrapper border-blue-100 border-2 rounded-lg box-border px-6 py-6 mt-4 flex flex-col gap-6">
                                            <div class="check-item">
                                                <div class="wrapper">
                                                    <div class="flex gap-2" for="">
                                                        <el-checkbox v-model="checked1">
                                                            <span class="pt-0 block leading-[150%]">
                                                                Make sure all img elements have an alt attribute, and for images containing text, ensure the alt description includes the text from the image.
                                                                <a href="#" target="_blank" class="outlink block text-link underline mt-1">Learn more</a>
                                                            </span>
                                                    </el-checkbox>
                                                    </div>
                                                </div>
                                                <div class="version flex justify-end gap-1 mt-4">
                                                    <span class="inline-block px-2 border border-info-varient text-[10px] text-on-surface rounded-lg">1.1.1</span>
                                                </div>
                                            </div>
                                            <div class="check-item">
                                                <div class="wrapper">
                                                    <div class="flex gap-2" for="">
                                                        <el-checkbox v-model="checked1">
                                                            <span class="pt-0 block leading-[150%]">
                                                                Use heading elements to introduce content, ensuring a logical sequence and including only one h1 element per page or view.
                                                                <a href="#" target="_blank" class="outlink block text-link underline mt-1">Learn more</a>
                                                            </span>
                                                    </el-checkbox>
                                                    </div>
                                                </div>
                                                <div class="version flex justify-end gap-1 mt-4">
                                                    <span class="inline-block px-2 border border-info-varient text-[10px] text-on-surface rounded-lg">2.4.6</span>
                                                </div>
                                            </div>
                                            <div class="check-item">
                                                <div class="wrapper">
                                                    <div class="flex gap-2" for="">
                                                        <el-checkbox v-model="checked1">
                                                            <span class="pt-0 block leading-[150%]">
                                                                Use list elements (ol, ul, and dl elements) for list content.
                                                                <a href="#" target="_blank" class="outlink block text-link underline mt-1">Learn more</a>
                                                            </span>
                                                    </el-checkbox>
                                                    </div>
                                                </div>
                                                <div class="version flex justify-end gap-1 mt-4">
                                                    <span class="inline-block px-2 border border-info-varient text-[10px] text-on-surface rounded-lg">1.3.1</span>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div data-type="cateA cateB" class="checklist--category w-full px-6 py-6 box-border border border-neutral-300 rounded-2xl hover:shadow-md duration-300">
                                        <div class="category-color flex w-[120px]">
                                            <span class="bg-blue-500 w-full block h-1 bg-opacity-20"></span>
                                            <span class="bg-red-400 w-full block h-1 bg-opacity-20"></span>
                                            <span class="bg-green-500 w-full block h-1"></span>
                                            <span class="bg-purple-500 w-full block h-1 bg-opacity-20"></span>
                                        </div>
                                        <h4>Keyboard Accessibility</h4>
                                        <p class="mt-3 text-xs">Ensure that all product functions are accessible via keyboard, as many users cannot rely on a mouse due to physical or motor impairments.</p>
                                        <div class="wrapper border-green-100 border-2 rounded-lg box-border px-6 py-6 mt-4 flex flex-col gap-6">
                                            <div class="check-item">
                                                <div class="wrapper">
                                                    <div class="flex gap-2" for="">
                                                        <el-checkbox v-model="checked1">
                                                            <span class="pt-0 block leading-[150%]">
                                                                Ensure that interactive elements navigated via keyboard input have a visible focus style, and that all controls include :focus states.
                                                                <a href="#" target="_blank" class="outlink block text-link underline mt-1">Learn more</a>
                                                            </span>
                                                    </el-checkbox>
                                                    </div>
                                                </div>
                                                <div class="version flex justify-end gap-1 mt-4">
                                                    <span class="inline-block px-2 border border-info-varient text-[10px] text-on-surface rounded-lg">2.4.7</span>
                                                </div>
                                            </div>
                                            <div class="check-item">
                                                <div class="wrapper">
                                                    <div class="flex gap-2" for="">
                                                        <el-checkbox v-model="checked1">
                                                            <span class="pt-0 block leading-[150%]">
                                                                Check to see that keyboard focus order matches the visual layout.
                                                                <a href="#" target="_blank" class="outlink block text-link underline mt-1">Learn more</a>
                                                            </span>
                                                    </el-checkbox>
                                                    </div>
                                                </div>
                                                <div class="version flex justify-end gap-1 mt-4">
                                                    <span class="inline-block px-2 border border-info-varient text-[10px] text-on-surface rounded-lg">1.3.2</span>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div data-type="cateA cateB" class="checklist--category w-full px-6 py-6 box-border border border-neutral-300 rounded-2xl hover:shadow-md duration-300">
                                        <div class="category-color flex w-[120px]">
                                            <span class="bg-blue-500 w-full block h-1 bg-opacity-20"></span>
                                            <span class="bg-red-400 w-full block h-1 bg-opacity-20"></span>
                                            <span class="bg-green-500 w-full block h-1 bg-opacity-20"></span>
                                            <span class="bg-purple-500 w-full block h-1"></span>
                                        </div>
                                        <h4>Color Contrast and Customizable Text</h4>
                                        <p class="mt-3 text-xs">Provide high color contrast between text and background, along with options to adjust font size and color schemes for users with low vision or color blindness.</p>
                                        <div class="wrapper border-purple-50 border-2 rounded-lg box-border px-6 py-6 mt-4 flex flex-col gap-6">
                                            <div class="check-item">
                                                <div class="wrapper">
                                                    <div class="flex gap-2" for="">
                                                        <el-checkbox v-model="checked1">
                                                            <span class="pt-0 block leading-[150%]">
                                                                Ensure that error, warning, and success states are not communicated by color alone, and check your content in specialized browsing modes.
                                                                <a href="#" target="_blank" class="outlink block text-link underline mt-1">Learn more</a>
                                                            </span>
                                                    </el-checkbox>
                                                    </div>
                                                </div>
                                                <div class="version flex justify-end gap-1 mt-4">
                                                    <span class="inline-block px-2 border border-info-varient text-[10px] text-on-surface rounded-lg">1.4.1</span>
                                                </div>
                                            </div>
                                            <div class="check-item">
                                                <div class="wrapper">
                                                    <div class="flex gap-2" for="">
                                                        <el-checkbox v-model="checked1">
                                                            <span class="pt-0 block leading-[150%]">
                                                                Check the contrast for text and icons: normal-sized text must meet Level AA with a contrast ratio of 4.5:1, while large text and icons must meet Level AA with a ratio of 3:1.<br>
                                                                The contrast of borders for input elements must also meet Level AA with a ratio of 3:1.
                                                                <a href="#" target="_blank" class="outlink block text-link underline mt-1">Learn more</a>
                                                            </span>
                                                    </el-checkbox>
                                                    </div>
                                                </div>
                                                <div class="version flex justify-end gap-1 mt-4">
                                                    <span class="inline-block px-2 border border-info-varient text-[10px] text-on-surface rounded-lg">1.4.3</span>
                                                    <span class="inline-block px-2 border border-info-varient text-[10px] text-on-surface rounded-lg">1.4.11</span>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div data-type="cateB" class="checklist--category w-full px-6 py-6 box-border border border-neutral-300 rounded-2xl hover:shadow-md duration-300">
                                        <div class="category-color flex w-[120px]">
                                            <span class="bg-blue-500 w-full block h-1 bg-opacity-20"></span>
                                            <span class="bg-red-400 w-full block h-1 bg-opacity-20"></span>
                                            <span class="bg-green-500 w-full block h-1 bg-opacity-20"></span>
                                            <span class="bg-purple-500 w-full block h-1"></span>
                                        </div>
                                        <h4>Error Identification and Suggestions</h4>
                                        <p class="mt-3 text-xs">Provide clear feedback when users make errors (e.g., filling out forms or assessments) and offer suggestions for correction.</p>
                                        <div class="wrapper border-purple-50 border-2 rounded-lg box-border px-6 py-6 mt-4 flex flex-col gap-6">
                                            <div class="check-item">
                                                <div class="wrapper">
                                                    <div class="flex gap-2" for="">
                                                        <el-checkbox v-model="checked1">
                                                            <span class="pt-0 block leading-[150%]">
                                                                Make sure that form input errors are displayed in a list above the form after submission, and that error, warning, and success states are not communicated by color alone.
                                                                <a href="#" target="_blank" class="outlink block text-link underline mt-1">Learn more</a>
                                                            </span>
                                                    </el-checkbox>
                                                    </div>
                                                </div>
                                                <div class="version flex justify-end gap-1 mt-4">
                                                    <span class="inline-block px-2 border border-info-varient text-[10px] text-on-surface rounded-lg">1.4.4</span>
                                                    <span class="inline-block px-2 border border-info-varient text-[10px] text-on-surface rounded-lg">3.3.1</span>
                                                </div>
                                            </div>
                                            <div class="check-item">
                                                <div class="wrapper">
                                                    <div class="flex gap-2" for="">
                                                        <el-checkbox v-model="checked1">
                                                            <span class="pt-0 block leading-[150%]">
                                                                Make sure color isn't the only way information is conveyed.
                                                                <a href="#" target="_blank" class="outlink block text-link underline mt-1">Learn more</a>
                                                            </span>
                                                    </el-checkbox>
                                                    </div>
                                                </div>
                                                <div class="version flex justify-end gap-1 mt-4">
                                                    <span class="inline-block px-2 border border-info-varient text-[10px] text-on-surface rounded-lg">1.4.1</span>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div data-type="cateA" class="checklist--category w-full px-6 py-6 box-border border border-neutral-300 rounded-2xl hover:shadow-md duration-300">
                                        <div class="category-color flex w-[120px]">
                                            <span class="bg-blue-500 w-full block h-1 bg-opacity-20"></span>
                                            <span class="bg-red-400 w-full block h-1 bg-opacity-20"></span>
                                            <span class="bg-green-500 w-full block h-1"></span>
                                            <span class="bg-purple-500 w-full block h-1 bg-opacity-20"></span>
                                        </div>
                                        <h4>Focus Indicators</h4>
                                        <p class="mt-3 text-xs">Ensure that users can visually identify which element on the screen is currently selected or focused (e.g., which button is active when navigating by keyboard).</p>
                                        <div class="wrapper border-green-100 border-2 rounded-lg box-border px-6 py-6 mt-4 flex flex-col gap-6">
                                            <div class="check-item">
                                                <div class="wrapper">
                                                    <div class="flex gap-2" for="">
                                                        <el-checkbox v-model="checked1">
                                                            <span class="pt-0 block leading-[150%]">
                                                                Ensure that controls have :focus states.
                                                                <a href="#" target="_blank" class="outlink block text-link underline mt-1">Learn more</a>
                                                            </span>
                                                    </el-checkbox>
                                                    </div>
                                                </div>
                                                <div class="version flex justify-end gap-1 mt-4">
                                                    <span class="inline-block px-2 border border-info-varient text-[10px] text-on-surface rounded-lg">2.4.7</span>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div data-type="cateA" class="checklist--category w-full px-6 py-6 box-border border border-neutral-300 rounded-2xl hover:shadow-md duration-300">
                                        <div class="category-color flex w-[120px]">
                                            <span class="bg-blue-500 w-full block h-1"></span>
                                            <span class="bg-red-400 w-full block h-1 bg-opacity-20"></span>
                                            <span class="bg-green-500 w-full block h-1 bg-opacity-20"></span>
                                            <span class="bg-purple-500 w-full block h-1 bg-opacity-20"></span>
                                        </div>
                                        <h4>Adjustable Visual Display (Magnifiers, Zoom, Backgrounds)</h4>
                                        <p class="mt-3 text-xs">Allow users to magnify text and images or adjust background colors to reduce visual strain (especially for students with visual impairments or dyslexia).</p>
                                        <div class="wrapper border-green-100 border-2 rounded-lg box-border px-6 py-6 mt-4 flex flex-col gap-6">
                                            <div class="check-item">
                                                <div class="wrapper">
                                                    <div class="flex gap-2" for="">
                                                        <el-checkbox v-model="checked1">
                                                            <span class="pt-0 block leading-[150%]">
                                                                Check your content in specialized browsing modes and increase text size to 200%.
                                                                <a href="#" target="_blank" class="outlink block text-link underline mt-1">Learn more</a>
                                                            </span>
                                                    </el-checkbox>
                                                    </div>
                                                </div>
                                                <div class="version flex justify-end gap-1 mt-4">
                                                    <span class="inline-block px-2 border border-info-varient text-[10px] text-on-surface rounded-lg">1.4.1</span>
                                                    <span class="inline-block px-2 border border-info-varient text-[10px] text-on-surface rounded-lg">1.4.4</span>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div data-type="cateA" class="checklist--category w-full px-6 py-6 box-border border border-neutral-300 rounded-2xl hover:shadow-md duration-300">
                                        <div class="category-color flex w-[120px]">
                                            <span class="bg-blue-500 w-full block h-1 bg-opacity-20"></span>
                                            <span class="bg-red-400 w-full block h-1"></span>
                                            <span class="bg-green-500 w-full block h-1 bg-opacity-20"></span>
                                            <span class="bg-purple-500 w-full block h-1 bg-opacity-20"></span>
                                        </div>
                                        <h4>Navigation and Structure Consistency</h4>
                                        <p class="mt-3 text-xs">Ensure consistent and intuitive navigation and content structure across the platform for ease of use. Consistent layouts help students with cognitive impairments or learning disabilities.</p>
                                        <div class="wrapper border-red-50 border-2 rounded-lg box-border px-6 py-6 mt-4 flex flex-col gap-6">
                                            <div class="check-item">
                                                <div class="wrapper">
                                                    <div class="flex gap-2" for="">
                                                        <el-checkbox v-model="checked1">
                                                            <span class="pt-0 block leading-[150%]">
                                                                Use a simple, straightforward, and consistent layout.
                                                                <a href="#" target="_blank" class="outlink block text-link underline mt-1">Learn more</a>
                                                            </span>
                                                        </el-checkbox>
                                                    </div>
                                                </div>
                                                <div class="version flex justify-end gap-1 mt-4">
                                                    <span class="inline-block px-2 border border-info-varient text-[10px] text-on-surface rounded-lg">1.4.10</span>
                                                </div>
                                            </div>
                                            <div class="tips-box p-4 bg-surface-200 rounded-lg mt-6 relative">
                                                <div class="icon absolute top-2 right-2"><img src="/src/assets/images/icons/info-box.svg" alt=""></div>
                                                <div class="border border-info-variant rounded-lg inline-flex items-center pr-2 gap-1">
                                                    <span class="inline-block px-2 bg-tertiary-variant text-[10px] text-on-info-variant rounded-lg">Tips</span>
                                                    <span class="text-[10px] text-on-surface">Product must provide</span>
                                                </div>
                                                <p class="text-xs leading-5">
                                                    Maintain <span class="font-bold"> consistent page layouts and intuitive navigation</span> within your product to prevent confusion for users, especially those with cognitive impairments.
                                                </p>
                                            </div>
                                        </div>
                                </div>
                                <div data-type="cateA" class="checklist--category w-full px-6 py-6 box-border border border-neutral-300 rounded-2xl hover:shadow-md duration-300">
                                        <div class="category-color flex w-[120px]">
                                            <span class="bg-blue-500 w-full block h-1"></span>
                                            <span class="bg-red-400 w-full block h-1 bg-opacity-20"></span>
                                            <span class="bg-green-500 w-full block h-1 bg-opacity-20"></span>
                                            <span class="bg-purple-500 w-full block h-1 bg-opacity-20"></span>
                                        </div>
                                        <h4>Closed Captioning and Live Captions</h4>
                                        <p class="mt-3 text-xs">All video and audio content must include accurate closed captions. Live captioning for real-time lectures or videos is also necessary for students with hearing impairments.</p>
                                        <div class="wrapper border-blue-100 border-2 rounded-lg box-border px-6 py-6 mt-4 flex flex-col gap-6">
                                            <div class="check-item">
                                                <div class="wrapper">
                                                    <div class="flex gap-2" for="">
                                                        <el-checkbox v-model="checked1">
                                                            <span class="pt-0 block leading-[150%]">
                                                                Confirm the presence of captions.
                                                                <a href="#" target="_blank" class="outlink block text-link underline mt-1">Learn more</a>
                                                            </span>
                                                        </el-checkbox>
                                                    </div>
                                                </div>
                                                <div class="version flex justify-end gap-1 mt-4">
                                                    <span class="inline-block px-2 border border-info-varient text-[10px] text-on-surface rounded-lg">1.2.2</span>
                                                </div>
                                            </div>
                                            <div class="check-item">
                                                <div class="wrapper">
                                                    <div class="flex gap-2" for="">
                                                        <el-checkbox v-model="checked1">
                                                            <span class="pt-0 block leading-[150%]">
                                                                Confirm that transcripts are available.
                                                                <a href="#" target="_blank" class="outlink block text-link underline mt-1">Learn more</a>
                                                            </span>
                                                        </el-checkbox>
                                                    </div>
                                                </div>
                                                <div class="version flex justify-end gap-1 mt-4">
                                                    <span class="inline-block px-2 border border-info-varient text-[10px] text-on-surface rounded-lg">1.1.1</span>
                                                </div>
                                            </div>
                                            <div class="tips-box p-4 bg-surface-200 rounded-lg relative">
                                                <div class="icon absolute top-2 right-2"><img src="/src/assets/images/icons/info-box.svg" alt=""></div>
                                                <div class="border border-info-variant rounded-lg inline-flex items-center pr-2 gap-1">
                                                    <span class="inline-block px-2 bg-tertiary-variant text-[10px] text-on-info-variant rounded-lg">Tips</span>
                                                    <span class="text-[10px] text-on-surface">Product must provide</span>
                                                </div>
                                                <p class="text-xs leading-5">
                                                    Include <span class="font-bold">built-in closed captioning tools</span> for recorded and live media, ensuring accuracy and context-specific captions.
                                                </p>
                                            </div>
                                        </div>
                                </div>
                                <div data-type="cateA" class="checklist--category w-full px-6 py-6 box-border border border-neutral-300 rounded-2xl hover:shadow-md duration-300">
                                        <div class="category-color flex w-[120px]">
                                            <span class="bg-blue-500 w-full block h-1"></span>
                                            <span class="bg-red-400 w-full block h-1 bg-opacity-20"></span>
                                            <span class="bg-green-500 w-full block h-1 bg-opacity-20"></span>
                                            <span class="bg-purple-500 w-full block h-1 bg-opacity-20"></span>
                                        </div>
                                        <h4>Accessible Learning Materials (Digital and Print Options)</h4>
                                        <p class="mt-3 text-xs">Ensure all learning materials are available in multiple formats: large print, digital files (adjustable), audio files, and braille (if applicable).</p>
                                        <div class="wrapper border-blue-100 border-2 rounded-lg box-border px-6 py-6 mt-4 flex flex-col gap-6">
                                            <div class="check-item">
                                                <div class="wrapper">
                                                    <div class="flex gap-2" for="">
                                                        <el-checkbox v-model="checked1">
                                                            <span class="pt-0 block leading-[150%]">
                                                                Make sure readability is maintained and layout overlap is avoided when increasing text size to 200%.
                                                                <a href="#" target="_blank" class="outlink block text-link underline mt-1">Learn more</a>
                                                            </span>
                                                        </el-checkbox>
                                                    </div>
                                                </div>
                                                <div class="version flex justify-end gap-1 mt-4">
                                                    <span class="inline-block px-2 border border-info-varient text-[10px] text-on-surface rounded-lg">1.4.4</span>
                                                </div>
                                            </div>
                                            <div class="tips-box p-4 bg-surface-200 rounded-lg relative">
                                                <div class="icon absolute top-2 right-2"><img src="/src/assets/images/icons/info-box.svg" alt=""></div>
                                                <div class="border border-info-variant rounded-lg inline-flex items-center pr-2 gap-1">
                                                    <span class="inline-block px-2 bg-tertiary-variant text-[10px] text-on-info-variant rounded-lg">Tips</span>
                                                    <span class="text-[10px] text-on-surface">Product must provide</span>
                                                </div>
                                                <p class="text-xs leading-5">
                                                    Provide learning materials in <span class="font-bold">multiple formats</span> (large print, audio, digital) and ensure that digital files (e.g., PDFs) are properly tagged for screen readers.
                                                </p>
                                            </div>
                                        </div>
                                </div>
                                <div data-type="cateA" class="checklist--category w-full px-6 py-6 box-border border border-neutral-300 rounded-2xl hover:shadow-md duration-300">
                                        <div class="category-color flex w-[120px]">
                                            <span class="bg-blue-500 w-full block h-1"></span>
                                            <span class="bg-red-400 w-full block h-1 bg-opacity-20"></span>
                                            <span class="bg-green-500 w-full block h-1 bg-opacity-20"></span>
                                            <span class="bg-purple-500 w-full block h-1 bg-opacity-20"></span>
                                        </div>
                                        <h4>Descriptive Audio/Video for Visual Impairments (Audio Descriptions)</h4>
                                        <p class="mt-3 text-xs">Provide audio descriptions for all visual content, explaining what is happening on screen for students with visual impairments.</p>
                                        <div class="wrapper border-blue-100 border-2 rounded-lg box-border px-6 py-6 mt-4 flex flex-col gap-6">
                                            <div class="check-item">
                                                <div class="wrapper">
                                                    <div class="flex gap-2" for="">
                                                        <el-checkbox v-model="checked1">
                                                            <span class="pt-0 block leading-[150%]">
                                                                Make sure instructions are not visual or audio-only.
                                                                <a href="#" target="_blank" class="outlink block text-link underline mt-1">Learn more</a>
                                                            </span>
                                                        </el-checkbox>
                                                    </div>
                                                </div>
                                                <div class="version flex justify-end gap-1 mt-4">
                                                    <span class="inline-block px-2 border border-info-varient text-[10px] text-on-surface rounded-lg">1.3.3</span>
                                                </div>
                                            </div>
                                            <div class="tips-box p-4 bg-surface-200 rounded-lg relative">
                                                <div class="icon absolute top-2 right-2"><img src="/src/assets/images/icons/info-box.svg" alt=""></div>
                                                <div class="border border-info-variant rounded-lg inline-flex items-center pr-2 gap-1">
                                                    <span class="inline-block px-2 bg-tertiary-variant text-[10px] text-on-info-variant rounded-lg">Tips</span>
                                                    <span class="text-[10px] text-on-surface">Product must provide</span>
                                                </div>
                                                <p class="text-xs leading-5">
                                                    Ensure your product includes <span class="font-bold">audio descriptions</span> for videos, charts, and other visual content for students with visual impairments.
                                                </p>
                                            </div>
                                        </div>
                                </div>
                                <div data-type="cateA" class="checklist--category w-full px-6 py-6 box-border border border-neutral-300 rounded-2xl hover:shadow-md duration-300">
                                        <div class="category-color flex w-[120px]">
                                            <span class="bg-blue-500 w-full block h-1"></span>
                                            <span class="bg-red-400 w-full block h-1 bg-opacity-20"></span>
                                            <span class="bg-green-500 w-full block h-1 bg-opacity-20"></span>
                                            <span class="bg-purple-500 w-full block h-1 bg-opacity-20"></span>
                                        </div>
                                        <h4>Clear and Simple Language</h4>
                                        <p class="mt-3 text-xs">Content should be presented using clear and simple language for students with cognitive disabilities.</p>
                                        <div class="wrapper border-blue-100 border-2 rounded-lg box-border px-6 py-6 mt-4 flex flex-col gap-6">
                                            <div class="check-item">
                                                <div class="wrapper">
                                                    <div class="flex gap-2" for="">
                                                        <el-checkbox v-model="checked1">
                                                            <span class="pt-0 block leading-[150%]">
                                                                Use plain language and avoid figures of speech, idioms, and complicated metaphors.
                                                                <a href="#" target="_blank" class="outlink block text-link underline mt-1">Learn more</a>
                                                            </span>
                                                        </el-checkbox>
                                                    </div>
                                                </div>
                                                <div class="version flex justify-end gap-1 mt-4">
                                                    <span class="inline-block px-2 border border-info-varient text-[10px] text-on-surface rounded-lg">3.1.5</span>
                                                </div>
                                            </div>
                                            <div class="tips-box p-4 bg-surface-200 rounded-lg relative">
                                                <div class="icon absolute top-2 right-2"><img src="/src/assets/images/icons/info-box.svg" alt=""></div>
                                                <div class="border border-info-variant rounded-lg inline-flex items-center pr-2 gap-1">
                                                    <span class="inline-block px-2 bg-tertiary-variant text-[10px] text-on-info-variant rounded-lg">Tips</span>
                                                    <span class="text-[10px] text-on-surface">Product must provide</span>
                                                </div>
                                                <p class="text-xs leading-5">
                                                    Ensure <span class="font-bold">clear and simple language</span> is used in all content, especially for students with cognitive disabilities.
                                                </p>
                                            </div>
                                        </div>
                                </div>
                                <div data-type="cateA" class="checklist--category w-full px-6 py-6 box-border border border-neutral-300 rounded-2xl hover:shadow-md duration-300">
                                        <div class="category-color flex w-[120px]">
                                            <span class="bg-blue-500 w-full block h-1"></span>
                                            <span class="bg-red-400 w-full block h-1 bg-opacity-20"></span>
                                            <span class="bg-green-500 w-full block h-1 bg-opacity-20"></span>
                                            <span class="bg-purple-500 w-full block h-1 bg-opacity-20"></span>
                                        </div>
                                        <h4>Accessible Data Visualization</h4>
                                        <p class="mt-3 text-xs">Ensure that graphs, charts, and visual data representations are understandable for students with visual impairments or cognitive challenges.</p>
                                        <div class="wrapper border-blue-100 border-2 rounded-lg box-border px-6 py-6 mt-4 flex flex-col gap-6">
                                            <div class="check-item">
                                                <div class="wrapper">
                                                    <div class="flex gap-2" for="">
                                                        <el-checkbox v-model="checked1">
                                                            <span class="pt-0 block leading-[150%]">
                                                                Provide a text alternative for complex images such as charts, graphs, and maps.
                                                                <a href="#" target="_blank" class="outlink block text-link underline mt-1">Learn more</a>
                                                            </span>
                                                        </el-checkbox>
                                                    </div>
                                                </div>
                                                <div class="version flex justify-end gap-1 mt-4">
                                                    <span class="inline-block px-2 border border-info-varient text-[10px] text-on-surface rounded-lg">1.1.1</span>
                                                </div>
                                            </div>
                                            <div class="tips-box p-4 bg-surface-200 rounded-lg relative">
                                                <div class="icon absolute top-2 right-2"><img src="/src/assets/images/icons/info-box.svg" alt=""></div>
                                                <div class="border border-info-variant rounded-lg inline-flex items-center pr-2 gap-1">
                                                    <span class="inline-block px-2 bg-tertiary-variant text-[10px] text-on-info-variant rounded-lg">Tips</span>
                                                    <span class="text-[10px] text-on-surface">Product must provide</span>
                                                </div>
                                                <p class="text-xs leading-5">
                                                    Offer <span class="font-bold">text alternatives</span> for charts and graphs, and ensure high contrast and screen reader compatibility for complex data representations.
                                                </p>
                                            </div>
                                        </div>
                                </div>
                                <div data-type="cateA" class="checklist--category w-full px-6 py-6 box-border border border-neutral-300 rounded-2xl hover:shadow-md duration-300">
                                        <div class="category-color flex w-[120px]">
                                            <span class="bg-blue-500 w-full block h-1"></span>
                                            <span class="bg-red-400 w-full block h-1 bg-opacity-20"></span>
                                            <span class="bg-green-500 w-full block h-1 bg-opacity-20"></span>
                                            <span class="bg-purple-500 w-full block h-1 bg-opacity-20"></span>
                                        </div>
                                        <h4>Multilingual and Translation Support</h4>
                                        <p class="mt-3 text-xs">Offer built-in multilingual support and automatic or manual translation for non-native speakers or English language learners.</p>
                                        <div class="wrapper border-blue-100 border-2 rounded-lg box-border px-6 py-6 mt-4 flex flex-col gap-6">
                                            <div class="check-item">
                                                <div class="wrapper">
                                                    <div class="flex gap-2" for="">
                                                        <el-checkbox v-model="checked1">
                                                            <span class="pt-0 block leading-[150%]">
                                                                Make sure readability is maintained and layout overlap is avoided when increasing text size to 200%.
                                                                <a href="#" target="_blank" class="outlink block text-link underline mt-1">Learn more</a>
                                                            </span>
                                                        </el-checkbox>
                                                    </div>
                                                </div>
                                                <div class="version flex justify-end gap-1 mt-4">
                                                    <span class="inline-block px-2 border border-info-varient text-[10px] text-on-surface rounded-lg">1.4.4</span>
                                                </div>
                                            </div>
                                            <div class="tips-box p-4 bg-surface-200 rounded-lg relative">
                                                <div class="icon absolute top-2 right-2"><img src="/src/assets/images/icons/info-box.svg" alt=""></div>
                                                <div class="border border-info-variant rounded-lg inline-flex items-center pr-2 gap-1">
                                                    <span class="inline-block px-2 bg-tertiary-variant text-[10px] text-on-info-variant rounded-lg">Tips</span>
                                                    <span class="text-[10px] text-on-surface">Product must provide</span>
                                                </div>
                                                <p class="text-xs leading-5">
                                                    Provide <span class="font-bold">multilingual support</span> and translation for critical learning content and instructions for English language learners or non-native speakers.
                                                </p>
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
                        <router-link class="content-nav" :to="{hash: '#accessibility-checklist' }">Accessibility checklist</router-link>
                    </li>
                </ul>
            </ContentElm>
        </div>
    </main>
</template>

<script setup>
import { ref, onMounted,onUnmounted,computed,nextTick } from 'vue';
import Herobanner from '/src/layouts/Herobanner/Herobanner.vue'
import copyTitle from '/src/components/copyTitle/copyTitle.vue'
import ContentElm from '/src/layouts/ContentElm/ContentElm.vue'
import { useRouter } from 'vue-router';
const router = useRouter();
const selectedFilter = ref('All');
const selectedFilterText = ref('Tips');
const filterCategories = (command) => {
  selectedFilter.value = command;
  const categories = document.querySelectorAll('.checklist--category');
  selectedFilterText.value = computed(() => {
    if (selectedFilter.value === 'All') return 'All';
    if (selectedFilter.value === 'cateA') return 'Built into web browsers';
    if (selectedFilter.value === 'cateB') return 'Custom extensions';
    return 'Tips';
    });
  categories.forEach((category) => {
    const type = category.getAttribute('data-type');
    console.log(type);
    if (command === 'All' || type.split(' ').includes(command)) {
      category.classList.remove('hidden');
    } else {
      category.classList.add('hidden');
    }
  });
};
onMounted(() => {
  filterCategories('All');
  selectedFilterText.value = "Tips"
});


</script>
<style scoped>
</style>