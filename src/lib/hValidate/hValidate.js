import hValidateRules from './hValidateRules';

export default class {
  constructor (option) {
    this.option = option;
    this.hValidateRules = hValidateRules;
  }

  valid (fromData) {
    let _this = this.option._this;
    let vdtMap = this.option.rules;
    for (let p in vdtMap) {
      let regs = vdtMap[p];
      for (let i in regs) {
        if (regs[i] !== 0 && !regs[i]) {
          continue;
        }
        if (!this.hValidateRules.rules[i](this.option.formData[p], regs[i])) {
          _this.$vux.toast.show({
            type: 'text',
            text: this.option.messages[p][i] || this.hValidateRules.messages[i]
          });
          return false;
        }
      }
    }
    return true;
  }

  validOne (name) {
    let _this = this.option._this;
    let regs = this.option.rules[name];
    for (let i in regs) {
      if (!this.hValidateRules.rules[i](this.option.formData[name], regs[i])) {
        _this.$vux.toast.show({
          type: 'text',
          text: this.option.messages[name][i] || this.hValidateRules.messages[i]
        });
        return false;
      }
    }
    return true;
  }
}
