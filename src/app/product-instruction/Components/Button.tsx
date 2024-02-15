type buttonProps = {
  name: number;
};

const Button = ({ name }: buttonProps) => {
  return (
    <div className="px-5 py-2 font-semibold text-blue-700">
      STEP
      <strong className="mx-2 text-center rounded-full bg-blue-500 text-white px-4 py-2">
        {name}
      </strong>
    </div>
  );
};

export default Button;
