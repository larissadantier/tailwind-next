export function UsedSpaceWidget() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5 dark:bg-zinc-800">
      <div>
        <span className="text-sm/5 font-medium text-violet-700 dark:text-zinc-100">
          Used space
        </span>
        <p className="text-sm/5 text-violet-500 dark:text-zinc-400">
          Your team has used 80% of your available space. Need more?
        </p>
      </div>

      <div className="h-2 rounded-full bg-violet-100 dark:bg-zinc-600">
        <div className="dark: h-2 w-4/5 rounded-full bg-violet-600 dark:bg-violet-400" />
      </div>

      <div className="space-x-3">
        <button
          type="button"
          className="transform text-sm font-semibold text-violet-700 hover:text-violet-700 dark:text-zinc-300 dark:hover:text-violet-400"
        >
          Dismiss
        </button>
        <button
          type="button"
          className="text-sm font-semibold text-violet-700 hover:text-violet-900 dark:text-zinc-300 dark:hover:text-violet-400"
        >
          Upgrade plan
        </button>
      </div>
    </div>
  )
}
