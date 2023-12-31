// uno.config.ts
import {
  defineConfig,
  presetWebFonts,
  presetUno,
  presetTypography,
} from "unocss";

export default defineConfig({
  theme: {
    colors: {
      primary: "#030e27",
      secondary: "#fd5d14",
    },
  },
  presets: [
    presetUno(),
    presetTypography(),
    presetWebFonts({
      provider: "bunny",
      fonts: {
        sans: "Almarai:400,700,800",
      },
    }),
  ],
});
