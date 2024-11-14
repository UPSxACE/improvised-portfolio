import { Badge } from "@/components/ui/badge";
import Layout from "./layout";

const project = {
  title: "Static Template",
  image: "/sc/business.PNG",
  date: "October, 2024",
  text: `Static template I've created to practice my frontend skills and possibly sell in the future. Based on a Figma template.`,
  badges: (
    <>
      <Badge className="!bg-black text-white" variant="secondary">
        NextJS
      </Badge>
    </>
  ),
  preview: (
    <div className="h-full w-full bg-white flex justify-center">
      <iframe
        className="w-full zoom-frame"
        src="https://web-template-business.vercel.app/"
        name="business_preview"
        title="business preview"
      ></iframe>
    </div>
  ),
};

export default function Page11() {
  return (
    <div className="flex flex-col justify-center h-full relative w-full">
      <div className="h-full w-full absolute overflow-y-auto">
        <Layout {...project} />
      </div>
    </div>
  );
}
