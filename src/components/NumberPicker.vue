<template>
	<div><button class="btn mx-3" @click="plus">+</button>{{ modelValue }}<button class="btn mx-3" @click="minus">-</button></div>
	<br />
	<button class="btn btn-sm btn-secondary" @click="changeCity">change city</button>
</template>

<script lang="ts">
	import { defineComponent } from "vue"
	export default defineComponent({
		props: {
			modelValue: { type: Number, default: 0 },
			modelCity: { type: String, default: "Qom" }
		},
		emits: ["update:modelValue", "update:modelCity"],
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
			},
			changeCity() {
				this.$emit("update:modelCity", "Tehran")
			}
		}
	})
</script>

<style lang="scss" scoped></style>
