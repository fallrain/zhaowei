import Vuex from 'vuex';
import Vue from 'vue';
import {axGet} from '@/lib/ajax';
import createPersistedState from '@/lib/vuexPlugin/persistedstate';
Vue.use(Vuex);
export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: sessionStorage
    })
  ],
  state: {
    aliveExclude: [
      'PaymentHistoryList',
      'PaymentDetail',
      'SuggestionForm',
      'EventReport',
      'Score',
      'EventDetail',
      'TaskDetail'
    ],
    addresses: {
      communityName: '',
      buildingName: '',
      unitName: '',
      roomName: '',
      ownerName: ''
    },
    curRole: '',
    propertyInfo: {
      userName: ''
    },
    // 当前传递的事件详情
    curEventDetail: {}
  },
  mutations: {
    toggleAliveExclude ({aliveExclude}, name) {
      /* 改变缓存排除的页面 */
      const index = aliveExclude.indexOf(name);
      index === -1 ? aliveExclude.push(name) : aliveExclude.splice(index, 1);
    },
    delAliveExclude ({aliveExclude}, name) {
      const index = aliveExclude.indexOf(name);
      index !== -1 && aliveExclude.splice(index, 1);
    },
    addAliveExclude ({aliveExclude}, name) {
      const index = aliveExclude.indexOf(name);
      index === -1 && aliveExclude.push(name);
    },
    updateUserCommunity ({addresses}, {communityName, buildingName, unitName, roomName, ownerName}) {
      /* 更新业主¬信息 */
      Object.assign(addresses, {communityName, buildingName, unitName, roomName, ownerName});
    },
    updatePropertyInfo ({propertyInfo}, {userName}) {
      /* 更新物业信息 */
      Object.assign(propertyInfo, {userName});
    },
    changeRole (state, role) {
      /* 改变角色 */
      state.curRole = role;
    },
    updateCurEventDetail (state, detail) {
      Object.assign(state.curEventDetail, detail);
    },
    resetCurEventDetail (state) {
      state.curEventDetail = {};
    }
  },
  actions: {
    getWxInfo ({commit}) {
      /* 普通业主/租户的信息 */
      return axGet(
        'communityInfo/wxGetAllInfoByWx',
        {
          requestNoToast: true,
          wxUid: localStorage.getItem('uid')
        }
      ).then(({code, value: data}) => {
        if (code === '200') {
          sessionStorage.setItem('ownerCode', data.ownerCode);
          sessionStorage.setItem('roomCode', data.roomCode);
          sessionStorage.setItem('ownerSimpleCode', data.simpleCode);
          sessionStorage.setItem('communityName', data.communityName);
          sessionStorage.setItem('address', data.communityName + data.buildingName + data.unitName + data.roomName);
          commit('updateUserCommunity', data);
        }
      });
    },
    getPropertyInfo ({commit}) {
      /* 物业管理人员的信息 */
      return axGet(
        'handlerWxUserRel/selectHandlerByWx',
        {
          requestNoToast: true,
          wxUid: localStorage.getItem('uid')
        }
      ).then(({code, value: data}) => {
        if (code === '200') {
          sessionStorage.setItem('propertySimpleCode', data.simpleCode);
          commit('updatePropertyInfo', data);
        }
      });
    }
  }
});
