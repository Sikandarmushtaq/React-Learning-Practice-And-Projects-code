import RightCardContent from "./rightCardContent";


const Rightcard = (props) => {
  return (
    <div className="h-full w-60 rounded-4xl overflow-hidden relative">
      <img
        className="h-full w-full object-cover"
        src={props.img}
      ></img>
     <RightCardContent tag = {props.tag} />
      
      
    </div>
  );
};

export default Rightcard;
