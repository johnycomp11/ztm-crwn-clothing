/*
3 button types:
default

inverted

google sign-in
*/

//Create var for non default button
const BUTTON_TYPE_CLASSES ={
    google: 'google-sign-in',
    inverted: 'inverted',
};


const Button = ({children, buttonType, ...otherProps}) => {
    return (
    <button 
        className ={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}{...otherProps}> 
            {children} 
        </button>
    );
};

export default Button;