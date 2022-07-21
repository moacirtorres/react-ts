import { Container, Chart } from './styles'
import ArrowLeft from '../../assets/Arrow1.svg'
import ArrowRight from '../../assets/Arrow2.svg'

const CardChart = () => {
    const amountBars = Array.from(Array(12).keys())
    return (<Container>
        <div>
            <img src={ArrowLeft} />
            <strong>Stats</strong>
            <img src={ArrowRight} />
        </div>
        <Chart>
            {amountBars.map(item => (
                <div key={String(item)}>
                    <span></span>
                </div>
            ))}
        </Chart>
    </Container>
    )
}

export default CardChart