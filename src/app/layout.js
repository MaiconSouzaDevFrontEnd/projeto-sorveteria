import "./globals.css";
import Topo from "./componentes/Topo";
import Rodape from "./componentes/Rodape";


export const metadata = {
  title: "Sorveteria Gelateria",
  description: "Sorveteria Gelateria - O melhor sorvete da cidade",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body cz-shortcut-listen="true">
        <Topo />
        {children}
        <Rodape />
      </body>
    </html>
  );
}
