import "./styles/Header.scss";
import logo from "../../logo.png"; // or png

export default function Header() {
  return (
    <header className="pb-header">
      <div className="pb-header-inner">
        <div className="pb-left">
          <img src={logo} alt="logo" className="pb-logo-img" />
        </div>
      </div>
    </header>
  );
}
