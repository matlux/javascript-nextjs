import { css } from "@emotion/core";
import React, { useState } from "react";

const Page = ({ somePropDerivedOn, expensiveState }) => (
  <div>
    <p>another loremi</p>: {somePropDerivedOn}
    <Example expensiveState={expensiveState} otherState={somePropDerivedOn}>
      <SubComponent id="2" otherState={somePropDerivedOn} />
    </Example>
  </div>
);

Page.getInitialProps = () => {
  console.log("Hello from the server");
  return {
    somePropDerivedOn: "the server",
    expensiveState: 42,
  };
};

const h1Rules = css`
      color: red;
      span {
        color: blue;
      }
    `

const SubComponent = ({ id }) => (
  <h1 css={h1Rules}>
    Main Heading
    <span>SubHeaing {id}</span>
  </h1>
);

function Example({ expensiveState, otherState, children }) {
  // Declare a  new state variable, which we'll call "count"
  const [count, setCount] = useState(expensiveState);
  const [disabled, setDisable] = useState(false);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
          if (count >= 45) setDisable(true);
        }}
        disabled={disabled}
      >
        Click me
      </button>
      <div>my children are {children}</div>
      <p>the other state={otherState}</p>
      <SubComponent id="1" otherState={otherState} />
    </div>
  );
}

export default Page;

// const Page = ({ somePropDerivedOn }) => <div>
//   <p>another loremi</p>: {somePropDerivedOn}</div>

// Page.getInitialProps = () => {
//   console.log('Hello from the server')

//   return {
//     somePropDerivedOn: "the server"
//   }
// }

// export default Page
