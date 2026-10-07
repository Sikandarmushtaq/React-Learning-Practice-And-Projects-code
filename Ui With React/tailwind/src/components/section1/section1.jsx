import navbar from "./navbar"
import Page1content from "./page1content"


const Section1 = (props) => {
  return (
    <div className='h-screen w-full'>
      {navbar()}
       <Page1content users = {props.users} />
    </div>
  )
}

export default Section1
