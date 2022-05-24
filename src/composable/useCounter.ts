import { reactive, ref, watch, watchEffect, computed } from "vue"

export const useCounter = () => {
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
