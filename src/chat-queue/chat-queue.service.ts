import { ClientProxy } from '@nestjs/microservices';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ChatQueueService {
  constructor(@Inject('CHAT_QUEUE') private chat_queue: ClientProxy) {}
  
  // Add patient chat request to queue
  addPatientChatQueue(user_info) {
    let topic = 'patient-chat-queue'
    this.chat_queue.emit(topic, user_info)
  }

  // Add doctor chat request to queue
  addDoctorChatQueue(user_info) {
    let topic = 'doctor-chat-queue'
    this.chat_queue.emit(topic, user_info)
  }
  
}