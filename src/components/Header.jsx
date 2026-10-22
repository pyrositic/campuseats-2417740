function Header({ cartCount, onShowMenu, onShowCart }) {
  return (
    <header className="header">
      <div className="logo">CampusEats</div>
      <nav>
        <button onClick={onShowMenu}>Vendors</button>
        <button onClick={onShowCart}>
          Cart <span className="badge">{cartCount}</span>
        </button>
      </nav>
    </header>
  );
}
export default Header;
