export class Message {
    content: string;
    name: string;
    email: string;
    username: string;
    messageId?: string;
    userId: string;

    constructor(content: string, name: string, email: string, username: string, messageId?: string, userId?: string){
        this.content = content;
        this.name = name;
        this.email = email;
        this.username = username;
        this.messageId = messageId;
        this.userId = userId;
    }
}