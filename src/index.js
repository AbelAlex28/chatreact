import React, {Component} from 'react';
import {render} from 'react-dom';

import ChatRoom from './components/ChatRoom';

class App extends Component {
    render(){
        return (
            <div>
                <nav className="navbar navbar-light bg-info ">
                    <a className="navbar-brand text-white ">Chat React</a>

                </nav>
                <div className="container p-3 ">
                    <div className="row">
                        <div className="col-md-7 offset-md-2 ">
                        <ChatRoom/>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

render(
    <App/>,
    document.getElementById('app')
);