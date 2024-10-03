"use client"
import "./globals.css";
import OfferHeader from "./components/offer_header/OfferHeader";
import Header from "./components/header/Header";
import { ThemeProvider } from "@emotion/react";
import theme from "./styles/theme";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <OfferHeader />
          <Header/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
