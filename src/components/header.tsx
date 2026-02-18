import "./componentStyles/Header.css"

interface IProps{
  CloseModal: () => void
}
 
const Header = ({CloseModal}: IProps) => {
  return (
    <header className="Header">
      <div className="HeaderLeft">
        <h2>Note App</h2>
        <p>Create notes here!</p>
      </div>

      <button className="CreateBtn" onClick={() => CloseModal()}>+ Create</button>
    </header>
  );
};

export default Header;