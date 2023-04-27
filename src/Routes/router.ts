import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import { is_auth } from "../utils/local-data";

import Inicio from "../pages/Inicio.vue";
import Login from "../pages/Login.vue";
import Historial from "../pages/Historial.vue";
import Guias from "../pages/Guias.vue";
import Perfil from "../pages/Perfil.vue";

const routes: RouteRecordRaw[] = [
	{
		name: "Inicio",
		path: "/",
		component: Inicio,
		meta: {
			required_auth: false,
		},
	},
	{
		name: "login",
		path: "/login",
		component: Login,
		meta: {
			required_auth: false,
		},
	},
	{
		name: "Historial",
		path: "/Historial",
		component: Historial,
		meta: {
			required_auth: false,
		},
	},
	{
		name: "Guias",
		path: "/Guias",
		component: Guias,
		meta: {
			required_auth: false,
		},
	},
	{
		name: "Perfil",
		path: "/Perfil",
		component: Perfil,
		meta: {
			required_auth: false,
		},
	},
];

const router = createRouter({
	routes,
	history: createWebHistory(),
});

router.beforeEach((to, _, next) => {
	if (to.meta?.required_auth && !is_auth()) {
		return next("/login");
	} else if (!to.meta?.required_auth && is_auth()) {
		return next("/");
	}
	return next();
});

export default router;
