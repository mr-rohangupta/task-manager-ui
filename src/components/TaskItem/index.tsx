import React from "react";
import styled from "styled-components";


const ProductContainer = styled.div`
  background-color: #eeeeee;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin: 15px;
  cursor: pointer;
  flex: 0 0 25%;
`;

const ProductFigure = styled.figure`
  width: 230px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;

const ProductHeader = styled.h1`
  height: 76px;
`;

const ProductDescriptionDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;


const AddToCart = styled.button`
  padding: 10px;
  background-color: blue;
  color: #ffffff;
  border-radius: 10px;
`;

const ProductBrandText = styled.text``;

function TaskItem(tasks: any) {
  console.log(tasks)
  return (
    <ProductContainer>
      <ProductFigure>
      <ProductHeader>{tasks.description}</ProductHeader>
      </ProductFigure>
      <ProductDescriptionDiv>
        <ProductBrandText></ProductBrandText>
        <AddToCart>Delete</AddToCart>
      </ProductDescriptionDiv>
    </ProductContainer>
  );
};

export default TaskItem;