import { LitElement, customElement, property } from "lit-element";

import Style from "./Style";
import Template from "./Template";

const marked = require("marked");

@customElement("markdown-component")
export class MarkdownComponent extends LitElement {
  public static styles = Style;
  public render = Template.bind(this);

  @property() public src;
  @property() public html;

  public inheritedStyles;

  public connectedCallback() {
    super.connectedCallback();
    if (this.inheritedStyles) {
      this.shadowRoot.adoptedStyleSheets = [this.inheritedStyles._styleSheet];
    }
  }

  firstUpdated() {
    (async () => {
      const result = await fetch(this.src).then(response => {
        return response.text();
      });
      this.html = marked(result);
    })();
  }
}
