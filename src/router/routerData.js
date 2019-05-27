import Nav from '@/view/Nav';

const SignUp = () => import(/* webpackChunkName: "PaymentHome" */ '@/view/signUp/SignUp');
const SignUpSuc = () => import(/* webpackChunkName: "PaymentHome" */ '@/view/signUp/SignUpSuc');

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
