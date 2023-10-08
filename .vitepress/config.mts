import { defineConfig } from 'vitepress';

export default defineConfig({
	title: '开发文档',
	description: '前端技术宅接口开发文档',
	lang: 'zh-CN',
	lastUpdated: true,
	ignoreDeadLinks: true,
	themeConfig: {
		nav: [
			{ text: '主页', link: '/' },
			{ text: '开发文档', link: '/docs/index.md' },
		],
		sidebar: [
			{
				text: '初始化',
				collapsed: true,
				items: [{ text: '配置环境', link: '/docs/index.md' }],
			},
			{
				text: '用户接口',
				collapsed: true,
				items: [
					{
						text: '查询全部用户',
						link: '/docs/Interfaces/user/queryall.md',
					},
					{
						text: '模糊查询用户',
						link: '/docs/Interfaces/user/query.md',
					},
					{ text: '注册', link: '/docs/Interfaces/user/register.md' },
					{ text: '登录', link: '/docs/Interfaces/user/login.md' },
					{
						text: '修改密码',
						link: '/docs/Interfaces/user/change-password.md',
					},
					{
						text: '修改用户信息',
						link: '/docs/Interfaces/user/change-user-info.md',
					},
					{
						text: '硬删除用户',
						link: '/docs/Interfaces/user/strike-users.md',
					},
				],
			},
			{
				text: '验证码服务',
				collapsed: true,
				items: [
					{
						text: '发送验证码',
						link: '/docs/Interfaces/code/send-code.md',
					},
				],
			},
		],
		socialLinks: [
			{
				icon: 'github',
				link: 'https://github.com/212063551/blog-server-api-docs',
			},
		],
		search: {
			provider: 'local',
			options: {
				translations: {
					button: {
						buttonText: '搜索文档',
						buttonAriaLabel: '搜索文档',
					},
					modal: {
						noResultsText: '无法找到相关结果',
						resetButtonTitle: '清除查询条件',
						footer: {
							selectText: '选择',
							navigateText: '切换',
							closeText: '退出搜索',
						},
					},
				},
			},
		},
		footer: {
			message: '本文档遵循 MIT 协议',
			copyright: 'Made with ❤ by Rune ',
		},
		docFooter: {
			prev: '上一页',
			next: '下一页',
		},
		lastUpdatedText: '最后更新',
		outlineTitle: '本页',
		sidebarMenuLabel: '目录',
		returnToTopLabel: '返回顶部',
		darkModeSwitchLabel: '外观',
	},
});
