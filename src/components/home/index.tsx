import React, { useEffect } from "react";
import { useUser } from "../../global-state-provider-hooks/global-state-provide";
import { getTask } from "../../UserService/ApiService";
import styled from "styled-components";
import TaskItem from "../TaskItem";

var data: any[] = [];
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
    
    useEffect(() => {
        async function getTasks() {
            data = await getTask();
            console.log("Response", JSON.stringify(data))
        }
        getTasks()
    }, [data])

    return (
        <Container>
            <TaskListItems>
                <h1>Hello {props.data}</h1>
            </TaskListItems>
        </Container>
    );
}

export default Home