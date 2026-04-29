import { Menu, Plane, ShieldCheck } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Notifications } from './Notifications';

const navItems = [
  ['/', 'Dashboard'],
  ['/crew', 'Crew Management'],
  ['/roster', 'Roster View'],
  ['/duty-hours', 'Duty Hours'],
  ['/leave', 'Leave'],
  ['/conflicts', 'Conflicts'],
  ['/assignments', 'Assignments'],
  ['/compliance', 'Compliance'],
  ['/admin', 'Admin']
];

export function Layout({ collapsed, setCollapsed, children }) {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100'>
      <div className='flex gap-4 p-4'>
        <aside className={`rounded-2xl border border-slate-700/70 bg-slate-900/70 p-4 backdrop-blur-xl transition-all ${collapsed ? 'w-20' : 'w-72'}`}>
          <button className='mb-4 rounded-xl p-2 hover:bg-slate-800' onClick={() => setCollapsed((v) => !v)}><Menu size={18} /></button>
          <div className='mb-6 flex items-center gap-2'><Plane className='text-cyan-300' />{!collapsed && <h2 className='font-bold'>SkyOps Command</h2>}</div>
          <nav className='space-y-1'>
            {navItems.map(([path, label]) => (
              <NavLink key={path} to={path} className={({ isActive }) => `block rounded-xl px-3 py-2 text-sm ${isActive ? 'bg-cyan-500/20 text-cyan-300' : 'hover:bg-slate-800'}`}>
                {collapsed ? label[0] : label}
              </NavLink>
            ))}
          </nav>
        </aside>
        <div className='flex-1'>
          <header className='mb-4 flex items-center justify-between rounded-2xl border border-slate-700/70 bg-slate-900/70 px-4 py-3 backdrop-blur-xl'>
            <div>
              <p className='text-xs uppercase tracking-wide text-cyan-300'>Airline Operations</p>
              <h1 className='text-lg font-semibold'>Crew Scheduling Dashboard</h1>
            </div>
            <div className='flex items-center gap-4'>
              <ShieldCheck className='text-emerald-300' size={18} />
              <Notifications />
              <img alt='Profile' className='h-9 w-9 rounded-full ring-2 ring-cyan-400/40' src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&q=80' />
            </div>
          </header>
          {children}
        </div>
      </div>
    </div>
  );
}
