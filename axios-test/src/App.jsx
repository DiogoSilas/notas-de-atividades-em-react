import { fetchUserDetails } from './axions';
import './App.css'



function App() {
  fetchUserDetails(document.querySelector('#user'), 'DiogoSilas')
  return (
    <>
      <div>
        <h1>GitHub User</h1>
        <div id="user"></div>
      </div>
    </>
  )
}

export default App;
