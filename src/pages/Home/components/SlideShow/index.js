import './style.scss'
import { ImageSlideShow } from '../../../../data/imageSlideShow';
import { useState } from 'react';
function SlideShow() {
    const [active,setActive] = useState(ImageSlideShow[0].id)
    const [id,setId] = useState(0)
    console.log(id);
    console.log(ImageSlideShow.length);
    setTimeout(()=>{
        if(id === ImageSlideShow.length-1){
            setActive(ImageSlideShow[0].id)
            setId(0)
        }
        else
        {
            setActive(ImageSlideShow[id+1].id)
            setId(id+1)
        }
    },2000)
    return ( 
        <div className="SlideShow">
            <svg viewBox="0 0 1200 420"><path d="M1178.1,1l20.9,20.9V419H1V1H1178.1"></path></svg>
            {/* <svg viewBox="0 0 908 318"><path d="M886.1,1L907,21.9V317H1V1H886.1"></path></svg>
            <svg viewBox="0 0 680 240"><path d="M658.1,1L679,21.9V239H1V1H658.1"></path></svg> */}
            <div className='BoxSlideShow'>
                {ImageSlideShow.map(
                    (items,indexs)=>(
                        <a href={items.link}><img key={indexs} src={items.img} alt = 'SlideShow' className= {`${items.id === active ? 'show' : ''}`}/></a>
                    )
                )}     
            </div>
            <div className='BoxCircle'>
            {ImageSlideShow.map(
                    (items,indexs)=>(
                        <div className={`Circle ${items.id === active ? 'active' : ''}`}
                        onClick = {()=>{
                        setActive(items.id)
                        setId(indexs)
                    }
                    }
                    ></div>
                    )
                )}          
            </div>
        </div>
     );
}

export default SlideShow;