import './menu.css';
import {BsYoutube, BsInstagram} from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Menu(){
    return(
        <div className='menu'>
            <a className='social' href="https://youtube.com.br">
                <BsYoutube color='#FFF' size={24}/>
            </a>
            <a className='social' href="https://instagram.com.br">
                <BsInstagram color='#FFF' size={22}/>
            </a>
            <Link className='menu-item' to='/links'>
                Meus Links
            </Link>
        </div>
    )

}