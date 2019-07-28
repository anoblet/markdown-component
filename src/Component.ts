import { LitElement, customElement, property } from "lit-element";
import { BeforeRender } from "@anoblet/mixins/dist/before-render";

import Style from "./Style";
import Template from "./Template";

const marked = require("marked");

@customElement("markdown-component")
export class MarkdownComponent extends BeforeRender(LitElement) {
  public static styles = Style;
  public render = Template.bind(this);
 
  @property() public src;
  @property() public html = "";

  public inheritedStyles;

  async beforeRender() {
    if (this.inheritedStyles) {
      const styleSheets = this.shadowRoot.adoptedStyleSheets;
      this.shadowRoot.adoptedStyleSheets = [
        ...styleSheets,
        this.inheritedStyles._styleSheet
      ];
    }
    const result = await fetch(this.src).then(response => {
      return response.text();
    });
    this.html = marked(result);
  }
}
