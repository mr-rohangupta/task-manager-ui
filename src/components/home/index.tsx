import React, { useEffect } from "react";
import { getTask } from "../../UserService/ApiService";
import styled from "styled-components";
import TaskItem from "../TaskItem";
import { Task } from "../../app-types";


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

    const [allUser, setAllUser] = React.useState<Task[]>([]);
    useEffect(() => {
        async function getTasks() {
            const { data } = await getTask();
            setAllUser(data);
        }
        getTasks()
    }, [])

    return (
        <div>
            <div className="NavContainer">
                <div className="NavHeader"><h5>Task App</h5></div>
            </div>
            <Container>
                <TaskListItems>
                    {allUser.map(item => { return <TaskItem key={item._id} {...item} /> })}
                </TaskListItems>
            </Container>
        </div>

    );
}

export default Home