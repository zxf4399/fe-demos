import { useRef } from "react";
import Editor, { EditorProps } from "@monaco-editor/react";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

function MonacoReact() {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>();

  const handleEditorDidMount: EditorProps["onMount"] = (editor) => {
    editorRef.current = editor;
  };

  const showValue = () => {
    console.log(editorRef.current?.getValue());
  };

  return (
    <>
      <button onClick={showValue}>Show value</button>
      <Editor
        defaultLanguage="javascript"
        defaultValue="// some comment"
        height="90vh"
        onMount={handleEditorDidMount}
      />
    </>
  );
}

export default MonacoReact;
