import "./globals.css";
import Topo from "@/componentes/Topo";
import Rodape from "@/componentes/Rodape";

export const metadata = {
  title: "Sorveteria Doçura Gelada",
  description: "Sorveteria Doçura Gelada - O melhor sorvete da cidade",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Topo />
        {children}
        <Rodape />
      </body>
    </html>
  );
}
