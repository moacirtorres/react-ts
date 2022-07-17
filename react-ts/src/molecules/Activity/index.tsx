import { Container } from './styles'
import SetaActivity from '../../assets/seta.svg'

const CardActivity = () => (
    <Container>
        <small>Activity</small>
        <strong>18</strong>
        <img src={SetaActivity} alt="Seta para cima" />
        <i className="circle1"></i>
        <i className="circle2"></i>
        <i className="circle3"></i>
    </Container>
)

export default CardActivity