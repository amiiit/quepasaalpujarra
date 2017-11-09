import './app.scss'
import Popup from './popup.js'
import Header from './header.js'
import spinnerSvg from '../assets/spinner.svg'
import Footer from './footer.js'

class App {
  init() {
    this.popup = new Popup({
      el: document.getElementById('popup-wrapper'),
      onDetailsClick: this.openDetailsPopup
    })
    this.details = document.getElementById('more-details')

    this.header = new Header({
      el: document.getElementById('header'),
      onDetailsClick: this.openDetailsPopup,
      onLanguageChange: languageId => {
        this.setLanguage(languageId)
      }
    })

    this.footer = new Footer({
      el: document.getElementById('footer'),
      onDetailsClick: this.openDetailsPopup,
    })

    this.setLanguage('en')
  }

  openDetailsPopup = (detailsId) => {
    this.popup.open(detailsId)
  }

  setLanguage(lang){
    document.body.querySelectorAll(`[class*='i18n-']`).forEach(langElem => {
      if (langElem.classList.contains(`i18n-${lang}`)){
        langElem.classList.add('active')
      } else {
        langElem.classList.remove('active')
      }
    })
  }
}

const app = new App()
window.addEventListener('load', () => {
  app.init()
})

