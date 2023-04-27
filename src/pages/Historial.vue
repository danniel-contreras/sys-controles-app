<template>
	<Layout titulo="Historial">
		<div class="w-full h-auto bg-[rgba(255,255,255,0.8)] p-5 rounded-xl shadow">
			<div class="relative float-right">
				<OhVueIcon name="fc-ok" scale="1.5" />
			</div>
			<p class="font-semibold text-sm text-center text-gray-600">GDP000001</p>
			<p class="font-semibold text-sm text-gray-600 py-1">
				Fecha creacion:
				<span class="font-medium text-xs">2022/10/05 - 10:20 am</span>
			</p>
			<p class="font-semibold text-sm text-gray-600 py-1">
				fecha actualizacion:
				<span class="font-medium text-xs">2023/10/07 - 12:40 am</span>
			</p>
			<p class="font-semibold text-sm text-gray-600 py-1">
				Kilometraje inicio: <span class="font-medium text-xs">2022/10/05</span>
			</p>
			<p class="font-semibold text-sm text-gray-600 py-1">
				Kilometraje fin: <span class="font-medium text-xs">2023/10/07</span>
			</p>
			<button
				type="submit"
				class="mt-5 tracking-wide font-semibold bg-gradient-to-l to-[#7F7FD5] from-[#86A8E7] text-gray-100 w-full h-12 py-4 rounded-[0.8rem] hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
				<OhVueIcon scale="1.25" name="fa-eye" />
				<span class="ml-3 text-lg">Detalle</span>
			</button>
		</div>
		<div
			class="w-full h-auto bg-[rgba(255,255,255,0.8)] mt-5 p-5 rounded-xl shadow">
			<div class="relative float-right">
				<OhVueIcon name="fc-ok" scale="1.5" />
			</div>
			<p class="font-semibold text-sm text-center text-gray-600">GDP000001</p>
			<p class="font-semibold text-sm text-gray-600 py-1">
				Fecha creacion:
				<span class="font-medium text-xs">2022/10/05 - 10:20 am</span>
			</p>
			<p class="font-semibold text-sm text-gray-600 py-1">
				fecha actualizacion:
				<span class="font-medium text-xs">2023/10/07 - 12:40 am</span>
			</p>
			<p class="font-semibold text-sm text-gray-600 py-1">
				Kilometraje inicio: <span class="font-medium text-xs">2022/10/05</span>
			</p>
			<p class="font-semibold text-sm text-gray-600 py-1">
				Kilometraje fin: <span class="font-medium text-xs">2023/10/07</span>
			</p>
			<button
				type="submit"
				class="mt-5 tracking-wide font-semibold bg-gradient-to-l to-[#7F7FD5] from-[#86A8E7] text-gray-100 w-full h-12 py-4 rounded-[0.8rem] hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
				<OhVueIcon scale="1.25" name="fa-eye" />
				<span class="ml-3 text-lg">Detalle</span>
			</button>
		</div>
	</Layout>
</template>

<script lang="ts" setup>
import OhVueIcon from "../plugins/oh-vue-icon";
import Layout from "../components/Layout.vue";
</script>

<style lang="scss"></style>
