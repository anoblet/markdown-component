import { LitElement, customElement, property } from "lit-element";

import Style from "./Style";
import Template from "./Template";

@customElement("markdown-component")
export class MarkdownComponent extends LitElement {
  public static styles = Style;
  public render = Template.bind(this);

  @property() public src;

  firstUpdated() {
    async () => {
      const result = await fetch(this.src);
    }
  }
}
