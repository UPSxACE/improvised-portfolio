import { Badge } from "@/components/ui/badge";
import Layout from "./layout";

const project = {
  title: "Discord Bot",
  image: "/sc/discord.webp",
  date: "September, 2022",
  text: `In my second year of university, I coded a Discord chat bot with JavaScript. It worked by listening to a Discord api that would emit events each time something happened in our Discord server.
Members would get points for chatting and interacting with it, and it would store their profiles, settings, and leaderboard points in a MongoDB database.`,
  badges: (
    <>
      <Badge className="!bg-purple-600 text-white" variant="secondary">
        Discord.js
      </Badge>
      <Badge className="!bg-orange-500 text-white" variant="secondary">
        NodeJS
      </Badge>
      <Badge className="!bg-green-600 text-white" variant="secondary">
        MongoDB
      </Badge>
    </>
  ),
};

export default function Page3() {
  return (
    <div className="flex flex-col justify-center h-full relative w-full">
      <div className="h-full w-full absolute overflow-y-auto">
        <Layout {...project} />
      </div>
    </div>
  );
}
