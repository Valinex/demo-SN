import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/authReducer";

class HeaderContainer extends React.Component{

    render() {
        return <Header {...this.props}
                       profile={this.props.profile}/>
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    profile: state.auth.profile,
});
export default connect(mapStateToProps, {logout})(HeaderContainer);