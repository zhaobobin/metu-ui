/**
 * 全局变量
 */
export default {
  api_base: '/api/v1',

  api: {
    old: 'http://127.0.0.1:8080', // express
    test: 'http://127.0.0.1:7001', // egg
    pro: 'http://www.metuwang.com',
  },

  info: {
    appname: '迷图网',
    hometitle: '迷图网 - 摄影图片素材分享社区',
    keywords:
      '摄影,摄影师,视觉摄影,摄影社区,摄影作品,摄影技巧,摄影活动,摄影圈子,摄影图片,迷图网',
    description:
      '迷图网(www.metuwang.com)，是一个致力于摄影分享、发现、售卖的专业平台，来自世界各地的摄影师是我们忠实的用户。让你与他人因图片相识，世界那么大，我想去看看。',
    author: '迷图网(www.metuwang.com)',
    verification: '',

    address: '',
    hotline: '',
    email: '',
    icp: 'ICP经营许可证 京B2-20160180',
    beian: '京ICP备16058155号-1',
    company: '北京掘金者科技有限公司',
    copyright: '©2015-2018 迷图网 All rights reserved',
    slogan: '影像点亮生活',
    web: 'www.metuwang.com',
    worktime: '9:00-17:30',
    doc: 'http://doc.metuwang.com/',
  },

  storage: {
    token: 'metuAdmin-token',
    lastTel: 'metuAdmin-lastTel',
    remenber: 'metuAdmin-remenber',
    history: 'metuAdmin-history',
    theme: 'metuAdmin-theme',
    pagesize: 'metuAdmin-pagesize',
    currentMenu: 'metuAdmin-currentMenu',

    wechatLoginState: 'metuAdmin-WechatLoginState', // 微信授权登录state
    weiboLoginState: 'metuAdmin-WeiboLoginState', // 微博授权登录state
    qqLoginState: 'metuAdmin-QqLoginState', // QQ授权登录state
  },
};
