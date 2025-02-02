import { Component } from "react";

class ChatRoom extends Component {
  state = {
    serverUrl: "https://localhost:1234",
  };
  componentDidMount() {
    this.setupConnections();
  }
  //exact example of componentDidMount in function components:
  // useEffect(() => {
  //     setupConnections()
  // }, [])
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.roomId !== this.props.roomId ||
      prevState.serverUrl !== this.state.serverUrl
    ) {
      this.destroyConnections();
      this.setupConnections();
    }
  }
  // exact example of componentDidUpdate in function components:
  // useEffect(() => {
  // destroyConnections()
  // setupConnections()
  // }, [roomId])

  // useEffect(() => {
  //     destroyConnections()
  //     setupConnections()
  // }, [serverUrl])
  componentWillUnmount() {
    this.destroyConnections();
  }
  // exact example of componentWillUnmount in function components:
  //   useEffect(() => {
  //     return () => {
  //         destroyConnections()
  //     }
  //   }, [])

  setupConnections() {
    this.connection = createConnection(this.state.serverUrl, this.props.roomId);
    this.connection.connect();
  }
  destroyConnections() {
    this.connection.disconnect();
  }
  render() {
    return (
      <>
        <label>
          Server URL:{" "}
          <input
            value={this.state.serverUrl}
            onChange={(e) => {
              this.setState({
                serverUrl: e.target.value,
              });
            }}
          />
        </label>
        <h1>Welcome to the {this.props.roomId} room!</h1>
      </>
    );
  }
}
export function createConnection(serverUrl, roomId) {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log(
        '✅ Connecting to "' + roomId + '" room at ' + serverUrl + "..."
      );
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
    },
  };
}

export default ChatRoom;
