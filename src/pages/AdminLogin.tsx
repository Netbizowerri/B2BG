import { FormEvent, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Lock, LogIn, Mail } from 'lucide-react';
import { isAdminAuthenticated, loginAdmin } from '../utils/adminAuth';
import { sanitizeEmail } from '../utils/security';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const alreadySignedIn = isAdminAuthenticated();

  if (alreadySignedIn) {
    return <Navigate to="/admin/forms" replace />;
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    const safeEmail = sanitizeEmail(email);
    if (!safeEmail || !password) {
      setError('Enter valid admin credentials.');
      return;
    }

    const loggedIn = loginAdmin(safeEmail, password);
    if (!loggedIn) {
      setError('Invalid email or password.');
      return;
    }

    navigate('/admin/forms', { replace: true });
  };

  return (
    <section className="min-h-screen bg-neutral-bg pt-28 pb-16 px-6">
      <div className="max-w-md mx-auto bg-white border border-gray-100 rounded-3xl shadow-xl p-8 md:p-10">
        <h1 className="text-2xl font-black text-primary uppercase tracking-tight">Admin Login</h1>
        <p className="text-sm text-gray-500 mt-2">Access only website form submissions.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="admin-email" className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Admin Email
            </label>
            <div className="relative">
              <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                id="admin-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                placeholder="admin@b2bg.ng"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="admin-password" className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Password
            </label>
            <div className="relative">
              <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                id="admin-password"
                type="password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                placeholder="Enter password"
              />
            </div>
          </div>

          <button type="submit" className="w-full btn-primary py-3 flex items-center justify-center gap-2">
            <LogIn size={18} />
            Sign In
          </button>

          {error && <p className="text-sm font-medium text-red-700 bg-red-100 rounded-lg px-4 py-3">{error}</p>}
        </form>
      </div>
    </section>
  );
}
