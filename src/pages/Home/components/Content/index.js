import './style.scss'
import ListItems from '../../../../data/listItemsContent.json'
function Content() {
    return ( 
        <div className="Content">
            <div className='BoxItems'>
                {ListItems.map((item,index)=>(
                    <div className='Items'>
                    <svg viewBox="0 0 320 240" data-v-7f40d2dc=""><path d="M299.57,1l19.42,19.39V239h-318V1H299.57" data-v-7f40d2dc=""></path></svg>
                        <div className='ReviewImg'><img src={item.img} alt='Img'></img></div>
                        <div className='type'>{item.type}</div>
                        <div className='contentitems'>{item.content}</div>
                        <div className='contentbonus'>{item.contentbonus}</div>
                        <div className='time'>{item.time}</div>    
                    </div>
                ))}
                <div class="btn">
                    <div className='text'>XEM THÊM</div>
                <svg viewBox="0 0 180 50"><path d="M179,1v28.59L159.55,49L98,49H1V20.41L20.45,1L84,1H179"></path></svg></div>
            </div>
        </div>
     );
}

export default Content;