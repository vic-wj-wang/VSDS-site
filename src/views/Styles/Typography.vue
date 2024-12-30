<template>
    <main class="grow">
        <Herobanner :showHeroBrief="false" class="bg-herobannerbg-style">
            <template #pageTitle>Typography</template>
        </Herobanner>
        <div class="article w-[100vw] md:w-full overflow-x-auto flex mt-16 px-6 lg:px-20 box-border gap-10">
            <div class="mainbox w-full">
                <div class="article--main pb-14">
                    <div class="article-section">
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