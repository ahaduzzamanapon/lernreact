import image from '../assets/imag/pexels-felix-mittermeier-956999.jpg';
import manImage from '../assets/imag/man.png';
import ApiFetcher from './Factchapi'
import Typeomponent from './Typeomponent'

const Hero = () => {
    const liveMatches = ApiFetcher({ status: 'live' });
    console.log(liveMatches);

    return (
        <div style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '634px' /* Adjust the blur amount as needed */
        }}>
            <div className='centerbody'>
                <div>
                    <Typeomponent text1="helo i am a devloper" text2="my name is apon"/>
                </div>
                <div>
                    <Typeomponent text1="helo how are you" text2="i am fine "/>
                </div>
                <div>
                    <Typeomponent text1="helo how you" text2="i fine "/>
                </div>
                
                <div className='centerimagsec'>
                    <img className='manimage' src={manImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
