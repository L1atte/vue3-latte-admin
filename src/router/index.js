import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
	//登录
	{
		path: "/",
		name: "login",
    hidden: true,
    meta: {
      title: "登录",
			icon: "login",
    },
		component: () => import("../views/login/Login.vue"),
	},
	//注册
	{
		path: "/register",
		name: "Register",
    hidden: true,
    meta: {
      title: "注册",
			icon: "register",
    },
		component: () => import("../views/register/Register.vue"),
	},
	//忘记密码
	{
		path: "/forget",
		name: "Forget",
		hidden: true,
    meta: {
      title: "忘记密码",
			icon: "forget",
    },
		component: () => import("../views/forget/Forget.vue"),
	},
	//首页
	{
		path: "/index",
		name: "Index",
    meta: {
      title: "首页",
			icon: "home",
    },
		component: () => import("../views/layout/Layout.vue"),
		children: [{
			path: "/home",
			name: "Home",
			meta: {
				title: "首页",
				icon: "home",
			},
			component: () => import("../views/home/Index.vue"),
		}]
	},
	//管理总台
	{
		path: "/newsIndex",
		name: "NewsIndex",
    meta: {
      title: "管理总台",
			icon: "newsIndex",
    },
		component: () => import("../views/layout/Layout.vue"),
    children: [
			{
				path: "/role",
				name: "Role",
        meta: {
          title: "角色管理",
					icon: "role",
        },
				children: [
					{
						path: "/role",
						name: "Role",
						meta: {
							title: "角色管理",
							icon: "role",
						},
						component: () => import("../views/admin/Role.vue"),
					},
					{
						path: "/user",
						name: "User",
						meta: {
							title: "用户管理",
							icon: "user",
						},
						component: () => import("../views/admin/User.vue"),
					},
				],
				component: () => import("../views/admin/Role.vue"),
			},
		],
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
