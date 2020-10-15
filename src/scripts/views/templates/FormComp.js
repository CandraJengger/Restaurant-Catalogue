import './ButtonIconComp'

class FormComp extends HTMLElement {
  connectedCallback () {
    this.id = this.getAttribute('idComp') || ''
    this.className = this.getAttribute('className') || ''
    this.render()
  }

  render () {
    this.innerHTML = `
      <form 
        id="${this.id}" 
        class="${this.className}"
       >
        <div class="form-content">
          <input 
            type="text"  
            placeholder="Enter name"
            name="namePerson"
            id="namePerson"
            class="input-name"
            autocomplete="off"
          >
          <input 
            type="text" 
            placeholder="Write a comment"
            name="comment"
            id="comment"
            class="input-comment"
            autocomplete="off"
          >
        </div>
        <div class="form-button">
          <button-icon
            idComp="postButton"
            className="btn-post"
            ariaLabel="Post your comment"
            type="icon"
            content="fas fa-paper-plane"
            role="submit"
          ></button-icon>
        </div>
      </form>
    `
  }  
}

customElements.define('form-comp', FormComp)