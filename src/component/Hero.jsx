import image from '../assets/imag/pexels-felix-mittermeier-956999.jpg';
import manImage from '../assets/imag/man.png';

const Hero = () => {
    return (
        <div style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '634px' /* Adjust the blur amount as needed */
        }}>
            <div className='centerbody'>
                <div>
                    hello
                </div>
                <div className='centerimagsec'>
                    <img className='manimage' src={manImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
