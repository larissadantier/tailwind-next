import { LogOut } from 'lucide-react'
import Image from 'next/image'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="https://github.com/larissadantier.png"
        width={40}
        height={40}
        className="h-10 w-10 rounded-full"
        alt=""
        quality={100}
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Larissa Dantier
        </span>
        <span className="truncate text-sm text-zinc-500">
          larissa@gmail.com
        </span>
      </div>

      <button
        type="button"
        className="group ml-auto rounded-lg p-2 hover:bg-violet-50"
      >
        <LogOut className="h-5 w-5 text-zinc-500 group-hover:text-violet-500" />
      </button>
    </div>
  )
}
