import './button.css';
import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props
    }
    
    render() {
        const {digit} = this.state
        return(
            <button>
                {digit}
            </button>
        )
    }
}

export default Button;