import Card from "./Card";

const CardList = ({ showcase, showcaseName }) => {
  return (
    <div className="flex flex-col gap-5 mb-14">
      <div className="normal-case text-xl font-bold">{showcaseName}</div>
      <div className="grid grid-cols-4 gap-14">
        {showcase.media.map((anime) => (
          <Card anime={anime} key={anime.id} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
