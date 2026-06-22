import Header from "../components/Header";
import Footer from "../components/Footer";
import CodeExecutorPage from "../components/CodeExecutor";

export default function Executor() {
  return (
    <div className="page-shell">
      <main className="page-main">
        <CodeExecutorPage onExecute={null} />
      </main>

      {/* <Footer /> */}
    </div>
  );
}
