import HeroImage from '../../atoms/HeroImage/index'
import CardActivity from '../../molecules/Activity'
import CardChart from '../../molecules/Chart/index'
import { Container } from './styles'

const HeroHeader = () => (
    <Container>
        <HeroImage />
        <CardActivity />
        <CardChart />
    </Container>
)

export default HeroHeader