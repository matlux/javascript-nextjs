import React, { useState } from 'react';

const c = [<p >child 1</p>,<p >child 2*</p>];

const Page = ({ somePropDerivedOn, expensiveState }) => <div>
  <p>another loremi</p>: {somePropDerivedOn}
    <Example expensiveState={expensiveState} otherState={somePropDerivedOn} children={[<p >child 1</p>,<p >child 2</p>]}>
    <p >child 3*</p>
    </Example>

    <Example2 expensiveState={expensiveState} otherState={somePropDerivedOn}>
    <p >child 3</p><p >child 4</p>
    </Example2>
    <Example3 expensiveState={expensiveState} otherState={somePropDerivedOn}>
    <p >child 5</p><p >child 6</p>
    </Example3>
    </div>

Page.getInitialProps = () => {
  console.log('Hello from the server')
  return {
    somePropDerivedOn: "the server",
    expensiveState: 42,
  }
}


const SubComponent = ({ id, otherState }) => <div>
  <p>SubComponent {id}</p> otherState={otherState} </div>




function Example({ expensiveState, otherState, children, ...props }) {
  // Declare a  new state variable, which we'll call "count"
  const [count, setCount] = useState(expensiveState);
  const [disabled, setDisable] = useState(false);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => {
        setCount(count + 1);
        if(count >= 66) setDisable(true);
        }} disabled={disabled}>
        Click me
      </button>
  <p>my children are {children}</p>
  <p>the other state={otherState}</p>
  <SubComponent id='1' otherState={otherState}></SubComponent>
    </div>
  );
}

const Example2 = ({expensiveState, ...props}) => {
    // Declare a  new state variable, which we'll call "count"
    const [count, setCount] = useState(expensiveState);
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => {setCount(count + 1)}}>
          Click me
        </button>
    <p>my children are {props.children}</p>
    <p>the other state={props.otherState}</p>
    {/* <p>props={JSON.stringify(props)}</p> */}
    <SubComponent id='1' otherState={props.otherState}></SubComponent>
      </div>
    );
  }


  const Example3 = props => {
    // Declare a  new state variable, which we'll call "count"
    const [count, setCount] = useState(props.expensiveState);
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => {setCount(count + 1)}}>
          Click me
        </button>
    <p>my children are {props.children}</p>
    <p>the other state={props.otherState}</p>
    {/* <p>props={JSON.stringify(props)}</p> */}
    <SubComponent id='1' {...props}></SubComponent>
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