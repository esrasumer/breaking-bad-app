import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCharacters } from '../redux/charactersSlice'
import Masonry from 'react-masonry-css'
import './style.css'

function Home() {
    const characters = useSelector((state) => state.characters.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCharacters())
    }, [dispatch]);

    console.log(characters);
    return (
        <div className='characters'>
            <h1 className="title">characters</h1>
            <div className="character">
                {characters.map((character) => (
                    <div key={character.char_id}>
                        <div>
                            <img src={character.img} alt="" />
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Home;