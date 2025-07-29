import { motion } from "framer-motion";

export default function PokeCard({
  name,
  imgUrl,
  onClickPokemon,
}: {
  name: string;
  imgUrl: string;
  onClickPokemon: (name: string) => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      role="button"
      className="pokemon-card"
      onClick={() => onClickPokemon(name)}
    >
      <img src={imgUrl} alt={name} />
      <p>{name[0].toUpperCase() + name.substring(1)}</p>
    </motion.div>
  );
}
