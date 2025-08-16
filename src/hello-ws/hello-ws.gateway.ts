import { 
  WebSocketGateway, 
  SubscribeMessage, 
  MessageBody, 
  OnGatewayInit, 
  OnGatewayConnection, 
  OnGatewayDisconnect,
  WebSocketServer 
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { HelloWsService } from './hello-ws.service';
import { CreateHelloWDto } from './dto/create-hello-w.dto';
import { UpdateHelloWDto } from './dto/update-hello-w.dto';

@WebSocketGateway()
export class HelloWsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(private readonly helloWsService: HelloWsService) {}

  afterInit(server: Server) {
    console.log('WebSocket Gateway initialized!');
  }

  handleConnection(client: Socket, ...args: any[]) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('createHelloW')
  create(@MessageBody() createHelloWDto: CreateHelloWDto) {
    console.log("1 - createHelloW called with:", createHelloWDto);
    return this.helloWsService.create(createHelloWDto);
  }

  @SubscribeMessage('findAllHelloWs')
  findAll() {
    console.log("2 - findAllHelloWs called");
    return this.helloWsService.findAll();
  }

  @SubscribeMessage('findOneHelloW')
  findOne(@MessageBody() id: number) {
    console.log("3 - findOneHelloW called with id:", id);
    return this.helloWsService.findOne(id);
  }

  @SubscribeMessage('updateHelloW')
  update(@MessageBody() updateHelloWDto: UpdateHelloWDto) {
    console.log("4 - updateHelloW called with:", updateHelloWDto);
    return this.helloWsService.update(updateHelloWDto.id, updateHelloWDto);
  }

  @SubscribeMessage('removeHelloW')
  remove(@MessageBody() id: number) {
    console.log("5 - removeHelloW called with id:", id);
    return this.helloWsService.remove(id);
  }
}
