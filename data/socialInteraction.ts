export type SocialUrl = {
  github: string;
  bilibili: string;
  email: string;
  wechat: string;
};
export type SocialMedia = {
  title: string;
  url?: string;
};
export const socialUrl: SocialUrl = {
  github: "https://github.com/LastWhisper2022",
  bilibili: "https://space.bilibili.com/62832413",
  email: "895422334@qq.com",
  wechat: "Neil578633",
};

const socialMediaData: Record<keyof SocialUrl, SocialMedia> = {
  github: {
    title: "GitHub",
    url: socialUrl.github,
  },
  bilibili: {
    title: "Bilibili",
    url: socialUrl.bilibili,
  },
  email: {
    title: "Email",
    url: socialUrl.email,
  },
  wechat: {
    title: "WeChat",
    url: socialUrl.wechat,
  },
};

export default socialMediaData;