import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import Layout from "./layout";

const project = {
  title: "Time Zone Converter",
  image: "/sc/timezone-c.png",
  date: "September, 2024",
  text: `This app is a simple react application I've created for me and my friends from other countries to use to convert our time zones.
I wanted a challenge, so I also made it so a video and a song are played when someone's profile is hovered. It has some inside jokes.`,
  badges: (
    <>
      <Badge className="!bg-orange-500 text-white" variant="secondary">
        React
      </Badge>
      <Badge className="!bg-blue-500 text-white" variant="secondary">
        TypeScript
      </Badge>
      <Badge className="!bg-red-500 text-white" variant="secondary">
        For fun
      </Badge>
    </>
  ),
  sound: true,
  forFun: true,
  preview: (
    <div className="h-full w-full bg-white flex justify-center">
      <iframe
        className="w-full zoom-frame"
        src="https://meow-timezone.vercel.app/"
        name="spaceship_game_preview"
        title="spaceship game preview"
      ></iframe>
    </div>
  ),
  onPreview: () => {
    toast("BE CAREFUL: this one might be really noisy.", {
      id: "timezone-c",
      position: "bottom-center",
      duration: 10000,
    });
  },
  onClosePreview: () => {
    toast.dismiss("timezone-c");
  },
};

export default function Page8() {
  return (
    <div className="flex flex-col justify-center h-full relative w-full">
      <div className="h-full w-full absolute overflow-y-auto">
        <Layout {...project} />
      </div>
    </div>
  );
}
