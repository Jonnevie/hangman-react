import Form from "./Form";

const Header = ({showForm}) => {
    return (   
        <>
        <h1 id="cheoklette">🅲🅷🅴🅾🅺🅻🅴🆃🆃🅴</h1>
        <h1>🅷🅰🅽🅶🅼🅰🅽</h1>
  {}
        <p id="header-p" style={showForm === true ? {display:"none"}  : { display: "block" }}>Guess the word - Enter a letter</p>
        <p id="header-message" style={showForm === true ? {display:"none"}  : { display: "block" }}>or tap + to choose a word.</p>
        </>
     );
}
 
export default Header;