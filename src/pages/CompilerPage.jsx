// src/pages/CompilerPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import axios from 'axios';

const languageMap = {
  python: { name: 'python', version: '3.10.0', default: `print("Hello, World!")`, icon: '🐍' },
  java: { name: 'java', version: '15.0.2', default: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}`, icon: '☕' },
  php: { name: 'php', version: '8.2.3', default: `<?php\necho "Hello, World!";\n?>`, icon: '🐘' },
  c: { name: 'c', version: '10.2.0', default: `#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}`, icon: '⚙️' },
  cpp: { name: 'cpp', version: '10.2.0', default: `#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}`, icon: '⚡' },
  javascript: { name: 'javascript', version: '18.15.0', default: `console.log("Hello, World!");`, icon: '🟨' },
  typescript: { name: 'typescript', version: '5.0.3', default: `console.log("Hello, World!");`, icon: '🔷' },
  r: { name: 'r', version: '4.2.0', default: `print("Hello, World!")`, icon: '📊' },
  swift: { name: 'swift', version: '5.8', default: `print("Hello, World!")`, icon: '🦅' },
  kotlin: { name: 'kotlin', version: '1.8.0', default: `fun main() {\n    println("Hello, World!")\n}`, icon: '📱' },
  go: { name: 'go', version: '1.20.3', default: `package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, World!")\n}`, icon: '🐹' },
  csharp: { name: 'csharp', version: '6.0.0', default: `using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("Hello, World!");\n    }\n}`, icon: '🎯' },
  perl: { name: 'perl', version: '5.36.0', default: `print "Hello, World!\\n";`, icon: '🐪' },
  groovy: { name: 'groovy', version: '4.0.6', default: `println "Hello, World!"`, icon: '🎷' },
  html: { name: 'html', version: 'latest', default: `<!DOCTYPE html>\n<html>\n<head><title>Hello</title></head>\n<body>\n<h1>Hello, World!</h1>\n</body>\n</html>`, icon: '🌐' },
  webeditor: { name: 'html', version: 'latest', default: `<!DOCTYPE html>\n<html>\n<head>\n<style>\nbody { font-family: Arial; }\nh1 { color: blue; }\n</style>\n</head>\n<body>\n<h1>Hello, World!</h1>\n<p>This is HTML, CSS & JS.</p>\n<script>\nconsole.log("Hello from JS");\n</script>\n</body>\n</html>`, icon: '🎨' }
};

