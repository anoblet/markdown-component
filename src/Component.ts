import { LitElement, customElement, property } from "lit-element";

import Style from "./Style";
import Template from "./Template";

const marked = require("marked");

@customElement("markdown-component")
export class MarkdownComponent extends LitElement {
  public static styles = Style;
  public render = Template.bind(this);

  @property() public src;
  @property() public html = "";

  public inheritedStyles;

  constructor() {
    super();
    console.log(this.inheritedStyles);
  }

  firstUpdated() {
    if (this.inheritedStyles) {
      const styleSheets = this.shadowRoot.adoptedStyleSheets
      this.shadowRoot.adoptedStyleSheets = [...styleSheets, this.inheritedStyles._styleSheet];
    }
    (async () => {
      const result = await fetch(this.src).then(response => {
        return response.text();
      });
      this.html = marked(result);
    })();
  }
}
