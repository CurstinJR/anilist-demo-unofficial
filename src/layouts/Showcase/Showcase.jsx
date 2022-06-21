import { GET_SHOWCASE_ANIME } from "../../graphql/queries/Anime";
import { useQuery } from "@apollo/client";
import CardList from "../../components/Card/CardList";

const Showcase = () => {
  const { loading, error, data } = useQuery(GET_SHOWCASE_ANIME);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className="container mx-auto showcase">
      <CardList showcaseName="Trending" showcase={data.trending} />
      <CardList showcaseName="Popular This Season" showcase={data.season} />
      <CardList
        showcaseName="Upcoming This Season"
        showcase={data.nextSeason}
      />
      <CardList showcaseName="All Time Popular" showcase={data.popular} />
    </div>
  );
};

export default Showcase;
