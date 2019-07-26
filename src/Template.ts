import { html } from "lit-element";
import { unsafeHTML } from "lit-html/directives/unsafe-html";

export default function() {
  return html`
    ${unsafeHTML(this.html)}
  `;
}
