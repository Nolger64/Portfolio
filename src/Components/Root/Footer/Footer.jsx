import './Footer.css'

import instagramlogo from '../../../Assets/instagram.png'
import gorjeologo from '../../../Assets/gorjeo.png'
import linkedinlogo from '../../../Assets/linkedin.png'


const Footer = () => {
    return (
        <>
            <div className='footer'>
                <a href=""><img src={instagramlogo} alt="" className='iconRed'/></a>
                <a href=""><img src={gorjeologo} alt="" className='iconRed'/></a>
                <a href=""><img src={linkedinlogo} alt="" className='iconRed'/></a>
            </div>
        </>
    )
}

export default Footer