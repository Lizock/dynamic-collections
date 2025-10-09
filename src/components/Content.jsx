export default function Content(props) {
  
  const { name, type, hp, attack, defense, abilities, image } = props.content;

  const getEmoji = (typeArray) => {
    const emojis = [];

    typeArray.forEach((t) => {
      if (t === "Grass") emojis.push("🌿");
      if (t === "Poison") emojis.push("🧪");
      if (t === "Fire") emojis.push("🔥");
      if (t === "Flying") emojis.push("🕊️");
      if (t === "Water") emojis.push("💧");
      if (t === "Electric") emojis.push("⚡");
      if (t === "Normal") emojis.push("⚪");
      if (t === "Fairy") emojis.push("🧚‍♀️");
    });

    return emojis.join("");
  };

  const emoji = getEmoji(type);

  return (
    <div className="box">
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
