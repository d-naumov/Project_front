import Character from "./Character"

export default interface CharacterState {
    characters: Character[]
    error?: null | string
    isLoading?: boolean
  }