 export const ModalStyles = `
 
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
    overflow-y: scroll;
    max-height: 80vh;
    max-width: 90vw;
    display: grid;
    grid-template-rows: 1fr;
    scroll-behavior: smooth;
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
   svg-component[data-icon="close-icon"] {
       --svg-height: 50px;
       --svg-width: 50px;
       --path-stroke: #ffffff;
   }
   keep-scrolling[data-icon="arrow-down-icon"]{
       grid-area: 1 / 1 / 2 / 2;
       align-self: flex-end;
       position: sticky;
       bottom: 0;
       left: 100%;
       --svg-height: 35px;
       --svg-width: 35px;
       --path-stroke: #000000;
       border-radius: 100%;
   }
  
   @media (max-width: 768px){
    .modal-close{
           left: 50%;
           transform: translate(-50%, -25px)!important;
       }
       :host([opened]) .modal-close{
           transform: translate(-50%, 0)!important;
       }
   }
   ::slotted([slot="container"]){
       grid-area: 1 / 1 / 2 / 2;
   }
   /* width */
   ::-webkit-scrollbar {
     width: 12px;
   }
   
   /* Track */
   ::-webkit-scrollbar-track {
     background: #f4f4f4;
     border-radius:12px;
   }
   
   /* Handle */
   ::-webkit-scrollbar-thumb {
    background: #555;
     border: 2px solid #f4f4f4;
     border-radius:12px;
   }
   
   /* Handle on hover */
   ::-webkit-scrollbar-thumb:hover {
     background: #5f9ea0;
   }
   `