import React from "react";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false
  };
  componentDidCatch(error, info) {
    console.log("error", error);
    console.log("info", info);
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return (
        <React.Fragment>
          <p>Произошла Ошибка :(</p>
          <button onClick={() => console.log("Сообщение об ошибке")}>
            Сообщить об ошибке
          </button>
        </React.Fragment>
      );
    } else {
      return this.props.children;
    }
  }
}
export default ErrorBoundary;
