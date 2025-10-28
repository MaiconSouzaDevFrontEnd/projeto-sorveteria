import "./globals.css";

export const metadata = {
  title: "Sorveteria Doçura Gelada",
  description: "Sorveteria Doçura Gelada - O melhor sorvete da cidade",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
