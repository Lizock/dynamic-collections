export default function Content(props) {
  
  const { type, hp, attack, defense, abilities, image, name} = props.content;

  const getEmoji = (typeArray) => {
    const emojis = [];

    typeArray.forEach((type) => {
      if (type == "Grass") emojis.push("🌿");
      if (type== "Poison") emojis.push("🧪");
      if (type == "Fire") emojis.push("🔥");
      if (type == "Flying") emojis.push("🕊️");
      if (type == "Water") emojis.push("💧");
      if (type == "Electric") emojis.push("⚡");
      if (type == "Normal") emojis.push("⚪");
      if (type == "Fairy") emojis.push("🧚‍♀️");
    });

    return emojis.join("");
  };

  const emoji = getEmoji(type);

  return (
    <div className="box" >
      <h2>
        {name}
      </h2>
      <p>Type: {emoji}</p>
      <p>HP: {hp}</p>
      <p>Attack: {attack}</p>
      <p>Defense: {defense}</p>

      <p>Abilities:</p>
      <ul>
        {abilities.map((ability, index) => (
          <li key={index}>
            <strong>{ability.name}</strong>: {ability.description}
          </li>
        ))}
      </ul>

      <img src={image} alt={name} />

    </div>
  );
}
