import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer';
import Main  from './Components/Main';
import Like from './Components/Like';

function App() {
  return (
    //this is mounting of other components
    <div>
    
    <Header title="technologies" t2="abc" t3="def"/>
    <Like></Like>
    <Main like="React"/>
    {/* it will create object of the Main class */}
    <Footer year="2022"/>
    {/* props passing data to child with key and value */}
    </div >);
  }



{/* <table border="1px solid black">
  <tr><th>Tittle</th>
  <th>Completed</th></tr>
   <tr><th>abc</th>
  <th>true</th></tr>
</table>
<h1> data is here</h1>
<p>You are here</p>
    </div>
  ); */}


export default App;
