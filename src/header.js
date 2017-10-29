import './header.scss'

export default class Header {
  constructor({el, onDetailsClick, onLanguageChange}) {
    this.props = {onDetailsClick, onLanguageChange}
    this.dom = {
      header: el,
      languageSelector: el.getElementsByClassName('lauguage-selector')[0],
    }

    this.dom.header.querySelectorAll('[data-detail]').forEach(detailsElement => {
      detailsElement.addEventListener('click', () => {
        this.props.onDetailsClick(detailsElement.getAttribute('data-detail'))
      })
    })
  }
}