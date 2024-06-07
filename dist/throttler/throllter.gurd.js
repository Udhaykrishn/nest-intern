"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttlerGuardProvider = void 0;
const core_1 = require("@nestjs/core");
const throttler_1 = require("@nestjs/throttler");
exports.throttlerGuardProvider = {
    provide: core_1.APP_GUARD,
    useClass: throttler_1.ThrottlerGuard,
};
//# sourceMappingURL=throllter.gurd.js.map