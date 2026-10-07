import Rightcard from "./rightcard"


const RightContent = (props) => {
  return (
    <div  className="h-full flex flex-nowrap gap-10  shrink-0 p-4 w-2/3">
  {props.users.map(function(elem){
    return  <Rightcard img={elem.img} tag = {elem.tag} />
  })}
    </div>
  )
}

export default RightContent
