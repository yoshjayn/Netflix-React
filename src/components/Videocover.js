import { useSelector } from 'react-redux';
import useMovieVideo from '../hooks/useMovieVideo';

const Videocover = ({ movieId }) => { 
    useMovieVideo(movieId); // Call the hook unconditionally on every render

    const trailerVideo = useSelector(store => store.movie?.trailerVideo);

    // useMovieVideo(movieId);

    return (
        <div className="w-screen ">
            {/* {trailerVideo && trailerVideo.key ? ( */}
            {trailerVideo? (

                <div>
                    <iframe
                        className='w-screen aspect-video '
                        src={"https://www.youtube.com/embed/" + trailerVideo.key +"?&autoplay=1&mute=1"} 
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                    ></iframe>
                </div>
            ) : (
                <div>
                    
                </div>
            )}
        </div>
    );
}

export default Videocover;
