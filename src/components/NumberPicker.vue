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

		setup(props, { emit }) {
			const plus = () => {
				emit("update:modelValue", props.modelValue + 1)
			}
			const minus = () => {
				if (props.modelValue != 0) {
					emit("update:modelValue", props.modelValue - 1)
				}
			}
			const changeCity = () => {
				emit("update:modelCity", "Tehran")
			}

			return { plus, minus, changeCity }
		}
	})
</script>

<style lang="scss" scoped></style>
