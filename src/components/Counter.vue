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
	import { defineComponent } from "vue"
	import { useCounter } from "../composable/useCounter"
	export default defineComponent({
		setup() {
			const { counter, plus, state, plusState, doubleCounter } = useCounter()
			return { counter, plus, state, plusState, doubleCounter }
		}
	})
</script>

<style lang="scss" scoped></style>
