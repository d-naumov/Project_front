import { FC, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Character from "../features/characters/types/Character";
import MyButton from "../components/myButtom/MyButton";
import styles from "./CharactersInfo.module.css"

const CharacterInfo: FC = () => {

const {id} = useParams();
const initialValue: Character = {
    id: 0,
    name: '',
    status: '',
    species: '',
    gender: '', 
    image: '',
};

const  [character, setCharacter] = useState<Character>(initialValue);
 
async function loadCharacters(): Promise<void> {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

    const data = await res.json();
    setCharacter(data);
}
useEffect(() => {
loadCharacters();

}, []);
 return (

    <div className={styles.characterInfoContainer}>
    <h1 className={styles.characterName}>{character.name}</h1>
    <p className={styles.characterStatus}>{character.status}</p>
    <p className={styles.characterDetails}>
      {character.species} {character.gender}
    </p>
    <div className={styles.imgContainer}>
      <img className={styles.characterImage} src={character.image} alt="" />
    </div>
    <div>
      <Link to="../characters">
        <MyButton text="Назад к персонажам" />
      </Link>
    </div>
  </div>
 );
}

export default CharacterInfo;