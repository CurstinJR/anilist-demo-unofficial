import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Header from "../../layouts/Header/Header";
import Showcase from "../../layouts/Showcase/Showcase";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <Header searchBar={<SearchBar setSearchQuery={setSearchQuery} />} />
      <Showcase searchValue={searchQuery} />
    </>
  );
};

export default Home;
