import React, {Component} from 'react';


class ChatRoom extends Component{
    constructor(){
        super();
        this.updateMessage = this.updateMessage.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
        this.state = {
            message: '',
            messages: [ ]
        }
    }

    componentDidMount(){
        firebase.database().ref('messages/').on('value',snapshot=>{
            const currentMessages = snapshot.val();
            if(currentMessages!= null){
            this.setState({
            messages: currentMessages
            })
                
            }
        })
    }

    updateMessage(e){
        this.setState({
            message: e.target.value
        });

    }
    submitMessage(){
        const message = {
            id: this.state.messages.length,
            text: this.state.message
        };

        firebase.database().ref('messages/'+message.id).set(message);
        // let listMessage = this.state.messages;
        // listMessage.push(message);
        // this.setState({
        //     messages: listMessage
        // });
        this.setState({message:''})
    }
    render(){
        const currenMessages = this.state.messages.map((message, i)=>  {
            return  (
            <li key={message.id} className="list-group-item list-group-item-action">{message.text}</li>
            )
        }
        
            
            )
        return (
            <div className="card">

                <div className="card-body ">
                    <a className=" font-weight-bold text-info ">React Chat </a>
                    <br/>
                    <br/>
                    <ul className="list-group ">
                        {currenMessages}
                    </ul>
                </div>

                <div className="card-footer">

                <input 
                value={this.state.message}
                onChange={this.updateMessage}
                type="text"
                placeholder="Escriba un mensaje"
                className="form-control required"
                />
                <button 
                onClick={this.submitMessage}
                className="btn btn-info btn-block mt-3">
                    Enviar Mensaje
                </button>
                </div>


            </div>
            
        )
    }
}

export default ChatRoom;