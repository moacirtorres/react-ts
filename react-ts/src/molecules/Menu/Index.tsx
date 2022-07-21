import { MenuList, ItemList } from './styles'

const Menu = () => {
    return <MenuList>
        <ItemList><a href="#">Home</a></ItemList>
        <ItemList><a href="#">Sobre nós</a></ItemList>
        <ItemList><a href="#">Como funciona?</a></ItemList>
        <ItemList><a href="#">Serviços</a></ItemList>
        <ItemList><a href="#">Contato</a></ItemList>
    </MenuList>
}

export default Menu