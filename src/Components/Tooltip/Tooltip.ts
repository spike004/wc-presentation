interface TooltipProps {
    tooltipContainer: HTMLElement;
    tooltipIcon: HTMLElement;
    tooltipText: string;
  }
  const tooltipTemplate = document.createElement('template');
  tooltipTemplate.innerHTML = `
  <style>
  :host{
      position: relative;
      box-sizing: border-box;
      cursor: pointer;
      width: min-content;
      display: inline-block;
      --svg-icon: ;
  }
  .tooltip-container{
      display: flex;
      position: absolute;
      top: calc(-100% + var(--tooltip-padding, -5px)); 
      padding:5px 10px;
      left: 100%;
      width: max-content;
      background-color: rgba(0,0,0,0.7);
      color: #fff;
  }
  svg-component{
      --path-stroke: var(--icon-color);
      --svg-height: 18px;
      --svg-width: 18px;
      width: fit-content;
  }
  </style>
  <slot></slot>
  `
class Tooltip extends HTMLElement {
    props: TooltipProps
    constructor() {
        super() 
        this.props = {
            tooltipContainer: document.createElement('div'),
            tooltipIcon: document.createElement('svg-component'),
            tooltipText: this.dataset.text as string
        }     
        this.props.tooltipContainer.className = "tooltip-container";
        this.attachShadow({ mode: "open" });
        this.shadowRoot?.appendChild(tooltipTemplate.content.cloneNode(true))
    }

    connectedCallback() {
        this.props.tooltipIcon.setAttribute('data-icon', 'info-icon')
        this.props.tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this))
        this.props.tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this))
        this.shadowRoot.appendChild(this.props.tooltipIcon);
    }

    _showTooltip() {  
       this.props.tooltipContainer.textContent = this.props.tooltipText;
       this.shadowRoot.appendChild(this.props.tooltipContainer);
    }
    _hideTooltip() {
        this.shadowRoot.removeChild(this.props.tooltipContainer);
    }
}

customElements.define('boss-tooltip', Tooltip)