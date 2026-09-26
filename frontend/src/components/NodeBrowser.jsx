import { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { apiRequest } from '../api';

function getNextType(depth) {
  if (depth === 0) return 'TECHNOLOGY';
  if (depth === 1) return 'TOPIC';
  if (depth === 2) return 'SUBTOPIC';
  return 'CONTENT';
}

function AdminNodeForm({ initialData, parentId, depth, onSuccess, onCancel }) {
  const [name, setName] = useState(initialData?.name || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [slug, setSlug] = useState(initialData?.slug || '');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const type = initialData?.type || getNextType(depth);
      const payload = { name, content, parentId, type };
      if (slug.trim()) payload.slug = slug.trim();
      
      if (initialData?.id) {
        await apiRequest(`/api/nodes/${initialData.id}`, {
          method: 'PUT',
          body: JSON.stringify(payload)
        });
      } else {
        await apiRequest('/api/nodes', {
          method: 'POST',
          body: JSON.stringify(payload)
        });
      }
      onSuccess();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border border-gray-200 p-6 bg-gray-50 mb-6 rounded">
      <h3 className="text-lg font-medium mb-4 text-gray-800">{initialData ? 'Edit Node' : 'Add Node'}</h3>
      {error && <div className="text-red-500 mb-4 text-sm">{error}</div>}
      <div className="mb-4">
        <label className="block text-sm text-gray-700 mb-1">Name</label>
        <input required value={name} onChange={e=>setName(e.target.value)} className="w-full border border-gray-300 p-2 outline-none focus:border-indigo-500 rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-sm text-gray-700 mb-1">Slug (optional)</label>
        <input value={slug} onChange={e=>setSlug(e.target.value)} className="w-full border border-gray-300 p-2 outline-none focus:border-indigo-500 rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-sm text-gray-700 mb-1">Content (Markdown)</label>
        <textarea rows={8} value={content} onChange={e=>setContent(e.target.value)} className="w-full border border-gray-300 p-2 outline-none focus:border-indigo-500 font-mono text-sm rounded" />
      </div>
      <div className="flex gap-4">
        <button disabled={submitting} type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">{submitting ? 'Saving...' : 'Save'}</button>
        <button disabled={submitting} type="button" onClick={onCancel} className="text-gray-600 px-4 py-2 rounded hover:bg-gray-200 transition-colors">Cancel</button>
      </div>
    </form>
  );
}

export default function NodeBrowser({ basePath, isAdmin }) {
  const location = useLocation();
  const navigate = useNavigate();
  // Decode path elements to handle URL encoded slugs
  const pathParams = location.pathname.replace(basePath, '').split('/').filter(Boolean).map(decodeURIComponent);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [siblings, setSiblings] = useState([]);
  const [currentNode, setCurrentNode] = useState(null);
  const [children, setChildren] = useState([]);
  const [parentPath, setParentPath] = useState(basePath);

  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    let isCancelled = false;

    async function loadData() {
      try {
        setLoading(true);
        setError(null);
        setIsEditing(false);
        setIsAdding(false);

        let currentParentId = null;
        let resolvedNode = null;
        let currentLevelSiblings = [];

        if (pathParams.length === 0) {
          currentLevelSiblings = await apiRequest('/api/nodes');
        } else {
          for (let i = 0; i < pathParams.length; i++) {
            const slug = pathParams[i];
            const siblingsFetch = await apiRequest(currentParentId ? `/api/nodes?parentId=${currentParentId}` : '/api/nodes');
            const match = siblingsFetch.find(n => n.slug === slug);
            if (!match) throw new Error(`Node not found: ${slug}`);
            
            if (i === pathParams.length - 1) {
              resolvedNode = match;
              currentLevelSiblings = siblingsFetch;
            }
            currentParentId = match.id;
          }
        }

        if (isCancelled) return;

        setSiblings(currentLevelSiblings.sort((a, b) => a.displayOrder - b.displayOrder));
        
        let nodeDetails = null;
        let nodeChildren = [];
        if (resolvedNode) {
          nodeDetails = await apiRequest(`/api/nodes/${resolvedNode.id}`);
          nodeChildren = await apiRequest(`/api/nodes?parentId=${resolvedNode.id}`);
        }
        
        if (isCancelled) return;

        setCurrentNode(nodeDetails);
        setChildren(nodeChildren.sort((a, b) => a.displayOrder - b.displayOrder));
        
        const parentSlugs = pathParams.slice(0, -1);
        setParentPath(basePath + (parentSlugs.length > 0 ? '/' + parentSlugs.join('/') : ''));

      } catch (err) {
        if (!isCancelled) setError(err.message);
      } finally {
        if (!isCancelled) setLoading(false);
      }
    }

    loadData();

    return () => {
      isCancelled = true;
    };
  }, [location.pathname, basePath, reloadKey]);

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this node?')) return;
    try {
      await apiRequest(`/api/nodes/${currentNode.id}`, { method: 'DELETE' });
      navigate(parentPath);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/admin/login');
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white text-gray-900">
      {/* Sidebar */}
      <aside className={`md:w-72 border-r border-gray-100 p-6 md:p-8 ${currentNode ? 'hidden md:block' : 'block md:block'} bg-gray-50/50`}>
        {isAdmin && (
          <div className="mb-8 flex justify-between items-center">
            <span className="font-semibold text-indigo-700 tracking-wide">ADMIN</span>
            <button onClick={handleLogout} className="text-xs font-medium text-gray-500 hover:text-gray-800">Logout</button>
          </div>
        )}
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
          {pathParams.length === 0 ? 'Root Level' : 'Siblings'}
        </h3>
        <ul className="space-y-1">
          {siblings.map(sib => (
            <li key={sib.id}>
              <Link
                to={`${parentPath}/${sib.slug}`}
                className={`block px-3 py-2 -mx-3 rounded-md transition-colors ${currentNode?.id === sib.id ? 'bg-indigo-50 text-indigo-700 font-medium' : 'text-gray-600 hover:bg-white hover:text-indigo-600'}`}
              >
                {sib.name}
              </Link>
            </li>
          ))}
        </ul>
        {isAdmin && pathParams.length === 0 && (
          <div className="mt-6 border-t border-gray-200 pt-4">
             <button onClick={() => setIsAdding(true)} className="text-sm text-indigo-600 font-medium hover:text-indigo-800 transition-colors">+ Add Root Node</button>
          </div>
        )}
      </aside>

      {/* Main Panel */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto">
        {currentNode && (
          <Link to={parentPath} className="md:hidden inline-flex items-center text-sm text-indigo-600 font-medium mb-8 hover:text-indigo-800">
            <span className="mr-1">←</span> Back
          </Link>
        )}

        {loading ? (
          <div className="text-indigo-600 animate-pulse">Loading...</div>
        ) : error ? (
          <div className="text-red-500 bg-red-50 p-4 rounded-md border border-red-100">Error: {error}</div>
        ) : currentNode ? (
          <div className="max-w-3xl">
             {isAdmin && (
               <div className="mb-8 flex gap-4 border-b border-gray-100 pb-4">
                 <button onClick={() => setIsEditing(!isEditing)} className="text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors">{isEditing ? 'Cancel Edit' : 'Edit'}</button>
                 <button onClick={handleDelete} className="text-sm font-medium text-gray-500 hover:text-red-600 transition-colors">Delete</button>
               </div>
             )}
             
             {isEditing ? (
                <AdminNodeForm 
                  initialData={currentNode} 
                  parentId={currentNode.parentId}
                  depth={pathParams.length - 1}
                  onSuccess={() => { setIsEditing(false); setReloadKey(k=>k+1); }}
                  onCancel={() => setIsEditing(false)}
                />
             ) : (
                <>
                  <h1 className="text-4xl font-light text-gray-900 mb-8 tracking-tight">{currentNode.name}</h1>
                  {currentNode.content && (
                    <div className="prose prose-indigo max-w-none text-gray-800 whitespace-pre-wrap mb-16 leading-relaxed">
                      {currentNode.content}
                    </div>
                  )}
                </>
             )}
             
             {/* Children section */}
             {currentNode.type !== 'CONTENT' && !isEditing && (
               <div className="mt-12">
                 <h3 className="text-lg font-medium text-gray-900 mb-6 border-b border-gray-100 pb-2">Contents</h3>
                 {children.length > 0 ? (
                   <ul className="space-y-2">
                     {children.map(child => (
                       <li key={child.id}>
                         <Link to={`${location.pathname === '/' ? '' : location.pathname}/${child.slug}`} className="group flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                           <span className="text-indigo-400 mr-3 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                           <span className="text-lg">{child.name}</span>
                         </Link>
                       </li>
                     ))}
                   </ul>
                 ) : (
                   <p className="text-gray-400 italic">No contents yet.</p>
                 )}
                 
                 {isAdmin && (
                    <div className="mt-8">
                      {isAdding ? (
                         <AdminNodeForm 
                           parentId={currentNode.id}
                           depth={pathParams.length}
                           onSuccess={() => { setIsAdding(false); setReloadKey(k=>k+1); }}
                           onCancel={() => setIsAdding(false)}
                         />
                      ) : (
                         <button onClick={() => setIsAdding(true)} className="text-sm bg-indigo-50 text-indigo-700 px-4 py-2 rounded hover:bg-indigo-100 transition-colors font-medium">+ Add Child</button>
                      )}
                    </div>
                 )}
               </div>
             )}
          </div>
        ) : (
          <div className="max-w-3xl">
            {isAdmin && isAdding ? (
              <AdminNodeForm 
                parentId={null}
                depth={0}
                onSuccess={() => { setIsAdding(false); setReloadKey(k=>k+1); }}
                onCancel={() => setIsAdding(false)}
              />
            ) : (
              <div className="text-center md:text-left mt-20">
                <h1 className="text-3xl font-light text-gray-400 tracking-tight">Select an item from the sidebar</h1>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
