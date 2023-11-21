import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle"
export default class extends Controller {
  static targets = ['toggable']
  connect() {
    console.log('Hello from Toggle Controller')
  }

  fire() {
    console.log(this.toggableTarget)
    this.toggableTarget.classList.toggle('d-none')
  }
}
