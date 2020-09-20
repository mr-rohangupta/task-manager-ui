import React from "react";
import { connect } from "react-redux";
import { registerUser } from "../../reducers/actions";


function Home(props: any) {
    return (
        <h2>Home Page</h2>

    );
}

const mapStateToProps = (state: any) => ({ ...state })
const mapDispatchToProps = (dispatch: any) => ({
    onRegister: (data: any) => dispatch(registerUser(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)