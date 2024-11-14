import { Badge } from "@/components/ui/badge";
import Layout from "./layout";

const project = {
  title: "MyNotes",
  image: "/sc/my-notes.PNG",
  date: "Work in Progress",
  text: `I did not like how MyDiary looked like, or it's text editor. So I decided to recreate it with better UI/UX and a more modern block editor (tip tap). Also took the opportunity to learn .NET and GraphQL.
  Unfortunately, I did not finish it yet due to it's complexity.`,
  badges: (
    <>
      <Badge className="!bg-black text-white" variant="secondary">
        NextJS
      </Badge>
      <Badge className="!bg-blue-500 text-white" variant="secondary">
        TypeScript
      </Badge>
      <Badge className="!bg-emerald-600 text-white" variant="secondary">
        .NET 8.0
      </Badge>
      <Badge className="!bg-blue-900 text-white" variant="secondary">
        Docker
      </Badge>
      <Badge className="!bg-pink-500 text-white" variant="secondary">
        Postgres
      </Badge>
      <Badge className="!bg-purple-600 text-white" variant="secondary">
        GraphQL
      </Badge>
      <Badge className="!bg-red-500 text-white" variant="secondary">
        Work in Progress
      </Badge>
    </>
  ),
  preview: (
    <div className="h-full w-full bg-white flex justify-center">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/iwRaJnBBSvE?si=hZNGgkO6vSOrRBEM"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  ),
};

export default function Page7() {
  return (
    <div className="flex flex-col justify-center h-full relative w-full">
      <div className="h-full w-full absolute overflow-y-auto">
        <Layout {...project} />
      </div>
    </div>
  );
}
