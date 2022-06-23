import { GET_SHOWCASE_ANIME } from "../../graphql/queries/Anime";
import { useQuery } from "@apollo/client";
import CardList from "../../components/Card/CardList";
import { useSearchAnime } from "../../hooks/useSearchAnime";
import { useEffect } from "react";

const Showcase = ({ searchValue }) => {
  const { loading, error, data } = useQuery(GET_SHOWCASE_ANIME);
  const { searchAnime, anime } = useSearchAnime();

  useEffect(() => {
    // delay search to prevent requests on every input change
    const delaySearchId = setTimeout(() => {
      searchAnime({ variables: { search: searchValue } });
    }, 750);
    return () => clearTimeout(delaySearchId);
  }, [searchAnime, searchValue]);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className="container mx-auto showcase">
      {searchValue ? (
        <CardList showcase={anime.anime} />
      ) : (
        <>
          <CardList showcaseName="Trending" showcase={data.trending} />
          <CardList showcaseName="Popular This Season" showcase={data.season} />
          <CardList
            showcaseName="Upcoming This Season"
            showcase={data.nextSeason}
          />
          <CardList showcaseName="All Time Popular" showcase={data.popular} />
        </>
      )}
    </div>
  );
};

export default Showcase;
