import Axios from "axios";
import './App.css';
import {useState} from "react";
import RecipeTile from "./RecipeTile";

function App() {
const [query, setquery]=useState("");
const [recipes, setrecipes] = useState([])
const [healthLabel, sethealthLabel] = useState("vegan")

const YOUR_APP_ID = "a4a30908";
const YOUR_APP_KEY = "c42bf99957700005419880f3b07e37ef"
	

  var url=`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;
async function getRecipes(){
  var result = await Axios.get(url);
  setrecipes(result.data.hits)
  console.log(result.data.hits);
}

const onSubmit=(e)=>{
  e.preventDefault();
  getRecipes();
}
  return (
    <div className="app">
      <h1>Food Recipe Plaza 🍔</h1>
      <form className="searchForm" onSubmit={onSubmit}>
        <input className="appsearch" type="text" placeholder="enter ingridient"
        value={query} onChange={(e)=>setquery(e.target.value)}
        />
        <input className="app_submit" type="submit" value="Search" />
        <select className="app_healthLabels">
          <option  onClick={()=>sethealthLabel("vegan")}>Vegan</option>
          <option  onClick={()=>sethealthLabel("vegetarion")}>Vegetarion</option>
          <option value="paleo" onClick={()=>sethealthLabel("paleo")}>paleo</option>
          <option value="dairy-free" onClick={()=>sethealthLabel("dairy-free")}>dairy-free</option>
          <option value="gluten-fre" onClick={()=>sethealthLabel("gluten-free")}>gluten-free</option>
          <option value="wheat-free" onClick={()=>sethealthLabel("wheat-free")}>wheat-free</option>
          <option value="ow-sugar" onClick={()=>sethealthLabel("low-sugar")}>low-sugar</option>
          <option value="egg-free" onClick={()=>sethealthLabel("egg-free")}>egg-free</option>
          <option value="peanut-free" onClick={()=>sethealthLabel("peanut-free")}>peanut-free</option>
          <option value="tree-nut-free" onClick={()=>sethealthLabel("tree-nut-free")}>tree-nut-free</option>
          <option value="soy-free" onClick={()=>sethealthLabel("soy-free")}>soy-free</option>
          <option value="fish-free" onClick={()=>sethealthLabel("fish-free")}>fish-free</option>
          <option value="shellfish-free" onClick={()=>sethealthLabel("shellfish-free")}>shellfish-free</option>
        </select>
      </form>
      <div className="app_recipes">
        {recipes.map(recipe => {
          return <RecipeTile recipe={recipe}/>;
        })}
      </div>
    </div>
  );
}

export default App;
