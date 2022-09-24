import Form from "./Form";

const Header = ({ showForm, setShowForm }) => {
  return (
    <>
      <h1 id="cheoklette">
        <img src="/logohangman.png" alt="" />
      </h1>

      {}
      <p
        id="header-p"
        style={showForm === true ? { display: "none" } : { display: "block" }}
      >
        Guess the word - Enter a letter
      </p>
      <p
        id="header-message"
        style={showForm === true ? { display: "none" } : { display: "block" }}
      >
       
        <button
          class="clickHereButton"
          onClick={() => {
            setShowForm(true);
          }}
        >
          {" "}
          Click Here
        </button>
        to choose a word.
      </p>
    </>
  );
};

export default Header;
