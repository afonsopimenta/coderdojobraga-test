import { type ReactNode } from "react";
import Link from "next/link";

type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <header className="container flex items-center justify-center gap-8">
        <Link href="/" className="text-blue-500 underline">
          Voltar à página principal
        </Link>
        <Link href="/dashboard/ninjas" className="text-blue-500 underline">
          Ninjas
        </Link>
      </header>
      {children}
    </>
  );
};

export default DashboardLayout;
