<template>
	<div class="navigation absolute w-11/12 max-w-[615px] h-[100vh] left-[-615px] box-border shrink-0 transition lg:block lg:w-[240px] lg:sticky top-0 bg-surface-100 pt-14 pr-9 pb-16 pl-8 active:left-0">
		<div class="logo mb-8" width="172">
			<RouterLink to="/">
				<img :src="logoIcon" alt="" class="block w-full max-w-[172px]" />
			</RouterLink>
		</div>
		<img src="../../assets/images/icon-nav-divider.svg" alt="" class="divider mb-8">
		<div>
			<nav class="menu">
				<ul>
					<li>
						<div class="nav-main mb-7">
							<div class="nav-main--item flex items-center justify-between">
								<router-link :to="{ name: 'GetStart-Overview'}" class="nav-main--item text-base font-bold text-neutral-50">Get started</router-link>
								<div class="icon">
									<svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" class="fill-white" clip-rule="evenodd" d="M0.362254 0.902782C0.101905 1.16313 0.101905 1.58524 0.362254 1.84559L4.52892 6.01226C4.78927 6.27261 5.21138 6.27261 5.47173 6.01226L9.6384 1.84559C9.89875 1.58524 9.89875 1.16313 9.6384 0.902782C9.37805 0.642433 8.95594 0.642433 8.69559 0.902782L5.00033 4.59804L1.30506 0.902782C1.04471 0.642432 0.622604 0.642432 0.362254 0.902782Z" fill="#333333"/></svg>
								</div>
							</div>
							<transition name="fade">
								<div class="nav-sub mt-3">
									<router-link :to="{ name: 'GetStart-Overview', params: {} }" class="nav-sub--item block text-sm text-[#B2B2B2]" activeClass="font-bold text-link text-[#5D80ED]">Overview</router-link>
								</div>
							</transition>
						</div>
						
					</li>
					<li>
						<div class="nav-main">
							<div class="nav-main--item flex items-center justify-between">
								<router-link :to="{ name: 'AccessibilityOverview'}" class="nav-main--item text-base font-bold text-neutral-50" @click="setActive()">Fundation</router-link>
								<div class="icon">
									<svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" class="fill-white" clip-rule="evenodd" d="M0.362254 0.902782C0.101905 1.16313 0.101905 1.58524 0.362254 1.84559L4.52892 6.01226C4.78927 6.27261 5.21138 6.27261 5.47173 6.01226L9.6384 1.84559C9.89875 1.58524 9.89875 1.16313 9.6384 0.902782C9.37805 0.642433 8.95594 0.642433 8.69559 0.902782L5.00033 4.59804L1.30506 0.902782C1.04471 0.642432 0.622604 0.642432 0.362254 0.902782Z" fill="#333333"/></svg>
								</div>
							</div>
							<transition name="fade">
								<div class="nav-sub mt-3">
									<router-link :to="{ name: 'AccessibilityOverview', params: {} }" class="nav-sub--item block text-sm text-[#B2B2B2]" activeClass="font-bold text-[#5D80ED] text-link" :class="{ active: isActive }" @click="setActive">Accessibility</router-link>
									<div class="nav-tri mt-2 pl-3">
										<router-link :to="{ name: 'AccessibilityOverview', params: {} }" class="nav-sub--item block mb-2 text-xs text-[#B2B2B2]" activeClass="text-[#5D80ED] text-link" @click="setActive">Overview</router-link>
										<router-link :to="{ name: 'AccessibilityChecklist', params: {} }" class="nav-sub--item block mb-2 text-xs text-[#B2B2B2]" activeClass="text-[#5D80ED] text-link" @click="setActive">Checklist</router-link>
										<router-link :to="{ name: 'AccessibilityDesigning', params: {} }" class="nav-sub--item block mb-2 text-xs text-[#B2B2B2]" activeClass="text-[#5D80ED] text-link" @click="setActive">Designing</router-link>
									</div>
								</div>
							</transition>
						</div>
						
					</li>
					<li>
						<div class="nav-main">
							<div class="nav-sub">
								<div class="nav-tri"></div>
								<div class="nav-tri"></div>
								<div class="nav-tri"></div>
							</div>
						</div>
						<div class="nav-main">
							<div class="nav-sub">
								<div class="nav-tri"></div>
								<div class="nav-tri"></div>
								<div class="nav-tri"></div>
							</div>
						</div>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import logoIcon from "@/assets/images/logo-vs.svg";
const isActive = ref(false);

// 點擊子元素後設置父元素 active 類
function setActive() {
  isActive.value = true;
}

</script>

<style scoped>
.active {
  font-weight: bold;
  color: #5d80ed;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  max-height: 0;
  opacity: 0;
}
.fade-enter-active {
  max-height: 100px; /* 根據實際內容調整 */
}
.nav-sub.active {
	font-weight: bold;
	color: #5d80ed;
  transition: all 0.3s ease;
}
</style>