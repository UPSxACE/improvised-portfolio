import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useState } from "react";

type Props = {
  title: string;
  date: string;
  text: string;
  image: string;
  badges: ReactNode;
  preview?: ReactNode;
  sound?: boolean;
  onPreview?: () => void;
  onClosePreview?: () => void;
  forFun?: boolean;
};
export default function Layout(props: Props) {
  const [fullscreenActivated, setFullscreenActivated] = useState(false);

  const {
    title,
    date,
    text,
    image,
    badges,
    preview,
    sound,
    onPreview,
    onClosePreview,
    forFun,
  } = props;

  const activate = () => {
    if (onPreview) onPreview();
    setFullscreenActivated(true);
  };
  const reset = () => {
    if (onClosePreview) onClosePreview();
    setFullscreenActivated(false);
  };

  return (
    <div className="flex flex-col items-center h-full w-full justify-center text-center">
      {fullscreenActivated && preview ? (
        preview
      ) : (
        <>
          <button
            onClick={activate}
            className="flex w-80 h-48 bg-gray-200 shrink-0 overflow-hidden rounded-sm relative mt-8 group"
          >
            {preview ? (
              <div className="flex flex-col opacity-0 group-hover:opacity-90 h-full w-full bg-gray-100 z-10 transition-all duration-500 absolute top-0 left-0 justify-center items-center text-gray-700">
                <>
                  <span>Click for preview</span>
                  {sound && (
                    <span className="text-red-500 w-10/12">
                      WARNING: Loud sounds
                    </span>
                  )}
                  {forFun && (
                    <span className="text-yellow-600 w-10/12">
                      This project is not serious; please don&apos;t find
                      anything offensive
                    </span>
                  )}
                </>
              </div>
            ) : (
              <div className="flex flex-col opacity-0 group-hover:opacity-90 h-full w-full bg-gray-100 z-10 transition-all duration-500 absolute top-0 left-0 justify-center items-center text-gray-700">
                No preview
              </div>
            )}
            <img src={image} className="absolute h-full w-full object-cover" />
          </button>
          <h1 className="mt-3 text-2xl font-semibold w-3/4 mb-[0.1rem]">
            {title}
          </h1>
          <div className="flex gap-2 flex-wrap justify-center">{badges}</div>
          <p className="mt-1 w-3/4 font-medium text-slate-800 whitespace-break-spaces">
            {text}
          </p>
          <p className="w-3/4 mb-8 text-slate-500">{date}</p>
        </>
      )}
      <AnimatePresence>
        {fullscreenActivated && preview && (
          <motion.button
            key="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-4 right-6 bg-slate-200 hover:bg-slate-300 shadow-md px-3 py-1 rounded-md text-gray-700"
            onClick={reset}
            transition={{
              duration: 0.5,
              ease: fullscreenActivated ? "linear" : "easeOut",
            }}
          >
            Back to details
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
