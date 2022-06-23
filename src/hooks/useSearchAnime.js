import { useLazyQuery } from "@apollo/client";
import { useState } from "react";
import { SEARCH_ANIME } from "../graphql/queries/Anime";

export const useSearchAnime = () => {
  const [anime, setAnime] = useState({});

  const [searchAnime] = useLazyQuery(SEARCH_ANIME, {
    onCompleted: (data) => setAnime(data),
  });

  return { searchAnime, anime };
};
