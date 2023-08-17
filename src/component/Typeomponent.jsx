import { TypeAnimation } from 'react-type-animation';

const Typeomponent = (props) => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        `${props.text1}`,
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        `${props.text2}`,
        1000
      ]}
      wrapper="span"
      speed={40}
      style={{ fontSize: '3em', display: 'inline-block', color:'white'}}
      repeat={Infinity}
    />
  );
};
export default Typeomponent;
