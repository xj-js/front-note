export default {
	dest: 'public',
	base: '/front-note/',
	title: '前端学习笔记',
	themeConfig: {
		search: {
      provider: 'local'
    },
		nav: [{ text: 'Guide', link: '/index' }],
		sidebar: [
			{
				text: '前端基础',
				collapsible: true,
				items: [
					{ text: 'js基础知识', link: '/front-end-base/js_base' },
					{text: '参考', link: '/front-end-base/index'},
				],
			},
			{
				text: '前端工程化',
				collapsible: true,
				collapsed: true,
				items: [
					{text: '简介', link: '/front-end-development/index'},
					{text: '代码规范', link: '/front-end-development/eslint'},
					{ text: '构建工具', link: '/front-end-development/webpack' },
					{ text: '持续集成/持续部署', link: '/front-end-development/github-pages' },
					{ text: '自动化测试', link: '' },
				],
			},
			{
				text: '面经',
				collapsible: true,
				collapsed: true,
				items: [
					{text: '参考', link: '/audition/index'}
				],
			}
		],
	},
};
