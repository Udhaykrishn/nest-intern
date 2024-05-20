import { INestApplication, ValidationPipe } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { AppModule } from "src/app.module";
import * as pactum from "pactum";

import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "src/auth/dto";
import { UserDto } from "src/user/dtio";

describe("App e2e", () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
    await app.init();
    await app.listen(3333);

    prisma = app.get(PrismaService);
    await prisma.cleanDB();
    pactum.request.setBaseUrl("http://localhost:3333");
  });

  afterAll(() => {
    app.close();
  });

  describe('Auth',()=>{
    const dto: AuthDto = {
      username:"uday",
      email:'uday@gmail.com',
      password:'123'
    }
    describe('SignUp',()=>{
      it('should throw if email empty',()=>{
        return pactum
        .spec()
        .post('/auth/signup')
        .withBody({
          password:dto.password
        })
        .expectStatus(400)
      })
      it('should throw if password empty',()=>{
        return pactum
        .spec()
        .post('auth/signup')
        .withBody({
          email:dto.email
        })
        .expectStatus(400)
      })
      it('should throw if no body',()=>{
        return pactum
        .spec()
        .post('auth/signup')
        .expectStatus(400)
      })
    })
  })
});
