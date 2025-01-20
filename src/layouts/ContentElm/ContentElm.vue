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
const handleScroll = () => { //sticky content list
	nextTick(() => {
		const contentElement = document.querySelector('.contentlist');
		if (!contentElement) return;
		const offset = window.scrollY;
		if (offset >= distanceFromTop && !isSticky.value) {
			isSticky.value = true;
		} else if (offset < distanceFromTop && isSticky.value) {
			isSticky.value = false;
		}
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

// test

import { onBeforeUnmount } from 'vue';



onMounted(() => {
	// 獲取所有按鈕與對應區塊
	const buttons = contentElement.value.querySelectorAll('.content-nav');
	const sections = Array.from(document.querySelectorAll('.article-section')).filter(section => section.id);
	// console.log(buttons,sections);
	// 滾動事件處理
	const updateCurrentButton = () => {
		const viewportHeight = window.innerHeight;
		let closestIndex = -1;
		let closestDistance = Number.MAX_VALUE;
		let toTop = viewportHeight / 4;
		sections.forEach((section, index) => {
			const rect = section.getBoundingClientRect();
			const distanceToViewportCenter = rect.top;
			// console.log("section" + section + ",index" + index + ",top" + index);
			// 找到距離視窗中心最近的區塊
			if (distanceToViewportCenter < toTop) {
				closestDistance = distanceToViewportCenter;
				closestIndex = index;
			}
		});

		// 如果滾動到頁面底部，固定最後一個按鈕
		// const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
		let scrollh = window.innerHeight + window.scrollY;
		let dh = document.body.offsetHeight-10
		const atBottom = scrollh >= dh;
		// console.log("是否到底了？" + scrollh + "," + dh + "," + atBottom);

		// 更新按鈕 .current 狀態
		buttons.forEach(btn => btn.classList.remove('current'));
		if (atBottom) {
			buttons[buttons.length - 1]?.classList.add('current');
		} else if (closestIndex !== -1) {
			buttons[closestIndex]?.classList.add('current');
		}
	};
	const handleClick = (event) => {
		event.preventDefault();
		
		buttons.forEach(btn => btn.classList.remove('current'));
		event.target.classList.add('current');
	};


	// 綁定事件
	buttons.forEach(button => button.addEventListener('click', handleClick));
	window.addEventListener('scroll', updateCurrentButton);

	// 銷毀事件
	onBeforeUnmount(() => {
		buttons.forEach(button => button.removeEventListener('click', handleClick));
		window.removeEventListener('scroll', updateCurrentButton);
	});
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
