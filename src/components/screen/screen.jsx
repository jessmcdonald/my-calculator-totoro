import './screen.css';
import React from 'react';

class Screen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: this.props.query
        }
    }
    
    render() {
        
        return(
                <div className="Screen-Div">{this.state.result}</div>
        )
    }
}

export default Screen;