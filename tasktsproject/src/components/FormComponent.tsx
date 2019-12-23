import React from "react";
import { Link } from "react-router-dom";

interface Props {
  inputsave: (string) => void;
  userS: (string) => void;
  following: (string) => void;
}

interface State {
  textBoxValue: string;
}

class FormComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { textBoxValue: "" };
  }

  private onValueChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      textBoxValue: event.currentTarget.value
    });
  };

  private display = () => {
    this.props.inputsave(this.state.textBoxValue);
    this.props.userS(this.state.textBoxValue);
    this.props.following(this.state.textBoxValue);
  };
  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.props.inputsave(this.state.textBoxValue);
      this.props.userS(this.state.textBoxValue);
      this.props.following(this.state.textBoxValue);
    }
  };

  render() {
    return (
      <div>
        <input
          placeholder='UserName'
          onChange={this.onValueChange}
          value={this.state.textBoxValue}
          onKeyPress={this.handleKeyPress}
        ></input>
        <button id='display' onClick={this.display}>
          Отобразить
        </button>
      </div>
    );
  }
}
export default FormComponent;
