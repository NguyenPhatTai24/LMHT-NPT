import './style.scss'
import navbarMenu from '../../data/navbarHeader.json'
import {LogoHeader} from '../../assets/images/linkImg'
import { Link } from 'react-router-dom';
import MenuBonus from './components/MenuBonus';
import { useState } from 'react';
function Header() {
    const [showbonus,setShowbonus] = useState({mount:false,status:false})
    const [focus,setFocus] = useState(String)
    return ( 
        <>
        <div className='trash'></div>
        <div className="Header">
            <div className='Container'>
            <Link to = '/' className='Logo'>
                <img src={LogoHeader} className = 'LogoImg' alt='lmht'/>
            </Link>
            <nav className='NavbarMenu'>
                <ul>
                    {navbarMenu.map((items,index)=>(
                        <li key={index} id = {items.id} style = {{borderBottom:`${items.id === focus ? '3px solid #0bc6e3' : ''}`}}
                         className = {`${items.hover ? 'underline' : ''}`}
                        onMouseOver = {()=>{                            
                            items.hover && items.bonus ? setShowbonus({mount:true,status:true}) : setShowbonus({mount:false,status:false})
                        }}
                        onMouseLeave = {()=>{
                            if(items.bonus){setShowbonus({mount:false,status:true})}
                        }}
                        >{items.text}</li>
                    ))}
                </ul>
            </nav>
            </div>
        </div>
        {showbonus.status && 
        <MenuBonus leave={()=>{if(!showbonus.mount){setShowbonus({mount:false,status:false});setFocus('')}}}
            tintuc = {()=>{
                setFocus('tintuc');
            }}
            gioithieu = {()=>{
                setFocus('gioithieu');
            }}
        />
        }
        </>
     );
}

export default Header;