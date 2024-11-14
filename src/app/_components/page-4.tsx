import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import Layout from "./layout";

const project = {
  title: "Spaceship game",
  image: "/sc/spaceship-game-2.PNG",
  date: "December, 2023",
  text: `During my bootcamp I've made a simple game using HTML Canvas and free graphical resources from the internet.`,
  badges: (
    <>
      <Badge className="!bg-green-400 text-white" variant="secondary">
        HTML Canvas
      </Badge>
      <Badge className="!bg-orange-500 text-white" variant="secondary">
        JavaScript
      </Badge>
    </>
  ),
  sound: true,
  preview: (
    <div className="h-full w-full bg-white flex justify-center">
      <iframe
        className="w-full zoom-frame"
        src="https://upsxace.github.io/spaceship-game.js/"
        name="spaceship_game_preview"
        title="spaceship game preview"
      ></iframe>
    </div>
  ),
  onPreview: () => {
    toast("Use WASD to move, and SPACE to shoot", {
      id: "spaceship",
      position: "bottom-center",
      duration: 10000,
    });
  },
  onClosePreview: () => {
    toast.dismiss("spaceship");
  },
};

export default function Page4() {
  return (
    <div className="flex flex-col justify-center h-full relative w-full">
      <div className="h-full w-full absolute overflow-y-auto">
        <Layout {...project} />
      </div>
    </div>
  );
}
