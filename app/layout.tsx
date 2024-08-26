import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "./store";

export const metadata = {
  title: "Weather App",
  description: "A weather forecasting app built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
