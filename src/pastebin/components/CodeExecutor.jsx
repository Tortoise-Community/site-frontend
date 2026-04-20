import React, { useEffect, useRef, useState } from "react";
import "../components/styles/CodeRunner.scss";

export default function CodeExecutorPage({ onExecute }) {
  const containerRef = useRef(null);
  const editorRef = useRef(null);
  const EXEC_API = import.meta.env.VITE_EXECUTE_API;

  const [language, setLanguage] = useState("python");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const starter = "// Type your code here...\n";

  const languages = [
    { label: "Python", value: "python" },
    { label: "JavaScript", value: "javascript" },
    { label: "Java", value: "java" },
  ];

  // Configure your header links here
  const headerLinks = [
    { label: "Home", url: "https://tortoisecommunity.org" },
    { label: "Discord Bot", url: "https://runtime-bot.tortoisecommunity.org" },
    { label: "Github", url: "https://tortoisecommunity.org/github" },
    { label: "Support", url: "https://tortoisecommunity.org/join" },
  ];

  useEffect(() => {
    const loader = window.require;
    if (!loader || !containerRef.current) return;

    loader.config({
      paths: { vs: "https://unpkg.com/monaco-editor@0.45.0/min/vs" },
    });

    loader(["vs/editor/editor.main"], () => {
      const editor = window.monaco.editor.create(containerRef.current, {
        value: starter,
        language,
        theme: "vs-dark",
        fontSize: 14,
        automaticLayout: true,
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
      });

      editorRef.current = editor;

      const focusSub = editor.onDidFocusEditorText(() => {
        if (editor.getValue() === starter) {
          editor.setValue("");
        }
        focusSub.dispose();
      });
    });

    return () => editorRef.current?.dispose();
  }, []);

  useEffect(() => {
    if (!editorRef.current || !window.monaco) return;
    window.monaco.editor.setModelLanguage(
      editorRef.current.getModel(),
      language === "cpp" ? "cpp" : language
    );
  }, [language]);

  async function executeCodeAPI({ language, code }) {
    const res = await fetch(EXEC_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ language, code }),
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();

    if (data.code === 0) {
      return { ok: true, text: data.output ?? "" };
    }

    return {
      ok: false,
      text: data.std_log || data.output || "Execution failed",
    };
  }

  async function handleExecute() {
    const code = editorRef.current?.getValue() || "";

    if (!code.trim() || code === starter) {
      setError("Code is empty");
      return;
    }

    setIsRunning(true);
    setError("");
    setOutput("");

    try {
      const result = await executeCodeAPI({ language, code });
      if (result.ok) {
        setOutput(result.text);
      } else {
        setError(result.text);
      }
    } catch (err) {
      setError(err.message || "Execution failed");
    } finally {
      setIsRunning(false);
    }
  }

  return (
    <div className="executor-page">
      <div className="executor-container">
        <div className="executor-toolbar">
          <div className="executor-header-left">
            <div className="executor-title">Code Execution Tool</div>
            <nav className="executor-nav">
              {headerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className="executor-nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="executor-controls">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="executor-select"
            >
              {languages.map((l) => (
                <option key={l.value} value={l.value}>
                  {l.label}
                </option>
              ))}
            </select>

            <button
              className="executor-run-btn"
              onClick={handleExecute}
              disabled={isRunning}
            >
              {isRunning ? "Running…" : "Run"}
            </button>
          </div>
        </div>

        <div className="executor-editor">
          <div ref={containerRef} style={{ height: 480 }} />
        </div>

        {(error || output) && (
          <div className="executor-output">
            <div className="executor-output-header">Output</div>
            <pre className={`executor-output-body ${error ? "is-error" : ""}`}>
              {error ? error : output || ""}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
