import "./styles/Footer.scss";

export default function Footer() {
  return (
    <footer className="pb-footer">
      <div className="pb-footer-inner">
        © {new Date().getFullYear()} <a href="https://tortoisecommunity.org/join">Tortoise Programming Community</a> | Powered by{" "}
        <a href="https://github.com/Ryuga/Hermes">Hermes Engine</a>
      </div>
    </footer>
  );
}
