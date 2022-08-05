import '../Styles/Header.css'

function Header(props)//this props name is used for better understsanding we can take it any other name also
{
    return (
        <div className="header">
        <h2>I Am the header of your page {props.title}</h2>
        <p>{props.t2}</p>
        <p>{props.t3}</p>
        </div>
    )
    
    
}
export default Header;