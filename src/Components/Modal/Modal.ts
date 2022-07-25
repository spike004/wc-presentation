import { CustomElement } from '../../Utils/Decorators';

const overlayTemplate = document.createElement("template");
overlayTemplate.innerHTML =`
<svg class="overlay" width="50" height="50" viewBox="0 0 50 50" fill="rgba(0,0,0,0.75)" xmlns="http://www.w3.org/2000/svg" style="width: 100%;height: 100%; position: absolute; top:0;left:0;" preserveAspectRatio="none">
<defs>
<style>
rect{
    fill: rgba(0,0,0,.75);
    width: 100vw;
    height: 100vh;
}
</style>
</defs>
<rect width="100%"
height="100%" x="0" y="0"></rect>

</svg>
`
const modalTemplate = document.createElement("template");
modalTemplate.innerHTML = `
<style>
:host {
    --close-x: #000000;
    --close-bg: #ffffff;
    display: grid;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
   /*  background: rgba(0,0,0,0.75); */
    z-index: 10;
    opacity: 0;
    pointer-events: none;
    place-content:center;
}
.overlay{
    display: block;
    content: '';
    position: absolute;
    top:0;
    left:0;
    width: 100vh;
    height: 100vh;
    fill: rgba(0,0,0,0.75); 
    z-index: 10;
    opacity: 0;
    pointer-events: none;
    place-content:center; 
}
#modal {
    z-index: 100;
    background: #ffffff;
    opacity: 0;
    pointer-events: none;
    padding: 15px;
    transition: all .4s ease-out;
    transform: translateY(-25px);
}
:host([opened]) #modal,
:host([opened]) .modal-close{
    transform: translateY(0);
}
:host([opened]),
:host([opened]) #backdrop,
:host([opened]) #modal,
:host([opened]) .overlay,
:host([opened]) .modal-close{
    opacity: 1;
    pointer-events: all;

}



.modal-close{
    position: relative;
    top:0;
    left: 100%;
    justify-self: baseline;
    align-self: end;
    cursor: pointer;
    z-index: 101;
    transition: all .4s ease-out;
    transform: translateY(-25px);
    opacity: 0;
}

.bg{
    fill: var(--close-bg);
}
.x{
    fill: var(--close-x);
}

button{
 border: none;
 background: none;
}
</style>

  <svg class="modal-close" tabindex="0" aria-label="close-modal" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="bg" d="M49.2285 25C49.2285 11.6211 38.3789 0.771484 25 0.771484C11.6211 0.771484 0.771484 11.6211 0.771484 25C0.771484 38.3789 11.6211 49.2285 25 49.2285C38.3789 49.2285 49.2285 38.3789 49.2285 25Z" fill="#E04F5F"/>
<path class="x" d="M27.832 25L34.9121 16.7773C35.6836 15.8789 35.5859 14.5312 34.6875 13.75C33.7891 12.9785 32.4414 13.0762 31.6699 13.9746L25 21.7187L18.3398 13.9844C17.5684 13.0859 16.2109 12.9883 15.3125 13.7598C14.4141 14.5312 14.3164 15.8887 15.0879 16.7871L22.168 25L15.0879 33.2227C14.3164 34.1211 14.4141 35.4687 15.3125 36.25C15.7129 36.6016 16.2109 36.7676 16.709 36.7676C17.3145 36.7676 17.9102 36.5137 18.3301 36.0254L24.9902 28.291L31.6504 36.0254C32.0703 36.5137 32.6758 36.7676 33.2715 36.7676C33.7695 36.7676 34.2676 36.6016 34.668 36.25C35.5664 35.4785 35.6641 34.1211 34.8926 33.2227L27.832 25Z" fill="white"/>
</svg>

  <div id="modal">
  <slot class="modal-container" name="container"></slot>
</div>


`
@CustomElement({
    selector: 'boss-modal',
    template: `  <button class="modal-close"><svg  tabindex="-1" aria-label="close-modal" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="bg" d="M49.2285 25C49.2285 11.6211 38.3789 0.771484 25 0.771484C11.6211 0.771484 0.771484 11.6211 0.771484 25C0.771484 38.3789 11.6211 49.2285 25 49.2285C38.3789 49.2285 49.2285 38.3789 49.2285 25Z" fill="#E04F5F"/>
    <path class="x" d="M27.832 25L34.9121 16.7773C35.6836 15.8789 35.5859 14.5312 34.6875 13.75C33.7891 12.9785 32.4414 13.0762 31.6699 13.9746L25 21.7187L18.3398 13.9844C17.5684 13.0859 16.2109 12.9883 15.3125 13.7598C14.4141 14.5312 14.3164 15.8887 15.0879 16.7871L22.168 25L15.0879 33.2227C14.3164 34.1211 14.4141 35.4687 15.3125 36.25C15.7129 36.6016 16.2109 36.7676 16.709 36.7676C17.3145 36.7676 17.9102 36.5137 18.3301 36.0254L24.9902 28.291L31.6504 36.0254C32.0703 36.5137 32.6758 36.7676 33.2715 36.7676C33.7695 36.7676 34.2676 36.6016 34.668 36.25C35.5664 35.4785 35.6641 34.1211 34.8926 33.2227L27.832 25Z" fill="white"/>
    </svg></button>
    
      <div id="modal">
      <slot class="modal-container" name="container"></slot>
    </div>`,
    useShadow: true,
    delegatesFocus: true,
    style: `:host {
        --close-x: #000000;
        --close-bg: #ffffff;
        display: grid;
        box-sizing: border-box;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
       /*  background: rgba(0,0,0,0.75); */
        z-index: 10;
        opacity: 0;
        pointer-events: none;
        place-content:center;
    }
    .overlay{
        display: block;
        content: '';
        position: absolute;
        top:0;
        left:0;
        width: 100vh;
        height: 100vh;
        fill: rgba(0,0,0,0.75); 
        z-index: 10;
        opacity: 0;
        pointer-events: none;
        place-content:center; 
    }
    #modal {
        z-index: 100;
        background: #ffffff;
        opacity: 0;
        pointer-events: none;
        padding: 15px;
        transition: all .4s ease-out;
        transform: translateY(-25px);
        overflow-y: scroll;
        max-height: 80vh;
    }
    :host([opened]) #modal,
    :host([opened]) .modal-close{
        transform: translateY(0);
    }
    :host([opened]),
    :host([opened]) #backdrop,
    :host([opened]) #modal,
    :host([opened]) .overlay,
    :host([opened]) .modal-close{
        opacity: 1;
        pointer-events: all;
    
    }
    
    
    
    .modal-close{
        position: relative;
        top:0;
        left: 100%;
        justify-self: baseline;
        align-self: end;
        cursor: pointer;
        z-index: 101;
        transition: all .4s ease-out;
        transform: translateY(-25px);
        opacity: 0;
    }
    
    .bg{
        fill: var(--close-bg);
    }
    .x{
        fill: var(--close-x);
    }
    button{
        border: none;
        background: none;
       } 
   
    `
})
class ModalComponent extends HTMLElement {
    isOpen: boolean;
    modal: HTMLElement;
    closeBtn: HTMLElement;
    launchBtn: any;
    triggerId: string | null;
  constructor() {
    super();


        this.isOpen = false;
        this.triggerId = this.getAttribute('trigger-id');
        

        //   const slots = this.shadowRoot?.querySelectorAll('slot') as NodeListOf<HTMLSlotElement>;
        //   slots[0].addEventListener('slotchange', event=>{
        //       console.dir(slots[0].assignedNodes())
        //   })
       

         
        }
        componentWillMount() {
            this.launchBtn = document.querySelector('#'+this.triggerId) ;
            this.closeBtn = this.shadowRoot.querySelector('.modal-close') as HTMLElement;
            this.modal = this.shadowRoot.getElementById("modal") as HTMLElement;
            console.log('component will mount');
        }
    
