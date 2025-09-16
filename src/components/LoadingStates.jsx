import { motion } from 'framer-motion'

export function SkeletonCard() {
  return (
    <motion.div
      className="rounded-3xl border border-white/10 bg-slate-900/40 p-5"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="flex gap-4">
        <div className="h-7 w-7 rounded-full bg-slate-700/50" />
        <div className="flex-1 space-y-2">
          <div className="h-4 w-1/4 rounded bg-slate-700/50" />
          <div className="h-6 w-3/4 rounded bg-slate-700/50" />
          <div className="h-4 w-1/2 rounded bg-slate-700/50" />
        </div>
      </div>
    </motion.div>
  )
}

export function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          className="mx-auto mb-4 h-16 w-16 rounded-full border-4 border-brand-400/30 border-t-brand-400"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <motion.p
          className="text-brand-200 font-semibold"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Calisthenix lädt...
        </motion.p>
      </motion.div>
    </motion.div>
  )
}
