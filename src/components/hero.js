
import '../App.css';

const hero_img= require('../airbnb_2.png')

export default function Hero() {
    return (
        <section className='Hero'>
            <img className='heroPhoto'
            src={hero_img}
            alt="Hero Image" />
            <h1 className='heroHeader'>Online Experiences</h1>
            <p className='heroText'>Join Unique Interactive activities led by <br/>
                one-of-a-kind host-all without  leaving <br /> home.</p>
        </section>
    )
}