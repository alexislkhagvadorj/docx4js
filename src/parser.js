export default class Parser {
  constructor(wXml, wDoc) {
    this.wXml = wXml;
    this.wDoc = wDoc;
  }
  static get type() {
    return null;
  }
  parse(visitFactories) {}
}
