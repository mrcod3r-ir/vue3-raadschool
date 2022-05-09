<template>
	<div class="flex flex-wrap mt-36">
		<div class="avatar m-2 tooltip cursor-pointer hover:opacity-75 transition-all" :data-tip="photo.title" v-for="(photo, i) in photos" :key="i">
			<div class="w-24 mask mask-squircle">
				<img :src="photo.thumbnailUrl" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				photos: []
			}
		},
		mounted() {
			fetch("https://jsonplaceholder.typicode.com/photos")
				.then((res) => res.json())
				.then((res) => {
					this.photos = res.splice(0, 100)
				})
		}
	}
</script>

<style lang="scss" scoped></style>
