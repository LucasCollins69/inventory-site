const { useMemo, useState } = React;

function App() {
  const [content, setContent] = useState("");

  const statusLabel = useMemo(() => {
    if (!content.trim()) {
      return "Ready";
    }
    if (content.length < 120) {
      return "Drafting";
    }
    return "Focused";
  }, [content]);

  return (
    <div className="app">
      <header className="app__header">
        <span className="app__eyebrow">Inventory Site</span>
        <h1>Text Editor</h1>
        <p className="app__subtitle">
          Capture inventory notes, descriptions, or quick drafts in one place.
        </p>
      </header>

      <main className="editor">
        <label className="editor__label" htmlFor="editor-field">
          Editor
        </label>
        <textarea
          id="editor-field"
          className="editor__field"
          placeholder="Start typing here..."
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <div className="editor__meta">
          <span>{content.length} characters</span>
          <span>{statusLabel}</span>
        </div>
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
