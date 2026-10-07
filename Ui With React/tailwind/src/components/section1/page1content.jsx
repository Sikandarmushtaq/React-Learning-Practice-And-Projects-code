import leftContent from "./leftContent"

import RightContent from "./rightContent"


const Page1content = (props) => {
  return (
    <div className="py-10 flex items-center gap-10 h-[90vh]">
       {leftContent()}
    <RightContent users= {props.users}  />
      
    </div>
  )
}

export default Page1content
