import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCharacters } from '../redux/charactersSlice'
import './style.css'

function Home() {
    const characters = useSelector((state) => state.characters.items);
    const isLoading = useSelector((state) => state.characters.isLoading);
    const error = useSelector((state) => state.characters.error)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCharacters())
    }, [dispatch]);



    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error}</div>
    }

    console.log(characters);
    return (
        <div className='container'>
            <h1 className="center">CHARACTERS</h1>
            <div className="cards">
                <div className='card'>
                    <div className='card-inner'>
                        <div className='card-front'>
                            {characters.map((character) => (
                                <div key={character.char_id}>
                                    <div className='character'>
                                        <img src={character.img} alt="" className='character-front' />
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;