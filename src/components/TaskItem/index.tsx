import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { deleteTask } from "../../UserService/ApiService";
import EditTaskModal from "../EditTaskModal";
import Task from "../Task";


const TaskContainer = styled.div`
  background-color: #eeeeee;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin: 15px;
  cursor: pointer;
  flex: 0 0 25%;
`;

const TaskFigure = styled.figure`
  width: 230px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const TaskHeader = styled.h1`
  height: 76px;
`;

const TaskDescriptionDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const EditTask = styled.button`
  margin-left: 148px;
  padding: 10px;
  background-color: #93a2ba;
  color: #ffffff;
  border-radius: 10px;
`;

const DeleteTask = styled.button`
  padding: 10px;
  background-color: #93a2ba;
  color: #ffffff;
  border-radius: 10px;
`;
const ProductBrandText = styled.a``;


function TaskItem(tasks: any) {
  const [editTask, setEditTask] = React.useState();
  const history = useHistory()

  function handleDelete(id: any) {
    deleteTask(id).then(res => {
      if (res.status === 200) {
        console.log("Successfully Deleted Now rendering Home Page..")
        window.location.reload(false);
        console.log("Redirected to Home..")
      }
    })
  }

  function handleEdit(id: any) {
    console.log("Id of Task::" + id)
    if (id !== null) {
      setEditTask(tasks)
    }
  }

  return (
    <TaskContainer>
      <TaskFigure>
        <TaskHeader>{tasks.description}</TaskHeader>
      </TaskFigure>
      <TaskDescriptionDiv>
        <ProductBrandText></ProductBrandText>
        <EditTask onClick={() => handleEdit(tasks._id)}>Edit</EditTask>
        {editTask ? <EditTaskModal {...editTask || {}} closeModal={() => setEditTask(undefined)} /> : null}
        <DeleteTask onClick={() => handleDelete(tasks._id)}>Delete</DeleteTask>
      </TaskDescriptionDiv>
    </TaskContainer>
  );
};

export default TaskItem;