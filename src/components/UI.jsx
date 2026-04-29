import { motion } from 'framer-motion';

export function Card({ children, className = '' }) {
  return (
    <motion.section
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className={`rounded-2xl border border-slate-700/60 bg-slate-900/60 backdrop-blur-xl shadow-2xl shadow-cyan-900/20 ${className}`}
    >
      {children}
    </motion.section>
  );
}

export function Badge({ tone = 'blue', children }) {
  const tones = {
    blue: 'bg-cyan-500/20 text-cyan-300',
    green: 'bg-emerald-500/20 text-emerald-300',
    yellow: 'bg-amber-500/20 text-amber-300',
    red: 'bg-red-500/20 text-red-300',
    slate: 'bg-slate-700/30 text-slate-200'
  };

  return <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${tones[tone]}`}>{children}</span>;
}

export function Button({ variant = 'primary', className = '', children, ...props }) {
  const styles = {
    primary: 'bg-cyan-400 text-slate-950 hover:bg-cyan-300',
    secondary: 'bg-slate-800 text-slate-100 hover:bg-slate-700',
    ghost: 'bg-transparent text-slate-200 hover:bg-slate-800/80'
  };

  return (
    <button className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
