<template>
	<div>
		<div class="flex items-center">
			counter: {{ counter }}
			<button class="btn btn-sm m-3" @click="plus">+</button>
		</div>
		<div class="flex items-center">
			state: {{ state.counter }}
			<button class="btn btn-sm m-3" @click="plusState">+ state</button>
		</div>
		<div class="flex items-center">doubleCounter : {{ doubleCounter }}</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, reactive, ref, watch, watchEffect, computed } from "vue"
	export default defineComponent({
		setup() {
			// ref
			const counter = ref(0)
			// reactive
			const state = reactive({ counter: 0 })
			// methods
			const plus = () => {
				counter.value++
			}
			const plusState = () => {
				state.counter++
			}
			// computed
			const doubleCounter = computed(() => counter.value * 2)
			// watch
			watch(
				() => state.counter,
				(val, oldVal) => {
					console.log(`value is ${val} and old value is ${oldVal}`)
				}
			)
			// watchEffect
			console.log("in setup counter is ", counter.value)
			watchEffect(() => {
				console.log("in watchEffect counter is ", counter.value)
			})
			return { counter, plus, state, plusState, doubleCounter }
		}
	})
</script>

<style lang="scss" scoped></style>
