export default class documentStyles extends require('../model') {
  _getValidChildren() {
    return this.wXml.$1('docDefaults,style');
  }
  static get type() {
    return 'documentStyles';
  }
}
