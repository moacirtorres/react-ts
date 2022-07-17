import { useState } from 'react'

import Frontend from '../templates/Index'
import ButtonContact from '../atoms/ButtonContact/index'
import HeroImage from '../atoms/HeroImage/index'
import CardActivity from '../molecules/Activity'

import { Container } from './styles'



function Main() {
    const [count, setCount] = useState(0)

    return (
        <Frontend>
            <Container>
                <div>
                    <h1>Design driven development of your web product</h1>
                    <h6>We are a full service digital agency that builds immesive user experience.</h6>
                    <ButtonContact />
                </div>
                <div>
                    <HeroImage />
                    <CardActivity />
                </div>
            </Container>
        </Frontend>
    )
}

export default Main
