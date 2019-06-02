import Nav from '@/view/Nav';

const SignUp = () => import(/* webpackChunkName: "PaymentHome" */ '@/view/signUp/SignUp');
const SignUpSuc = () => import(/* webpackChunkName: "PaymentHome" */ '@/view/signUp/SignUpSuc');
const OpeningCeremony = () => import(/* webpackChunkName: "OpeningCeremony" */ '@/view/openingCeremony/OpeningCeremony');
const Navgation = () => import(/* webpackChunkName: "Navgation" */ '@/view/navgation/Navgation');
const Schedule = () => import(/* webpackChunkName: "Schedule" */ '@/view/schedule/Schedule');
const Introduction = () => import(/* webpackChunkName: "Introduction" */ '@/view/introduction/Introduction');
const CompanyIntroduction = () => import(/* webpackChunkName: "CompanyIntroduction" */ '@/view/introduction/CompanyIntroduction');
const Contact = () => import(/* webpackChunkName: "Contact" */ '@/view/contact/Contact');
const Other = () => import(/* webpackChunkName: "Other" */ '@/view/other/Other');

let data = [
  {
    path: '/signUp',
    name: 'SignUp',
    component: SignUp,
    meta: {
      title: '参会报名'
    }
  },
  {
    path: '/signUpSuc',
    name: 'SignUpSuc',
    component: SignUpSuc,
    meta: {
      title: '报名确认'
    }
  },
  {
    path: '/openingCeremony',
    name: 'OpeningCeremony',
    component: OpeningCeremony,
    meta: {
      title: '开幕式'
    }
  },
  {
    path: '/navgation',
    name: 'Navgation',
    component: Navgation,
    meta: {
      title: '展会导航'
    }
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: Schedule,
    meta: {
      title: '日程安排'
    }
  },
  {
    path: '/introduction',
    name: 'Introduction',
    component: Introduction,
    meta: {
      title: '展区介绍'
    }
  },
  {
    path: '/companyIntroduction',
    name: 'CompanyIntroduction',
    component: CompanyIntroduction,
    meta: {
      title: '参展企业'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: '联系我们'
    }
  },
  {
    path: '/other',
    name: 'Other',
    component: Other,
    meta: {
      title: '敬请期待'
    }
  },
  {
    path: '/*',
    name: 'Other',
    component: Other,
    meta: {
      title: '敬请期待'
    }
  }
];
if (process.env.NODE_ENV !== 'production') {
  data.unshift({
    path: '/',
    name: 'Nav',
    component: Nav,
    meta: {
      title: '导航'
    }
  });
}
export default {data};
