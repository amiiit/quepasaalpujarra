import './app.scss'
import Popup from './popup.js'
import Header from './header.js'

class App {
  init() {
    this.popup = new Popup({
      el: document.getElementById('popup-wrapper'),
      onDetailsClick: this.openDetailsPopup
    })
    this.details = document.getElementById('more-details')

    this.header = new Header({
      el: document.getElementById('header'),
      onDetailsClick: (detailsId) => {
        this.openDetailsPopup(detailsId)
      }
    })
  }

  openDetailsPopup(detailsId) {
    this.popup.open(detailsId)
  }
}

const app = new App()
window.addEventListener('load', () => {
  app.init()

})

