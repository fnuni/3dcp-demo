export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <head>
        <title>Piattaforma 3DCP</title>
      </head>
      <body className="bg-white text-gray-800">
        {children}
      </body>
    </html>
  )
}
