import { useState, Children, cloneElement } from 'react';

function Outline(props) {
    
    const { position } = props;
    const [inZone, setInZone] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [guessed, setGuessed] = useState(false);

    function handleMouseEnter() {
        setInZone(true)
    }

    function handleMouseLeave() {
        setInZone(false);
    }

    function handleClick(event) {
        
        if (clicked && !guessed) {
            event.target.classList.remove('border-dark-green')
            setClicked(false)
        } else {
            event.target.classList.add('border-dark-green')
            setClicked(true);
        }

    }

    return (
        <div 
            className={inZone || guessed ? 'outline' : 'outline hidden'} 
            style={position} 
            onMouseEnter={!clicked && handleMouseEnter} 
            onMouseLeave={!clicked && handleMouseLeave}
            onClick={!guessed && handleClick}>
            {clicked && Children.map(props.children, child => {
                return cloneElement(child, { setGuessed })
            })}
        </div>
    )
}

export default Outline;