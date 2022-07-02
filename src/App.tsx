import './App.scss';
import TabsNavBar from './components/TabsNavBar/TabsNavBar.tsx';
import ListItemMenu from './components/ListItemMenu/ListItemMenu.tsx';
import SearchBar from './components/SearchBar/SearchBar.tsx';

function App() {
  return (
    <>
      <div className="container">
        <SearchBar />
        <TabsNavBar />
        <main className="main-content">
          <ListItemMenu />
        </main>
      </div>
    </>
  );
}

export default App;
