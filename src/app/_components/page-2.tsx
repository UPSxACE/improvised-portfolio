import { Badge } from "@/components/ui/badge";
import Layout from "./layout";

const project = {
  title: "React Portfolio",
  image: "https://www.eduardobotelho.com/25.png",
  date: "July, 2022",
  text: "In my first year of university, I learned React and decided to redo my portfolio.",
  badges: (
    <>
      <Badge className="!bg-orange-500 text-white" variant="secondary">
        React
      </Badge>
    </>
  ),
  preview: (
    <div className="h-full w-full bg-white flex justify-center">
      <iframe
        className="w-full zoom-frame"
        src="https://eduardobotelho.com"
        name="react_portfolio_preview"
        title="react portfolio preview"
      ></iframe>
    </div>
  ),
};

export default function Page2() {
  return (
    <div className="flex flex-col justify-center h-full relative w-full">
      <div className="h-full w-full absolute overflow-y-auto">
        <Layout {...project} />
      </div>
    </div>
  );
}
