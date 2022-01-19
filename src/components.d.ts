/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface TrainingCard {
        "body": string;
        "header": string;
        "imgalt": string;
        "imgurl": string;
        "linkArrow": string;
        "linkLabel": string;
        "linktarget": string;
        "linkurl": string;
        "sub": string;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLTrainingCardElement extends Components.TrainingCard, HTMLStencilElement {
    }
    var HTMLTrainingCardElement: {
        prototype: HTMLTrainingCardElement;
        new (): HTMLTrainingCardElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "training-card": HTMLTrainingCardElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface TrainingCard {
        "body"?: string;
        "header"?: string;
        "imgalt"?: string;
        "imgurl"?: string;
        "linkArrow"?: string;
        "linkLabel"?: string;
        "linktarget"?: string;
        "linkurl"?: string;
        "sub"?: string;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "training-card": TrainingCard;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "training-card": LocalJSX.TrainingCard & JSXBase.HTMLAttributes<HTMLTrainingCardElement>;
        }
    }
}
