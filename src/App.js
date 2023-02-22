import logo from './logo.svg';
import './App.css';
import { List } from './components/list'
import { ListItem } from './components/list-item'

function App() {
  const items = [
    { id: 1, text: 'First option'},
    { id: 2, text: 'Second option'},
    { id: 4, text: 'Fourth option'}
  ]

  return (
    <div className="App">
      <List>
        {items.map((item) => <ListItem id={item.id} text={item.text}/>)}
      </List>

    </div>
  );
}

export default App;
