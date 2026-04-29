import { Bell, CircleAlert } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Badge } from './UI';

const items = [
  { id: 1, title: 'Crew swap approved for SQ224', time: '2m ago', tone: 'green' },
  { id: 2, title: 'Duty hour warning for CR-1420', time: '9m ago', tone: 'yellow' },
  { id: 3, title: 'Critical overlap detected on EK201', time: '14m ago', tone: 'red' }
];

export function Notifications() {
  const [open, setOpen] = useState(false);

  return (
    <div className='relative'>
      <button className='relative rounded-xl p-2 hover:bg-slate-800 transition' onClick={() => setOpen((v) => !v)}>
        <Bell size={18} />
        <span className='absolute -right-1 -top-1 rounded-full bg-cyan-300 px-1 text-[10px] font-bold text-slate-950'>3</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className='absolute right-0 z-50 mt-2 w-80 rounded-2xl border border-slate-700 bg-slate-900/95 p-3 shadow-2xl'
          >
            {items.map((item) => (
              <div key={item.id} className='mb-2 rounded-xl bg-slate-800/70 p-3 last:mb-0'>
                <div className='flex items-center justify-between gap-2'>
                  <p className='text-sm'>{item.title}</p>
                  <Badge tone={item.tone}>{item.time}</Badge>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
