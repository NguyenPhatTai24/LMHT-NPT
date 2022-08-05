import Content from './components/Content';
import SlideShow from './components/SlideShow';
import './style.scss'
function Home() {
    return ( 
        <div className="HomePage">
            <SlideShow/>
            <Content/>
        </div>
     );
}

export default Home;