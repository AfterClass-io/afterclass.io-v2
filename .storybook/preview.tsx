import type { Preview, StoryFn } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";
import "../src/common/styles/globals.scss";
import { inter, poppins } from "@/common/fonts"; // <-- make sure the path is correct

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "fullscreen",
  },
  decorators: [
    (Story: StoryFn) => (
      <>
        {/* @ts-ignore */}
        <style global jsx>{`
          :root {
            --font-inter: ${inter.style.fontFamily};
            --font-poppins: ${poppins.style.fontFamily};
          }
        `}</style>
        <div
          style={{
            padding: "3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className={`bg-bg-base`}
        >
          <Story />
        </div>
      </>
    ),
    withThemeByClassName({
      themes: {
        // nameOfTheme: 'classNameForTheme',
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
