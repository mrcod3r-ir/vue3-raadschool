<template>
	<div><button class="btn mx-3" @click="plus">+</button>{{ modelValue }}<button class="btn mx-3" @click="minus">-</button></div>
</template>

<script lang="ts">
	import { defineComponent } from "vue"
	export default defineComponent({
		props: {
			modelValue: { type: Number, default: 0 }
		},
		emits: ["update:modelValue"],
		data() {
			return {
				counter: this.value
			}
		},
		methods: {
			plus() {
				this.$emit("update:modelValue", this.modelValue + 1)
			},
			minus() {
				if (this.modelValue !== 0) {
					this.$emit("update:modelValue", this.modelValue - 1)
				}
			}
		}
	})
</script>

<style lang="scss" scoped></style>
