<template>
	<h1 class="font-bold text-3xl" ref="title">متن تستی</h1>
	<h2>main home page</h2>
	<p ref="p">
		لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
		و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان
		رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل
		حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
	</p>
	<br />

	<NumberPicker v-model:modelValue="counter" v-model:modelCity="city" />
	<br />
	<small>the city is : {{ city }}</small>
	<br />
	<Counter />
</template>
<script>
	import NumberPicker from "../components/NumberPicker.vue"
	import Counter from "../components/Counter.vue"
	import { gsap } from "gsap"
	export default {
		components: { NumberPicker, Counter },
		data() {
			return {
				counter: 0,
				city: "Qom"
			}
		},
		mounted() {
			gsap.from(this.$refs.title, { x: 300, duration: 1 })
			gsap.from(this.$refs.p, { x: -300, duration: 1 })
		}
	}
</script>
