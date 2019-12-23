import * as React from "react";
import FollowingInfo from "./FollowingInfo";

interface Props {
  avatar_url: string;
  bites: any;
}

class DisplayFollowing extends React.Component<Props, any> {
  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        {this.props.bites.map(function(follow) {
          return <FollowingInfo avatar_url={follow.avatar_url} />;
        })}
      </React.Fragment>
    );
  }
}
export default DisplayFollowing;
