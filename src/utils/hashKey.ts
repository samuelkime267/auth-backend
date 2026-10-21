import crypto from "crypto";
import { HASH_SECRET } from "@/config/env";

export function hashKey(key: string) {
  return crypto.createHmac("sha256", HASH_SECRET).update(key).digest("hex");
}
