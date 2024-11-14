import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";
import { toast } from "sonner";
import Layout from "./layout";

const project = {
  title: "Static Portfolio",
  image: "https://www.eduardobotelho.com/29.png",
  date: "February, 2022",
  text: "My first-ever portfolio, created using only the Bootstrap CSS framework.",
  badges: (
    <>
      <Badge className="!bg-orange-300 text-white" variant="secondary">
        HTML
      </Badge>
      <Badge className="!bg-blue-300 text-white" variant="secondary">
        CSS
      </Badge>
    </>
  ),
  preview: (
    <div className="h-full w-full bg-white flex justify-center">
      <img
        className="h-full w-auto object-contain"
        src="https://www.eduardobotelho.com/29.png"
      />
    </div>
  ),
};

export default function Page1() {
  useEffect(() => {
    toast("TIP: Click on the image of a project to see a preview", {
      id: "tip",
      duration: 6000,
      position: "bottom-center",
    });

    return () => {
      toast.dismiss("tip");
    };
  }, []);
  return (
    <div className="flex flex-col justify-center h-full relative">
      <div className="h-full w-full absolute overflow-y-auto">
        <Layout {...project} />
      </div>
    </div>
  );
}
