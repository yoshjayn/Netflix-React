import { IMG_CDN_URL } from "../utils/constants"

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className="w-32 mr-3 md:w-48 my-2">
      {/* <div className='border-black border-2 h-60 w-60'>Y</div> */}
    <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
    </div>
  )
}

export default MovieCard
