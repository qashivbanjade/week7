export default function Home() {
  return (
    <div>
      <header style={styles.header}>
        <div style={styles.logo}>Logo</div>
        <nav>
          <a href="/" style={styles.navLink}>Home</a>
          <a href="/login" style={styles.navLink}>Login</a>
        </nav>
      </header>
      <main style={styles.hero}>
        <h1 style={styles.heroTitle}>Discover Your Favorite Songs</h1>
        <p style={styles.heroSubtitle}>Search for songs and explore endless possibilities!</p>
        <form style={styles.searchForm}>
          <input
            type="text"
            placeholder="Search for a song..."
            style={styles.searchInput}
          />
          <button navLink='/searchResults'type="submit" style={styles.searchButton}>Search</button>
        </form>
      </main>
    </div>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#f8f9fa',
    borderBottom: '1px solid #ddd',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  navLink: {
    margin: '0 1rem',
    textDecoration: 'none',
    color: '#007bff',
  },
  hero: {
    textAlign: 'center',
    padding: '4rem 2rem',
    backgroundColor: '#f0f8ff',
  },
  heroTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    color: '#555',
  },
  searchForm: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.5rem',
  },
  searchInput: {
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ddd',
    flex: 1,
    maxWidth: '300px',
  },
  searchButton: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};
