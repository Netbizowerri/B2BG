import { useMemo, useState } from 'react';
import { CheckCircle2, LogOut, Mail, RefreshCw, Trash2, Wallet, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { deleteFormSubmission, getAllFormSubmissions, setFormSubmissionStatus, type ManagedFormType } from '../utils/formStore';
import { logoutAdmin } from '../utils/adminAuth';

const formLabels: Record<ManagedFormType, string> = {
  contact: 'Contact',
  donation: 'Donation',
  volunteer: 'Volunteer',
};

const formIcons: Record<ManagedFormType, typeof Mail> = {
  contact: Mail,
  donation: Wallet,
  volunteer: Users,
};

export default function AdminForms() {
  const navigate = useNavigate();
  const [refreshKey, setRefreshKey] = useState(0);

  const submissions = useMemo(() => getAllFormSubmissions(), [refreshKey]);
  const newCount = submissions.filter((record) => record.status === 'new').length;

  const handleRefresh = () => setRefreshKey((current) => current + 1);

  const handleDelete = (id: string) => {
    deleteFormSubmission(id);
    handleRefresh();
  };

  const handleToggleStatus = (id: string, status: 'new' | 'resolved') => {
    setFormSubmissionStatus(id, status === 'new' ? 'resolved' : 'new');
    handleRefresh();
  };

  const handleLogout = () => {
    logoutAdmin();
    navigate('/adminlogin', { replace: true });
  };

  return (
    <section className="min-h-screen bg-neutral-bg pt-28 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-primary uppercase tracking-tight">Form Submissions</h1>
              <p className="text-sm text-gray-500 mt-1">
                Total: {submissions.length} | New: {newCount}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleRefresh}
                className="px-4 py-2 rounded-lg border border-gray-200 text-primary text-sm font-semibold inline-flex items-center gap-2 hover:bg-gray-50"
              >
                <RefreshCw size={16} />
                Refresh
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg border border-gray-200 text-primary text-sm font-semibold inline-flex items-center gap-2 hover:bg-gray-50"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          </div>

          {submissions.length === 0 ? (
            <div className="mt-8 rounded-2xl border border-dashed border-gray-200 p-10 text-center text-gray-500">
              No form submissions yet.
            </div>
          ) : (
            <div className="mt-8 grid gap-4">
              {submissions.map((record) => {
                const Icon = formIcons[record.formType];
                return (
                  <article key={record.id} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                          <Icon size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-bold uppercase tracking-widest text-primary">
                            {formLabels[record.formType]}
                          </p>
                          <p className="text-xs text-gray-500">
                            {new Date(record.submittedAt).toLocaleString('en-NG', {
                              dateStyle: 'medium',
                              timeStyle: 'short',
                            })}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                            record.status === 'new' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'
                          }`}
                        >
                          {record.status}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleToggleStatus(record.id, record.status)}
                          className="px-3 py-1 rounded-lg text-xs font-semibold border border-gray-200 hover:bg-gray-50 inline-flex items-center gap-1"
                        >
                          <CheckCircle2 size={14} />
                          {record.status === 'new' ? 'Mark resolved' : 'Mark new'}
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(record.id)}
                          className="px-3 py-1 rounded-lg text-xs font-semibold border border-red-200 text-red-600 hover:bg-red-50 inline-flex items-center gap-1"
                        >
                          <Trash2 size={14} />
                          Delete
                        </button>
                      </div>
                    </div>

                    <dl className="mt-4 grid gap-3 sm:grid-cols-2">
                      {Object.entries(record.data).map(([key, value]) => (
                        <div key={key} className="bg-gray-50 rounded-xl p-3">
                          <dt className="text-[11px] font-bold uppercase tracking-widest text-gray-400">{key}</dt>
                          <dd className="text-sm text-primary mt-1 break-words">{String(value)}</dd>
                        </div>
                      ))}
                    </dl>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
