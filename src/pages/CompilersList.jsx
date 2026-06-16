// src/pages/CompilersList.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Header from '../components/Header';
import './CompilersList.css'; // optional, you can add styles later

const compilerList = [
  { name: 'Python', path: '/compiler/python', icon: '🐍' },
  { name: 'Java', path: '/compiler/java', icon: '☕' },
  { name: 'PHP', path: '/compiler/php', icon: '🐘' },
  { name: 'C', path: '/compiler/c', icon: '⚙️' },
  { name: 'C++', path: '/compiler/cpp', icon: '⚡' },
  { name: 'JavaScript', path: '/compiler/javascript', icon: '🟨' },
  { name: 'TypeScript', path: '/compiler/typescript', icon: '🔷' },
  { name: 'R', path: '/compiler/r', icon: '📊' },
  { name: 'Swift', path: '/compiler/swift', icon: '🦅' },
  { name: 'Kotlin', path: '/compiler/kotlin', icon: '📱' },
  { name: 'Go', path: '/compiler/go', icon: '🐹' },
  { name: 'C#', path: '/compiler/csharp', icon: '🎯' },
  { name: 'Perl', path: '/compiler/perl', icon: '🐪' },
  { name: 'Groovy', path: '/compiler/groovy', icon: '🎷' }
];

const editorList = [
  { name: 'HTML Editor', path: '/compiler/html', icon: '🌐' },
  { name: 'HTML, CSS & JS Editor', path: '/compiler/webeditor', icon: '🎨' }
];

const CompilersList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      {/* <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
      <div className="compilers-page-container">
        <h1 className="page-title">Online Compilers</h1>
        <div className="compilers-grid">
          {compilerList.map(compiler => (
            <Link key={compiler.path} to={compiler.path} className="compiler-card">
              <div className="compiler-icon">{compiler.icon}</div>
              <div className="compiler-name">{compiler.name}</div>
              <div className="compiler-type">Online Compiler</div>
            </Link>
          ))}
        </div>

        <h2 className="section-title">Online Editors</h2>
        <div className="compilers-grid">
          {editorList.map(editor => (
            <Link key={editor.path} to={editor.path} className="compiler-card">
              <div className="compiler-icon">{editor.icon}</div>
              <div className="compiler-name">{editor.name}</div>
              <div className="compiler-type">Online Editor</div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default CompilersList;