import * as React from "react";
interface Props {
  login: string;
  avatar_url: string;
  public_repos: string;
  followers: string;
  name: string;
}

class UserInfo extends React.Component<Props, any> {
  render() {
    return (
      <div className="info" key={this.props.login}>
        <img className="avatar" src={this.props.avatar_url} />
        <br />
        {this.props.login} <br />
        {this.props.name}
      </div>
    );
  }
}

export default UserInfo;
