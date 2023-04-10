import { statusByClient } from '@site/src/pages/chat/state';

/** 聊天消息 */
export interface Message {
  id: string;
  type: string;
  content: string;
  from: {
    id: string;
    username: string;
    avatar: string;
    originUsername: string;
    tag: string;
  };
  loading: boolean;
  percent: number;
  createTime: string;
  deleted?: boolean;
}

export type Messages = Record<string, Message>;

/** 用户信息 */
export interface User {
  id: string;
  username: string;
  avatar: string;
  isOnline: boolean;
}

/** 联系人 */
export interface Contact extends User {
  type: string;
  unread: number;
  messages: Messages;
}

export interface ClientStatus {
  ready: boolean;
  /** 是否显示登陆注册框 */
  loginRegisterDialogVisible: boolean;
  /** 主题 */
  theme: string;
  /** 主题主色调 */
  primaryColor: string;
  /** 主题文字主色调 */
  primaryTextColor: string;
  /** 背景图 */
  backgroundImage: string;
  /** 启用毛玻璃效果 */
  aero: boolean;
  /** 新消息声音提示开关 */
  soundSwitch: boolean;
  /** 声音类型 */
  sound: string;
  /** 新消息桌面提醒开关 */
  notificationSwitch: boolean;
  /** 新消息语言朗读开关 */
  voiceSwitch: boolean;
  /** 是否朗读个人发送的消息开关 */
  selfVoiceSwitch: boolean;
  /**
   * 用户标签颜色模式
   * singleColor: 固定颜色
   * fixedColor: 同一词始终同一颜色
   * randomColor: 同一词在每次渲染中保持同一颜色
   */
  tagColorMode: string;
  /** 是否展示侧边栏 */
  sidebarVisible: boolean;
  /** 是否展示搜索+联系人列表栏 */
  functionBarAndLinkmanListVisible: boolean;
  /** enable search expression when input some phrase */
  enableSearchExpression: boolean;
}
