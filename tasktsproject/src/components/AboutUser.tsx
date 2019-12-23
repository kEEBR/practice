import * as React from 'react'
import rep from '../img/rep.svg'
import am from '../img/am.svg'
interface Props {
    public_repos: string;
    followers: string;
  }
class AboutUser extends React.Component<Props, any>{
    render() {
        return(
            <div className="about">
                 <img src={rep}/>{this.props.public_repos} 
                 <img src={am}/>{this.props.followers} 
            </div>
        )
    }
}

export default AboutUser;