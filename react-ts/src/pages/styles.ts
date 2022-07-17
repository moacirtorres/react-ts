import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    > div {
        width: 50%;
    }

    h1 {
        color: #1E255E;
        font-size: 56px;
        font-weight: bold;
        font-family: 'Poppins', sans-serif;
    }

    h6 {
        color: #1E255EB2;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        padding-right: 150px;
        margin-top: 25px;
    }
`