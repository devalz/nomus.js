import { Global, Module } from "@nestjs/common";
import { NomusService } from "./nomus.service.js";

@Global()
@Module({
  providers: [NomusService],
  exports: [NomusService]
})
export class NomusModule {}
