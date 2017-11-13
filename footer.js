import './footer.scss'

export default class Footer {
  constructor({el, onDetailsClick, onLanguageChange}) {
    this.props = {onDetailsClick, onLanguageChange}
    this.dom = {
      footer: el,
      languageSelector: el.getElementsByClassName('lauguage-selector')[0],
    }

    this.dom.footer.querySelectorAll('[data-detail]').forEach(detailsElement => {
      detailsElement.addEventListener('click', () => {
        this.props.onDetailsClick(detailsElement.getAttribute('data-detail'))
      })
    })
  }
}