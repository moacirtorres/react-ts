import styled from "styled-components";

export const Container = styled.button`
    width: 200px;
    height: 60px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #17A4D0;
    border-radius: 100px;
    padding: 20px;
    margin-top: 50px;
    color: #fff;
    transition: all 0.25s ease-out;
    border: 1px solid #17a4d0;
    box-shadow: 0px 0px 17px -8px transparent;

    &:hover {
        background-color: #fff;
        color: #17a4d0;
        box-shadow: 0px 0px 17px -10px #17a4d0;
        font-size: 15px;
        cursor: pointer;
    }

`