const CompilerPage = () => {
  const { language } = useParams();
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

   useEffect(() => {
    if (language && languageMap[language]) {
      // Check if there's stored code from a Run button click
      const storedCode = sessionStorage.getItem('cCodeToRun');
      if (storedCode && language === 'c') {
        // Use the stored code (only for C compiler)
        setCode(storedCode);
        sessionStorage.removeItem('cCodeToRun'); // Clear it after use
      } else {
        // Use the default code for this language
        setCode(languageMap[language].default);
      }
      setOutput('');
    } else if (language) {
      setOutput('Compiler not found for ' + language);
    }
  }, [language]);

  
  const handleRunCode = async () => {
    if (!languageMap[language]) return;

    setLoading(true);
    setOutput('Running...');

    try {
      const response = await axios.post('/.netlify/functions/execute', {
        language: languageMap[language].name,
        version: languageMap[language].version,
        code: code
      });

      if (response.data && response.data.run && response.data.run.output) {
        setOutput(response.data.run.output);
      } else if (response.data.error) {
        setOutput(`Error: ${response.data.error}`);
      } else {
        setOutput('No output received');
      }
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!languageMap[language]) {
    return (
      <div className="compiler-error">
        <h2>⚠️ Compiler not found for "{language}"</h2>
        <p>Available: {Object.keys(languageMap).join(', ')}</p>
      </div>
    );
  }

  const langInfo = languageMap[language];

  return (
    <div className="compiler-page">
      <div className="compiler-header">
        <h1>
          <span className="compiler-icon">{langInfo.icon}</span>
          <span className="compiler-title">{language.toUpperCase()} Online Compiler</span>
        </h1>
        <button 
          className={`run-button ${loading ? 'loading' : ''}`} 
          onClick={handleRunCode} 
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="spinner"></span> Running...
            </>
          ) : (
            <>▶ Run Code</>
          )}
        </button>
      </div>

      <div className="compiler-editor-section">
        <div className="section-label bold-label">✏️ Code Editor</div>
        <Editor
          height="500px"
          language={language === 'cpp' ? 'cpp' : language === 'csharp' ? 'csharp' : language}
          value={code}
          onChange={(value) => setCode(value || '')}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            fontFamily: 'Fira Code, monospace',
            automaticLayout: true,
            scrollBeyondLastLine: false,
            lineNumbers: 'on',
            renderWhitespace: 'selection',
            tabSize: 2,
          }}
        />
      </div>

      <div className="compiler-output-section">
        <div className="output-header">
          <div className="section-label bold-label">📤 Output</div>
          {output && output !== 'Running...' && !output.startsWith('Error') && (
            <button className="copy-btn" onClick={copyToClipboard}>
              {copied ? '✅ Copied!' : '📋 Copy'}
            </button>
          )}
        </div>
        <pre className="output-content">{output}</pre>
      </div>

      <style>{`
        .compiler-page {
          max-width: 1400px;
          margin: 2rem auto;
          padding: 0 1.5rem;
          font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
        }

        .compiler-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .compiler-header h1 {
          font-size: 1.8rem;
          font-weight: 700;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .compiler-icon {
          font-size: 2rem;
          filter: drop-shadow(0 0 4px rgba(192, 132, 252, 0.5));
        }

        .compiler-title {
          background: linear-gradient(135deg, #e0e0e0, #ffffff);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          text-shadow: 0 1px 2px rgba(0,0,0,0.2);
        }

        @supports not (background-clip: text) {
          .compiler-title {
            color: #ffffff;
            background: none;
          }
        }

        .run-button {
          background: linear-gradient(135deg, #10b981, #059669);
          border: none;
          padding: 0.75rem 2rem;
          border-radius: 2.5rem;
          font-size: 1rem;
          font-weight: 600;
          color: white;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
        }

        .run-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);
        }

        .run-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .run-button.loading {
          background: linear-gradient(135deg, #6b7280, #4b5563);
        }

        .spinner {
          display: inline-block;
          width: 1rem;
          height: 1rem;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 0.6s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .compiler-editor-section,
        .compiler-output-section {
          background: rgba(26, 26, 46, 0.6);
          backdrop-filter: blur(8px);
          border-radius: 1.5rem;
          border: 1px solid rgba(192, 132, 252, 0.2);
          overflow: hidden;
          margin-bottom: 2rem;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        .section-label {
          padding: 0.75rem 1.25rem;
          background: rgba(0, 0, 0, 0.3);
          font-weight: 600;
          font-size: 1rem;
          letter-spacing: 0.5px;
          
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        /* Make Code Editor and Output headings bold */
        .bold-label {
          font-weight: 800;
          background: linear-gradient(135deg, #e0e0e0, #ffffff);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          text-shadow: 0 1px 2px rgba(0,0,0,0.2);
        }

         @supports not (background-clip: text) {
          .bold-label {
            color: #ffffff;
            background: none;
          }
        }

        .output-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-right: 1rem;
        }

        .copy-btn {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 0.3rem 0.8rem;
          border-radius: 2rem;
          font-size: 0.75rem;
          font-weight: 500;
          color: #e0e0e0;
          cursor: pointer;
          transition: all 0.2s;
        }

        .copy-btn:hover {
          background: rgba(192, 132, 252, 0.2);
          border-color: #c084fc;
        }

        .output-content {
          margin: 0;
          padding: 1.25rem;
          background: rgba(0, 0, 0, 0.4);
          color: #d4d4d4;
          font-family: 'Fira Code', 'Cascadia Code', monospace;
          font-size: 0.9rem;
          line-height: 1.5;
          white-space: pre-wrap;
          word-break: break-word;
          min-height: 180px;
          max-height: 400px;
          overflow-y: auto;
          border-radius: 0 0 1.5rem 1.5rem;
        }

        .compiler-error {
          text-align: center;
          padding: 4rem 2rem;
          background: rgba(239, 68, 68, 0.1);
          border-radius: 2rem;
          margin: 2rem;
          color: #f87171;
        }

        @media (max-width: 768px) {
          .compiler-page {
            padding: 0 1rem;
            margin: 1rem auto;
          }
          .compiler-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .compiler-header h1 {
            font-size: 1.4rem;
          }
          .run-button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default CompilerPage;