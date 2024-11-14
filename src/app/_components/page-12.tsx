import { Badge } from "@/components/ui/badge";
import Layout from "./layout";

const project = {
  title: "Kazui.club",
  image: "/sc/kazui.png",
  date: "November, 2024",
  text: `My brother and I created a memecoin in Solana, and we needed a website to introduce it!`,
  badges: (
    <>
      <Badge className="!bg-orange-400 text-white" variant="secondary">
        SvelteKit
      </Badge>
      <Badge className="!bg-red-500 text-white" variant="secondary">
        For fun
      </Badge>
    </>
  ),
  preview: (
    <div className="h-full w-full bg-white flex justify-center">
      <iframe
        className="w-full zoom-frame"
        src="https://kazui.club/"
        name="kazui_preview"
        title="kazui preview"
      ></iframe>
    </div>
  ),
  forFun: true,
};

export default function Page12() {
  return (
    <div className="flex flex-col justify-center h-full relative w-full">
      <div className="h-full w-full absolute overflow-y-auto">
        <Layout {...project} />
      </div>
    </div>
  );
}
