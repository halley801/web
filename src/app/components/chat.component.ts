import { Component, OnInit, OnDestroy, HostListener, ViewChild, ElementRef } from '@angular/core';
import * as io from 'socket.io-client';
import { ChatService } from '../services/chat.service';

@Component({
    selector: 'app-chat',
    //templateUrl: './chat.html',
    styleUrls: ['../style.css'],
    template: `
    <div class="container" style="margin-top: 10px;">
    <input
      class="form-control"
      placeholder="Enter your message"
      style="width: 300px"
      [(ngModel)]="txtMessage"
      (keyUp.enter)="sendMessage();"
    />
    <br>
    <button class="btn btn-success" (click)="sendMessage()">
      Send Message
    </button>
    <div>
      <p *ngFor="let msg of messages" class="text-warning">
        {{ msg.text }}
      </p>
    </div>
  </div>
    `
})

export class ChatComponent {
    txtMessage = '';
    public messages = [];
    public connection;
    public message;

    constructor(private chatService: ChatService) { }

    ngOnInit() {
        this.connection = this.chatService.getMessages().subscribe(message => {
            this.messages.push(message);
        })
    }
    ngOnDestroy() {
        this.connection.unsubscribe();
      }
    
      sendMessage() {
        this.chatService.sendMessage(this.txtMessage);
        this.txtMessage = '';
      }
}