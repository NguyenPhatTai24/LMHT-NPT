import './style.scss'
import ContentBonus from '../../../data/navbarBonus.json'
function MenuBonus({leave,tintuc,gioithieu}) {
    return (
        <div className='BonusMenu'onMouseLeave={leave}> 
        <div className='ContainerBonus'>
            <div className='left'></div>
            <ul className='BoxListBonus'>
                <li className='ListBonusOne'>
                    <ul onMouseOver={tintuc}>                 
                        {ContentBonus.TinTuc.map((items,index)=>(
                            <a key={index++} href={items.link} target={'blank'}>
                            <li key={index++}>
                                {items.name}
                            </li>
                            </a>
                        ))}                      
                    </ul>
                </li>
                <li className='ListBonusTwo'>
                    <ul onMouseOver={gioithieu}>
                    {ContentBonus.GioiThieu.map((items,index)=>(
                            <a key={index++} href={items.link} target={'blank'}>
                            <li key={index++}>
                                {items.name}
                            </li>
                            </a>
                        ))}  
                    </ul>
                </li>
            </ul>
        </div>
        </div>
     );
}

export default MenuBonus;