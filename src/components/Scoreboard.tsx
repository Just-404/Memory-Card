export default function Scoreboard({
  currentScore = 0,
  bestScore = 0,
}: {
  currentScore: number;
  bestScore: number;
}) {
  return (
    <section className="scoreboard">
      <h2>
        Score: <span>{currentScore}</span>
      </h2>
      <h2>
        Best score: <span>{bestScore}</span>
      </h2>
    </section>
  );
}
