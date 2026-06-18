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
  const [icon, setIcon] = useState("fa-python");
  const starter = "";

  const languages = [
    { label: "Python", value: "python", icon: "fa-python" },
    { label: "JavaScript", value: "javascript", icon: "fa-js" },
    { label: "Java", value: "java", icon: "fa-java" },
  ];

  const headerLinks = [
    { label: "Home", url: "https://tortoisecommunity.org" },
    { label: "Github", url: "https://github.com/Tortoise-Community" },
    { label: "Support", url: "https://join.tortoisecommunity.org" },
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
        fontFamily: "'JetBrains Mono', monospace",
        lineHeight: 22,
      });

      editorRef.current = editor;
      editor.focus();
    });

    return () => editorRef.current?.dispose();
  }, []);

  useEffect(() => {
    if (!editorRef.current || !window.monaco) return;
    window.monaco.editor.setModelLanguage(
      editorRef.current.getModel(),
      language === "cpp" ? "cpp" : language,
    );
  }, [language]);

  async function executeCodeAPI({ language, code }) {
    const res = await fetch(EXEC_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ language, code }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    if (res.status == 522) {
      return { ok: false, text: "Engine offline. Please try again later." };
    }
    const data = await res.json();
    if (data.code === 0) return { ok: true, text: data.output ?? "" };
    return {
      ok: false,
      text: data.std_log || data.output || "Execution failed",
    };
  }

  async function handleExecute() {
    const code = editorRef.current?.getValue() || "";
    if (!code.trim() || code === starter) {
      setError("Input buffer is empty.");
      return;
    }
    setIsRunning(true);
    setError("");
    setOutput("");

    try {
      const result = await executeCodeAPI({ language, code });
      if (result.ok) setOutput(result.text);
      else setError(result.text);
    } catch (err) {
      setError(err.message || "Execution engine offline.");
    } finally {
      setIsRunning(false);
    }
  }

  return (
    <div className="labs-executor-page">
      <div className="executor-inner">
        <div className="workspace-toolbar">
          <div className="toolbar-left">
            <div className="engine-badge">
              <i className="fa-solid fa-terminal fa-xl me-2"></i>
              <span>Code Engine</span>
            </div>
            <nav className="toolbar-nav d-none d-md-flex">
              {headerLinks.map((link) => (
                <a key={link.label} href={link.url} className="toolbar-link">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="toolbar-right">
            <select
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value);
                const lang = languages.find((l) => l.value === e.target.value);
                setIcon(lang.icon);
              }}
              className="labs-select"
            >
              {languages.map((l) => (
                <option key={l.value} value={l.value}>
                  {l.label}
                </option>
              ))}
            </select>

            <button
              className="labs-run-btn"
              onClick={handleExecute}
              disabled={isRunning}
            >
              {isRunning ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" />{" "}
                  Running
                </>
              ) : (
                <>
                  <i className="fas fa-play me-2" /> Execute
                </>
              )}
            </button>
          </div>
        </div>

        <div className="editor-window">
          <div className="window-header">
            <div className="dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="file-name">
              <i className={`lang-icon fa-brands ${icon} fa-xl me-2`}></i>
              <button
                className="labs-run-btn-sm"
                onClick={handleExecute}
                disabled={isRunning}
              >
                {isRunning ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" />{" "}
                    Running
                  </>
                ) : (
                  <>
                    <i className="fas fa-play me-2" /> Execute
                  </>
                )}
              </button>
            </div>
          </div>
          <div ref={containerRef} className="monaco-container" />
        </div>

        <div className="console-wrapper">
          <div className="console-header">
            <span>Output</span>
            {isRunning && (
              <span className="pulse-indicator">Processing...</span>
            )}
          </div>
          <div className={`console-body ${error ? "has-error" : ""}`}>
            {error || output || ""}
          </div>
        </div>
      </div>
    </div>
  );
}
