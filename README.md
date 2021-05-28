# react-simple-modal-provider

### Simple Modal Manager for React Projects

<br/>

## Demo

<a href="https://codesandbox.io/s/react-simple-modal-provider-100-esr6t" target="_blank">⭐️ Codesandbox</a>

## Installation

    $ npm install react-simple-modal-provider
    $ yarn add react-simple-modal-provider

## Examples

```jsx
// MyModal Component
import { useState } from "react";
import { Modal, createModalContext } from "react-simple-modal-provider";

export default ({ children }) => {
  const [state, setState] = useState();
  const context = createModalContext("MyModal");

  return (
    <Modal
      consumer={children}
      context={context}
      state={state}
      setState={setState}
    >
      <div>
        <span>😆</span>
        <button onClick={() => setState(false)}>Close</button>
      </div>
    </Modal>
  );
};
```

The **"createModalContext"** module provides the required context. <br/>
Pass **unique ID** to the argument. It is, then, used to load modals. <br/>
Keeping eye on the four required props of the **"Modal"** module, you should create a modal in the child area. <br/>

<br/>

```jsx
// App Component
import { ModalProvider } from "react-simple-modal-provider";
import MyModal from "./MyModal";
import ConsumePage from "./ConsumePage";

export default () => {
  return (
    <ModalProvider modals={[MyModal, ...]}>
      <ConsumePage />
      <ConsumePage />
      ...
    </ModalProvider>
  );
};
```

Register a modal array through the **"modals"** props of the **"ModalProvider"** module and wrap it around the application. <br/>

<br/>

```jsx
// ConsumePage Component
import { useModal } from 'react-simple-modal-provider';

export default () => {
    const { open: openMyModal } = useModal('MyModal');

    return (
        <button onClick={openMyModal}>Open</button>
    );
};
```

**"useModal"** takes the modal ID as an argument and provides the open, close function of the modal. <br/>
It is recommended to name variables using destructuring assignment.<br/>

<br/>

## API

### Modal Module

#### - Essential props

|props|type|default value|discription|
|:---:|:---:|:---:|:---:|
|**consumer**|children props|-|Components for a modal|
|**context**|context|-|Returned by createModalContext|
|**state**|state|-|Returned by useState state|
|**setState**|state function|-|Returned by useState function|

#### - Optional props

|props|type|default value|discription|
|:---:|:---:|:---:|:---:|
|**allowClickOutside**|boolean|true|Allow click outside|
|**overlayColor**|string|rgba(0, 0, 0, 0.6)|Overlay color|
|**animation**|object|-|Open/Close animation|
|**duration**|number|0|Animation duration |
|**vertical**|number|0|Vertical position (px)|
|**horizontal**|number|0|Horizontal position (px)|

<br/>

## Animation

#### - Built-in animation
- Import **"modalAnimation"** module and pass the value to the **animation** props.
  - scaleUp
  - slideDown
  - slideUp

```jsx
import { Modal, modalAnimation } from "react-simple-modal-provider";

export default ({ children }) => {
  return (
    <Modal animation={modalAnimation.scaleUp}>
        ...
    </Modal>
  );
};
```

#### - Custom animation example

```js
{
    type: 'top, opacity',
    base: 'top: -50px; opacity: 0;',
    before: 'top: 50px; opacity: 0;',
    after: 'top: 0px; opacity: 1;',
}
```

```js
{
    type: "transform, opacity",
    base: "transform: rotate(0deg) scale(0.3); opacity: 0;",
    before: "transform: rotate(0deg) scale(0.3); opacity: 0;",
    after: "transform: rotate(360deg) scale(1); opacity: 1;"
}
```

<br/>

<hr/>

<a href="https://github.com/seungdeng17/react-simple-modal-provider" target="_blank">Git Repository</a>

<a href="https://www.npmjs.com/package/react-simple-modal-provider" target="_blank">NPM</a>
