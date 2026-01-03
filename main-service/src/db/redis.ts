import Redis from "ioredis";

let redisClient: Redis;

export const getRedisClient = (): Redis => {
  if (!redisClient) {
    redisClient = new Redis({
      port: 6379,
      host: "127.0.0.1",
    });
  }

  return redisClient;
};
