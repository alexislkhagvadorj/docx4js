//<styls><style type="numbering">
export default class Numbering extends require('../style') {
  static get type() {
    return 'style.numbering';
  }

  getNumId() {
    return this.wXml.$2('numId').attr('w:val');
  }

  asNumberingStyle() {
    return this.wDoc.style.get(require('./list').asStyleId(this.getNumId()));
  }

  _iterate() {}
}
