'use client'
import { UploadCloud } from 'lucide-react'
import { useFileInput } from './Root'

export function Trigger() {
  const { id } = useFileInput()
  return (
    <label
      className="group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-dashed border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-violet-200 hover:bg-violet-25 hover:text-violet-500 dark:bg-zinc-900 dark:hover:bg-zinc-800"
      htmlFor={id}
    >
      <div className="rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100 dark:border-zinc-700 dark:bg-zinc-800 dark:group-hover:border-zinc-600 dark:group-hover:bg-zinc-700">
        <UploadCloud className="size-5 group-hover:text-violet-600 dark:text-zinc-500 dark:group-hover:text-violet-300" />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-sm dark:group-hover:text-violet-400">
          <strong className="text-violet-700 dark:text-violet-300">
            Click to upload
          </strong>{' '}
          or drag and drop
        </span>

        <span className="text-xs text-zinc-500 group-hover:text-violet-600 dark:group-hover:text-violet-300">
          SVG, PNG, JPG or GIF (max. 800x400px)
        </span>
      </div>
    </label>
  )
}
