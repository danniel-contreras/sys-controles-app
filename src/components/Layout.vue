<template>
	<div class="w-screen h-screen">
		<div
			class="absolute w-screen h-screen bg-no-repeat bg-cover bg-[url(src/assets/back.svg)]"></div>
		<div class="w-screen h-screen bg-[rgba(255,255,255,0.1)] p-6 blur-0">
			<p class="text-3xl font-bold text-center py-3 text-[#7F7FD5] uppercase">
				{{ titulo }}
			</p>
			<slot />
		</div>

		<Menu></Menu>
	</div>
</template>

<script lang="ts" setup>
import Menu from "./Menu.vue";

interface props {
	titulo: string;
}

const { titulo } = defineProps<props>();
</script>

<style lang="scss"></style>
