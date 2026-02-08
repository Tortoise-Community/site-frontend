import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import "./styles/TextEditor.scss";

export default function TextEditor({ onSave, saved }) {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const codeRef = useRef(null);

  useEffect(() => {
    if (saved && codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [saved]);

  if (saved) {
    return (
      <div className="pb-card">
        <div className="pb-card-header">Saved Paste</div>
        <pre className="pb-code">
          <code ref={codeRef} className={`language-${saved.language}`}>
            {saved.code}
          </code>
        </pre>
      </div>
    );
  }

  return (
    <div className="pb-card">
      <div className="pb-toolbar">
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="cpp">C++</option>
          <option value="java">Java</option>
        </select>

        <button onClick={() => onSave({ code, language })}>Save Paste</button>
      </div>

      <textarea
        className="pb-textarea"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste code here..."
      />
    </div>
  );
}
