import './Globalstyle.scss'
import { publicRouters } from './routers';
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
function LMHT() {
  return (
    <Router>
    <div className="LMHT">
      <Routes>
        {publicRouters.map((page,index)=>(
          <Route key={index} path = {page.path} element = {<><Header/><page.component/><Footer/></>}/>
        ))}
      </Routes>
    </div>
    </Router>
  );
}

export default LMHT;
