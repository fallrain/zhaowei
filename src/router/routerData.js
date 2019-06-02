import Nav from '@/view/Nav';

const SignUp = () => import(/* webpackChunkName: "PaymentHome" */ '@/view/signUp/SignUp');
const SignUpSuc = () => import(/* webpackChunkName: "PaymentHome" */ '@/view/signUp/SignUpSuc');
const OpeningCeremony = () => import(/* webpackChunkName: "OpeningCeremony" */ '@/view/openingCeremony/OpeningCeremony');
const Navgation = () => import(/* webpackChunkName: "Navgation" */ '@/view/navgation/Navgation');
const Schedule = () => import(/* webpackChunkName: "Schedule" */ '@/view/schedule/Schedule');
const Introduction = () => import(/* webpackChunkName: "Introduction" */ '@/view/introduction/Introduction');

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
