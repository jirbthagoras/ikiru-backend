import Redis from "ioredis";

let redisClient: Redis;

export const getRedisClient = (): Redis => {
  if (!redisClient) {
    const redisUrl = process.env.REDIS_URL ?? "redis://localhost:6379";
    redisClient = new Redis(redisUrl);
  }

  return redisClient;
};
