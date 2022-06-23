import { useState } from "react";
import Search from "../../components/Search/Search";
import Header from "../../layouts/Header/Header";
import Showcase from "../../layouts/Showcase/Showcase";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <Header search={<Search setSearchQuery={setSearchQuery} />} />
      <Showcase searchValue={searchQuery} />
    </>
  );
};

export default Home;
