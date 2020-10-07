import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../reducers/actions";


function Home(props: any) {

    useEffect(() => {
        console.log("Inside Use Effect Calling API.." + props.userData.data.token)
        props.onGetAll(props.userData)
    }, [])

    return (
        <h2>Home Page</h2>
    );
}

const mapStateToProps = (state: any) => ({ ...state })
const mapDispatchToProps = (dispatch: any) => ({
    onGetAll: (data: any) => dispatch(getUsers(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)