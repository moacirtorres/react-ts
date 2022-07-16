import * as S from './styles'
import Header from '../organisms/Header/Index'

type FrontendProps = {
    children: React.ReactNode;
}


const Frontend = ({ children }: FrontendProps) => {
    return (<S.Container> <Header></Header> { children }</S.Container>)
}

export default Frontend