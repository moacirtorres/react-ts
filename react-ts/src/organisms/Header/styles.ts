import styled from 'styled-components'

export const Box = styled.header`
    padding-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 800px) {
        flex-direction: column;
        justify-content: center;
      }
`