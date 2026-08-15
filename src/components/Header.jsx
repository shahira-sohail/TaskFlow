function Header({searchTerm, setSearchTerm}) {
    return(
        <header className="header">
        <div className="brand">
          <div className="brand-icon">✓</div>

          <div>
            <h1 className="Heading">TaskFlow</h1>
            <p>Manage your work </p>
          </div>
        </div>

        <div className="header-actions">
          <input
            type="text"
            placeholder="Search tasks..."
            className="search-input"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>
      </header>
    );
}

export default Header;