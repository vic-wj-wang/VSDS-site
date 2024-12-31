<template>
	
	<div
		class="hero-container mt-16 w-full bg-herobannerbg bg-no-repeat bg-cover pt-8 pr-10 pb-8 pl-10 box-border min-h-0 md:min-h-[144px] lg:min-h-[200px] lg:mt-0 lg:pt-[4.5rem] lg:pr-20 lg:pb-[2.8rem] lg:pl-20">
		<h1 class="pageTitle text-2xl font-semibold lg:text-[56px] text-on-surface-inverse mb-4 lg:mb-7">
			<slot name="pageTitle">Page Title</slot>
		</h1>
		<p class="pageBrief text-sm text-on-surface-inverse" v-if="showHeroBrief">
			<slot name="pageBrief">slotThis is the page brief.</slot>
		</p>
	</div>
</template>
<script setup>
defineProps({
	showHeroBrief: {
		type: Boolean,
		default: true,
	},
});
</script>
<style scoped>

</style>
