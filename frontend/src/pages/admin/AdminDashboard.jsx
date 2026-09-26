import { Navigate } from 'react-router-dom';
import NodeBrowser from '../../components/NodeBrowser';

export default function AdminDashboard() {
  const token = localStorage.getItem('authToken');

  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  return <NodeBrowser basePath="/admin" isAdmin={true} />;
}
