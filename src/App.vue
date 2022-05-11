<script setup>
	import { RouterLink, RouterView } from "vue-router"
	import HelloWorld from "@/components/HelloWorld.vue"
	import { onMounted, reactive } from "vue"
	import { themeChange } from "theme-change"
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
		<div :class="['drawer-side transition-all', data.sidebar ? 'w-60' : 'w-24']">
			<ul class="menu p-4 overflow-y-auto w-full bg-base-100 text-base-content bg-slate-700 text-slate-300 overflow-x-hidden">
				<!-- Sidebar content here -->
				<li>
					<RouterLink to="/">Home</RouterLink>
				</li>
				<li>
					<RouterLink to="/about">About</RouterLink>
				</li>
				<li>
					<RouterLink to="/contact">Contact</RouterLink>
				</li>
				<li>
					<RouterLink to="/photos">Photos</RouterLink>
				</li>
			</ul>
		</div>
	</div>
</template>

<style>
	@import "@/assets/base.css";
</style>
