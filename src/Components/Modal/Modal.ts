import { CustomElement } from "../../Utils/Decorators";
import { ModalStyles } from "./ModalStyles";
import { ModalTemplate } from "./ModalTemplate";

const overlayTemplate = document.createElement("template");
overlayTemplate.innerHTML = `
<svg 
class="overlay" 
width="50" 
height="50" 
viewBox="0 0 50 50" 
fill="rgba(0,0,0,0.75)" 
xmlns="http://www.w3.org/2000/svg" 
style="width: 100%;height: 100%; position: absolute; top:0;left:0;" 
preserveAspectRatio="none">
<defs>
<style>
rect{
    fill: rgba(0,0,0,.75);
    width: 100vw;
    height: 100vh;
}
</style>
</defs>
<rect 
width="100%"
height="100%" 
x="0" 
y="0">
</rect>

</svg>
`;

@CustomElement({
  selector: "boss-modal",
  template: ModalTemplate,
  useShadow: true,
  delegatesFocus: true,
  style: ModalStyles,
})

class ModalComponent extends HTMLElement {
  isOpen: boolean;
  modal: HTMLElement;
  closeBtn: HTMLElement;
  launchBtn: any;
  triggerId: string | null;
  focusableElements: string;
  firstFocusableElement: HTMLElement;
  focusableContent: Element[];
  lastFocusableElement: HTMLElement;
  constructor() {
    super();
    this.isOpen = false;
    this.triggerId = this.getAttribute("trigger-id");
    this.focusableElements =
      'keep-scrolling, base-button, button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  }
  componentWillMount() {
    this.launchBtn = document.querySelector("#" + this.triggerId);
    this.closeBtn = this.shadowRoot.querySelector(
      ".modal-close"
    ) as HTMLElement;
    this.modal = this.shadowRoot.getElementById("modal") as HTMLElement;

    console.log("component will mount");
  }

  componentDidMount() {
    console.log("component did mount");
    // const slots = this.shadowRoot?.querySelectorAll(
    //   "slot"
    // ) as NodeListOf<HTMLSlotElement>;

    // slots[0].addEventListener("slotchange", (event) => {
    //   console.log("slot changed, assigned nodes are...");
    //   console.dir(slots[0].assignedNodes()[0]);
    // });
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  componentDidUnmount() {
    console.log("component did unmount");
  }

  toggle(event: any) {
    const b = document.querySelector("body") as HTMLBodyElement;
    if (event.type === "keyup") {
      if (event.keyCode != 27) {
        return;
      } else {
        this.removeAttribute("opened");
        b.style.overflow = "initial";
        const closeEvent = new Event("closemodal");
        this.dispatchEvent(closeEvent);
        return;
      }
    }

    this.toggleAttribute("opened");

    if (this.getAttribute("opened") != null) {
      const openEvent = new Event("openmodal");
      b.style.overflow = "hidden";
      this.dispatchEvent(openEvent);
      console.log("dispatching openmodal event", openEvent);
    } else {
      b.style.overflow = "unset";
      const closeEvent = new Event("closemodal");
      this.dispatchEvent(closeEvent);
      console.log("dispatching closemodal event", closeEvent);
    }
  }
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    const keepScrollingIcon = document.createElement("keep-scrolling");
    
    if (name === "opened") {
      this.isOpen = true;
      this.addEventListener("openmodal", (e) => {
        this.focus();
      });
      if(!this.shadowRoot.querySelector('.overlay')){
          this.shadowRoot!.appendChild(overlayTemplate.content.cloneNode(true));
          this.shadowRoot!.querySelector(".overlay")!.addEventListener(
            "click",
            (e) => this.toggle(e)
          );

      }

      if (
        this.modal.scrollHeight > window.innerHeight &&
        !this.modal.querySelector("keep-scrolling")
      ) {
        keepScrollingIcon.setAttribute("data-icon", "arrow-down-icon");
        keepScrollingIcon.classList.add("pulse");
        this.modal.appendChild(keepScrollingIcon);
      }
    //   this.focusableContent = Array.from(
    //     this.shadowRoot.querySelectorAll('keep-scrolling')
    //   ).concat(Array.from(this.querySelectorAll(this.focusableElements))).concat(Array.from(this.shadowRoot.querySelectorAll('.modal-close')));
    //   this.firstFocusableElement = this.focusableContent[0] as HTMLElement
    //   this.lastFocusableElement = this.focusableContent[
    //     this.focusableContent.length - 1
    //   ] as HTMLElement;
    //   console.log(
    //     this.firstFocusableElement,
    //     this.focusableContent,
    //     this.lastFocusableElement
    //   );
    } else {
      this.isOpen = false;
      this.shadowRoot!.querySelector(".overlay")!.remove();
      this.shadowRoot!.querySelector("keep-scrolling").remove();
    }
  }

  static get observedAttributes() {
    return ["opened"];
  }

  connectedCallback() {
    this.launchBtn.addEventListener("click", (e: any) => this.toggle(e));
    this.closeBtn.addEventListener("click", (e) => this.toggle(e));
    this.closeBtn.addEventListener("keyup", (e) => this.toggle(e));
    
    // document.addEventListener("keyup", (e) => {
    //   let isTabPressed = e.key === "Tab" || e.keyCode === 9;
    //   console.log(e);
    //   if (!isTabPressed) {
    //     return;
    //   }

    //   if (e.shiftKey) {
    //     // if shift key pressed for shift + tab combination
    //     if (document.activeElement === this.firstFocusableElement) {
    //       this.lastFocusableElement.focus(); // add focus for the last focusable element
    //       e.preventDefault();
    //     }
    //   } else {
    //     // if tab key is pressed
    //     if (document.activeElement === this.lastFocusableElement) {
    //       // if focused has reached to last focusable element then focus first focusable element after pressing tab
    //       this.firstFocusableElement.focus(); // add focus for the first focusable element
    //       e.preventDefault();
    //     }
    //   }
    //   this.toggle(e);
    // });

    this.modal.addEventListener("click", (e: any) => e.preventDefault());
  }
  disconnectedCallback() {
    this.closeBtn.removeEventListener("click", this.toggle.bind(this));
  }
}
