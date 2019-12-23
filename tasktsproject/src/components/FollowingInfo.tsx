import * as React from 'react'

interface Props{
    avatar_url:string;
}

class FollowingInfo extends React.Component<Props,any>{
    render(){
        return(
            
          <img className="avafol" src={this.props.avatar_url}/>
            
        )
    }
}

export default FollowingInfo;