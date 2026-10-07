import Arrow from "./Arrow";
import heroText from "./heroText";


const LeftContent = () => {
  return (
    <div className=" h-full w-1/3 flex flex-col justify-between">
     {heroText()}
     {Arrow()}
      
    </div>
  );
};

export default LeftContent;
