import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import { SettingsTabs } from '@/components/SettingsTabs'
import { InputRoot, InputPrefix, InputControl } from '@/components/Form/input'

import * as FileInput from '@/components/Form/FileInput'
import { Select } from '@/components/Form/Select'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { TextArea } from '@/components/Form/TextArea'
import { Button } from '@/components/Button'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Settings
      </h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="dark:border: flex flex-col justify-between gap-3 border-b border-zinc-200 border-zinc-700 pb-5 lg:flex-row lg:items-center lg:gap-0">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Personal info
            </h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit" form="settings">
              Save
            </Button>
          </div>
        </div>

        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
        >
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-100"
            >
              Name
            </label>
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
              <InputRoot>
                <InputControl id="firstName" defaultValue="Larissa" />
              </InputRoot>

              <div className="flex flex-col gap-3 lg:block">
                <label
                  htmlFor="secondName"
                  className="text-sm font-medium text-zinc-700 lg:sr-only dark:text-zinc-100"
                >
                  Last name
                </label>

                <InputRoot>
                  <InputControl defaultValue="Dantier" />
                </InputRoot>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-100"
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

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="your-photo"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-100"
            >
              Your Photo
              <span className="mt-0.5 block text-sm text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>

            <FileInput.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
              <FileInput.ImagePreview />

              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="role"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-100"
            >
              Role
            </label>

            <InputRoot>
              <InputControl id="role" defaultValue="Software Developer" />
            </InputRoot>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-100"
            >
              Country
            </label>

            <Select placeholder="Select a country">
              <SelectItem value="BR" text="Brazil" />
              <SelectItem value="US" text="United States" />
            </Select>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-100"
            >
              Timezone
            </label>

            <Select placeholder="Select a timezone...">
              <SelectItem
                value="utc8"
                text="Pacific Standard Time (UTC-08:00)"
              />
              <SelectItem value="utc3" text="America São Paulo (UTC-03:00)" />
            </Select>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="bio"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-100"
            >
              Bio
              <span className="mt-0.5 block text-sm text-zinc-500">
                Write a short introduction.
              </span>
            </label>

            <div className="space-y-3">
              <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem
                    value="normal"
                    defaultChecked
                    text="Normal Text"
                  />
                  <SelectItem value="md" text="Markdown" />
                </Select>

                <div className="flex items-center gap-2">
                  <Button variant="ghost" type="button">
                    <Bold
                      className="size-4 text-zinc-400 group-hover:text-violet-500"
                      strokeWidth={3}
                    />
                  </Button>

                  <Button variant="ghost" type="button">
                    <Italic
                      className="size-4 text-zinc-400 group-hover:text-violet-500"
                      strokeWidth={3}
                    />
                  </Button>

                  <Button variant="ghost" type="button">
                    <Link
                      className="size-4 text-zinc-400 group-hover:text-violet-500"
                      strokeWidth={3}
                    />
                  </Button>

                  <Button variant="ghost" type="button">
                    <List
                      className="size-4 text-zinc-400 group-hover:text-violet-500"
                      strokeWidth={3}
                    />
                  </Button>

                  <Button variant="ghost" type="button">
                    <ListOrdered
                      className="size-4 text-zinc-400 group-hover:text-violet-500"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>

              <TextArea
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="portfolio-projects"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-100"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>

            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-3 pt-5">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit" form="settings">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
