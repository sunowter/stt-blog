export default [
	{ text: '首页', link: '/' },
	{ text: '知识点总结', link: '/知识点总结/index.md', },
	{
		text: '系统课程',
		items: [
			{
				text: '总览',
				link: '/系统课程/index'
			},
			{
				text: 'vitePress',
				link: '/系统课程/vitepress/index',
			},
			{
				text: '百度',
				link: 'https://www.baidu.com/s?ie=UTF-8&wd=vite',
				target: '_self'
			}

		],
		activeMatch: '/系统课程/'
	},
	{ text: '测试', link: '/测试/index' },
]