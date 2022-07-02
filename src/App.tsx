import './App.scss';
import Header from './components/Header/Header.tsx';
import ListItemMenu from './components/ListItemMenu/ListItemMenu.tsx';

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <main className="main-content">
          <ListItemMenu />
        </main>
      </div>
    </>
  );
}

export default App;
