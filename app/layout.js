import "../styles/globals.css";
import { Navbar } from "../components";
import { Footer } from "../components";
import { CoinsProvider } from "./context/CoinsContext";
import { UserProvider } from "./context/UserContext";
const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
    </head>

    <body>
      <UserProvider>
        <CoinsProvider>
          <Navbar />
          {children}
          <Footer />
        </CoinsProvider>
      </UserProvider>
    </body>
  </html>
);

export default RootLayout;
