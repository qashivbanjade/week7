
export default function Search() {
  const songs = [
    { id: 1, title: 'Bohemian Rhapsody', artist: 'Queen' },
    { id: 2, title: 'Shape of You', artist: 'Ed Sheeran' },
    { id: 3, title: 'Blinding Lights', artist: 'The Weeknd' },
    { id: 4, title: 'Hotel California', artist: 'Eagles' },
    { id: 5, title: 'Someone Like You', artist: 'Adele' },
  ];

  return (
    <div>
      <header style={styles.header}>
        <div style={styles.logo}>Logo</div>
        <nav>
          <a href="/" style={styles.navLink}>Home</a>
          <a href="/login" style={styles.navLink}>Login</a>
        </nav>
      </header>
      <main style={styles.results}>
        <h1 style={styles.resultsTitle}>Search Results</h1>
        <ul style={styles.songList}>
          {songs.map((song) => (
            <li key={song.id} style={styles.songItem}>
              <span style={styles.songTitle}>{song.title}</span> -{' '}
              <span style={styles.songArtist}>{song.artist}</span>
            </li>
          ))}
        </ul>
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
  results: {
    padding: '2rem',
    textAlign: 'center',
  },
  resultsTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
  },
  songList: {
    listStyle: 'none',
    padding: 0,
  },
  songItem: {
    padding: '0.5rem',
    borderBottom: '1px solid #ddd',
    textAlign: 'left',
    margin: '0 auto',
    maxWidth: '500px',
  },
  songTitle: {
    fontWeight: 'bold',
  },
  songArtist: {
    color: '#555',
  },
};
