"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = exports.comparePass = void 0;
const argon2 = require("argon2");
async function comparePass(password, hashedPassword) {
    return argon2.verify(hashedPassword, password);
}
exports.comparePass = comparePass;
async function hashPassword(password) {
    return argon2.hash(password);
}
exports.hashPassword = hashPassword;
//# sourceMappingURL=password.js.map