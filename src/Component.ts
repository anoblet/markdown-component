import { LitElement, customElement } from "lit-element";

import Style from "./Style";
import Template from "./Template";

@customElement("markdown-component")
export class MarkdownComponent extends LitElement {
  public static styles = Style;
  public render = Template.bind(this);
}
