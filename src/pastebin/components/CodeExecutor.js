import React, { useEffect, useRef, useState } from "react";
import "../components/styles/CodeRunner.scss";

export default function CodeExecutorPage({ onExecute }) {
  const containerRef = useRef(null);
  const editorRef = useRef(null);
  const EXEC_API = process.env.REACT_APP_EXECUTE_API;

  const [language, setLanguage] = useState("javascript");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const languages = [
    { label: "JavaScript", value: "javascript" },
    { label: "Python", value: "python" },
  ];

  useEffect(() => {
    const loader = window.require;
    if (!loader || !containerRef.current) return;

    loader.config({
      paths: { vs: "https://unpkg.com/monaco-editor@0.45.0/min/vs" },
    });

    loader(["vs/editor/editor.main"], () => {
      const starter = "// Type your code here...\n";

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

      // ✅ clear on first focus only
      const focusSub = editor.onDidFocusEditorText(() => {
        if (editor.getValue() === starter) {
          editor.setValue("");
        }
        focusSub.dispose(); // run once
      });
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
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language,
        code,
      }),
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    const data = await res.json();

    /*
    response shape:
    {
      code: 0 | non-zero,
      output: "...",
      std_log: "error text"
    }
  */

    if (data.code === 0) {
      return {
        ok: true,
        text: data.output ?? "",
      };
    }

    return {
      ok: false,
      text: data.std_log || data.output || "Execution failed",
    };
  }

  async function handleExecute() {
    const code = editorRef.current?.getValue() || "";

    if (!code.trim()) {
      setError("Code is empty");
      return;
    }

    setIsRunning(true);
    setError("");
    setOutput("");

    try {
      const result = await executeCodeAPI({
        language,
        code,
      });

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

  async function handleExecute() {
    const code = editorRef.current?.getValue() || "";

    if (!code.trim()) {
      setError("Code is empty");
      return;
    }

    setIsRunning(true);
    setError("");
    setOutput("");

    try {
      const result = await executeCodeAPI({
        language,
        code,
      });

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
          <div className="executor-title">Code Execution</div>

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

        <div className="executor-output">
          <div className="executor-output-header">Output</div>
          <pre className={`executor-output-body ${error ? "is-error" : ""}`}>
            {error ? error : output || "// program output"}
          </pre>
        </div>
      </div>
    </div>
  );
}
