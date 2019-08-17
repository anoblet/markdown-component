import { LitElement, customElement, property } from "lit-element";
import Mixins from "@anoblet/mixins";
import { applyStyle } from "@anoblet/utility/dist/utility";

import Style from "./Style";
import Template from "./Template";

const marked = require("marked");

@customElement("markdown-component")
export class MarkdownComponent extends Mixins.BeforeRender(LitElement) {
  public static styles = Style;
  public render = Template.bind(this);

  @property() public src = "";
  @property() public html = "";

  public inheritedStyles;

  async beforeRender() {
    const result = await fetch(this.src).then(response => {
      return response.text();
    });
    this.html = marked(result);
  }

  firstUpdated() {
    if (this.inheritedStyles) applyStyle(this, this.inheritedStyles);
  }
}
