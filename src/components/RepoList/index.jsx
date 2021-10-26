import PropTypes from "prop-types";
import RepoItem from "./UserRepo";
import "./style.scss";

const RepoList = ({loading,repolist})=>{
    const getRepoListComponentsMapped = ()=>{
        if(repolist.length){
            return repolist.map((_repo,index)=>(<RepoItem key={_repo.id} repo={_repo}/>));
        }else{
            return <div className="not_found">No Repo Found!</div>
        }
    }
    return(
        <div className="user_repositories">
            {loading?<div id="loading"></div>:getRepoListComponentsMapped()}
        </div>
    )
};

RepoList.propTypes = {
    loading:PropTypes.bool.isRequired,
    repolist:PropTypes.array.isRequired
}
export default RepoList;