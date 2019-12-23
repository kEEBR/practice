import * as React from "react";
import UserInfo from "./UserInfo";
import AboutUser from "./AboutUser";
interface Props {
  login: string;
  avatar_url: string;
  public_repos: string;
  followers: string;
  name: string;
}

class DisplayUserInfo extends React.Component<Props, any> {
  render() {
    console.log(this.state);
    return (
      <div>
        <UserInfo
          login={this.props.login}
          avatar_url={this.props.avatar_url}
          public_repos={this.props.public_repos}
          followers={this.props.followers}
          name={this.props.name}
        />
        <AboutUser
          public_repos={this.props.public_repos}
          followers={this.props.followers}
        />
      </div>
    );
  }
}

export default DisplayUserInfo;
