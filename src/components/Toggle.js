import React, {Component} from 'react';
class Folder extends Component{
    constructor(props){
        super(props)
        this.state = {
            isHidden: false
        }
    }

    handleDisplay= () =>{
        this.setState ({
            isHidden: !this.state.isHidden
        })
    }

    detrmineDisplayNaveed = () =>{
        if(this.state.isHidden){
            return null;
        }
        else{
            return (
                <div>
                    <ul>
                    - File 1
                </ul>
                <ul>
                    - File 2
                </ul>
                <ul>
                    - File 3
                </ul>
                </div>
            )
        }
    }

    render(){

        let displayN = this.detrmineDisplayNaveed();
        return(
            <div>
                <h1 >
                    Home
                </h1>
                    {displayN}
                <button onClick={this.handleDisplay}>Toggle</button>
            </div>
        );
    }
}
export default Folder;