        componentDidMount() {
            console.log('component did mount');
        }
    
        componentWillUnmount() {
            console.log('component will unmount');
        }
    
        componentDidUnmount() {
            console.log('component did unmount');
        }
    
       toggle(event:any){
           if(event.type === 'keyup'){
               if(event.keyCode != 27) {
                console.log(event)
                   return
            }else{
               return this.removeAttribute('opened');
            }
           }
           
           const b = document.querySelector('body') as HTMLBodyElement;
           this.toggleAttribute('opened');

            if(this.getAttribute('opened') !=null){
                const openEvent = new Event('openmodal');
                b.style.overflow = 'hidden'
                this.dispatchEvent(openEvent)
                console.log('dispatching openmodal event', openEvent)
        }
        else{  
            b.style.overflow = 'unset'
            const closeEvent = new Event('closemodal');
            this.dispatchEvent(closeEvent)
            console.log('dispatching closemodal event', closeEvent)
        }
       } 
       attributeChangedCallback(name: string, oldValue: string, newValue: string){
        if(this.hasAttribute('opened')){
            this.isOpen = true
            this.shadowRoot!.appendChild(overlayTemplate.content.cloneNode(true));
            this.shadowRoot!.querySelector('.overlay')!.addEventListener("click", (e)=>this.toggle(e));
        }else{
            this.isOpen = false
            this.shadowRoot!.querySelector('.overlay')!.remove();
        }
       }
    static get observedAttributes(){
        return['opened']
    }
    connectedCallback(){
        
        this.launchBtn.addEventListener("click", (e:any)=>this.toggle(e));
        this.closeBtn.addEventListener("click", (e)=>this.toggle(e));
        this.closeBtn.addEventListener("keyup", (e)=>this.toggle(e));
        this.addEventListener("keyup", (e)=>this.toggle(e));
        this.addEventListener("openmodal", (e)=>this.focus());
       
        this.modal.addEventListener("click", (e:any)=>e.preventDefault());
        // let container = this.querySelector('[slot="container"]')
        // console.log(container)
        // this.modal.style.pointerEvents = 'none'
        // this.closeBtn.addEventListener()

      
      
    }
   disconnectedCallback(){
       
       this.closeBtn.removeEventListener("click", this.toggle.bind(this));
   }


    }

