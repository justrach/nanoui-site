import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { themeScript } from "@/components/ThemeToggle";
import { siteUrl } from "@/content/site";
import "./globals.css";

const display = Bricolage_Grotesque({ variable: "--nf-display", subsets: ["latin"], weight: ["500", "700", "800"] });
const body = Geist({ variable: "--nf-body", subsets: ["latin"] });
const code = Geist_Mono({ variable: "--nf-code", subsets: ["latin"] });

const description = "Desktop apps in Zig, with native UI drawn on the GPU or a web frontend. Apps of about 0.7 MB for macOS, iOS, Android, Linux and Windows.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "nanoui: desktop apps in Zig", template: "%s · nanoui" },
  description,
  icons: { icon: "/brand/icon-512.png", apple: "/brand/apple-icon.png" },
  openGraph: { title: "nanoui", description, images: ["/brand/nano-paper.webp"], type: "website" },
  twitter: { card: "summary_large_image", title: "nanoui", description, images: ["/brand/nano-paper.webp"] },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3ede0" },
    { media: "(prefers-color-scheme: dark)", color: "#15130f" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // data-theme is set by themeScript before React runs: not a mismatch.
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${body.variable} ${code.variable} h-full antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
