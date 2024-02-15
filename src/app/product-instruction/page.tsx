import data from "../mock/data";
import Headers from "./Headers";
import MaterialsHome from "./MaterialsHome";
import Instruction from "./Instruction";
import MaterialsKit from "./MaterialsKit";

const page = () => {
  return (
    <div className="bg-orange-500 h-auto pt-10">
      <Headers
        link={data[0].link}
        title={data[0].product_name}
        description={data[0].description}
      />
      <MaterialsHome materials={data[0].materialsHome} />
      <MaterialsKit materials={data[0].materialsKit} />
      <Instruction instruction={data[0].instructions} />
    </div>
  );
};

export default page;
