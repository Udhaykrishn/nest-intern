import * as argon2 from "argon2";

export async function comparePass(password: string, hashedPassword: string) {
  return argon2.verify(hashedPassword, password);
}

export async function hashPassword(password: string) {
  return argon2.hash(password);
}
