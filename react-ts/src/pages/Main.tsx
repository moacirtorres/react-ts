import { useState } from 'react'

import Frontend from '../templates/Index'
import ProductInformation from '../organisms/ProductInformation'
import HeroHeader from '../organisms/HeroHeader'

import { Container } from './styles'



function Main() {
    const [count, setCount] = useState(0)

    return (
        <Frontend>
            <Container>
                <ProductInformation />
                <HeroHeader />
            </Container>
        </Frontend>
    )
}

export default Main
