import { Http, Response, Headers} from '@angular/http';

import { Message } from './message.model';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Injectable()
export class MessageService {
    private messages: Message[] = [];

    constructor(private http: Http) {}

    addMessage(message: Message){
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('https://prinxe.herokuapp.com/messages', body, {headers: headers})
          .map((response: Response) =>
                 response.json())
                 .catch((error: Response) => Observable.throw(error.json()));
    }

    getMessages() {
        return this.http.get('https://prinxe.herokuapp.com/messages')
        .map((response: Response) => {
            const messages = response.json().obj;
            let transformedMessages: Message[] = [];
            for (let message of messages) {
                transformedMessages.push(new Message(message.content, message.name, message.email, 'Null', message._id, null ));
            }
            this.messages = transformedMessages;
            return transformedMessages;
        })
        .catch((error: Response) => Observable.throw(error.json()));
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
        return this.http.delete('https://prinxe.herokuapp.com/messages/' + message.messageId)
          .map((response: Response) => response.json())
          .catch((error: Response) => Observable.throw(error.json()));
    }
}