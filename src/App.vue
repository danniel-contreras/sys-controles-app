<script setup lang="ts">
//import Login from './pages/Login.vue';
import { StatusBar, Style } from "@capacitor/status-bar";
import { onMounted } from "vue";

onMounted(() => {
	if (StatusBar) {
		StatusBar.setBackgroundColor({ color: "#b67bd4" });
		StatusBar.setStyle({ style: Style.Dark });
	}
});
</script>

<template>
	<router-view />
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}

.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
