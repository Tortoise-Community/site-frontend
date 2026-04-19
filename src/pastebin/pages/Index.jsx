import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TextEditor from "../components/TextEditor";
import CodeExecutorPage from "../components/CodeExecutor";

export default function Index() {
  const [saved, setSaved] = useState(null);

  function handleSave({ code, language }) {
    setSaved({ code, language });
  }

  return (
    <div className="page-shell">
      <Header />
      <main className="page-main">
        <TextEditor onSave={handleSave} saved={saved} />
      </main>
      <Footer />
    </div>
  );
}
