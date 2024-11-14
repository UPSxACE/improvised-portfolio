import { Badge } from "@/components/ui/badge";
import Layout from "./layout";

const project = {
  title: "Minecraft JourneyMap Merger",
  image: "/sc/jmap.png",
  date: "April, 2024",
  text: `Minecraft JourneyMap Merger is a web application I created to merge the small pieces of the map from the famous Minecraft mod 'JourneyMap' into one single image, so the user can enjoy zooming in and out as much as he wants.`,
  badges: (
    <>
      <Badge className="!bg-black text-white" variant="secondary">
        NextJS
      </Badge>
      <Badge className="!bg-blue-500 text-white" variant="secondary">
        TypeScript
      </Badge>
      <Badge className="!bg-blue-300 text-white" variant="secondary">
        Golang
      </Badge>
      <Badge className="!bg-blue-900 text-white" variant="secondary">
        Docker
      </Badge>
    </>
  ),
  preview: (
    <div className="h-full w-full bg-white flex justify-center">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/SL7ngwiO2Qw?si=8wVxdickTT65SdRT"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  ),
};

export default function Page6() {
  return (
    <div className="flex flex-col justify-center h-full relative w-full">
      <div className="h-full w-full absolute overflow-y-auto">
        <Layout {...project} />
      </div>
    </div>
  );
}
