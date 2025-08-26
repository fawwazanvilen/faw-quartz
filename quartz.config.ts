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
    defaultDateType: "modified",
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
          light: "#FAFAFA", // background
          lightgray: "#F0F0F0",
          gray: "#ABB0B6",
          darkgray: "#6C737C",
          dark: "#000000", // foreground
          secondary: "#36A3D9", // blue
          tertiary: "#86B300", // green
          highlight: "rgba(54, 163, 217, 0.15)",
          textHighlight: "#FFB454", // orange
        },
        darkMode: {
          light: "#1F2430", // background
          lightgray: "#1A1F29",
          gray: "#5C6773",
          darkgray: "#B3B1AD", // foreground
          dark: "#FFFFFF",
          secondary: "#36A3D9", // blue
          tertiary: "#86B300", // green
          highlight: "rgba(54, 163, 217, 0.15)",
          textHighlight: "#FFB454", // orange
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
      Plugin.Favicon(),
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
