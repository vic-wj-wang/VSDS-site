<template>
	<div class="contentlist hidden lg:block w-[120px] min-h-[200px] shrink-0" :class="{ is_sticky: isSticky }"
		ref="contentElement">
		<h5 class="text-[10px] text-on-surface-variant mb-8">On this page</h5>
		<slot></slot>
	</div>
</template>


<script setup>
import { ref, onMounted,onUnmounted,computed,nextTick } from 'vue';
const contentElement = ref(null);
let distanceFromTop;
const isSticky = ref(false);
const handleScroll = () => {
	nextTick(() => {
		const contentElement = document.querySelector('.contentlist');
		if (!contentElement) return;
		const offset = window.scrollY;
		// console.log('Current offset:', offset);

		if (offset >= distanceFromTop && !isSticky.value) {
			isSticky.value = true;
		} else if (offset < distanceFromTop && isSticky.value) {
			isSticky.value = false;
		}
		// console.log(isSticky.value);
	});
};

onMounted(() => {
	handleScroll();
	window.addEventListener('scroll', handleScroll);
	if (contentElement.value) {
		const rect = contentElement.value.getBoundingClientRect();
		distanceFromTop = rect.top + window.scrollY - 56;
		// console.log('Distance from top to .content:', distanceFromTop);
	}
});

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.contentlist {
  position: relative;
  transition: position 0.3s ease, top 0.3s ease;
}

.contentlist.is_sticky {
  position: fixed;
  top: 56px;
  right:80px;
  z-index: 10;
}
</style>
