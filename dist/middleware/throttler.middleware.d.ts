import { ThrottlerModuleOptions, ThrottlerStorage } from '@nestjs/throttler';
export declare class ThrottleMiddlewareConfig implements ThrottlerModuleOptions {
    ttl: number;
    limit: number;
    storage?: ThrottlerStorage;
    constructor();
}
