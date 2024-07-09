import { FiLink } from "react-icons/fi";
import Menu from '../../components/Menu';
import './home.css'

function Home() {
    return (
        <div className="container-home">
            <Menu/>
            
            <div className="logo">
                <img  class="imagem" src='/logo-link.png' alt='logo de link'/>
                <h1>Meus Links</h1>
                <span> Cole seu link para encurtar:</span>
            </div>

            <div className="area-input">
                <div>
                    <FiLink size={24} color="white"/>
                    <input placeholder="Cole seu link aqui..."/>
                </div>

                <button>Encurtar Link</button>
            </div>
            
            
        </div>
    )
}
export default Home;