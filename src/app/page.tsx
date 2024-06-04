import { Mail, UploadCloud, User } from 'lucide-react'
import { SettingsTabs } from '@/components/SettingsTabs'
import { InputRoot, InputPrefix, InputControl } from '@/components/input'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-8 flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="flex items-center rounded-lg border border-zinc-300 bg-transparent px-4 py-2.5 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="flex items-center rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </div>

        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="grid-cols-form grid gap-3">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <InputRoot>
                <InputControl id="firstName" defaultValue="Larissa" />
              </InputRoot>

              <InputRoot>
                <InputControl defaultValue="Dantier" />
              </InputRoot>
            </div>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email address
            </label>

            <InputRoot>
              <InputPrefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </InputPrefix>
              <InputControl
                id="email"
                type="email"
                defaultValue="larissa@gmail.com"
              />
            </InputRoot>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="your-photo"
              className="text-sm font-medium text-zinc-700"
            >
              Your Photo
              <span className="mt-0.5 block text-sm text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>

            <div className="flex items-start gap-5">
              <div className="flex size-14 items-center justify-center rounded-full bg-violet-50">
                <User className="size-8 text-violet-600" />
              </div>

              <label
                className="hover:bg-violet-25 group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-dashed border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-violet-200 hover:text-violet-500"
                htmlFor="photo"
              >
                <div className="border-6 rounded-full border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100">
                  <UploadCloud className="size-5 group-hover:text-violet-600" />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-sm">
                    <strong className="text-violet-700">Click to upload</strong>{' '}
                    or drag and drop
                  </span>

                  <span className="text-xs text-zinc-500 group-hover:text-violet-600">
                    SVG, PNG, JPG or GIF (max. 800x400px)
                  </span>
                </div>
              </label>

              <input type="file" name="" id="photo" className="sr-only" />
            </div>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>

            <InputRoot>
              <InputControl id="role" defaultValue="Software Developer" />
            </InputRoot>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>

            <div />
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>

            <div />
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="mt-0.5 block text-sm text-zinc-500">
                Write a short introduction.
              </span>
            </label>

            <div />
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="portfolio-projects"
              className="text-sm font-medium text-zinc-700"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>

            <div />
          </div>

          <div className="flex items-center justify-end gap-3 pt-5">
            <button
              type="button"
              className="flex items-center rounded-lg border border-zinc-300 bg-transparent px-4 py-2.5 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="flex items-center rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
