import Image from "next/image";
import Button from "./Components/Button";

type instructionProps = {
  instruction: {
    steps: string;
    imgDir: string;
  }[];
};

const Instruction = ({ instruction }: instructionProps) => {
  return (
    <div className="bg-white h-auto mx-5">
      <h1 className="text-3xl p-5 font-semibold w-72">
        Step-by-Step Instructions
      </h1>
      <div className="bg-gray-300 px-5 py-5">
        {instruction.map((el, idx) => {
          return (
            <div className="my-5" key={idx}>
              <Button name={idx + 1} />
              <p className="py-3 font-semibold">{el.steps}</p>
              <Image
                src={el.imgDir}
                alt={el.imgDir}
                width={150}
                height={150}
                loading="eager"
                style={{ border: "2px solid black", rotate: "20deg " }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Instruction;
