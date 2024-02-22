import { Public_Sans } from "next/font/google";

const font = Public_Sans({
  subsets: ["latin"],
  weight: ["400"]
});

export default function Layout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <div className={`${font.className}`}>
      {children}
    </div>
  )
}