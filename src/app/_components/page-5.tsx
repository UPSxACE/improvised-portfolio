import { Badge } from "@/components/ui/badge";
import Layout from "./layout";

const project = {
  title: "MyDiary",
  image: "/sc/my-diary.PNG",
  date: "April, 2024",
  text: `Still during my bootcamp I've started to study TypeScript and golang by myself, and created a basic full-stack application for writing notes.
With the golang framework Echo in the backend and NextJS in the frontend, users could create an account and start managing their notes.
I also hosted it in a VPS with the help of Docker.`,
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
      <Badge className="!bg-pink-500 text-white" variant="secondary">
        Postgres
      </Badge>
    </>
  ),
  preview: (
    <div className="h-full w-full bg-white flex justify-center">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/-A4sF0ILhz0?si=uxFVOrriTh8XlWJi"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  ),
};

export default function Page5() {
  return (
    <div className="flex flex-col justify-center h-full relative w-full">
      <div className="h-full w-full absolute overflow-y-auto">
        <Layout {...project} />
      </div>
    </div>
  );
}
