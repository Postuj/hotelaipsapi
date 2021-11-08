import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClientDto } from './dto/create-client.dto';
import { ClientEntity } from './entities/client.entity';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(ClientEntity)
    private readonly clientRepository: Repository<ClientEntity>,
  ) {}

  create(createClientDto: CreateClientDto) {
    const newClient = this.clientRepository.create({
      ...createClientDto,
      password: 'sosecure',
    });
    return this.clientRepository.save(newClient);
  }

  findOneByEmail(email: string) {
    try {
      return this.clientRepository.findOne({ email });
    } catch (error) {
      Logger.error(error);
      return null;
    }
  }
}
