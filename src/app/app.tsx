"use client";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

import { StateContextProvider } from "@/components/state-context";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Page0 from "./_components/page-0";
import Page1 from "./_components/page-1";
import Page10 from "./_components/page-10";
import Page11 from "./_components/page-11";
import Page12 from "./_components/page-12";
import Page13 from "./_components/page-13";
import Page2 from "./_components/page-2";
import Page3 from "./_components/page-3";
import Page4 from "./_components/page-4";
import Page5 from "./_components/page-5";
import Page6 from "./_components/page-6";
import Page7 from "./_components/page-7";
import Page8 from "./_components/page-8";
import Page9 from "./_components/page-9";

const pages = [
  <Page0 key="-1" />,
  <Page1 key="0" />,
  <Page2 key="1" />,
  <Page3 key="2" />,
  <Page4 key="3" />,
  <Page5 key="4" />,
  <Page6 key="5" />,
  <Page7 key="6" />,
  <Page8 key="7" />,
  <Page9 key="8" />,
  <Page10 key="9" />,
  <Page11 key="10" />,
  <Page12 key="11" />,
  <Page13 key="12" />,
];

export default function App() {
  const [page, setPage] = useState(0);

  function getPage() {
    return pages[page];
  }

  const next = () => setPage((p) => Math.min(pages.length - 1, p + 1));
  const previous = () => setPage((p) => Math.max(0, p - 1));

  const firstPage = page === 0;
  const lastPage = page === pages.length - 1;

  return (
    <StateContextProvider>
      <main className="hidden lg:flex w-[56rem] h-[36rem] bg-white shadow-custom rounded-lg flex-col overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            transition={{
              duration: 0.35,
              easeing: "easeInOut",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1"
          >
            {getPage()}
          </motion.div>
        </AnimatePresence>
        <div className="h-20 shrink-0 flex items-center justify-center gap-8 text-lg border-t border-solid border-gray-300">
          <button
            onClick={previous}
            className={twMerge(
              "h-10 w-10 border border-solid border-gray-300 rounded-md flex justify-center items-center",
              firstPage && "text-zinc-400 border-opacity-50"
            )}
          >
            <BiSolidLeftArrow />
          </button>
          {page} of {pages.length - 1}
          <button
            disabled={lastPage}
            onClick={next}
            className={twMerge(
              "h-10 w-10 border border-solid border-gray-300 rounded-md flex justify-center items-center",
              lastPage && "text-zinc-400 border-opacity-50"
            )}
          >
            <BiSolidRightArrow />
          </button>
        </div>
      </main>
    </StateContextProvider>
  );
}
