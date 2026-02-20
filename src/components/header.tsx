import { Link } from "react-router";
import "./componentStyles/Header.css"

interface IProps{
  CloseModal: () => void
}
 
const Header = ({CloseModal}: IProps) => {
  return (
    <header className="Header">
      <Link className={"LinkS"} to={".."}>
        <div className="HeaderLeft">
          <h2>Note App</h2>
          <p>Create notes here!</p>
        </div>
      </Link>

      <Link to={"/create-notes"} className="CreateBtn" onClick={() => CloseModal()}>+ Create</Link>
    </header>
  );
};

export default Header;