import './screen.css';
import React from 'react';

class Screen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: this.props.display
        }
    }
    
    render() {
        
        return(
                <div className="Screen-Div">
                    <div className="Display">
                        <div className="Result">
                            {this.state.result}
                        </div>
                        
                        <button className="Equals-Button" key={"="} onClick={() =>
                        this.props.handleItemClicked("=")
                      }>
                        =
                        </button>

                    </div>
                </div>
        )
    }
}

export default Screen;