import { MoveRight } from "lucide-react";

const RightCardContent = (props) => {
  return (
  <div className="absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between">
        <h2 className="flex text-2xl font-semibold rounded-full justify-center items-center bg-white h-10 w-10">
          1
        </h2>
        <div>
          <p className="text-sm leading-normal text-white mb-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nisi
            praesentium exercitationem, et architecto obcaecati.
          </p>
          <div className="flex justify-between">
            <button className="bg-blue-600 text-white font-medium  px-8 py-2 rounded-full">
              {props.tag}
            </button>
            <button className="bg-blue-600 text-white font-medium px-3 py-2 rounded-full">
              <MoveRight />
            </button>
          </div>
        </div>
      </div>
  )
}

export default RightCardContent
