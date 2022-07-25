import { isIdentifier } from "typescript";

// Need a primary, secondary, tertiary button AND styles (use sass @mixen setButton(){@if $type == primary{}} etc etc)

// Don’t forget to implement host-context
const buttonTemplate = document.createElement('template') as HTMLTemplateElement;
buttonTemplate.innerHTML = `<style>
:host{
    --button-width: auto;
    --button-height: 40px;
    --button-background-color: #FFFFFF;
    --button-color: #2A5DAF;
    --button-padding:10px 25px ;
    --button-margin: 15px 25px;
    --button-font-weight: 700;
    --button-text-transform: capitalize;
    --button-font-family: inherit;
    --button-border-radius: 4px;
    --button-place-content: center;
    --button-grid-columns: auto;
    --button-background-highlight: #2A5DAF;
    --button-color-highlight: #FFFFFF;
    --button-box-shadow: ;
    --button-border: 1px solid transparent;
    --button-border-highlight: ;
    --icon-color: #000000;
    --icon-highlight: #FFFFFF;
    --icon-margin: ;
    min-width: max-content;
    display: block;
    box-sizing: border-box;
}
button{
  font-size: 16px;
    text-transform: var(--button-text-transform);
    text-align: center;
    align-items: center;
    display: flex;
    place-items: var(--button-place-content);
    cursor: pointer;
    padding: var(--button-padding);
    color: var(--button-color);
    font-weight: var(--button-font-weight);
    background: var(--button-background-color);
    transition: color 100ms ease-in-out, background 100ms ease-in-out;
    border: var(--button-border, 1px solid transparent);
    border-radius: var(--button-border-radius);
    grid-template-columns: var(--button-grid-columns);
    place-content: center;
    font-family: var(--button-font-family);
}
button:hover social-icon::part(icon),button:hover,
button:focus social-icon::part(icon),button:focus{
  fill: var(--icon-highlight);
  color: var(--button-color-highlight);
  background: var(--button-background-highlight);
  border: var(--button-border-highlight, 1px solid transparent);
}
svg-icon{
    --path-stroke: var(--icon-color);
    --path-stroke: var(--icon-color);
    --svg-height: 16px;
    --svg-width: 16px;
    --svg-margin: var(--icon-margin, 0 0 0 5px);
}
button:hover svg-icon{
  --path-fill: var(--icon-highlight);
  --path-stroke: var(--icon-highlight);
}
button:hover svg-icon:not([data-icon=“fb-icon”]), button:hover svg-icon:not([data-icon=“linkedin-icon”]){
  --path-stroke: var(--icon-highlight);
}
svg-icon:not([data-icon]){
  display: none;
}

</style>
    <button class='button'>

   
    </button>`;



class BaseButton extends HTMLElement {
     static get observedAttributes() {
    return ['data-icon', 'base-button', 'data-text'];
  }
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const thisShadowRoot = this.shadowRoot as ShadowRoot;
    thisShadowRoot.appendChild(buttonTemplate.content.cloneNode(true));
    const btn = thisShadowRoot.querySelector('.button') as HTMLElement;
    const icon = document.createElement('svg-icon') as HTMLElement;
    this.dataset.icon ? icon.setAttribute('data-icon', this.dataset.icon): '';
    const buttonHeight = this.dataset.height as string;
    btn.innerText = this.dataset.text as string;
    btn.appendChild(icon)
  
    // const styleTag = thisShadowRoot.styleSheets[0];
    // const hostRules = styleTag.cssRules[0] as CSSRule;
    // console.log(hostRules.style.setProperty('--button-height', buttonHeight));
    // this.style.setProperty(‘--button-height’, buttonHeight);
    // this.getStyles(buttonData.height as string)
    // const icon = this.shadowRoot!.querySelector(“social-icon”) as HTMLElement;
    // const shadowButton = this.shadowRoot!.querySelector(‘button’) as HTMLButtonElement;
    // shadowButton!.dataset.icon =`#${this.dataset.icon}`
    // console.log(icon)
    // icon!.dataset.icon = `#${this.dataset.icon}`;
  }
  connectedCallback(){

  }
  attributeChangedCallback(name: string, oldValue: string, newValue:string) {
    this.updateIcon(name, oldValue, newValue);
  }
  // getStyles(buttonHeight: string){
  // console.log(buttonHeight)
  // }
  updateIcon(name: string, oldValue: string, newValue:string){

      const elIcon = this ? this.shadowRoot?.querySelector('svg-icon') as HTMLElement : null;

      if(name == 'data-icon' && newValue != oldValue){
          elIcon?.setAttribute('data-icon', `${this.getAttribute('data-icon')}`)
      }
      if(name =='data-text' && newValue != oldValue){
// console.log('text changed, swap it and the svg')
const childNodes = this.shadowRoot?.querySelector('.button')?.childNodes;

childNodes?.forEach(node => {
   
    if(node.nodeType === 3){
        oldValue != newValue ? node.nodeValue = newValue : ''
       
    }
} )
      }
  }
}
window.customElements.define('base-button', BaseButton);

class PrimaryButton extends BaseButton{
  
}
window.customElements.define('primary-button', PrimaryButton)