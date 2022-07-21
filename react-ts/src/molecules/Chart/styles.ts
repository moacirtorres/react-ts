import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    width: 210px;
    height: 210px;
    border-radius: 18px;
    background-color: #fff;
    box-shadow: 0px 17.5px 28px rgba(0, 0, 0, 0.1);
    bottom: -270px;
    left: -60px;
    padding: 33.6px 24.5px;

    > div {
        display: flex;
        justify-content: space-between;
    }

    strong {
        font-weight: 500;
    }
`

function generateSpan() {
    const amountBars = [...Array(12).keys()]

    let styleSpan: any = []

    amountBars.forEach(item => {
        styleSpan.push(`
            div:nth-child(${item}) {
                background-color: #EFF3FE;
                height: 91px;
                width: 2.1px;
                border-radius: 5px;
                display: flex;
                align-items: flex-end;
                span {
                    background-color: #5236ff;
                        display: block;
                        animation: animationHeight 1s linear forwards;
                        max-height: ${Math.ceil(Math.random() * 100)}px;
                        width: 3.5px;
                        border-radius: 5px;
                     }

            }
        `)
    })

    return styleSpan.join('')
}

export const Chart = styled.div`
    margin-top: 28px;
    ${generateSpan}

    @keyframes animationHeight {
        from {
            height: 0;
        }

        to {
            height: 91px;
        }
    }

`