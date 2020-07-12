export default function Navbar() {
  return (
    <div>
      <nav>
        <div className='container'>
          <h4>Todo-Next</h4>
        </div>
      </nav>
      <style jsx>{`
        nav {
          height: 64px;
          background-color: #222831;
          color: ghostwhite;
          width: 100vw;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: flex-start;
          padding: 0 20px;
        }
      `}</style>
    </div>
  );
}
