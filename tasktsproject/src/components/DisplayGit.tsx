import * as React from "react";
import DisplayRep from "./DisplayRep";
import DisplayUserInfo from "./DisplayUserInfo";
import DisplayFollowing from "./DisplayFollowing";
import FormComponent from "./FormComponent";
interface State {
  name: string;
  hits: any;
  bites: any;
  hasError: boolean;
  user: any;
  login: string;
  avatar_url: string;
  public_repos: string;
  followers: string;
  following: string;
}
class DisplayGit extends React.Component<any, State> {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      hits: [],
      hasError: false,
      user: "",
      login: "",
      avatar_url: "",
      public_repos: "",
      followers: "",
      following: "",
      bites: []
    };
  }
  private save = (name: string) => {
    fetch(`https://api.github.com/users/${name}/repos`)
      .then(response => response.json())
      .then(hits => this.setState({ hits: hits }));
  };
  private user = (user: string) => {
    fetch(`https://api.github.com/users/${user}`)
      .then(response => response.json())
      .then(user =>
        this.setState({
          login: user.login,
          avatar_url: user.avatar_url,
          public_repos: user.public_repos,
          followers: user.followers,
          name: user.name
        })
      );
  };
  private following = (following: string) => {
    fetch(`https://api.github.com/users/${following}/following`)
      .then(response => response.json())
      .then(bites => this.setState({ bites: bites.slice(0, 16) }));
  };
  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <FormComponent
          userS={this.user}
          inputsave={this.save}
          following={this.following}
        />
        <div id="main">
          <div id="left">
            <DisplayUserInfo
              login={this.state.login}
              avatar_url={this.state.avatar_url}
              public_repos={this.state.public_repos}
              followers={this.state.followers}
              name={this.state.name}
            />
            <div id="avatars">
              <DisplayFollowing
                bites={this.state.bites}
                avatar_url={this.state.avatar_url}
              />
            </div>
          </div>
          <div id="right">
            <DisplayRep hits={this.state.hits} name={this.state.name} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DisplayGit;
