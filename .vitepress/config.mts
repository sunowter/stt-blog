import { defineConfig } from 'vitepress'
import nav from '../.vitepress/nav.mjs'
import sidebar from '../.vitepress/sidebar.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	base:'/sttblog/',
	title: "STT",
	description: "前端技术",
	srcDir: "docs",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav,
		sidebar,
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }
		]
	}
})
