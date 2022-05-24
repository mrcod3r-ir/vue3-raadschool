<template>
	<div><button class="btn mx-3" @click="plus">+</button>{{ counter }}<button class="btn mx-3" @click="minus">-</button></div>
</template>

<script lang="ts">
	import { defineComponent } from "vue"
	export default defineComponent({
		props: {
			value: { type: Number, default: 0 }
		},
		data() {
			return {
				counter: this.value
			}
		},
		methods: {
			plus() {
				this.counter++
				this.$emit("change", this.counter)
			},
			minus() {
				if (this.counter !== 0) {
					this.counter--
					this.$emit("change", this.counter)
				}
			}
		}
	})
</script>

<style lang="scss" scoped></style>
