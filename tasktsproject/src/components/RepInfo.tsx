import * as React from "react";
import sf from "../img/sf.svg";
import star from "../img/star.svg";
interface Props {
  name: string;
  description: string;
  forks_count: string;
  stargazers_count: string;
}

class RepInfo extends React.Component<Props, any> {
  render() {
    return (
      <div className='App' key={this.props.name}>
        Имя репозитория: {this.props.name} <br />
        Описание: {this.props.description} <br />
        <div id='repinfo'>
          <img src={sf} />
          {this.props.forks_count}
          <img src={star} />
          {this.props.stargazers_count}
        </div>
      </div>
    );
  }
}

export default RepInfo;
