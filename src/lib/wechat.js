/**
 * Created by shl on 2018/6/7.
 * 用于封装微信相关的方法
 */
const CONFIG = process.env.WX_CONFIG;
export function weChatScope(appid, uri, scope = 'snsapi_base', state = '1') {
  return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${CONFIG.appId}&redirect_uri=${encodeURIComponent(CONFIG.redirect_outh)}&response_type=code&scope=${scope}&state=${state}#wechat_redirect`;
}
