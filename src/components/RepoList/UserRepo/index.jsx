import "./style.scss";
const UserRepo = ({repo})=>{
    const getLanguages = ()=>{
        if(repo.language){
            return <span>{repo.language}</span>
        }else{
            return <span>No language detected!</span>
        }
    }
    return(
        <div className="user_repositories--repo">
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <h4>Languages</h4>
            <div className="user_repositories--repo-languages">
            {getLanguages()}
            </div>
        </div>
    );
};

export default UserRepo;