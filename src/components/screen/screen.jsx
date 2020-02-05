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
                <div className="Screen-Div">
                    <div className="Display">
                        <div className="Result">
                            {this.state.result}
                        </div>
                        
                        <button className="Equals-Button">
                        =
                        </button>
                        
                    </div>
                </div>
        )
    }
}

export default Screen;