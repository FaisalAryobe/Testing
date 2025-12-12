import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export const ConsultationForm: React.FC<{ onSuccess: () => void }> = ({ onSuccess }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setTimeout(onSuccess, 2000);
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <h4 className="text-xl font-bold text-white">Request Sent!</h4>
        <p className="text-slate-400">Our enterprise team will contact you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1">Work Email</label>
        <input
          required
          type="email"
          placeholder="you@company.com"
          className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1">Company Name</label>
        <input
          required
          type="text"
          placeholder="Acme Corp"
          className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1">Infrastructure Needs</label>
        <select className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all">
          <option>General Migration</option>
          <option>High Performance Compute</option>
          <option>AI/ML Workloads</option>
          <option>Storage Solutions</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1">Message (Optional)</label>
        <textarea
          rows={3}
          className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-brand-600 hover:bg-brand-500 text-white font-semibold py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-brand-500/25 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
      >
        {status === 'submitting' ? 'Submitting...' : 'Request Consultation'}
      </button>
    </form>
  );
};