// class ModalComponent extends HTMLElement {
//     isOpen: boolean;
//     modal: HTMLElement;
//     closeBtn: HTMLElement;
//     launchBtn: any;
//     triggerId: string | null;
//   constructor() {
//     super();

   
//     this.attachShadow({ mode: "open" });
    
//     const thisShadowRoot = this.shadowRoot as ShadowRoot;
//     thisShadowRoot.appendChild(modalTemplate.content.cloneNode(true));

//         this.isOpen = false;
//         this.modal = thisShadowRoot.getElementById("modal") as HTMLElement;
//         this.triggerId = this.getAttribute('data-trigger-id');
//         this.launchBtn = document.querySelector('#'+this.triggerId) ;
//                 this.closeBtn = thisShadowRoot.querySelector('.modal-close') as HTMLElement;
          
          

//           const slots = this.shadowRoot?.querySelectorAll('slot') as NodeListOf<HTMLSlotElement>;
//           slots[0].addEventListener('slotchange', event=>{
//               console.dir(slots[0].assignedNodes())
//           })
       

         
//         }
     
    
//        toggle(event:any){
//            const b = document.querySelector('body') as HTMLBodyElement;
           
//            if(this.getAttribute('opened')){
               
//            }
//            this.toggleAttribute('opened');

//         if(this.getAttribute('opened') !=null){
//             const openEvent = new Event('openmodal');
//         b.style.overflow = 'hidden'
//         this.dispatchEvent(openEvent)
//                console.log('dispatching openmodal event', openEvent)
//         }
//         else{  
//         b.style.overflow = 'unset'
//         const closeEvent = new Event('closemodal');
//         this.dispatchEvent(closeEvent)
//         console.log('dispatching closemodal event', closeEvent)
//         }
//         //  const b = document.querySelector('body') as HTMLBodyElement;
//         // b.style.overflow = 'hidden'
//        } 
//        attributeChangedCallback(name: string, oldValue: string, newValue: string){
//         if(this.hasAttribute('opened')){
//             this.isOpen = true
//             this.shadowRoot!.appendChild(overlayTemplate.content.cloneNode(true));
//             this.shadowRoot!.querySelector('.overlay')!.addEventListener("click", (e)=>this.toggle(e));
//         }else{
//             this.isOpen = false
//             this.shadowRoot!.querySelector('.overlay')!.remove();
//         }
//        }
//     static get observedAttributes(){
//         return['opened']
//     }
//     connectedCallback(){
//         this.launchBtn.addEventListener("click", (e:any)=>this.toggle(e));
//         this.closeBtn.addEventListener("click", (e)=>this.toggle(e));
        
       
//         // this.modal.addEventListener("click", (e:any)=>e.preventDefault());
//         // let container = this.querySelector('[slot="container"]')
//         // console.log(container)
//         // this.modal.style.pointerEvents = 'none'
//         // this.closeBtn.addEventListener()

      
      
//     }
//    disconnectedCallback(){
       
//        this.closeBtn.removeEventListener("click", this.toggle.bind(this));
//    }


//     }


