import Head from "next/head";
import TodoApp from "./components/TodoApp";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Todo Next App</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Good old-new Todo App build with Next.js and some help from material-ui'
        />
      </Head>
      <Navbar />
      <header>
        <h1>Todo Next App</h1>
      </header>

      <main>
        <TodoApp />
      </main>

      <footer>
        <div className='footer-container'>
          <p>All right reserved @panker</p>
        </div>
      </footer>

      {/* ----------------------------------------------------------- */}

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main {
          flex: 1;
        }
        footer {
          width: 100%;
          height: 64px;
          border-top: 1px solid #eaeaea;
        }
        .footer-container {
          height: 100%;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          padding: 0 20px;
          justify-content: flex-start;
        }
        h1 {
          font-size: 4rem;
          text-align: center;
        }
        @media only screen and (max-width: 600px) {
          h1 {
            font-size: 2.5rem;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-color: white;
          min-height: 100vh;
          color: #222831;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
