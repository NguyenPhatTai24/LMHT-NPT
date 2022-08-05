import './style.scss'
import {LogoFooter} from '../../assets/images/linkImg'
import IntroduceAddress from '../../data/introduceAddress';
import IconFB from '../../assets/images/iconFB';
import IconYoutube from '../../assets/images/iconYoutube';
import IconInfo from '../../assets/images/iconInfo';
import IconMenu from '../../assets/images/iconMenu';
function Footer() {
    return ( 
        <div className="Footer">
            <div className='content'>
                <div className='LogoFooter'>
                    <img src={LogoFooter} alt='footer'/>
                </div>
                <div className='ContentFooter'>
                    <div className='Text'>
                        <IntroduceAddress/>
                    </div>
                    {/* Facebook */}
                    <div className='Link'>
                        <a href='https://www.facebook.com/LienMinhHuyenThoai' target={'blank'} className='itemsLink'>
                            <IconFB classIcon = {'Icon'}/>
                            <div className='textLink'>Facebook</div>
                        </a>
                    {/* Youtube */}
                        <a href = 'https://www.youtube.com/user/GarenaVietnam' target={'blank'} className='itemsLink'>
                            <IconYoutube classIcon = {'Icon'}/>
                            <div className='textLink'>Youtube</div>
                        </a>
                    {/* Information */}
                        <a href = 'https://www.garena.vn/terms' target={'blank'} className='itemsLink'>
                            <IconInfo classIcon = {'Icon'}/>
                            <div className='textLink'>Điều khoản dịch vụ</div>
                        </a>
                     {/* Menu */}
                        <a href = 'https://hotro.garena.vn/' target={'blank'} className='itemsLink'>
                            <IconMenu classIcon = {'Icon'}/>
                            <div className='textLink'>Trung tâm hỗ trợ</div>
                        </a>
                    </div>
                    <div className='InfoPlay'>
                        <a href = 'https://lienminh.garena.vn/download' target={'blank'} className='btnPlay'>chơi miễn phí</a>
                        <span className='age'></span>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Footer;