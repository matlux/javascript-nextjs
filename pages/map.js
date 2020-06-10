import React, { useState } from 'react';


const Page = ({ somePropDerivedOn, expensiveState }) => <div>
  <p>another loremi</p>: {somePropDerivedOn}
  <Example expensiveState={expensiveState} otherState={somePropDerivedOn}>
    <SubComponent id='2' otherState={somePropDerivedOn}></SubComponent></Example></div>

Page.getInitialProps = () => {
  console.log('Hello from the server')
  return {
    somePropDerivedOn: "the server",
    expensiveState: 42,
  }
}


const SubComponent = ({ id }) => <div>
  <p>SubComponent {id}</p> </div>




function Example({ expensiveState, otherState, children }) {
  // Declare a  new state variable, which we'll call "count"
  const [count, setCount] = useState(expensiveState);
  const [disabled, setDisable] = useState(false);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => {
        setCount(count + 1);
        if(count >= 45) setDisable(true);
        }} disabled={disabled}>
        Click me
      </button>
  <p>my children are {children}</p>
  <p>the other state={otherState}</p>
  <SubComponent id='1' otherState={otherState}></SubComponent>
    </div>
  );
}


export default Page


// const Page = ({ somePropDerivedOn }) => <div>
//   <p>another loremi</p>: {somePropDerivedOn}</div>

// Page.getInitialProps = () => {
//   console.log('Hello from the server')

//   return {
//     somePropDerivedOn: "the server"
//   }
// }

// export default Page