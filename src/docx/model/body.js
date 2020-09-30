export default class Body extends require('../model') {
  _getValidChildren() {
    return this.wXml.$1('sectPr');
  }

  static get type() {
    return 'body';
  }
}
