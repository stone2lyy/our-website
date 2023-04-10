import { atom, atomFamily } from 'recoil';
import type { ClientStatus, Messages } from '@site/src/pages/chat/Members';

/** 启用毛玻璃效果 */
export const statusByClient = atom<ClientStatus>({
  key: '@/client/status',
  default: {
    ready: true,
    /** 是否显示登陆注册框 */
    loginRegisterDialogVisible: true,
    /** 主题 */
    theme: '',
    /** 主题主色调 */
    primaryColor: '',
    /** 主题文字主色调 */
    primaryTextColor: '',
    /** 背景图 */
    backgroundImage: '',
    /** 启用毛玻璃效果 */
    aero: true,
    /** 新消息声音提示开关 */
    soundSwitch: true,
    /** 声音类型 */
    sound: '',
    /** 新消息桌面提醒开关 */
    notificationSwitch: true,
    /** 新消息语言朗读开关 */
    voiceSwitch: true,
    /** 是否朗读个人发送的消息开关 */
    selfVoiceSwitch: true,
    /**
     * 用户标签颜色模式
     * singleColor: 固定颜色
     * fixedColor: 同一词始终同一颜色
     * randomColor: 同一词在每次渲染中保持同一颜色
     */
    tagColorMode: '',
    /** 是否展示侧边栏 */
    sidebarVisible: true,
    /** 是否展示搜索+联系人列表栏 */
    functionBarAndLinkmanListVisible: true,
    /** enable search expression when input some phrase */
    enableSearchExpression: true,
  },
});

export const messagesByContact = atomFamily<Messages, string>({
  key: '@/contact/messages',
});
