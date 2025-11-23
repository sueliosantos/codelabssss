import { AppSidebar } from "@/components/shared/app-sidebar/Index";
import { SearchInput } from "@/components/shared/shurch-input";
import { Button } from "@/components/ui/button";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { LogIn } from "lucide-react";
import Link from "next/link";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-[70] shrink-0 items-center justify-between border-b px-6 gap-2">
          <div className="flex-1 flex items-center gap-4">
            <SidebarTrigger className="flex md:hidden -ml-1" />
            <SearchInput />
          </div>

          <Link href="/auth/sign-in">
            <Button>
              <LogIn />
              Entrar
            </Button>
          </Link>
        </header>
        <div className="flex flex-1 flex-col gap-6 p-6 overflow-auto">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}