// src/components/CompilersMenu.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const compilerList = [
  { name: 'C', path: '/compiler/c', icon: '⚙️' },
  { name: 'C++', path: '/compiler/cpp', icon: '⚡' },
  { name: 'Java', path: '/compiler/java', icon: '☕' },
  { name: 'Python', path: '/compiler/python', icon: '🐍' },
  { name: 'PHP', path: '/compiler/php', icon: '🐘' },
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

const CompilersMenu = () => {
  return (
    <div className="compilers-menu">
      <div className="compilers-menu-grid">
        {compilerList.map(compiler => (
          <Link key={compiler.path} to={compiler.path} className="compiler-menu-item">
            <div className="compiler-menu-icon">{compiler.icon}</div>
            <div className="compiler-menu-name">{compiler.name}</div>
            <div className="compiler-menu-type">Online Compiler</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CompilersMenu;