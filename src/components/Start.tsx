import tw from 'tailwind-styled-components'

import Icon from '#components/common/Icon'
import { ICON_ID } from '#lib/icons/iconID'

const BoxElement = tw.div`
  p-3.5
  m-0
  border
  rounded
  items-center
  text-small
  gap-2
  text-grayLight
  bg-darkLight
  border-darkLightBorder
`

const CodeElement = tw.code`
  font-mono
  p-1
  inline-block
  text-warning
  bg-dark
`

const BoxHeadline = tw.h3`
  flex
  gap-2
  justify-between
  items-center
  text-light
  text-2xl
  mb-3
  font-bold
  whitespace-nowrap
`

const Popover = tw.div`
  absolute
  top-0
  right-0
  -mt-16
  p-3
  gap-2
  inline-flex
  flex-nowrap
  bg-warning
  text-dark
`

const LinkElement = ({ children, href }: { children: React.ReactNode; href: string }) => (
  <a
    className="text-primary items-center inline-flex gap-0.5"
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    {children}
    <Icon icon={ICON_ID.ExternalLink} className="inline-block align-super mr-1" size={12} />
  </a>
)

const Start = () => (
  <div className="relative container px-5 mx-auto text-white text-base max-w-4xl">
    <Popover>
      <a
        aria-label="to-github"
        href="https://github.com/richard-unterberg/ts-react-vite-minimal-starter"
      >
        <Icon icon={ICON_ID.Github} size={24} />
      </a>
    </Popover>

    <div className="xs:block md:flex gap-3 mt-16 my-10 items-center">
      <Icon icon={ICON_ID.MagnetIcon} className="mx-auto mb-4 md:mx-0 text-warning" size={80} />
      <div className="text-center md:text-left">
        <p className="mb-5 font-mono">ts-react-vite-minimal-starter</p>
        <h1 className="text-3xl mb-2 font-bold" id="typescript--react--vite">
          ts-react + vite = 😍
        </h1>
        <h2 className="font-normal mb-6" id="feat-tailwind-css--eslint--prettier">
          Uno CSS + ESLint + Prettier
        </h2>
      </div>
    </div>

    <p className="mb-10">
      Another jumpstarter with some additional setup to get ts-react working in Vite with HMR and
      thrown a handful strict ESLint rules at it. Ready, set, go! 🏎️
    </p>

    <p className="font-bold mb-4">Preconditions:</p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
      <BoxElement>npm or yarn</BoxElement>
      <BoxElement>
        <LinkElement href="https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig">
          editorconfig
        </LinkElement>
        vs code extension
      </BoxElement>
      <BoxElement>
        <LinkElement href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode">
          prettier
        </LinkElement>
        vs code extension
      </BoxElement>
      <BoxElement>
        <LinkElement href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss">
          tailwindcss
        </LinkElement>
        vs code extension
      </BoxElement>
    </div>

    <p className="font-bold mb-4">Features:</p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
      <BoxElement>
        👏 <LinkElement href="https://github.com/facebook/react">React</LinkElement> +{' '}
        <LinkElement href="https://github.com/vitejs/vite">Vite</LinkElement>
      </BoxElement>
      <BoxElement>
        🎨 <LinkElement href="https://github.com/unocss/unocss">Uno CSS</LinkElement>
      </BoxElement>
      <BoxElement>
        ✍️ <LinkElement href="https://github.com/fontsource/fontsource">@fontsource</LinkElement>
      </BoxElement>
      <BoxElement>
        💫 <LinkElement href="https://github.com/lucide-icons/lucide">lucide-react</LinkElement>{' '}
        icons
      </BoxElement>
      <BoxElement>
        🤌 Strict <LinkElement href="https://github.com/eslint/eslint">eslint</LinkElement> setup
      </BoxElement>
      <BoxElement>
        💄 <LinkElement href="https://github.com/prettier/prettier">Prettier</LinkElement> +{' '}
        <LinkElement href="https://github.com/IanVS/prettier-plugin-sort-imports">
          Prettier Sort Imports
        </LinkElement>
      </BoxElement>
      <BoxElement>
        🚨 <LinkElement href="https://github.com/typicode/husky">Husky</LinkElement> +{' '}
        <LinkElement href="https://github.com/lint-staged/lint-staged">lint-staged</LinkElement>
      </BoxElement>
      <BoxElement>
        ⚙️{' '}
        <LinkElement href="https://github.com/editorconfig/editorconfig">editorconfig</LinkElement>
      </BoxElement>
      <BoxElement>
        🚓 <LinkElement href="https://github.com/microsoft/TypeScript">Typescript</LinkElement>
      </BoxElement>
    </div>
    <h2 className="text-3xl mb-4" id="usage">
      Usage
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <BoxElement>
        <BoxHeadline>
          Installation
          <span className="text-grayDark">
            <Icon icon={ICON_ID.MonitorDown} />
          </span>
        </BoxHeadline>
        <p>
          clone repo and: <br />
          run <CodeElement>npm install</CodeElement> in root
        </p>
      </BoxElement>
      <BoxElement>
        <BoxHeadline>
          Local Dev{' '}
          <span className="text-grayDark">
            <Icon icon={ICON_ID.PencilRuler} />
          </span>
        </BoxHeadline>
        <p>
          Start local dev server with <br />
          <CodeElement>npm run dev</CodeElement>
        </p>
      </BoxElement>
      <BoxElement>
        <BoxHeadline>
          Build{' '}
          <span className="text-grayDark">
            <Icon icon={ICON_ID.Sailboat} />
          </span>
        </BoxHeadline>
        <p>
          build production ready copy to <span className="font-mono">dist</span> folder:
          <br />
          <CodeElement>npm run build</CodeElement>
        </p>
      </BoxElement>
      <BoxElement>
        <BoxHeadline>
          Preview{' '}
          <span className="text-grayDark">
            <Icon icon={ICON_ID.PackageCheck} />
          </span>
        </BoxHeadline>
        <p>
          Preview the build from <span className="font-mono">dist</span> folder: <br />
          <CodeElement>npm run preview</CodeElement>
        </p>
      </BoxElement>
    </div>
    <div className="mb-20 mt-20 text-small text-center">
      <div className="w-1/2 mb-10 border-grayDark h-1 border-dotted border-b-2 mx-auto" />
      <LinkElement href="https://github.com/richard-unterberg/ts-react-vite-minimal-starter">
        ⭐️ https://github.com/richard-unterberg/ts-react-vite-minimal-starter
      </LinkElement>
    </div>
  </div>
)

export default Start
