import { Link } from 'react-router-dom'

function Menu() {
  return (
    <>
        <nav>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/produtos"}>Produtos</Link></li>
                <li><Link to={"/galeria"}>Galeria</Link></li>
                <li><Link to={"/contato"}>Contato</Link></li>
            </ul>
        </nav>
    </>
  )
}

export default Menu