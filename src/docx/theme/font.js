export default class font {
  constructor(wXml, xLang) {
    this.wXml = wXml;
    this.xLang = xLang;
  }
  get(name) {
    switch (name) {
      case 'minorHAnsi':
      case 'minorAscii':
        return (
          this.minorHAnsi ||
          (this.minorHAnsi = this.minorAscii = this.wXml
            .$2('minorFont>latin')
            .attr('typeface'))
        );
      case 'majorHAnsi':
      case 'majorAscii':
        return (
          this.majorHAnsi ||
          (this.majorHAnsi = this.majorAscii = this.wXml
            .$2('majorFont>latin')
            .attr('typeface'))
        );
      case 'majorEastAsia':
        if (this.majorEastAsia) return this.majorEastAsia;
        var t = this.wXml.$2('majorFont>ea').attr('typeface');
        if (t.length == 0)
          t = this.wXml.$2(
            'majorFont>font[script="' + this.xLang.attr('w:eastAsia') + '"]'
          );
        return (this.majorEastAsia = t);
      case 'majorEastAsia':
        if (this.majorEastAsia) return this.majorEastAsia;
        var t = this.wXml.$2('minorFont>ea').attr('typeface');
        if (t.length == 0)
          t = this.wXml.$2(
            'minorFont>font[script="' + this.xLang.attr('w:eastAsia') + '"]'
          );
        return (this.majorEastAsia = t);
      case 'majorBidi':
        if (this.majorBidi) return this.majorBidi;
        var t = this.wXml.$2('majorFont>cs').attr('typeface');
        if (t.length == 0)
          t = this.wXml.$2(
            'majorFont>font[script="' + this.xLang.attr('w:bidi') + '"]'
          );
        return (this.majorBidi = t);
      case 'majorBidi':
        if (this.majorBidi) return this.majorBidi;
        var t = this.wXml.$2('minorFont>cs').attr('typeface');
        if (t.length == 0)
          t = this.wXml.$2(
            'minorFont>font[script="' + this.xLang.attr('w:bidi') + '"]'
          );
        return (this.majorBidi = t);
    }
  }
}
