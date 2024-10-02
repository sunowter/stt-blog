// 用于配置路由的导航
export default {
	'/gitUse/':
	
		[
			{
				text: 'git使用',
				items: [
					{ text: 'git常用命令', link: '/gitUse/index' },
				]
			}
		],
	'/note/':
		[
			{
				text: 'video',
				items: [
					{ text: 'video属性', link: '/note/video/index' },
					{ text: 'video事件', link: '/note/video/eventIndex' },
					{ text: 'css设置', link: '/note/video/cssIndex' },
					{ text: '使用示例', link: '/note/video/useIndex' },
				]
			}
		],
	'/tools/':
		[
			{
				text: '开发平台',
				items: [
					{ text: '钉钉', link: 'https://open.dingtalk.com/document/orgapp/scan-barcodes-and-qr-codes' },
					{ text: '微信', link: 'https://developers.weixin.qq.com/miniprogram/dev/reference/' },
				]
			},
			{
				text: 'ui框架',
				items: [
					{ text: 'element', link: 'https://element.eleme.cn/#/zh-CN/component/dialog' },
					{ text: 'vant', link: 'https://vant-ui.github.io/vant/#/zh-CN' },
				]
			},
			{
				text: '常用工具',
				items: [
					{ text: 'inconfont', link: 'https://www.iconfont.cn/search/index' },
					{ text: 'iconpark', link: 'http://iconpark.oceanengine.com/official' },
					{ text: 'driverjs', link: 'https://driverjs.com/' },
					{ text: 'echarts', link: 'https://echarts.apache.org/examples/zh/index.html' },
					{ text: 'swiper', link: 'https://www.swiper.com.cn/' },
					{ text: 'sortablejs', link: 'https://sortablejs.com/options.html' },
					{ text: 'ckeditor', link: 'https://ckeditor.com/docs/ckeditor5/latest/framework/index.html' },
					{ text: 'dayjs', link: 'https://dayjs.fenxianglu.cn/' },
				]
			}
		]
	// '/系统课程/'://动态配置导航
	// 	[
	// 		{
	// 			text: '目录1',
	// 			items: [
	// 				{ text: '1.1', link: '/markdown-examples' },
	// 				{ text: '1.2', link: '/api-examples' }
	// 			]
	// 		},
	// 		{
	// 			text: '目录二',
	// 			collapsed:true,//折叠目录
	// 			items: [
	// 				{ text: '2.1', link: '/markdown-examples' },
	// 				{ text: '2.2', link: '/api-examples' }
	// 			]
	// 		}
	// 	],
	// '/测试/':
	// 	[
	// 		{
	// 			text: '测试目录',
	// 			items: [
	// 				{ text: '1.1测试', link: '/markdown-examples' },
	// 				{ text: '1.2测试', link: '/api-examples' }
	// 			]
	// 		}
	// 	]
}