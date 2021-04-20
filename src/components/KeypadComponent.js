import react, {Component} from 'react';
import '../styles/Keypad.css';

class Keypad extends Component{
    render(){
        return(
            <div className="Keypad">
                {this.props.children}
            </div>
        );
    }
}

export default Keypad;