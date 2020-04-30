import React from 'react';
import {Chat, Channel, Attachment} from 'stream-chat-react';
import {MessageList, Window} from 'stream-chat-react';
import {MessageInput, Thread} from 'stream-chat-react';
import {StreamChat} from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';

const chatClient = new StreamChat('gx5a64bj4ptz');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZHJ5LW1vcm5pbmctNiJ9.K6sPOzumZEF4_2_vY8Gp6JDA6ygo0WPRZm7z40_VWdI';

class MyAttachmentComponent extends React.Component {
    render() {
        const {attachment} = this.props;
        if (attachment.type === 'product') {
            return (
                <div className="product">
                    Product:
                    <a href={attachment.url} target="_blank">
                        {attachment.name}
                    </a>
                </div>
            );
        } else {
            return <div>testing<Attachment {...this.props} /></div>
        }
    }
}

chatClient.setUser(
    {
        id: 'dry-morning-6',
        name: 'Dry morning',
    },
    userToken,
);

const channel = chatClient.channel('messaging', 'godevs', {
    // add as many custom fields as you like
    name: 'Talk about Go',
});

const attachments = [{
    type: 'product',
    name: 'iPhone',
    url: 'https://goo.gl/ppFmcR',
}];

channel.sendMessage({
    text: 'Your selected product is out of stock, would you like to select one of these alternatives?',
    attachments: attachments,
});

const ChatPage = () => {
    return (
        <div style={{maxWidth: "800px"}}>
            <Chat client={chatClient} theme={'messaging'}>
                <Channel channel={channel} Attachment={MyAttachmentComponent}>
                    <Window>
                        <MessageList/>
                        <MessageInput/>
                    </Window>
                    <Thread/>
                </Channel>
            </Chat>

        </div>
    )
};

export default ChatPage;
