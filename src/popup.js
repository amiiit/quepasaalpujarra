import './popup.scss'

export default class Popup {

  constructor({el}) {
    this.dom = {}
    this.dom.wrapper = el
    this.dom.close = this.dom.wrapper
  }

}