"use client"
import ChakraWrapper from '../components/Chakra'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <title>Next js</title>
      
      <head />
        
      <body>
        <ChakraWrapper>
      
        {children}
        </ChakraWrapper>

        </body>
    </html>
  )
}
