import Delete from "./components/Delete";
import GetAll from "./components/GetAll";
import Post from "./components/Post";


function App() {
  return (
    <div>
      <h2>Complete results are logged in console</h2>
      <GetAll/>
      <Post/>  
      <Delete/>  
    </div>
  );
}

export default App;