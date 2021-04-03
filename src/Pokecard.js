import './Pokecard.css';

const Pokecard = ({ pokemon }) => {
  const { id, name, type, base_experience } = pokemon;
  return (
    <div className='Pokecard'>
      <h4 className='Pokecard-title'>{name}</h4>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={name}
      />
      <p className='Pokecard-type'>Type: {type}</p>
      <p className='Pokecard-exp'>EXP: {base_experience}</p>
    </div>
  );
};

export default Pokecard;
