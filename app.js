import './app.scss'
import Popup from './popup.js'
import Header from './header.js'
import spinnerSvg from '../assets/spinner.svg'
import Footer from './footer.js'
import Calendar from "./calendar";

const UI_LANG_KEY = 'qpa_ui_lang'

class App {
  init() {
    this.dom = {
      spinnerWrapper: document.getElementById('spinner-wrapper'),
      popupWrapper: document.getElementById('popup-wrapper'),
      details: document.getElementById('more-details'),
      header: document.getElementById('header'),
      calendarWrapper: document.getElementById('calendar-wrapper'),
      footer: document.getElementById('footer'),
      spinner: document.getElementById('spinner-wrapper'),
    }

    this.setLanguage()

    this.popup = new Popup({
      el: this.dom.popupWrapper,
      onDetailsClick: this.openDetailsPopup
    })
    this.details = this.dom.details

    this.header = new Header({
      el: this.dom.header,
      onDetailsClick: this.openDetailsPopup,
      onLanguageChange: languageId => {
        this.setLanguage(languageId)
      }
    })

    this.footer = new Footer({
      el: this.dom.footer,
      onDetailsClick: this.openDetailsPopup,
    })


    this.calendar = new Calendar({
      el: this.dom.calendarWrapper,
      onLoadingState: (loadingState) => {
        const classList = this.dom.spinner.classList
        if (loadingState){
          classList.remove('hidden')
        } else {
          classList.add('hidden')
        }
      }
    })


    this.calendar.render()
  }

  openDetailsPopup = (detailsId) => {
    this.popup.open(detailsId)
  }

  setLanguage = (lang) => {
    let languageToSet = lang

    if (!languageToSet) {
      const persistedLanguage = localStorage && localStorage.getItem(UI_LANG_KEY)
      const browserLanguage = (navigator.language || 'en-US').split('-')[0]
      languageToSet = persistedLanguage || browserLanguage || 'en'
    }

    this.language = languageToSet

    localStorage && localStorage.setItem(UI_LANG_KEY, this.language)

    document.body.querySelectorAll(`[class*='i18n-']`).forEach(langElem => {
      if (langElem.classList.contains(`i18n-${this.language}`)) {
        langElem.classList.add('active')
      } else {
        langElem.classList.remove('active')
      }
    })

    this.calendar && this.calendar.setLanguage(this.language)
  }
}

const app = new App()
window.addEventListener('load', () => {
  app.init()
})

