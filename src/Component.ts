import { LitElement, customElement, property } from "lit-element";
import { BeforeRender } from "@anoblet/mixins/dist/before-render";
import { applyStyle } from "@anoblet/utility/dist/utility";

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

  // Runs off of constructor as an async method. Properties are available!
  async beforeRender() {
    const result = await fetch(this.src).then(response => {
      return response.text();
    });
    this.html = marked(result);
  }

  firstUpdated() {
    applyStyle(this, this.inheritedStyles);
  }
}
