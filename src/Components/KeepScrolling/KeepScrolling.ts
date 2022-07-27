import { CustomElement } from '../../Utils/Decorators';
import { SvgComponent, iconTemplate } from "../Svg/SvgComponent";



class KeepScrolling extends SvgComponent{
constructor(){
    super()

    const styles = this.shadowRoot.querySelector('style').textContent
    this.shadowRoot.querySelector('style').innerHTML = (styles+`
    :host{
        --button-background-color ;
        border-radius: 100%;
    }
    :host-context(.pulse){
        animation: pulse-animation 3s infinite;
       }
       
       @keyframes pulse-animation {
        0% {
          box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
        }
        100% {
          box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);
        }
      }button{display: grid;place-items: center;height:50px;width:50px;padding:0;border:none;border-radius:100%;background-color: var(--button-background-color, #5f9ea0);}`)
    const keepScrollingBtn = document.createElement('button')
    keepScrollingBtn.appendChild(this.shadowRoot.querySelector('svg'))
    keepScrollingBtn.setAttribute('role', 'navigation')
    keepScrollingBtn.setAttribute('aria-label', 'keep scrolling')
    this.shadowRoot.appendChild(keepScrollingBtn)

}
connectedCallback(){
    console.log(this)
    this.addEventListener('click', (e)=>{
        
        if(this.parentElement.tagName.toLowerCase() === 'body'){
            window.scrollTo(0, document.body.clientHeight)
        }else{
            console.log(this.parentElement.clientHeight, this.parentElement.scrollTo(0, this.parentElement.clientHeight));
        }
    })
}
}

window.customElements.define('keep-scrolling', KeepScrolling)