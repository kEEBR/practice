import React from "react";
import RepInfo from "./RepInfo";

interface Props {
  name: string;
  hits: any;
}

class DisplayRep extends React.Component<Props, any> {
  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        {this.props.hits.map(function(rep) {
          return (
            <RepInfo
              name={rep.name}
              description={rep.description}
              forks_count={rep.forks_count}
              stargazers_count={rep.stargazers_count}
            />
          );
        })}
      </React.Fragment>
    );
  }
}
export default DisplayRep;
