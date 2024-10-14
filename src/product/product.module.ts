import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import {TypeOrmModule} from "@nestjs/typeorm"
import { Product } from './entities/product.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';
@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    ClientsModule.register([
      {
        name: "PRODUCT_SERVICE",
        transport: Transport.RMQ,
        options: {
          urls: [
            "amqps://gedwbsdj:5On6Wact8Y8_PN0tPMkxHeTB3QUun6Yi@goose.rmq2.cloudamqp.com/gedwbsdj",
          ],
          queue: "main_products_queue",
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
