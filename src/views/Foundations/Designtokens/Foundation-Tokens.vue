<template>
    <main class="grow">
        <Herobanner :showHeroBrief="false">
            <template #pageTitle>Foundation tokens</template>
        </Herobanner>
        <div class="article flex mt-16 px-6 lg:px-20 box-border gap-10">
            <div class="mainbox w-full">
                <div class="article--main pb-14">
                    <a href="./dataimg/design-tokens-1.jpg" download class="actbtn w-[225px] h-[135px] flex flex-col relative px-5 py-4 border border-outline rounded-xl gap-3 shadow-md mt-8">
                        <div class="icon">
                            <img src="/src/assets/images/icons/downloadfile-icon.svg" alt="">
                        </div>
                        <div class="actbtn--inner">
                            <span class="text-sm text-on-surface">Foundation token excel file</span>
                            <p class="text-xs text-on-surface-variant mt-2">.xls</p>
                        </div>
                        <img src="/src/assets/images/icons/arrow-down-to-line.svg" class="absolute right-3 top-3" alt="">
                    </a>
                    <div class="article-section mt-20" id="naming-architecture">
                        <copyTitle>
                            <template #sectionTitle>Naming architecture</template>
                        </copyTitle>
                        <section>
                            <p>
                                Foundation token names are constructed using the prefix <span class="font-bold">VSDS</span> (for ViewSonic Design System), combined with the visual element, element category, and value.
                            </p>
                            <div class="imgbox w-full mt-6">
                                <img src="./dataimg/foundation-tokens-1.jpg" alt="">
                            </div>
                        </section>
                    </div>
                    <div class="article-section mt-20" id="color">
                        <copyTitle>
                            <template #sectionTitle>Color</template>
                        </copyTitle>
                        <div class="foundation-section color-palette w-full flex flex-wrap gap-12 ">
                            <div class="wrapper w-full md:w-[calc((100%_-_48px)/2)] 2xl:w-[calc((100%_-_96px)/3)]">
                                <h4 class="name mb-3 mt-0">Blue</h4>
                                <div class="custom-table">
                                    <div class="tablebox">
                                        <div class="thead">
                                            <div class="tr">
                                                <div class="th w-2/12"></div>
                                                <div class="th w-8/12 grow">Name</div>
                                                <div class="th w-[100px] shrink-0">Value</div>
                                            </div>
                                        </div>
                                        <div class="tbody">
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-blue-50"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-blue-50</div>
                                                <div class="td w-[100px] shrink-0">#F6F9FF</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-blue-100"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-blue-100</div>
                                                <div class="td w-[100px] shrink-0">#E5ECFF</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-blue-200"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-blue-200</div>
                                                <div class="td w-[100px] shrink-0">#BCCEFE</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-blue-300"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-blue-300</div>
                                                <div class="td w-[100px] shrink-0">#86A1F4</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-blue-400"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-blue-400</div>
                                                <div class="td w-[100px] shrink-0">#5D80ED</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-blue-500"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-blue-500</div>
                                                <div class="td w-[100px] shrink-0">#4C71D2</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-blue-600"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-blue-600</div>
                                                <div class="td w-[100px] shrink-0">#3C5AAA</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-blue-700"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-blue-700</div>
                                                <div class="td w-[100px] shrink-0">#41538A</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-blue-800"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-blue-800</div>
                                                <div class="td w-[100px] shrink-0">#2F3E6D</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-blue-900"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-blue-900</div>
                                                <div class="td w-[100px] shrink-0">#1F2E5C</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="wrapper w-full md:w-[calc((100%_-_48px)/2)] 2xl:w-[calc((100%_-_96px)/3)]">
                                <h4 class="name mb-3 mt-0">Sky</h4>
                                <div class="custom-table">
                                    <div class="tablebox">
                                        <div class="thead">
                                            <div class="tr">
                                                <div class="th w-2/12"></div>
                                                <div class="th w-8/12 grow">Name</div>
                                                <div class="th w-[100px] shrink-0">Value</div>
                                            </div>
                                        </div>
                                        <div class="tbody">
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-sky-50"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-sky-50</div>
                                                <div class="td w-[100px] shrink-0">#EBF6FF</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-sky-100"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-sky-100</div>
                                                <div class="td w-[100px] shrink-0">#D6EDFF</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-sky-200"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-sky-200</div>
                                                <div class="td w-[100px] shrink-0">#B2D7F1</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-sky-300"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-sky-300</div>
                                                <div class="td w-[100px] shrink-0">#94C3E7</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-sky-400"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-sky-400</div>
                                                <div class="td w-[100px] shrink-0">#5EA4DA</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-sky-500"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-sky-500</div>
                                                <div class="td w-[100px] shrink-0">#2F88CC</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-sky-600"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-sky-600</div>
                                                <div class="td w-[100px] shrink-0">#2572AE</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-sky-700"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-sky-700</div>
                                                <div class="td w-[100px] shrink-0">#185788</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-sky-800"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-sky-800</div>
                                                <div class="td w-[100px] shrink-0">#094370</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-sky-900"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-sky-900</div>
                                                <div class="td w-[100px] shrink-0">#04345B</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="wrapper w-full md:w-[calc((100%_-_48px)/2)] 2xl:w-[calc((100%_-_96px)/3)]">
                                <h4 class="name mb-3 mt-0">Slate</h4>
                                <div class="custom-table">
                                    <div class="tablebox">
                                        <div class="thead">
                                            <div class="tr">
                                                <div class="th w-2/12"></div>
                                                <div class="th w-8/12 grow">Name</div>
                                                <div class="th w-[100px] shrink-0">Value</div>
                                            </div>
                                        </div>
                                        <div class="tbody">
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-slate-50"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-slate-50</div>
                                                <div class="td w-[100px] shrink-0">#E9EAF0</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-slate-100"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-slate-100</div>
                                                <div class="td w-[100px] shrink-0">#D3D6E1</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-slate-200"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-slate-200</div>
                                                <div class="td w-[100px] shrink-0">#C2C6D5</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-slate-300"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-slate-300</div>
                                                <div class="td w-[100px] shrink-0">#A7ADC0</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-slate-400"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-slate-400</div>
                                                <div class="td w-[100px] shrink-0">#838CA6</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-slate-500"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-slate-500</div>
                                                <div class="td w-[100px] shrink-0">#636D8A</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-slate-600"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-slate-600</div>
                                                <div class="td w-[100px] shrink-0">#3C455D</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-slate-700"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-slate-700</div>
                                                <div class="td w-[100px] shrink-0">#20273E</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-slate-800"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-slate-800</div>
                                                <div class="td w-[100px] shrink-0">#151C32</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-slate-900"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-slate-900</div>
                                                <div class="td w-[100px] shrink-0">#000C2B</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="wrapper w-full md:w-[calc((100%_-_48px)/2)] 2xl:w-[calc((100%_-_96px)/3)]">
                                <h4 class="name mb-3 mt-0">Red</h4>
                                <div class="custom-table">
                                    <div class="tablebox">
                                        <div class="thead">
                                            <div class="tr">
                                                <div class="th w-2/12"></div>
                                                <div class="th w-8/12 grow">Name</div>
                                                <div class="th w-[100px] shrink-0">Value</div>
                                            </div>
                                        </div>
                                        <div class="tbody">
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-red-50"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-red-50</div>
                                                <div class="td w-[100px] shrink-0">#FFF3F5</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-red-100"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-red-100</div>
                                                <div class="td w-[100px] shrink-0">#FFD9DF</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-red-200"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-red-200</div>
                                                <div class="td w-[100px] shrink-0">#FFBEC9</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-red-300"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-red-300</div>
                                                <div class="td w-[100px] shrink-0">#ED8092</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-red-400"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-red-400</div>
                                                <div class="td w-[100px] shrink-0">#E7556E</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-red-500"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-red-500</div>
                                                <div class="td w-[100px] shrink-0">#DB0025</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-red-600"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-red-600</div>
                                                <div class="td w-[100px] shrink-0">#BD0020</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-red-700"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-red-700</div>
                                                <div class="td w-[100px] shrink-0">#A5001C</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-red-800"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-red-800</div>
                                                <div class="td w-[100px] shrink-0">#6E0013</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-red-900"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-red-900</div>
                                                <div class="td w-[100px] shrink-0">#41000B</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="wrapper w-full md:w-[calc((100%_-_48px)/2)] 2xl:w-[calc((100%_-_96px)/3)]">
                                <h4 class="name mb-3 mt-0">Cyan</h4>
                                <div class="custom-table">
                                    <div class="tablebox">
                                        <div class="thead">
                                            <div class="tr">
                                                <div class="th w-2/12"></div>
                                                <div class="th w-8/12 grow">Name</div>
                                                <div class="th w-[100px] shrink-0">Value</div>
                                            </div>
                                        </div>
                                        <div class="tbody">
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-cyan-50"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-cyan-50</div>
                                                <div class="td w-[100px] shrink-0">#EBFAFA</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-cyan-100"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-cyan-100</div>
                                                <div class="td w-[100px] shrink-0">#D6F9F9</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-cyan-200"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-cyan-200</div>
                                                <div class="td w-[100px] shrink-0">#A6EFF1</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-cyan-300"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-cyan-300</div>
                                                <div class="td w-[100px] shrink-0">#69E3E6</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-cyan-400"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-cyan-400</div>
                                                <div class="td w-[100px] shrink-0">#3AC9CC</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-cyan-500"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-cyan-500</div>
                                                <div class="td w-[100px] shrink-0">#35B7BA</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-cyan-600"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-cyan-600</div>
                                                <div class="td w-[100px] shrink-0">#2C9799</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-cyan-700"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-cyan-700</div>
                                                <div class="td w-[100px] shrink-0">#23797A</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-cyan-800"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-cyan-800</div>
                                                <div class="td w-[100px] shrink-0">#1A5A5C</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-cyan-900"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-cyan-900</div>
                                                <div class="td w-[100px] shrink-0">#144647</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="wrapper w-full md:w-[calc((100%_-_48px)/2)] 2xl:w-[calc((100%_-_96px)/3)]">
                                <h4 class="name mb-3 mt-0">Green</h4>
                                <div class="custom-table">
                                    <div class="tablebox">
                                        <div class="thead">
                                            <div class="tr">
                                                <div class="th w-2/12"></div>
                                                <div class="th w-8/12 grow">Name</div>
                                                <div class="th w-[100px] shrink-0">Value</div>
                                            </div>
                                        </div>
                                        <div class="tbody">
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-green-50"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-green-50</div>
                                                <div class="td w-[100px] shrink-0">#F6FFEB</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-green-100"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-green-100</div>
                                                <div class="td w-[100px] shrink-0">#E7F7D0</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-green-200"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-green-200</div>
                                                <div class="td w-[100px] shrink-0">#D9F2B6</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-green-300"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-green-300</div>
                                                <div class="td w-[100px] shrink-0">#CBEBA0</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-green-400"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-green-400</div>
                                                <div class="td w-[100px] shrink-0">#B1E26E</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-green-500"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-green-500</div>
                                                <div class="td w-[100px] shrink-0">#81B23D</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-green-600"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-green-600</div>
                                                <div class="td w-[100px] shrink-0">#638C2A</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-green-700"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-green-700</div>
                                                <div class="td w-[100px] shrink-0">#48720F</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-green-800"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-green-800</div>
                                                <div class="td w-[100px] shrink-0">#3D5C12</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-green-900"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-green-900</div>
                                                <div class="td w-[100px] shrink-0">#2A4208</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="wrapper w-full md:w-[calc((100%_-_48px)/2)] 2xl:w-[calc((100%_-_96px)/3)]">
                                <h4 class="name mb-3 mt-0">Yellow</h4>
                                <div class="custom-table">
                                    <div class="tablebox">
                                        <div class="thead">
                                            <div class="tr">
                                                <div class="th w-2/12"></div>
                                                <div class="th w-8/12 grow">Name</div>
                                                <div class="th w-[100px] shrink-0">Value</div>
                                            </div>
                                        </div>
                                        <div class="tbody">
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-yellow-50"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-yellow-50</div>
                                                <div class="td w-[100px] shrink-0">#FFFAEC</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-yellow-100"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-yellow-100</div>
                                                <div class="td w-[100px] shrink-0">#FDE9B4</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-yellow-200"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-yellow-200</div>
                                                <div class="td w-[100px] shrink-0">#FEDC85</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-yellow-300"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-yellow-300</div>
                                                <div class="td w-[100px] shrink-0">#FEC841</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-yellow-400"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-yellow-400</div>
                                                <div class="td w-[100px] shrink-0">#FFB800</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-yellow-500"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-yellow-500</div>
                                                <div class="td w-[100px] shrink-0">#FC9700</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-yellow-600"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-yellow-600</div>
                                                <div class="td w-[100px] shrink-0">#F67F00</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-yellow-700"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-yellow-700</div>
                                                <div class="td w-[100px] shrink-0">#EC6200</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-yellow-800"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-yellow-800</div>
                                                <div class="td w-[100px] shrink-0">#E34521</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-yellow-900"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-yellow-900</div>
                                                <div class="td w-[100px] shrink-0">#C52703</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="wrapper w-full md:w-[calc((100%_-_48px)/2)] 2xl:w-[calc((100%_-_96px)/3)]">
                                <h4 class="name mb-3 mt-0">Violet</h4>
                                <div class="custom-table">
                                    <div class="tablebox">
                                        <div class="thead">
                                            <div class="tr">
                                                <div class="th w-2/12"></div>
                                                <div class="th w-8/12 grow">Name</div>
                                                <div class="th w-[100px] shrink-0">Value</div>
                                            </div>
                                        </div>
                                        <div class="tbody">
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-violet-50"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-violet-50</div>
                                                <div class="td w-[100px] shrink-0">#EDEDFD</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-violet-100"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-violet-100</div>
                                                <div class="td w-[100px] shrink-0">#DADAFC</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-violet-200"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-violet-200</div>
                                                <div class="td w-[100px] shrink-0">#B6B6F9</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-violet-300"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-violet-300</div>
                                                <div class="td w-[100px] shrink-0">#9191F6</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-violet-400"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-violet-400</div>
                                                <div class="td w-[100px] shrink-0">#6D6DF3</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-violet-500"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-violet-500</div>
                                                <div class="td w-[100px] shrink-0">#4848F0</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-violet-600"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-violet-600</div>
                                                <div class="td w-[100px] shrink-0">#3B3BD1</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-violet-700"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-violet-700</div>
                                                <div class="td w-[100px] shrink-0">#2E2EB2</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-violet-800"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-violet-800</div>
                                                <div class="td w-[100px] shrink-0">#212194</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-violet-900"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-violet-900</div>
                                                <div class="td w-[100px] shrink-0">#141475</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="wrapper w-full md:w-[calc((100%_-_48px)/2)] 2xl:w-[calc((100%_-_96px)/3)]">
                                <h4 class="name mb-3 mt-0">Purple</h4>
                                <div class="custom-table">
                                    <div class="tablebox">
                                        <div class="thead">
                                            <div class="tr">
                                                <div class="th w-2/12"></div>
                                                <div class="th w-8/12 grow">Name</div>
                                                <div class="th w-[100px] shrink-0">Value</div>
                                            </div>
                                        </div>
                                        <div class="tbody">
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-purple-50"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-purple-50</div>
                                                <div class="td w-[100px] shrink-0">#F6EAFF</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-purple-100"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-purple-100</div>
                                                <div class="td w-[100px] shrink-0">#E5C3FF</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-purple-200"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-purple-200</div>
                                                <div class="td w-[100px] shrink-0">#CA87FF</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-purple-300"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-purple-300</div>
                                                <div class="td w-[100px] shrink-0">#B95FFF</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-purple-400"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-purple-400</div>
                                                <div class="td w-[100px] shrink-0">#A737FF</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-purple-500"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-purple-500</div>
                                                <div class="td w-[100px] shrink-0">#882CCF</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-purple-600"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-purple-600</div>
                                                <div class="td w-[100px] shrink-0">#68219F</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-purple-700"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-purple-700</div>
                                                <div class="td w-[100px] shrink-0">#48166E</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-purple-800"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-purple-800</div>
                                                <div class="td w-[100px] shrink-0">#360A57</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-purple-900"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-purple-900</div>
                                                <div class="td w-[100px] shrink-0">#23003D</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="wrapper w-full">
                                <h4 class="name mb-3 mt-0">Neutral</h4>
                                <div class="custom-table gap-0 w-full flex flex-wrap md:gap-12 ">
                                    <div class="tablebox w-full md:w-[calc((100%_-_48px)/2)] 2xl:w-[calc((100%_-_96px)/3)]">
                                        <div class="thead">
                                            <div class="tr">
                                                <div class="th w-2/12"></div>
                                                <div class="th w-8/12 grow">Name</div>
                                                <div class="th w-[100px] shrink-0">Value</div>
                                            </div>
                                        </div>
                                        <div class="tbody">
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-neutral-0 border border-vsds-color-neutral-200"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-neutral-0</div>
                                                <div class="td w-[100px] shrink-0">#FFFFFF</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-neutral-50"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-neutral-50</div>
                                                <div class="td w-[100px] shrink-0">#FAFAFA</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-neutral-100"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-neutral-100</div>
                                                <div class="td w-[100px] shrink-0">#F6F6F6</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-neutral-150"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-neutral-150</div>
                                                <div class="td w-[100px] shrink-0">#F2F2F2</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-neutral-200"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-neutral-200</div>
                                                <div class="td w-[100px] shrink-0">#EBEBEB</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-neutral-250"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-neutral-250</div>
                                                <div class="td w-[100px] shrink-0">#E9E9E9</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-neutral-300"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-neutral-300</div>
                                                <div class="td w-[100px] shrink-0">#E5E5E5</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-neutral-350"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-neutral-350</div>
                                                <div class="td w-[100px] shrink-0">#DEDEDE</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-neutral-400"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-neutral-400</div>
                                                <div class="td w-[100px] shrink-0">#CFCFCF</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-neutral-450"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-neutral-450</div>
                                                <div class="td w-[100px] shrink-0">#C2C2C2</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-neutral-500"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-neutral-500</div>
                                                <div class="td w-[100px] shrink-0">#B2B2B2</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tablebox w-full md:w-[calc((100%_-_48px)/2)] 2xl:w-[calc((100%_-_96px)/3)]">
                                        <div class="thead hidden md:block">
                                            <div class="tr">
                                                <div class="th w-2/12"></div>
                                                <div class="th w-8/12 grow">Name</div>
                                                <div class="th w-[100px] shrink-0">Value</div>
                                            </div>
                                        </div>
                                        <div class="tbody">
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-neutral-550"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-neutral-550</div>
                                                <div class="td w-[100px] shrink-0">#A4A4A4</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-neutral-600"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-neutral-600</div>
                                                <div class="td w-[100px] shrink-0">#999999</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-neutral-650"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-neutral-650</div>
                                                <div class="td w-[100px] shrink-0">#797979</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-neutral-700"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-neutral-700</div>
                                                <div class="td w-[100px] shrink-0">#666666</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-neutral-750"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-neutral-750</div>
                                                <div class="td w-[100px] shrink-0">#5E5E5E</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-neutral-800"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-neutral-800</div>
                                                <div class="td w-[100px] shrink-0">#4D4D4D</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-neutral-850"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-neutral-850</div>
                                                <div class="td w-[100px] shrink-0">#404041</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-neutral-900"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-neutral-900</div>
                                                <div class="td w-[100px] shrink-0">#333333</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-neutral-950"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-neutral-950</div>
                                                <div class="td w-[100px] shrink-0">#2A2A2A</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-2/12 flex justify-center"><span class="color-ticket bg-vsds-color-neutral-1000"></span></div>
                                                <div class="td w-8/12 grow">vsds-color-neutral-1000</div>
                                                <div class="td w-[100px] shrink-0">#000000</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="divider w-full h-[1px] bg-neutral-300 mt-20"></div>
                    <div class="article-section mt-20" id="blur">
                        <copyTitle>
                            <template #sectionTitle>Blur</template>
                        </copyTitle>
                        <div class="foundation-section blurlist w-full flex flex-wrap gap-12 ">
                            <div class="wrapper w-full">
                                <div class="custom-table">
                                    <div class="tablebox">
                                        <div class="thead">
                                            <div class="tr">
                                                <div class="th w-10/12 grow box-border pl-4">Name</div>
                                                <div class="th w-[100px] shrink-0">Value</div>
                                            </div>
                                        </div>
                                        <div class="tbody">
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-blur-50</div>
                                                <div class="td w-[100px] shrink-0">4</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-blur-100</div>
                                                <div class="td w-[100px] shrink-0">8</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-blur-200</div>
                                                <div class="td w-[100px] shrink-0">16</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-blur-300</div>
                                                <div class="td w-[100px] shrink-0">24</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-blur-400</div>
                                                <div class="td w-[100px] shrink-0">32</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="divider w-full h-[1px] bg-neutral-300 mt-20"></div>
                    <div class="article-section mt-20" id="border-width">
                        <copyTitle>
                            <template #sectionTitle>Border width</template>
                        </copyTitle>
                        <div class="foundation-section blurlist w-full flex flex-wrap gap-12 ">
                            <div class="wrapper w-full">
                                <div class="custom-table">
                                    <div class="tablebox">
                                        <div class="thead">
                                            <div class="tr">
                                                <div class="th w-10/12 grow box-border pl-4">Name</div>
                                                <div class="th w-[100px] shrink-0">Value</div>
                                            </div>
                                        </div>
                                        <div class="tbody">
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-border-100</div>
                                                <div class="td w-[100px] shrink-0">1</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-border-200</div>
                                                <div class="td w-[100px] shrink-0">2</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-border-400</div>
                                                <div class="td w-[100px] shrink-0">4</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-border-600</div>
                                                <div class="td w-[100px] shrink-0">6</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-border-800</div>
                                                <div class="td w-[100px] shrink-0">8</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-border-1200</div>
                                                <div class="td w-[100px] shrink-0">12</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="divider w-full h-[1px] bg-neutral-300 mt-20"></div>
                    <div class="article-section mt-20" id="device">
                        <copyTitle>
                            <template #sectionTitle>Device</template>
                        </copyTitle>
                        <div class="foundation-section blurlist w-full flex flex-wrap gap-12 ">
                            <div class="wrapper w-full">
                                <div class="custom-table">
                                    <div class="tablebox">
                                        <div class="thead">
                                            <div class="tr">
                                                <div class="th w-10/12 grow box-border pl-4">Name</div>
                                                <div class="th w-[100px] shrink-0">Value</div>
                                            </div>
                                        </div>
                                        <div class="tbody">
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-device-320</div>
                                                <div class="td w-[100px] shrink-0">320</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-device-414</div>
                                                <div class="td w-[100px] shrink-0">414</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-device-640</div>
                                                <div class="td w-[100px] shrink-0">640</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-device-768</div>
                                                <div class="td w-[100px] shrink-0">768</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-device-1024</div>
                                                <div class="td w-[100px] shrink-0">1024</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-device-1280</div>
                                                <div class="td w-[100px] shrink-0">1280</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-device-1536</div>
                                                <div class="td w-[100px] shrink-0">1536</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-device-1920</div>
                                                <div class="td w-[100px] shrink-0">1920</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-device-2560</div>
                                                <div class="td w-[100px] shrink-0">2560</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-device-3840</div>
                                                <div class="td w-[100px] shrink-0">3840</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-device-5120</div>
                                                <div class="td w-[100px] shrink-0">5120</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="divider w-full h-[1px] bg-neutral-300 mt-20"></div>
                    <div class="article-section mt-20" id="icon">
                        <copyTitle>
                            <template #sectionTitle>Icon</template>
                        </copyTitle>
                        <div class="foundation-section blurlist w-full flex flex-wrap gap-12 ">
                            <div class="wrapper w-full">
                                <div class="custom-table gap-0 w-full flex flex-wrap md:gap-12 ">
                                    <div class="tablebox w-full md:w-[calc((100%_-_48px)/2)]">
                                        <div class="thead">
                                            <div class="tr">
                                                <div class="th w-10/12 grow box-border pl-4">Name</div>
                                                <div class="th w-[100px] shrink-0">Value</div>
                                            </div>
                                        </div>
                                        <div class="tbody">
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-icon-size-150</div>
                                                <div class="td w-[100px] shrink-0">12</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-icon-size-200</div>
                                                <div class="td w-[100px] shrink-0">16</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-icon-size-250</div>
                                                <div class="td w-[100px] shrink-0">20</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-icon-size-300</div>
                                                <div class="td w-[100px] shrink-0">24</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-icon-size-350</div>
                                                <div class="td w-[100px] shrink-0">28</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-icon-size-400</div>
                                                <div class="td w-[100px] shrink-0">32</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-icon-size-450</div>
                                                <div class="td w-[100px] shrink-0">36</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tablebox w-full md:w-[calc((100%_-_48px)/2)]">
                                        <div class="thead hidden md:block">
                                            <div class="tr">
                                                <div class="th w-10/12 grow box-border pl-4">Name</div>
                                                <div class="th w-[100px] shrink-0">Value</div>
                                            </div>
                                        </div>
                                        <div class="tbody">
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-icon-size-500</div>
                                                <div class="td w-[100px] shrink-0">40</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-icon-size-600</div>
                                                <div class="td w-[100px] shrink-0">48</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-icon-size-800</div>
                                                <div class="td w-[100px] shrink-0">64</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-icon-size-1000</div>
                                                <div class="td w-[100px] shrink-0">80</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-icon-size-1250</div>
                                                <div class="td w-[100px] shrink-0">100</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-icon-size-2000</div>
                                                <div class="td w-[100px] shrink-0">160</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="divider w-full h-[1px] bg-neutral-300 mt-20"></div>
                    <div class="article-section mt-20" id="opacity">
                        <copyTitle>
                            <template #sectionTitle>Opacity</template>
                        </copyTitle>
                        <div class="foundation-section blurlist w-full flex flex-wrap gap-12 ">
                            <div class="wrapper w-full">
                                <div class="custom-table">
                                    <div class="tablebox">
                                        <div class="thead">
                                            <div class="tr">
                                                <div class="th w-10/12 grow box-border pl-4">Name</div>
                                                <div class="th w-[100px] shrink-0">Value</div>
                                            </div>
                                        </div>
                                        <div class="tbody">
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-opacity-100</div>
                                                <div class="td w-[100px] shrink-0">8</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-opacity-200</div>
                                                <div class="td w-[100px] shrink-0">16</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-opacity-300</div>
                                                <div class="td w-[100px] shrink-0">24</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-opacity-400</div>
                                                <div class="td w-[100px] shrink-0">32</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-opacity-600</div>
                                                <div class="td w-[100px] shrink-0">48</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-opacity-800</div>
                                                <div class="td w-[100px] shrink-0">64</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-opacity-1000</div>
                                                <div class="td w-[100px] shrink-0">80</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="divider w-full h-[1px] bg-neutral-300 mt-20"></div>
                    <div class="article-section mt-20" id="radius">
                        <copyTitle>
                            <template #sectionTitle>Radius</template>
                        </copyTitle>
                        <div class="foundation-section blurlist w-full flex flex-wrap gap-12 ">
                            <div class="wrapper w-full">
                                <div class="custom-table gap-0 w-full flex flex-wrap md:gap-12 ">
                                    <div class="tablebox w-full md:w-[calc((100%_-_48px)/2)]">
                                        <div class="thead">
                                            <div class="tr">
                                                <div class="th w-10/12 grow box-border pl-4">Name</div>
                                                <div class="th w-[100px] shrink-0">Value</div>
                                            </div>
                                        </div>
                                        <div class="tbody">
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-radius-50</div>
                                                <div class="td w-[100px] shrink-0">2</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-radius-100</div>
                                                <div class="td w-[100px] shrink-0">4</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-radius-150</div>
                                                <div class="td w-[100px] shrink-0">6</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-radius-200</div>
                                                <div class="td w-[100px] shrink-0">8</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-radius-300</div>
                                                <div class="td w-[100px] shrink-0">12</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-radius-400</div>
                                                <div class="td w-[100px] shrink-0">16</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-radius-500</div>
                                                <div class="td w-[100px] shrink-0">20</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tablebox w-full md:w-[calc((100%_-_48px)/2)]">
                                        <div class="thead hidden md:block">
                                            <div class="tr">
                                                <div class="th w-10/12 grow box-border pl-4">Name</div>
                                                <div class="th w-[100px] shrink-0">Value</div>
                                            </div>
                                        </div>
                                        <div class="tbody">
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-radius-600</div>
                                                <div class="td w-[100px] shrink-0">24</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-radius-800</div>
                                                <div class="td w-[100px] shrink-0">32</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-radius-1000</div>
                                                <div class="td w-[100px] shrink-0">40</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-radius-1100</div>
                                                <div class="td w-[100px] shrink-0">44</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-radius-1500</div>
                                                <div class="td w-[100px] shrink-0">60</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-radius-2200</div>
                                                <div class="td w-[100px] shrink-0">88</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-radius-3000</div>
                                                <div class="td w-[100px] shrink-0">120</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="divider w-full h-[1px] bg-neutral-300 mt-20"></div>
                    <div class="article-section mt-20" id="shadow">
                        <copyTitle>
                            <template #sectionTitle>Shadow</template>
                        </copyTitle>
                        <div class="foundation-section blurlist w-full flex flex-wrap gap-12 ">
                            <div class="wrapper w-full">
                                <div class="custom-table">
                                    <div class="tablebox">
                                        <div class="thead">
                                            <div class="tr">
                                                <div class="th w-10/12 grow box-border pl-4">Name</div>
                                                <div class="th w-[100px] shrink-0">Value</div>
                                            </div>
                                        </div>
                                        <div class="tbody">
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-shadow-length-25</div>
                                                <div class="td w-[100px] shrink-0">2</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-shadow-length-50</div>
                                                <div class="td w-[100px] shrink-0">4</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-shadow-length-100</div>
                                                <div class="td w-[100px] shrink-0">8</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-shadow-length-200</div>
                                                <div class="td w-[100px] shrink-0">16</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="divider w-full h-[1px] bg-neutral-300 mt-20"></div>
                    <div class="article-section mt-20" id="spacing">
                        <copyTitle>
                            <template #sectionTitle>Spacing</template>
                        </copyTitle>
                        <div class="foundation-section blurlist w-full flex flex-wrap gap-12 ">
                            <div class="wrapper w-full">
                                <div class="custom-table gap-0 w-full flex flex-wrap md:gap-12 ">
                                    <div class="tablebox w-full md:w-[calc((100%_-_48px)/2)]">
                                        <div class="thead">
                                            <div class="tr">
                                                <div class="th w-10/12 grow box-border pl-4">Name</div>
                                                <div class="th w-[100px] shrink-0">Value</div>
                                            </div>
                                        </div>
                                        <div class="tbody">
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-spacing-50</div>
                                                <div class="td w-[100px] shrink-0">2</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-spacing-100</div>
                                                <div class="td w-[100px] shrink-0">4</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-spacing-150</div>
                                                <div class="td w-[100px] shrink-0">6</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-spacing-200</div>
                                                <div class="td w-[100px] shrink-0">8</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-spacing-250</div>
                                                <div class="td w-[100px] shrink-0">10</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-spacing-300</div>
                                                <div class="td w-[100px] shrink-0">12</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-spacing-400</div>
                                                <div class="td w-[100px] shrink-0">16</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-spacing-500</div>
                                                <div class="td w-[100px] shrink-0">20</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-spacing-600</div>
                                                <div class="td w-[100px] shrink-0">24</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-spacing-800</div>
                                                <div class="td w-[100px] shrink-0">32</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-spacing-1000</div>
                                                <div class="td w-[100px] shrink-0">40</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tablebox w-full md:w-[calc((100%_-_48px)/2)]">
                                        <div class="thead hidden md:block">
                                            <div class="tr">
                                                <div class="th w-10/12 grow box-border pl-4">Name</div>
                                                <div class="th w-[100px] shrink-0">Value</div>
                                            </div>
                                        </div>
                                        <div class="tbody">
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-spacing-1100</div>
                                                <div class="td w-[100px] shrink-0">44</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-spacing-1200</div>
                                                <div class="td w-[100px] shrink-0">48</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-spacing-1400</div>
                                                <div class="td w-[100px] shrink-0">56</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-spacing-1500</div>
                                                <div class="td w-[100px] shrink-0">60</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-spacing-1600</div>
                                                <div class="td w-[100px] shrink-0">64</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-spacing-1800</div>
                                                <div class="td w-[100px] shrink-0">72</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-spacing-2000</div>
                                                <div class="td w-[100px] shrink-0">80</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-spacing-2200</div>
                                                <div class="td w-[100px] shrink-0">88</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-spacing-2400</div>
                                                <div class="td w-[100px] shrink-0">96</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-spacing-3000</div>
                                                <div class="td w-[100px] shrink-0">120</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="divider w-full h-[1px] bg-neutral-300 mt-20"></div>
                    <div class="article-section mt-20" id="typography">
                        <copyTitle>
                            <template #sectionTitle>Typography</template>
                        </copyTitle>
                        <div class="foundation-section blurlist w-full flex flex-wrap gap-12 ">
                            <div class="wrapper w-full">
                                <div class="custom-table">
                                    <div class="tablebox">
                                        <div class="thead">
                                            <div class="tr">
                                                <div class="th w-10/12 grow box-border pl-4">Name</div>
                                                <div class="th w-[100px] shrink-0">Value</div>
                                            </div>
                                        </div>
                                        <div class="tbody">
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-font-family-sans</div>
                                                <div class="td w-[100px] shrink-0">Inter</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-font-family-sans-zhTW</div>
                                                <div class="td w-[100px] shrink-0">Noto Sans TC</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-font-family-serif</div>
                                                <div class="td w-[100px] shrink-0">--</div>
                                            </div>
                                            <div class="tr">
                                                <div class="td w-10/12 grow box-border pl-4">vsds-font-family-code</div>
                                                <div class="td w-[100px] shrink-0">Space Mono</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="wrapper w-full">
                                <h4 class="name mb-3 mt-0">Language abbreviation</h4>
                                <div class="custom-table">
                                    <div class="tablebox">
                                            <div class="thead">
                                                <div class="tr">
                                                    <div class="th w-10/12 grow box-border pl-4">Language name</div>
                                                    <div class="th w-[100px] shrink-0">Code name</div>
                                                </div>
                                            </div>
                                            <div class="tbody">
                                                <div class="tr">
                                                    <div class="td w-10/12 grow box-border pl-4">Chinese/中文</div>
                                                    <div class="td w-[100px] shrink-0">zhTW</div>
                                                </div>
                                                <div class="tr">
                                                    <div class="td w-10/12 grow box-border pl-4">English</div>
                                                    <div class="td w-[100px] shrink-0">EN</div>
                                                </div>
                                                <div class="tr">
                                                    <div class="td w-10/12 grow box-border pl-4">German/Deutsch</div>
                                                    <div class="td w-[100px] shrink-0">DE</div>
                                                </div>
                                                <div class="tr">
                                                    <div class="td w-10/12 grow box-border pl-4">Spanish/Español</div>
                                                    <div class="td w-[100px] shrink-0">ES</div>
                                                </div>
                                                <div class="tr">
                                                    <div class="td w-10/12 grow box-border pl-4">French/Français</div>
                                                    <div class="td w-[100px] shrink-0">FR</div>
                                                </div>
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
                        <router-link class="content-nav" :to="{hash: '#color' }">Color</router-link>
                    </li>
                    <li class="mb-4">
                        <router-link class="content-nav" :to="{hash: '#blur' }">Blur</router-link>
                    </li>
                    <li class="mb-4">
                        <router-link class="content-nav" :to="{hash: '#border-width' }">Border width</router-link>
                    </li>
                    <li class="mb-4">
                        <router-link class="content-nav" :to="{hash: '#device' }">Device</router-link>
                    </li>
                    <li class="mb-4">
                        <router-link class="content-nav" :to="{hash: '#icon' }">Icon</router-link>
                    </li>
                    <li class="mb-4">
                        <router-link class="content-nav" :to="{hash: '#opacity' }">Opacity</router-link>
                    </li>
                    <li class="mb-4">
                        <router-link class="content-nav" :to="{hash: '#radius' }">Radius</router-link>
                    </li>
                    <li class="mb-4">
                        <router-link class="content-nav" :to="{hash: '#shadow' }">Shadow</router-link>
                    </li>
                    <li class="mb-4">
                        <router-link class="content-nav" :to="{hash: '#spacing' }">Spacing</router-link>
                    </li>
                    <li class="mb-4">
                        <router-link class="content-nav" :to="{hash: '#typography' }">Typography</router-link>
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