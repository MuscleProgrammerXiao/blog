export type SocialUrl = {
  github: string;
  x: string;
  bilibili: string;
  email: string;
};
export type SocialMedia ={
  title: string;
  url?: string;
}
const socialUrl: SocialUrl = {
  github: "https://github.com/MuscleProgrammerXiao",
  x: "https://x.com/docusaurus",
  bilibili: "https://space.bilibili.com/62832413",
  email: "mailto:895422334@qq.com",
};
const socialMediaData:Record<keyof SocialUrl, SocialMedia>= {
  github: {
    title: "GitHub",
    url: socialUrl.github,
  },
  bilibili: {
    title: "Bilibili",
    url: socialUrl.bilibili,
  },
  x: {
    title: "X",
    url: socialUrl.x,
  },
  email: {
    title: "Email",
    url: socialUrl.email,
  }
};
export default socialMediaData;
