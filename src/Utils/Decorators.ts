

function WithTemplate(template: string, hookId: string){
    console.log('template function');
    return function<T extends {new (...args: any[]): {name: string}}>(originalConstructor: T){
        return class extends originalConstructor {
            constructor(..._: any[]){
                super();
                console.log('rendering template');
                const hookEl = document.getElementById(hookId);
                if(hookEl){
                    hookEl.innerHTML = template;
                    
                }
            }
        }
    }
}
interface CustomElementConfig {
    selector: string;
    template: string;
    style?: string;
    useShadow?: boolean;
    delegatesFocus?: boolean;
}
const validateSelector = (selector: string) => {
    if (selector.indexOf('-') <= 0) {
        throw new Error('You need at least 1 dash in the custom element name!');
    }
};
export const CustomElement = (config: CustomElementConfig) => (cls: CustomElementConstructor) => {
    validateSelector(config.selector);
    if (!config.template) {
        throw new Error('You need to pass a template for the element');
    }
    const template = document.createElement('template');
    if (config.style) {
        config.template = `<style>${config.style}</style> ${config.template}`;
    }
    template.innerHTML = config.template;

    const connectedCallback = cls.prototype.connectedCallback || function () {};
    const disconnectedCallback = cls.prototype.disconnectedCallback || function () {};
    
    cls.prototype.connectedCallback = function() {
        const clone = document.importNode(template.content, true);
        if (config.useShadow) {
            const focus = config.delegatesFocus ? config.delegatesFocus : false;
            this.attachShadow({mode: 'open', delegatesFocus: focus}).appendChild(clone);
        } else {
            this.appendChild(clone);
        }
    
        if (this.componentWillMount) {
            this.componentWillMount();
        }
        connectedCallback.call(this);
        if (this.componentDidMount) {
            this.componentDidMount();
        }
    };
    
    cls.prototype.disconnectedCallback = function() {
        if (this.componentWillUnmount) {
            this.componentWillUnmount();
        }
        disconnectedCallback.call(this);
        if (this.componentDidUnmount) {
            this.componentDidUnmount();
        }
    };

    window.customElements.define(config.selector, cls);
};


function Autobind(
    _: any, 
    _2: string, 
    descriptor: PropertyDescriptor
    ){
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}

export class Printer {
    message = 'this works';
    @Autobind
    showMessage() {
        console.log(this.message);
    }
}
