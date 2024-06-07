import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(private config: ConfigService) {
    super({
      datasources: {
        db: {
          url: "krishnauday320:po1QEnF9UlcY@ep-broad-sunset-a52th46m-pooler.us-east-2.aws.neon.tech/intern-auth?sslmode=require",
        },
      },
    });
  }
  cleanDB() {
    return this.$transaction([this.user.deleteMany()]);
  }
}
