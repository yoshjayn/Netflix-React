import { COVER } from "../utils/constants"
import GptPage from "./GptPage"
import GptSearchArea from "./GptSearchArea"

const GptSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
        <img className="h-screen object-cover md: w-screen"
        src={COVER} 
        alt='cover'/>
      </div>
      <div className="">
        <GptSearchArea/>
      <GptPage/>
      </div>

    </div>
  )

}

export default GptSearch
