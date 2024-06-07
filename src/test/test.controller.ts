import { Controller, Get } from "@nestjs/common";

@Controller("test")
export class TestController {
  @Get()
  Hello() {
    return "Hello world";
  }
}
