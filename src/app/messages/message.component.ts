import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Message } from './message.model';
import { MessageService } from './message.service';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html'
})

  export class MessageComponent {
      @Input() message: Message;
      
      constructor(private messageService: MessageService) {}

      onDelete(){
          this.messageService.deleteMessage(this.message)
          .subscribe(
              result => console.log(result)
          );
      }

  }