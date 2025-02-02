import { Component } from "react";

class Greeting extends Component {
  // constructor(props) {
  //     super(props)
  //     this.state = {count: 1}
  // }
  state = {
    count: null,
    loading: false,
    data: {
      products: [],
      isLoggedIn: undefined,
    },
  };
  componentDidMount() {
    console.log(this.state.count);
    setTimeout(() => {
      this.setState({ count: 1 });
    }, [1000]);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
  }
  componentWillUnmount() {
    
  }
  render() {
    return (
      <div>
        {this.state.data.products}
        <button
          onClick={() =>
            this.setState({
              data: {
                ...this.state.data,
                products: [...this.state.data.products, "shoes"],
              },
            })
          }
        >
          Click
        </button>
      </div>
    );
  }
}

export default Greeting;
