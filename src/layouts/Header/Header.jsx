import Search from "../../components/Search/Search";

const Header = () => {
  return (
    <nav className="navbar bg-base-100">
      {/* Logo Name */}
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl" href="#">
          AniList Demo
        </a>
      </div>
      {/* Search Input */}
      <Search />
    </nav>
  );
};

export default Header;
