import React from 'react';
import message from './message.json';
import { Link } from 'react-router-dom';
import MessageDetails from './message_details';
export default class Message extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: []
        }
        this.onClick = this.onClick.bind(this);
    }

    onClick = (event) => {
        this.messageDetails(event.target.id);
    }
    messageDetails = (id) => {
        message.map((msg, i) => {
            console.log(id);

            if (id === msg.id.toString()) {
                const details = msg;
                this.setState({ message: details })
            }
        })
    }
    render() {

        return (<div>
            <div className='content-heading'><h1>Message</h1></div>
            <div className='row'>
                <ul className='col-md-3'>
                    {message.map((data, i) =>
                        <li key={data.id} className='message-list'> <Link to={`/message/message${data.id}`} id={data.id} onClick={(e) => this.onClick(e)}>Message:{data.title}<br /><small>From:{data.from}</small></Link></li>
                    )}
                </ul>
                <MessageDetails onClick={this.state.message} />
            </div>
        </div>);
    }
}