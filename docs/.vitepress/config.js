export default {
	dest: 'public',
	base: '/front-note/',
	title: '前端学习笔记',
	themeConfig: {
		nav: [{ text: 'Guide', link: '/index' }],
		sidebar: [
			{
				text: 'js基础',
				link: '/js-base/index',
			},
			{
				text: '前端工程化',
				collapsible: true,
				items: [
					{ text: '构建工具', link: '' },
					{ text: '持续集成/持续部署', link: '/front-end-development/github-pages' },
					{ text: '自动化测试', link: '' },
				],
			}
		],
	},
};
