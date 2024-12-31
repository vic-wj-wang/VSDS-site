<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from '@/layouts/Navigation'
import { onMounted, watch, nextTick, provide} from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const scrollToHash = async (hash) => {
	if (hash) {
		await nextTick();
		const target = document.querySelector(hash);
		if (target) {
			target.scrollIntoView({ behavior: 'smooth' });
		}
	}
};

onMounted(() => {
	scrollToHash(route.hash);
});

watch(() => route.hash, (newHash) => {
	scrollToHash(newHash);
});




</script>

<template>
	<div class="flex w-full">
		<Navigation />
		<RouterView />
	</div>
</template>

<style lang="scss">
html {
	scroll-behavior: smooth;
	.noscroller {
		overflow: hidden;
	}
}
</style>
