import { html, css, LitElement } from 'lit';
import { bannerStyle } from './styles/banner-style.js';
import { wordmark } from './images/wordmark.js'
import { az } from './images/az.js'
import { search } from './images/search.js'

export class UconnBanner extends LitElement {
  static styles = [
    bannerStyle,
    css`

    `
  ];

  static properties = {
    color: { type: String }
    // counter: { type: Number },
  };

  constructor() {
    super();
    this.color = 'blue';
  }

  // __increment() {
  //   this.counter += 1;
  // }

  render() {
    return html`
      <div id="uconn-banner" class="${this.color}">
        <main>
          <div>
              <a id="wordmark" href="https://uconn.edu/">${wordmark}</a>
          
          <!-- University of Connecticut -->
          </div>

          <div>
            <button>${search}</button>
            <button>${az}</button>
          </div>
        </main>
        

      </div>

    `;
  }
}
