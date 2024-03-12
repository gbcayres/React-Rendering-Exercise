import CardList from './components/CardList'

function App() {

  const users = [{
    username: 'gbcayres',
    password: '12345',
    email: 'user3@exemplo.com',
    job: 'Dev'
  },
  {
    username: 'yoros666',
    password: '12345',
    email: 'user3@exemplo.com',
    job: 'Chef'
  },
  {
    username: 'user3',
    password: '12345',
    email: 'user3@exemplo.com',
    job: 'Bus Driver'
  }
  ]

  return (
    <div className="App">
      <h1 className="title">Rendering cards exercise</h1>
      <div className="container">
        <CardList users={users}/>
      </div>
    </div>
  );
}

export default App;

