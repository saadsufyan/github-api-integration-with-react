import {useState} from "react";
import Layout from "./components/Layout";
import "./App.scss";
import SearchBox from "./components/SearchBox";
import RepoList from "./components/RepoList";
const GIT_URL = "https://api.github.com";

const App = ()=>{
  const [repos,setRepos] = useState([]);
  const [loading,setLoading] = useState(false);
  const searchEvent = (query)=>{
    setLoading(true);
    fetch(`${GIT_URL}/users/${query}/starred`)
    .then(async(_res)=>{
      let _response = await _res.json();
      setLoading(false);
      if(_response.length>0){
        let withoutForked = _response.filter(_repo=>_repo.fork===false);
        setRepos(withoutForked);
      }
    })
  }
  return(
    <Layout>
      <SearchBox search={searchEvent}/>
      <RepoList loading={loading} repolist={repos}/>
    </Layout>
  )
};

export default App;