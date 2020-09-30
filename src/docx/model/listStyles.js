export default class listStyles extends require('../model') {
  _getValidChildren() {
    return this.wXml.$1('abstractNum');
  }
  static get type() {
    return 'listStyles';
  }
}
