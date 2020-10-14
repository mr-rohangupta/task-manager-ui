import React, { useEffect } from "react";
import { useUser } from "../../global-state-provider-hooks/global-state-provide";
import { getTask } from "../../UserService/ApiService";
import styled from "styled-components";
import TaskItem from "../TaskItem";

const Container = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: auto;
`;

const TaskListItems = styled.div`
display: flex;
flex-wrap: wrap;
`;

function Home(props: any) {
    const [allUser,setAllUser] = React.useState([]);
    useEffect(() => {
        async function getTasks() {
           const{ data }  = await getTask();
            setAllUser(data);
            console.log("Response", JSON.stringify(data))
        }
        getTasks()
    }, [])

    return (
        <Container>
            <TaskListItems>
                <h1>Hello {JSON.stringify(allUser)}</h1>
            </TaskListItems>
        </Container>
    );
}

export default Home