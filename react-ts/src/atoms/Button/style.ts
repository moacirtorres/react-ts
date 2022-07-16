import styled from 'styled-components'


export const ButtonHeader = styled.button`
    height: 42px;
    width: 130px;
    border: 1px solid #17A4D0;
    border-radius: 4px;
    color: #17A4D0;
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    margin-left: 25px;
    cursor: pointer;
    transition: all 0.25s ease-out;
    box-shadow: 0px 0px 17px -8px transparent;

    &:hover {
        color: #FFF;
        background-color: #17A4D0;
        box-shadow: 0px 0px 17px -6px #17a4d0;
    }
`