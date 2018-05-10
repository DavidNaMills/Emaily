import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Payments from './Payments';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.renderContent=this.renderContent.bind(this);
  }

    renderContent(){
      switch (this.props.auth){
        case null:
          return;
        case false:
          return (<li><a href="/auth/google">Login with Google</a></li>);
        default:
          return [
            <li key="pay"><Payments /></li>,
            <li key="credits" style={{margin: '0 10px'}}>Credits: {this.props.auth.credits}</li>,
            <li key="logout"><a href="/api/logout">Logout</a></li>
          ]
      }
    }

    render(){
        return(
            <nav>
            <div className="nav-wrapper">
              <Link to={this.props.auth? '/surveys' : '/'}
                className="brand-logo">Emaily
              </Link>
              <ul className="right">
                {this.renderContent()}
              </ul>
            </div>
          </nav>
        );
    }
};

const mapStateToProps = (state)=>({
  auth: state.auth
});

export default connect (mapStateToProps)(Header);