type materialProps = {
  materials: string[];
};

const MaterialsHome = ({ materials }: materialProps) => {
  return (
    <div className="bg-white mx-5">
      <h1 className="text-3xl p-5 font-semibold w-72">Materials From Home </h1>
      <div>
        <ul>
          {materials.map((el, idx) => (
            <li key={idx} className="mx-10 my-5">
              {el}
            </li>
          ))}
        </ul>
      </div>

      <hr className="bg-gray-500 h-1 mx-6" />
    </div>
  );
};

export default MaterialsHome;
