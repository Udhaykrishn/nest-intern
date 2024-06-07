"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttlerConfig = void 0;
exports.throttlerConfig = {
    forRoot: [
        {
            name: "short",
            ttl: 1000,
            limit: 3,
            errorMessage: "Too many requests, Please Try again Later",
        },
        {
            name: "long",
            ttl: 60000,
            limit: 100,
            errorMessage: "Too many requests, Please Try again Later",
        },
    ],
};
//# sourceMappingURL=throttler.config.js.map