import { ThrottlerGuard } from '@nestjs/throttler';
export declare const throttlerGuardProvider: {
    provide: string;
    useClass: typeof ThrottlerGuard;
};
