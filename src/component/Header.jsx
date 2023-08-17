import '../assets/css/btn.css'
import Logo from'../assets/imag/DreamShaper_v7_Create_a_mesmerizing_3D_cosmic_galaxy_logo_that_0 (1).jpg'

const Header = () => {
    const car=['car1', 'car2', 'car3', 'car4']
    return (
      <div className="main_head">
        <div className="logo_head">
          <img className="logo_image" src={Logo}/>
          <h2 className="logo_text">LOGO</h2>
        </div>
        <ul className="ul">
        {
            car.map((item,i)=>{
            return <li className="li" key={i}> 
                            {item}
                    </li>
            })
        }
        </ul>
      </div>
    );
};

export default Header;