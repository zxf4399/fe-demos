/*
 * @Date: 2021-10-22 07:18:26
 * @LastEditTime: 2021-11-20 11:29:07
 */
import { useState } from "react";
import Editor, { EditorProps } from "@monaco-editor/react";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

function MonacoReact() {
  const [height, setHeight] = useState<number>();

  const handleEditorDidMount: EditorProps["onMount"] = (editor) => {
    const lineCount = editor.getModel()?.getLineCount();
    const lineHeight = editor.getOption(monaco.editor.EditorOption.lineHeight);

    setHeight(lineCount! * lineHeight);

    editor.layout();
  };

  return (
    <>
      <Editor
        defaultLanguage="javascript"
        defaultValue={`function test() {
          console.log(123)
      }
      
      function test() {
          console.log(123)
      }
      
      function test() {
          console.log(123)
      }
      
      function test() {
          console.log(123)
      }
      
      function test() {
          console.log(123)
      }
      
      function test() {
          console.log(123)
      }
      
      function test() {
          console.log(123)
      }
      
      function test() {
          console.log(123)
      }
      
      function test() {
          console.log(123)
      }
      
      function test() {
          console.log(123)
      }
      
      function test() {
          console.log(123)
      }

      function test() {
        console.log(123)
    }
    
    function test() {
        console.log(123)
    }
    
    function test() {
        console.log(123)
    }
    
    function test() {
        console.log(123)
    }
    
    function test() {
        console.log(123)
    }
    
    function test() {
        console.log(123)
    }
    
    function test() {
        console.log(123)
    }
    
    function test() {
        console.log(123)
    }
    
    function test() {
        console.log(123)
    }
    
    function test() {
        console.log(123)
    }

    function test() {
      console.log(123)
  }
  
  function test() {
      console.log(123)
  }
  
  function test() {
      console.log(123)
  }
  
  function test() {
      console.log(123)
  }
  
  function test() {
      console.log(123)
  }
  
  function test() {
      console.log(123)
  }
  
  function test() {
      console.log(123)
  }
  
  function test() {
      console.log(123)
  }
  
  function test() {
      console.log(123)
  }
  
  function test() {
      console.log(123)
  }

  function test() {
    console.log(123)
}

function test() {
    console.log(123)
}

function test() {
    console.log(123)
}

function test() {
    console.log(123)
}

function test() {
    console.log(123)
}

function test() {
    console.log(123)
}

function test() {
    console.log(123)
}

function test() {
    console.log(123)
}

function test() {
    console.log(123)
}

function test() {
    console.log(123)
}

function test() {
  console.log(123)
}

function test() {
  console.log(123)
}

function test() {
  console.log(123)
}

function test() {
  console.log(123)
}

function test() {
  console.log(123)
}

function test() {
  console.log(123)
}

function test() {
  console.log(123)
}

function test() {
  console.log(123)
}

function test() {
  console.log(123)
}

function test() {
  console.log(123)
}

function test() {
  console.log(123)
}

function test() {
  console.log(123)
}

function test() {
  console.log(123)
}

function test() {
  console.log(123)
}

function test() {
  console.log(123)
}

function test() {
  console.log(123)
}

function test() {
  console.log(123)
}

function test() {
  console.log(123)
}

function test() {
  console.log(123)
}

function test() {
  console.log(123)
}
      
      function test() {
          console.log(123)
      }`}
        height={height}
        onMount={handleEditorDidMount}
        options={{
          scrollBeyondLastLine: false,
          scrollbar: {
            alwaysConsumeMouseWheel: false,
          },
          minimap: {
            enabled: false,
          },
        }}
      />
    </>
  );
}

export default MonacoReact;
