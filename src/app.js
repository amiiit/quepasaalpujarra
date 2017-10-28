import './app.scss'
import Popup from './popup.js'

class App {
  init(){
    this.popup = new Popup({el: document.getElementById('popup-wrapper')})
  }

}

const app = new App()
window.addEventListener('load',()=>{app.init()})

