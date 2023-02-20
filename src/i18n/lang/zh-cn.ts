// 定义内容
export default {
	router: {
		home: '首页',
		system: '系统设置',
		systemMenu: '菜单管理',
		systemRole: '角色管理',
		systemUser: '用户管理',
		systemDept: '部门管理',
		systemDic: '字典管理',
	},
	staticRoutes: {
		signIn: '登录',
		notFound: '找不到此页面',
		noPower: '没有权限',
	},
	user: {
		title:'功能引导',
		title0: '组件大小',
		title1: '语言切换',
		title2: '菜单搜索',
		title3: '布局配置',
		title4: '消息',
		title5: '开全屏',
		title6: '关全屏',
		dropdownLarge: '大型',
		dropdownDefault: '默认',
		dropdownSmall: '小型',
		dropdown1: '首页',
		dropdown2: '个人中心',
		dropdown3: '404',
		dropdown4: '401',
		dropdown5: '退出登录',
		dropdown6: '代码仓库',
		searchPlaceholder: '菜单搜索：支持中文、路由路径',
		newTitle: '通知',
		newBtn: '全部已读',
		newGo: '前往通知中心',
		newDesc: '暂无通知',
		logOutTitle: '提示',
		logOutMessage: '此操作将退出登录, 是否继续?',
		logOutConfirm: '确定',
		logOutCancel: '取消',
		logOutExit: '退出中',
	},
	tagsView: {
		refresh: '刷新',
		close: '关闭',
		closeOther: '关闭其它',
		closeAll: '全部关闭',
		fullscreen: '当前页全屏',
		closeFullscreen: '关闭全屏',
	},
	notFound: {
		foundTitle: '地址输入错误，请重新输入地址~',
		foundMsg: '您可以先检查网址，然后重新输入或给我们反馈问题。',
		foundBtn: '返回首页',
	},
	noAccess: {
		accessTitle: '您未被授权，没有操作权限~',
		accessMsg: '联系方式：加QQ群探讨 665452019',
		accessBtn: '重新授权',
	},
	layout: {
		configTitle: '布局配置',
		oneTitle: '全局主题',
		twoTopTitle: '顶栏设置',
		twoMenuTitle: '菜单设置',
		twoColumnsTitle: '分栏设置',
		twoTopBar: '顶栏背景',
		twoTopBarColor: '顶栏默认字体颜色',
		twoIsTopBarColorGradual: '顶栏背景渐变',
		twoMenuBar: '菜单背景',
		twoMenuBarColor: '菜单默认字体颜色',
		twoMenuBarActiveColor: '菜单高亮背景色',
		twoIsMenuBarColorGradual: '菜单背景渐变',
		twoColumnsMenuBar: '分栏菜单背景',
		twoColumnsMenuBarColor: '分栏菜单默认字体颜色',
		twoIsColumnsMenuBarColorGradual: '分栏菜单背景渐变',
		twoIsColumnsMenuHoverPreload: '分栏菜单鼠标悬停预加载',
		threeTitle: '界面设置',
		threeIsCollapse: '菜单水平折叠',
		threeIsUniqueOpened: '菜单手风琴',
		threeIsFixedHeader: '固定 Header',
		threeIsClassicSplitMenu: '经典布局分割菜单',
		threeIsLockScreen: '开启锁屏',
		threeLockScreenTime: '自动锁屏(s/秒)',
		fourTitle: '界面显示',
		fourIsShowLogo: '侧边栏 Logo',
		fourIsBreadcrumb: '开启 Breadcrumb',
		fourIsBreadcrumbIcon: '开启 Breadcrumb 图标',
		fourIsTagsview: '开启 Tagsview',
		fourIsTagsviewIcon: '开启 Tagsview 图标',
		fourIsCacheTagsView: '开启 TagsView 缓存',
		fourIsSortableTagsView: '开启 TagsView 拖拽',
		fourIsShareTagsView: '开启 TagsView 共用',
		fourIsFooter: '开启 Footer',
		fourIsGrayscale: '灰色模式',
		fourIsInvert: '色弱模式',
		fourIsDark: '深色模式',
		fourIsWartermark: '开启水印',
		fourWartermarkText: '水印文案',
		fiveTitle: '其它设置',
		fiveTagsStyle: 'Tagsview 风格',
		fiveAnimation: '主页面切换动画',
		fiveColumnsAsideStyle: '分栏高亮风格',
		fiveColumnsAsideLayout: '分栏布局风格',
		sixTitle: '布局切换',
		sixDefaults: '默认',
		sixClassic: '经典',
		sixTransverse: '横向',
		sixColumns: '分栏',
		tipText: '点击下方按钮，复制布局配置去 `src/stores/themeConfig.ts` 中修改。',
		copyText: '一键复制配置',
		resetText: '一键恢复默认',
		copyTextSuccess: '复制成功！',
		copyTextError: '复制失败！',
	},
	upgrade: {
		title: '新版本升级',
		msg: '新版本来啦，马上更新尝鲜吧！不用担心，更新很快的哦！',
		desc: '提示：更新会还原默认配置',
		btnOne: '残忍拒绝',
		btnTwo: '马上更新',
		btnTwoLoading: '更新中',
	},
};
