export async function executeCCode(code) {
  let stdin = '';
  if (code.includes('scanf')) {
    stdin = prompt('Enter input for the program (separate values by spaces):') || '';
  }
  const res = await fetch('https://emkc.org/api/v2/piston/execute', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      language: 'c',
      version: '10.2.0',
      files: [{ content: code }],
      stdin,
    }),
  });
  const data = await res.json();
  return data.run?.output || data.message || 'Execution failed';
}