import CardList from './components/CardList'

function App() {

  const users = []

  for (let i = 0; i < 10; i++) {
    const exampleUser = {
      username: 'exampleUser',
      password: '12345',
      email: 'user@exemplo.com',
      job: 'Dev'
    }

    users.push(exampleUser)
  }

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

