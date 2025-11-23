import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { BookOpen, BookUp2, ChartArea, MessageCircle, SquareDashedBottomCode, Trophy, User2 } from "lucide-react";
import Link from "next/link";

type NavItem = {
  label: string;
  path: string;
  icon: React.ElementType
};


export const NavItens = () => {
  const navbarItems: NavItem[] = [
    { label: "Cursos", path: "/", icon: SquareDashedBottomCode },
    { label: "Meus Cursos", path: "/my-courses", icon: BookUp2 },
    { label: "Ranking", path: "/ranking", icon: Trophy },
  ];

  const adminNavbarItems: NavItem[] = [
    { label: "Estatisticas", path: "/admin", icon: ChartArea },
    { label: "Gerenciar Cursos", path: "/admin/courses", icon: BookOpen },
    { label: "Gerenciar Usuários", path: "/admin/users", icon: User2 },
    { label: "Gerenciar comentários", path: "/admin/comments", icon: MessageCircle },
  ];

  const renderNavItems = (items: NavItem[]) => {
    return items.map((item) => (
      <SidebarMenuItem key={item.label}>
        <SidebarMenuButton asChild tooltip={item.label}>
          <Link href={item.path}>
            <item.icon className="text-primary hover:text-primary transition-all" />
            <span>{item.label}</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    ));
  }
  return (
    <SidebarGroup>
      <SidebarMenu>
        {renderNavItems(navbarItems)}
        <Separator className="my-2 h-px bg-gray-200 dark:bg-gray-700" />
        {renderNavItems(adminNavbarItems)}
      </SidebarMenu>
    </SidebarGroup>
  );
}