<template>
	<div class="article-section--title relative"
	@mouseover="handleMouseOver"
    @mouseout="handleMouseOut"
    @click="copyParentId">
		<div class="icon w-[30px] h-[30px] flex justify-center items-center bg-on-info-variant border rounded-md border-on-surface-variant absolute top-2 left-[-38px]" 
		:class="{ 'fade-in': showImg, 'fade-out': !showImg }">
			<img src="/src/assets/images/icons/icon-ham.svg" alt="">
			<transition name="fade">
				<div v-if="showToast" class="toast py-1 px-1 block text-xs rounded-md text-on-surface-variant bg-surface-100 bg-opacity-80 absolute z-10">copied!</div>
			</transition>
		</div>
		<h2><slot name="sectionTitle">Section Title</slot></h2>
	</div>
</template>
<script setup>
import { ref } from 'vue';

const showImg = ref(false); // 控制 img 的顯示
const showToast = ref(false); // 控制 toast 的顯示

// Mouseover 時讓 img 顯示
const handleMouseOver = () => {
  showImg.value = true;
};

// Mouseout 時讓 img 消失
const handleMouseOut = () => {
  if (!showToast.value) {
    showImg.value = false;
  }
};

const copyParentId = (event) => {
  // 獲取點擊的元素的父層並取得 ID
  const parent = event.currentTarget.closest('.article-section');
  const id = parent?.id;

  if (id) {
    const currentUrl =window.location.href.split('#')[0] + "#" + window.location.href.split('#')[1]; // 獲取當前頁面 URL
    const fullUrl = `${currentUrl}#${id}`;
    navigator.clipboard.writeText(fullUrl)
      .then(() => {
        console.log(`${fullUrl}`);
		showImg.value = true;
		showToast.value = true;

		setTimeout(() => {
			showImg.value = false;
			showToast.value = false;
		}, 1000);
      })
      .catch(() => {
        console.log('fail');
      });
  } else {
    console.log('unfind ID');
  }
};
// provide('copyParentId', copyParentId);
</script>
<style scoped>
.fade-in {
  opacity: 1;
  transition: opacity 0.3s ease-in;
}

.fade-out {
  opacity: 0;
  transition: opacity 0.3s ease-out;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>