import { env } from "$env/dynamic/private";

export const GET = async () => {
  console.log(env.TWITCH_API_KEY);
  return new Response(env.TWITCH_API_KEY);
};
