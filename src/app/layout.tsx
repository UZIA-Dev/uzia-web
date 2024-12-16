import type { Metadata } from "next";
import "../styles/_styles.scss";
import NextConfig from "../../next.config";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Noto_Sans_JP } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import AppBar from '../components/AppBar/CustomAppBar';

const notoSansJp = Noto_Sans_JP({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans',
});

const basePath = NextConfig.basePath;
process.env.BASE_PATH = basePath ? basePath : "";

export const metadata: Metadata = {
  title: "ユーザイア OFFICIAL SITE",
  description: "同人ゲーム開発サークル「UZIA」のオフィシャルサイトです。",
  robots: {
    index: false
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJp.variable}`}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <AppBar />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
