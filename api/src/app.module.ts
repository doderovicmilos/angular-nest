import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { UserModule } from './users/user.module';
import { User } from './users/entities/users/user.entity';
import { CompaniesModule } from './companies/companies.module';
import { Company } from './companies/entities/companies/company.entity';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      playground: true
    }),
    UserModule,
    TypeOrmModule.forRoot({
      // type: 'mongodb',
      // url:
      // `mongodb://root:pass12345@mongodb:27017/shop?serverSelectionTimeoutMS=2000&authSource=admin`,
      // entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      // synchronize: true,
      // useNewUrlParser: true,
      // logging: true,      
      type: 'mysql',
      host: 'mysql',
      username: 'user',
      password: 'password',
      database: 'db',
      entities: [User, Company],
      synchronize: true      
    }),
    UserModule,
    CompaniesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
