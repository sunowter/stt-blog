export default {
	'/系统课程/'://动态配置导航
		[
			{
				text: '目录1',
				items: [
					{ text: '1.1', link: '/markdown-examples' },
					{ text: '1.2', link: '/api-examples' }
				]
			},
			{
				text: '目录二',
				collapsed:true,//折叠目录
				items: [
					{ text: '2.1', link: '/markdown-examples' },
					{ text: '2.2', link: '/api-examples' }
				]
			}
		],
	'/测试/':
		[
			{
				text: '测试目录',
				items: [
					{ text: '1.1测试', link: '/markdown-examples' },
					{ text: '1.2测试', link: '/api-examples' }
				]
			}
		]
}