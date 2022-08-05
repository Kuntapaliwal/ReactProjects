import '../Styles/Footer.css'
function Footer(props)
{
    return(
<div className='h3class'>
    <h3>I am the footer of your page</h3>
    {/* one bracket to know that it is javascript object because we are in jsx place and one for letting know javascript object */}
    <p style={{color:'red'}} >I am in a bootstrp paragraph</p>
    <button className='btn btn-primary'>Click Me!</button>
    <p>Copyright {props.year}</p>
    {/* //we have to give keys to props otherwise it will give error as multiple objects with no keys */}
</div>
    )
}
export default Footer;