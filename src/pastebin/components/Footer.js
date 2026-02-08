import "./styles/Footer.scss";

export default function Footer() {
  return (
    <footer className="pb-footer">
      <div className="pb-footer-inner">
        © {new Date().getFullYear()} PasteBin
      </div>
    </footer>
  );
}
