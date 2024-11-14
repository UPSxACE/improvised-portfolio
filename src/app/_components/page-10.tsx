import { Badge } from "@/components/ui/badge";
import Layout from "./layout";

const project = {
  title: "Vyzion - Landing Page",
  image: "/sc/vyzion.PNG",
  date: "October, 2024",
  text: `Very basic landing page for a freelance company I tried to create with my brother. Some sections of it, including icons, are customizable through a Strapi CMS instance that runs as backend.`,
  badges: (
    <>
      <Badge className="!bg-black text-white" variant="secondary">
        NextJS
      </Badge>
      <Badge className="!bg-blue-500 text-white" variant="secondary">
        Strapi CMS
      </Badge>
    </>
  ),
  preview: (
    <div className="h-full w-full bg-white flex justify-center">
      <iframe
        className="w-full zoom-frame"
        src="https://vyzion.pt"
        name="vyzion_preview"
        title="vyzion preview"
      ></iframe>
    </div>
  ),
};

export default function Page10() {
  return (
    <div className="flex flex-col justify-center h-full relative w-full">
      <div className="h-full w-full absolute overflow-y-auto">
        <Layout {...project} />
      </div>
    </div>
  );
}
