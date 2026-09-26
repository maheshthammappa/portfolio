import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { apiRequest } from '../api';

export default function NotesHome() {
  const [nodes, setNodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiRequest('/api/nodes')
      .then(setNodes)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-8 text-indigo-600">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-light mb-8 text-gray-900">Notes</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {nodes.map(node => (
          <Link
            key={node.id}
            to={`/notes/${node.slug}`}
            className="block p-6 border border-gray-200 hover:border-indigo-500 hover:shadow-sm transition-all"
          >
            <h2 className="text-xl font-medium text-indigo-700">{node.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
