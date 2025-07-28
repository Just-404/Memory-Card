export default function PokeCard({
  name,
  imgUrl,
}: {
  name: string;
  imgUrl: string;
}) {
  return (
    <div className="pokemon-card">
      <img src={imgUrl} alt={name} />
      <p>{name[0].toUpperCase() + name.substring(1)}</p>
    </div>
  );
}
