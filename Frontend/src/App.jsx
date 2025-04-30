import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import "./App.css";

function App() {
  const [code, setCode] = useState(``);
  const [review, setReview] = useState(``);
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("vs-light"); 
  useEffect(() => {
    const isDark = document.body.classList.contains("dark");
    setTheme(isDark ? "vs-dark" : "vs-light");
  }, []);

  function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById("theme-icon");
    const isDark = body.classList.toggle("dark");

    setTheme(isDark ? "vs-dark" : "vs-light");

    // Change icon
    themeIcon.classList.toggle("ri-moon-line", !isDark);
    themeIcon.classList.toggle("ri-sun-line", isDark);
  }

  async function reviewCode() {
    if (!code) {
      alert("Please provide some code for review.");
      return;
    }

    setLoading(true);
    setReview("");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}`,
        { code }
      );
      setReview(response.data);
    } catch (error) {
      console.error("Error fetching review:", error);
      setReview("Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  return (
    <>
      <header>
        <h1>
          <i className="ri-brain-2-fill"></i> CodeIQ – AI-Powered Code Reviewer
        </h1>
        <button className="toggle-btn" onClick={toggleTheme}>
          <i id="theme-icon" className="ri-moon-line"></i>
        </button>
      </header>

      <main>
        <div className="panels">
          <div className="panel">
            <h2>
              <i className="ri-code-s-slash-line"></i>&nbsp; Your Code
            </h2>
            <div className="code-editor">
              <Editor
                height="100%"
                defaultLanguage="javascript"
                theme={theme} // Dynamic theme
                value={code}
                onChange={(value) => setCode(value || "")}
                options={{
                  fontSize: 14,
                  minimap: { enabled: false },
                  wordWrap: "on",
                  automaticLayout: true,
                }}
              />
            </div>
          </div>

          <div className="panel">
            <h2>
              <i className="ri-robot-3-line"></i>&nbsp; AI Suggestions
            </h2>
            <div className="response">
              {loading ? (
                <h4 className="response-place-holder">Reviewing, please wait...</h4>
              ) : !review ? (
                <h4 className="response-place-holder">AI feedback will appear here...</h4>
              ) : (
                <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
              )}
            </div>
          </div>
        </div>

        <div className="button-container">
          <button className="submit-btn" onClick={reviewCode}>
            Submit for Review
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
