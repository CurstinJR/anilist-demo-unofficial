import { gql } from "@apollo/client";

const mediaFragment = gql`
  fragment media on Media {
    id
    title {
      english
    }
    coverImage {
      medium
      large
      extraLarge
    }
    bannerImage
    description
  }
`;

const GET_SHOWCASE_ANIME = gql`
  query getShowcaseAnime {
    trending: Page(page: 1, perPage: 4) {
      media(type: ANIME, sort: TRENDING_DESC) {
        ...media
      }
    }
    season: Page(page: 1, perPage: 4) {
      media(
        type: ANIME
        sort: POPULARITY_DESC
        season: SPRING
        seasonYear: 2022
      ) {
        ...media
      }
    }
    nextSeason: Page(page: 1, perPage: 4) {
      media(
        season: SUMMER
        seasonYear: 2022
        sort: POPULARITY_DESC
        type: ANIME
      ) {
        ...media
      }
    }
    popular: Page(page: 1, perPage: 4) {
      media(sort: POPULARITY_DESC, type: ANIME) {
        ...media
      }
    }
  }

  ${mediaFragment}
`;

const SEARCH_ANIME = gql`
  query searchAnimeByTitle($search: String) {
    anime: Page(page: 1) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      media(search: $search, type: ANIME) {
        ...media
      }
    }
  }

  ${mediaFragment}
`;

export { GET_SHOWCASE_ANIME, SEARCH_ANIME };
