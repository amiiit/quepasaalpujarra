const calLinks = [
  'eventos%40quepasaalpujarra.com',
  'quepasaalpujarra%40gmail.com',
  'en.spain%23holiday%40group.v.calendar.google.com',
]

export default class Calendar {
  constructor({el, language, onLoadingState}) {
    this.dom = {
      calendar: el
    }
    this.language = language || 'en'
    this.onLoadingState = onLoadingState

    window.addEventListener('resize', this.render)
  }

  setLanguage(language) {
    if (language !== this.language){
      this.language = language
      this.render()
    }
  }

  render = () => {
    const srcPart = calLinks.map(function (calUrl) {
      return 'src=' + calUrl
    }).join('&')
    const calIframe = document.createElement('iframe')
    calIframe.src =
      `https://calendar.google.com/calendar/embed?&ctz=Europe/Madrid&hl=${this.language}&${srcPart}`
    calIframe.id = 'calendar-iframe'

    calIframe.width = (window.innerWidth - 48) + 'px';
    calIframe.height = Math.max(window.innerHeight, 800) + 'px';
    calIframe.frameborder = 0

    this.onLoadingState(true)
    this.dom.calendar.innerHTML = ''
    this.dom.calendar.appendChild(calIframe)
    calIframe.addEventListener('load',  () => {
      calIframe.classList.add('loaded')
      calIframe.scrolling = 'no'
      document.getElementById('calendar-wrapper').classList.add('loaded')
      this.onLoadingState(false)
    })


  }

}