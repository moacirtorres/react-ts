import styled from 'styled-components'

export const Container = styled.div`
    color: #fff;
    position: relative;
    width: 154px;
    height: 77px;
    left: -38px;
    top: 105px;
    background-color: #daaaff;
    border-radius: 12px;
    text-align: left;
    padding: 13px;
    overflow: hidden;

    small {
        font-size: 15px;
        display: block;
    }

    strong {
        display: inline;
        font-size: 20px;
        font-weight: 400;
    }

    img {
        padding-left: 5px;
        display: inline !important;
        margin-top: 0.5rem;
    }

    i {
        width: 150px;
        height: 70px;
        position: absolute;
        top: 0;
        right: 0;
        border-radius: 35px;

        &.circle1 {
            left: 93.17px;
            top: -16.17px;
            background: rgba(255, 255, 255, 0.3);
        }

        &.circle2 {
            left: 44.13px;
            top: -60px;
            border: 1px solid rgba(255, 255, 255, 0.5);
            transform: rotate(-72.7deg);

        }

        &.circle3 {
            left: 75px;
            top: 50px;
            background: linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255,255,255,0.1));
            transform: rotate(45deg);
        }
    }
`