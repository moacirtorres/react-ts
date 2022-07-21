import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1110px;
    margin: auto;
    height: 100%;

    main {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
    }

    @media(max-width: 800px) {
        max-width: 800px;
      }
`