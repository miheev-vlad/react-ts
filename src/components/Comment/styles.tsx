import styled from 'styled-components';

export const CommentLayout = styled.div`
    border: 1px grey solid;
    border-radius: 10px;
    margin-bottom: 15px;
    padding: 5px;
    background: #f8f8ff;
`;

export const DeleteButton = styled.button`
    color: #fff;
    background: #dc143c;
    cursor: pointer;
    padding: 5px;
    width: 30px;
    height: 30px;
    border: 0;
    &:hover {
        opacity: 0.6;
    }
`;

export const CommentHeader = styled.div`
    display: flex;
    flex-wrapp: wrapp;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
`;

export const CommentText = styled.div`
    font-style: italic;
`;