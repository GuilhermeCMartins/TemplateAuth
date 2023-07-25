
interface DashboardLayoutProps {
    children?: React.ReactNode
  }
  
  export default async function DashboardLayout({
    children,
  }: DashboardLayoutProps) {
      return  (
        <>
        <main>
          {children}
        </main>
        </>
    )

}