import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Home } from "lucide-react";
import { NavUser } from "./nav-user";

const items = [
  { title: "accordion", url: "/dashboard/accordion", icon: Home },
  { title: "alert", url: "/dashboard/alert", icon: Home },
  { title: "button", url: "/dashboard/button", icon: Home },
  { title: "alert dialog", url: "/dashboard/alert-dialog", icon: Home },
  { title: "dialog", url: "/dashboard/dialog", icon: Home },
  { title: "badge", url: "/dashboard/badge", icon: Home },
  { title: "calendar", url: "/dashboard/calendar", icon: Home },
  { title: "avatar", url: "/dashboard/avatar", icon: Home },
  { title: "card", url: "/dashboard/card", icon: Home },
  { title: "carrousel", url: "/dashboard/carrousel", icon: Home },
  { title: "checkbox", url: "/dashboard/checkbox", icon: Home },
  { title: "command", url: "/dashboard/command", icon: Home },
  { title: "combobox", url: "/dashboard/combobox", icon: Home },
  { title: "context menu", url: "/dashboard/context-menu", icon: Home },
  { title: "menu bar", url: "/dashboard/menu-bar", icon: Home },
  { title: "input otp", url: "/dashboard/input-otp", icon: Home },
  { title: "progress", url: "/dashboard/progress", icon: Home },
  { title: "sheet", url: "/dashboard/sheet", icon: Home },
  { title: "skeleton", url: "/dashboard/skeleton", icon: Home },
  { title: "slider", url: "/dashboard/slider", icon: Home },
  { title: "sonner", url: "/dashboard/sonner", icon: Home },
  { title: "toast", url: "/dashboard/toast", icon: Home },
  { title: "tabs", url: "/dashboard/tabs", icon: Home },
  { title: "data table", url: "/dashboard/data-table", icon: Home },
  { title: "form", url: "/dashboard/form", icon: Home },
].sort((a, b) => a.title.localeCompare(b.title));

export function AppSidebar() {
  return (
    <Sidebar variant="sidebar">
      <SidebarHeader>
        <a href="#" className="text-xl font-bold flex items-center lg:ml-2.5">
          {/* Logo */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="h-6 w-6"
          >
            <rect width="256" height="256" fill="none"></rect>
            <line
              x1="208"
              y1="128"
              x2="128"
              y2="208"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
            <line
              x1="192"
              y1="40"
              x2="40"
              y2="192"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
          </svg>
          <span className="self-center whitespace-nowrap ml-2"> Shadcn/ui</span>
        </a>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Components</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={{
            name: "Shadcn/ui",
            email: "shadcn",
            avatar: "https://github.com/shadcn.png",
          }}
        />
      </SidebarFooter>
    </Sidebar>
  );
}
