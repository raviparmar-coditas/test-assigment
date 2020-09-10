import { LitElement, html, customElement, property, css } from 'lit-element';

// console.log('hello-world module');

@customElement('custom-button')
export class CustomElement extends LitElement {
	@property() title;
	static get styles() {
		// Write styles in standard CSS
		return css`
        .btn{
            background-color: #577BF9;
            padding: 0.5em 2em;
            font-size: 1rem;
            border: none;
            border-radius: 5px;
            box-shadow: 2px 2px 3px #0000001f;
            color: #ffffff;
            outline: none;
            cursor: pointer;
        }
		`;
	}
	render() {
		return html`<button class="btn">${this.title}</button>`;
	}
}
// customElements.define('custom-button', CustomElement);
