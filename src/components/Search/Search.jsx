// TODO: Implement search functionality
const Search = ({ setSearchQuery }) => {
  const onChange = (evt) => {
    setSearchQuery(evt.target.value);
  };
  return (
    <div className="flex-none lg:w-1/4">
      <div className="form-control w-full">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Search;
