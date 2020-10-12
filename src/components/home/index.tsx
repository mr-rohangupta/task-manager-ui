import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useUser } from "../../global-state-provider-hooks/global-state-provide";
import { getTask } from "../../UserService/ApiService";


function Home(props: any) {
    const { user } = useUser();
    useEffect(() => {
        async function getTasks() {
            const { data } = await getTask();
            console.log(data)
        }
        getTasks()
    }, [])

    return (
        <h2>Home Page</h2>
    );
}

export default Home