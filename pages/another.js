const Page = ({ somePropDerivedOn }) => <div>
  <p>another loremi</p>: {somePropDerivedOn}</div>

Page.getInitialProps = () => {
  console.log('Hello from the server')

  return {
    somePropDerivedOn: "the server"
  }
}

export default Page
