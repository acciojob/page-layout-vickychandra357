
const Header=(props)=>{

    return(
        <div>
            <h1>Welcome to my website</h1>
            {props.children}
        </div>
        
    )
}

export default Header;