export type NavLink = {
  id: string;
  title: string;
};
export type Experience = {
  title: string;
  company_name: string;
  icon: any;
  iconBg: string;
  date: string;
  points: string[];
};
type SkillData = {
  name: string;
  icon: any;
  text: string,
};
export type Skill = {
  title: string;
  data: SkillData[];
};
export type SocialLink = {
  name: string;
  icon: any;
  link: string;
};
export type Modal = {
  title: string;
  projectName: string;
  img: any; 
  points: string[]; 
}
