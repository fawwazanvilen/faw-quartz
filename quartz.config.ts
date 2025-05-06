import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🌼 Faw's Notes",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "notes.fawwaz.anvilen.space",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      // typography: {
      //   header: "Schibsted Grotesk",
      //   body: "Source Sans Pro",
      //   code: "IBM Plex Mono",
      // },
      typography: {
        header: "Space Grotesk",
        body: "Inter",
        code: "JetBrains Mono",
      },
      // default colors
      // colors: {
      //   lightMode: {
      //     light: "#faf8f8",
      //     lightgray: "#e5e5e5",
      //     gray: "#b8b8b8",
      //     darkgray: "#4e4e4e",
      //     dark: "#2b2b2b",
      //     secondary: "#284b63",
      //     tertiary: "#84a59d",
      //     highlight: "rgba(143, 159, 169, 0.15)",
      //     textHighlight: "#fff23688",
      //   },
      //   darkMode: {
      //     light: "#161618",
      //     lightgray: "#393639",
      //     gray: "#646464",
      //     darkgray: "#d4d4d4",
      //     dark: "#ebebec",
      //     secondary: "#7b97aa",
      //     tertiary: "#84a59d",
      //     highlight: "rgba(143, 159, 169, 0.15)",
      //     textHighlight: "#b3aa0288",
      //   },
      // },
      // sunset vibes
      // colors: {
      //   lightMode: {
      //     light: "#fffcf9",
      //     lightgray: "#ede3d9",
      //     gray: "#c4b1a2",
      //     darkgray: "#7d6b5d",
      //     dark: "#352b24",
      //     secondary: "#e07a5f", // terracotta
      //     tertiary: "#f2cc8f", // warm yellow
      //     highlight: "rgba(224, 122, 95, 0.15)",
      //     textHighlight: "#81b29a88", // sage
      //   },
      //   darkMode: {
      //     light: "#2b2427",
      //     lightgray: "#3d353a",
      //     gray: "#7a6c75",
      //     darkgray: "#d8c9d3",
      //     dark: "#f5ecf1",
      //     secondary: "#e07a5f", // terracotta
      //     tertiary: "#f2cc8f", // warm yellow
      //     highlight: "rgba(242, 204, 143, 0.15)",
      //     textHighlight: "#81b29a44", // sage
      //   },
      // },
      // gruvbox colors
      colors: {
        lightMode: {
          light: "#fbf1c7", // light bg
          lightgray: "#ebdbb2", // light bg1
          gray: "#bdae93", // gray
          darkgray: "#665c54", // dark fg4
          dark: "#282828", // dark bg
          secondary: "#458588", // blue
          tertiary: "#98971a", // green
          highlight: "rgba(215, 153, 33, 0.15)", // orange with alpha
          textHighlight: "#fabd2f88", // yellow with alpha
        },
        darkMode: {
          light: "#282828", // dark bg
          lightgray: "#3c3836", // dark bg1
          gray: "#665c54", // gray
          darkgray: "#bdae93", // light fg4
          dark: "#fbf1c7", // light bg
          secondary: "#83a598", // blue
          tertiary: "#b8bb26", // green
          highlight: "rgba(254, 128, 25, 0.15)", // orange with alpha
          textHighlight: "#fabd2f44", // yellow with alpha
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages({
        colorScheme: "lightMode", // what colors to use for generating image, same as theme colors from config, valid values are "darkMode" and "lightMode"
        width: 1200, // width to generate with (in pixels)
        height: 630, // height to generate with (in pixels)
        excludeRoot: false, // wether to exclude "/" index path to be excluded from auto generated images (false = use auto, true = use default og image)
        // imageStructure: defaultImage, // custom image component to use
      }),
    ],
  },
}

export default config
