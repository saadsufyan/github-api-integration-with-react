import "./style.scss";
const Layout = ({children})=>{
   return (
       <>
            <header>
                <a href="/">GitHub Browser</a>
            </header>
            <main>
                {children}
            </main>
       </>
   ) 
};

export default Layout;