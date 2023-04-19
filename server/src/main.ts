import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';
import { SwaggerTheme } from 'swagger-themes';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const config = new DocumentBuilder()
    .setTitle('Nifty Trail')
    .setDescription('Niftytrail is a Next.js web app with Chakra UI for seamless crypto trading and NFT management, powered by MetaMask and OpenSea API. Swap, transfer, and pull NFTs easily with an intuitive UI and fast performance')
    .setVersion('1.0')
    .setLicense('MIT', "https://")
    .addBearerAuth()
    .build();

  const theme = new SwaggerTheme('v3');
  const options = {
    explorer: true,
    customCss: theme.getBuffer('material')
  };
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, options);

  await app.listen(3000);
}
bootstrap();
