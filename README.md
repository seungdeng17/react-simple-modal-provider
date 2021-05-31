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
import Modal from "react-simple-modal-provider";

export default ({ children }) => {
  const [state, setState] = useState(false);

  return (
    <Modal
      id={"MyModal"}
      consumer={children}
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

Pass **unique ID** to the id props. It is, then, used to load modals. <br/>
Keeping eye on the four required props of the **"Modal"** module, you should create a modal in the child area. <br/>

<br/>

```jsx
// App Component
import { ModalProvider } from "react-simple-modal-provider";
import MyModal from "./MyModal";
import ConsumePage from "./ConsumePage";

export default () => {
  return (
    <ModalProvider value={[MyModal, ...]}>
      <ConsumePage />
      <ConsumePage />
      ...
    </ModalProvider>
  );
};
```

Register a modal array through the **"value"** props of the **"ModalProvider"** module and wrap it around the application. <br/>

<br/>

```jsx
// ConsumePage Component
import { useModal } from "react-simple-modal-provider";

export default () => {
    const { open: openMyModal } = useModal("MyModal");

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
|**id**|string|-|Identifier for a modal|
|**consumer**|children props|-|Components to use modals for|
|**state**|boolean state|false|Returned by useState state|
|**setState**|state function|-|Returned by useState function|

#### - Optional props

|props|type|default value|discription|
|:---:|:---:|:---:|:---:|
|**allowClickOutside**|boolean|true|Allow click outside|
|**overlayColor**|string|rgba(0, 0, 0, 0.6)|Overlay color|
|**animation**|object|-|Open/Close [animation](#animation)|
|**duration**|number|0|Animation duration |
|**vertical**|number|0|Vertical position (px)|
|**horizontal**|number|0|Horizontal position (px)|
|**width**|number|0|Modal width (px)|
|**height**|number|0|Modal height (px)|
|**radius**|number|0|Border radius (px)|
|**backgroundColor**|string|transparent|Background color|
|**asyncOpen**|async function|-|Called when modal opened|
|**spinner**|false \| JSX|Built-in spinner|Async loading spinner|
|**spinnerColor**|string|#93dbe9|Spinner color|

<br/>

## Async Examples

```jsx
import { useState } from "react";
import Modal from "react-simple-modal-provider";

export default ({ children }) => {
    const [state, setState] = useState(false);
    const [data, setData] = useState(null);

    const asyncOpen = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const json = await response.json();
        setData(json);
    };

    return (
        <Modal
            id={"MyAsyncModal"}
            consumer={children}
            state={state}
            setState={setState}
            asyncOpen={asyncOpen}
        >
            <h1>{data.title}</h1>
        </Modal>
    );
};
```

A spinner is built-in. If you don't want to, specify false in **"spinner"** props. <br/>
Custom spinners in "JSX" format can also be specified.

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

#### - Custom animation examples

```js
{
    type: "top, opacity",
    base: "top: -50px; opacity: 0;",
    before: "top: 50px; opacity: 0;",
    after: "top: 0px; opacity: 1;",
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
