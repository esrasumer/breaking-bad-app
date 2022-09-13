import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCharacters } from '../redux/charactersSlice'

function Home() {
    const characters = useSelector((state) => state.characters.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCharacters())
    }, [dispatch]);

    console.log(characters);
    return (
        <div>
            <h1>characters</h1>
            {characters.map((character) => (
                <div key={character.char_id}>
                    <img src={character.img} alt="" />
                </div>

            ))}
        </div>
    )
}

export default Home;