export default class sdt extends require('./sdt') {
  getTag(t) {
    return ((t = this.wXml.$2('>sdtPr>tag')) && t.attr('w:val')) || '';
  }
  isInline() {
    return !this.wXml.$2('p,table');
  }
}
