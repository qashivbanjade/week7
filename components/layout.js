export default function Layout({ children }) {
    return (
      <div>
        <header>
         <h1>This is header</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>This is footer</p>
        </footer>
      </div>
    );
  }
  