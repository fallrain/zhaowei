export default {
  convertCnDay (value) {
    /* 0 1 2 3 转为周一 周二... */
    return '周' + ['一', '二', '三', '四', '五', '六', '天'][value % 7];
  },
  toUpperCase (value) {
    return value.toLocaleUpperCase();
  },
  yuanToCent (value) {
    let returnStr = (value / 100) + '';
    let len = returnStr.split('.')[1];
    if (len) {
      len = len.length;
    } else {
      len = 0;
    }
    returnStr += ['.00', '0', ''][len];
    return returnStr;
  }
};
