<script setup>
	import { RouterLink, RouterView } from "vue-router"
	import HelloWorld from "@/components/HelloWorld.vue"
	import { onMounted, reactive } from "vue"
	import { themeChange } from "theme-change"
	import { HomeIcon, AnnotationIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/vue/solid"
	import Navbar from "@/components/Navbar.vue"
	const data = reactive({
		sidebar: false
	})
	onMounted(() => {
		themeChange(false)
	})
</script>

<template>
	<div class="drawer">
		<input id="toggleSidebar" type="checkbox" class="drawer-toggle" v-model="data.sidebar" />
		<div class="drawer-content">
			<!-- Page content here -->
			<header>
				<Navbar>
					<template #toggle>
						<label for="toggleSidebar" class="btn"></label>
					</template>
				</Navbar>
			</header>
			<main class="container mx-auto">
				<RouterView />
			</main>
			<footer></footer>
		</div>
		<div :class="['drawer-side transition-all relative', data.sidebar ? 'w-60' : 'w-16']">
			<ul class="menu p-4 overflow-y-auto w-full bg-base-100 text-base-content bg-slate-700 text-slate-300 overflow-x-hidden">
				<!-- Sidebar content here -->
				<li>
					<RouterLink class="px-0" to="">
						<ChevronDoubleRightIcon v-if="data.sidebar" class="w-5 h-5" />
						<ChevronDoubleLeftIcon v-else class="w-5 h-5" />
					</RouterLink>
				</li>
				<li>
					<RouterLink class="px-0" to="/"><HomeIcon class="h-5 w-5" /><span v-if="data.sidebar">Home</span></RouterLink>
				</li>
				<li>
					<RouterLink class="px-0" to="/about"><AnnotationIcon class="h-5 w-5" /><span v-if="data.sidebar">About</span></RouterLink>
				</li>
				<li>
					<RouterLink class="px-0" to="/contact"><span v-if="data.sidebar">Contact</span></RouterLink>
				</li>
				<li>
					<RouterLink class="px-0" to="/photos"><span v-if="data.sidebar">Photos</span></RouterLink>
				</li>
			</ul>
		</div>
	</div>
</template>

<style>
	@import "@/assets/base.css";
</style>
