import App from "./app";
import { Toaster } from "@/components/ui/sonner";
export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-svh bg-gray-100">
      <div className="flex flex-col justify-center items-center lg:hidden text-center px-2">
        Please use your laptop to view this page.
      </div>
      <App />
      <Toaster />
    </div>
  );
}
