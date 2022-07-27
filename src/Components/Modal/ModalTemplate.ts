export const ModalTemplate = `  
<button class="modal-close" aria-label="close-modal">
<svg-component data-icon="close-icon"></svg-component>
</button>
<div id="modal">
<slot class="modal-container" name="container"></slot>
</div>
`