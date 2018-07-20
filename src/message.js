import React from 'react';
import message from './message.json';
import { Link } from 'react-router-dom';
import MessageDetails from './message_details';
export default class Message extends React.Component {

    constructor(props) {
        super(props);
        this.messageDetails = this.messageDetails.bind(this);
    }
    messageDetails = () => {
        let id = this.props.match.params.id;
        let data;
        message.map((msg, i) => {
            if (id === msg.id.toString()) {
                data = msg;
            }
        })
        return data;
    }
    render() {
        return (<div>
            <div className='content-heading'><h1>Message</h1></div>
            <div className='row'>
                <ul className='col-md-3'>
                    {message.map((data, i) =>
                        <li key={data.id}
                            className='message-list'>
                            <Link
                                to={`/message/${data.id}`}
                                id={data.id}
                            >
                                <div id={data.id}>
                                    Message:{data.title}
                                    <br />
                                    <small>From:{data.from}</small>
                                </div>
                            </Link>
                        </li>
                    )}
                </ul>
                <MessageDetails data={this.messageDetails()} />
            </div>
        </div>);
    }
}