import { cn } from '@/libs/cn'
import { ComponentProps, ReactNode } from 'react'

type InputPrefixProps = ComponentProps<'div'>

export function InputPrefix(props: InputPrefixProps) {
  return <div {...props} />
}

type InputControlProps = ComponentProps<'input'>

export function InputControl(props: InputControlProps) {
  return (
    <input
      className={cn([
        'flex-1 border-0 bg-transparent p-0 text-zinc-900 outline-none placeholder:text-zinc-600',
        'dark:text-zinc-100 dark:placeholder:text-zinc-400',
      ])}
      {...props}
    />
  )
}

interface InputRootProps extends ComponentProps<'div'> {
  children: ReactNode
}

export function InputRoot({ children, className, ...props }: InputRootProps) {
  return (
    <div
      className={cn([
        'flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2',
        'focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100',
        'dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/10',
        className,
      ])}
      {...props}
    >
      {children}
    </div>
  )
}
