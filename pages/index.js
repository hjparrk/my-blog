import { motion } from "framer-motion";
import NextUICard from "../components/ui/card";

function Home() {
  const lorem = `Hyojoon <br></br> Park <br /> Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been the industry's standard dummy text
ever since the 1500s, when an unknown printer took a galley of
type and scrambled it to make a type specimen book. It has
survived not only five centuries, but also the leap into
electronic typesetting, remaining essentially unchanged. It was
popularised in the 1960s with the release of Letraset sheets
containing Lorem Ipsum passages, and more recently with desktop
publishing software like Aldus PageMaker including versions of
Lorem Ipsum.`;

  return (
    <>
      <div>
        <div className="flex h-full flex-row justify-center items-center text-4xl font-bold">
          <h1 className="m-5">Hi! I&apos;m Hyojoon Park</h1>
          <motion.h1
            animate={{ rotate: [0, -20, 20, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            👋
          </motion.h1>
        </div>
        <div className="flex flex-col justify-center items-between">
          <div className="flex flex-row justify-center items-center ml-36 ">
            <div className="flex-1 m-7">
              <NextUICard>{lorem}</NextUICard>
            </div>
            <div className="flex-1 m-7">
              <NextUICard>{lorem}</NextUICard>
            </div>
            <div className="flex-1 m-7">
              <NextUICard>
                Hyojoon <br></br> Park <br />
                {lorem}
              </NextUICard>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center ml-36 ">
            <div className="flex-1 m-7">
              <NextUICard>{lorem}</NextUICard>
            </div>
            <div className="flex-1 m-7">
              <NextUICard>{lorem}</NextUICard>
            </div>
            <div className="flex-1 m-7">
              <NextUICard>
                Hyojoon <br></br> Park <br />
                {lorem}
              </NextUICard>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center ml-36 ">
            <div className="flex-1 m-7">
              <NextUICard>{lorem}</NextUICard>
            </div>
            <div className="flex-1 m-7">
              <NextUICard>{lorem}</NextUICard>
            </div>
            <div className="flex-1 m-7">
              <NextUICard>
                Hyojoon <br></br> Park <br />
                {lorem}
              </NextUICard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
