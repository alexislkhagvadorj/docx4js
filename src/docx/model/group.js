export default class group extends require('./shape') {
  _getValidChildren() {
    return this.wXml.$1('wsp');
  }

  static get type() {
    return 'group';
  }
}
