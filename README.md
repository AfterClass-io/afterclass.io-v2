# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## Icons

### How do I use icons from libraries like mdi or other libs?

We are using a library called Iconify.

On Figma, if the icon layer name is formatted like `uil:chart-line`, then it's likely using an icon from Iconify. Otherwise, see below for custom icon implementation.

Please also refer to Iconify guide [here](https://github.com/iconify/iconify/tree/main/iconify-icon/react)

### How do I create custom icons that are not from Iconify?

Refer to the README [here](https://github.com/AfterClass-io/afterclass.io-v2/tree/main/src/common/components/CustomIcon/README.md)

## Theming System

Our theming system uses the Tailwind Plugin function to generate 2 things

- CSS variables for each token in figma
- Tailwind classes for these tokens

### How do I use the theme colours?

VSCode should grab and expose the colours from the theming system with autocomplete support. You need the [Tailwind CSS IntelliSense VSCode Extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss).

Alternatively, you can refer to `common/tools/tailwind/themes/appTheme.ts` for the theming tailwind config and available classes.

### What not to do

#### Avoid using `bg-light-*` or `bg-dark-*`

Even though the theming system exposes classes like `bg-light-primary-default` or `bg-dark-primary-default`, use only `bg-app-primary-default`. The additional light/dark prefix colours are for granular theming possibilities, like when certain components need a certain token.

### How does the theming system work?

Based on the parent's className `light` or `dark`, the tailwind classes will use a different set of color variables.

E.g. We use 1 class for both light or dark colours, such as `bg-app-primary-default`. This class points to a CSS variable like so `primary-default: 'var(--app-primary-default)`. Based on whether the parent has `.dark` or `.light` class, the class contains CSS variables that will override and apply the correct colour.

It also works with opacity, so you could do `bg-app-primary-default/50` if you'd like.

### Forcing a component to be of a different theme

Just add something like `data-theme="dark"` to the HTML attributes, and it'll use the variables from that theme. You can also use classNames like `dark` or `light`.

### Where are the theming files located?

All Tailwind theming files are configured in the monorepo's `common/tools/tailwind` folder.

### How do I modify the theme or the colours?

If you're adding a new key or token, make sure to modify all the themes found in `/common/tools/tailwind/themes` so they have the same set of keys.

If you're updating a certain theme's color code, just find the theme in `/common/tools/tailwind/themes` and paste the HEX code there.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
