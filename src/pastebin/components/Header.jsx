import "./styles/Header.scss";

export default function Header() {
  return (
    <header className="pb-header">
      <div className="pb-header-inner">
        <div className="pb-left">
          <a href="https://tortoisecommunity.org">
            <img src={""} alt="logo" className="pb-logo-img" />
          </a>
        </div>
      </div>
    </header>
  );
}
