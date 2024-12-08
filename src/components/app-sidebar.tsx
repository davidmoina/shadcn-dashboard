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
import {
  AlertCircle,
  Badge,
  Bell,
  Calendar,
  Captions,
  CheckSquare,
  CircleUserRound,
  ClipboardType,
  Command,
  Ellipsis,
  GalleryHorizontal,
  ListCollapse,
  Loader,
  Menu,
  MessageSquareWarning,
  NotebookTabs,
  OctagonAlert,
  PanelsTopLeft,
  RectangleEllipsis,
  SlidersHorizontal,
  Square,
  SquareMenu,
  SquarePower,
  Table,
  TextCursorInput,
} from "lucide-react";
import { NavUser } from "./nav-user";

const items = [
  { title: "accordion", url: "/dashboard/accordion", icon: ListCollapse },
  { title: "alert", url: "/dashboard/alert", icon: AlertCircle },
  { title: "button", url: "/dashboard/button", icon: SquarePower },
  {
    title: "alert dialog",
    url: "/dashboard/alert-dialog",
    icon: MessageSquareWarning,
  },
  { title: "dialog", url: "/dashboard/dialog", icon: Captions },
  { title: "badge", url: "/dashboard/badge", icon: Badge },
  { title: "calendar", url: "/dashboard/calendar", icon: Calendar },
  { title: "avatar", url: "/dashboard/avatar", icon: CircleUserRound },
  { title: "card", url: "/dashboard/card", icon: Square },
  { title: "carrousel", url: "/dashboard/carrousel", icon: GalleryHorizontal },
  { title: "checkbox", url: "/dashboard/checkbox", icon: CheckSquare },
  { title: "command", url: "/dashboard/command", icon: Command },
  { title: "combobox", url: "/dashboard/combobox", icon: TextCursorInput },
  { title: "context menu", url: "/dashboard/context-menu", icon: SquareMenu },
  { title: "menu bar", url: "/dashboard/menu-bar", icon: Menu },
  { title: "input otp", url: "/dashboard/input-otp", icon: RectangleEllipsis },
  { title: "progress", url: "/dashboard/progress", icon: Ellipsis },
  { title: "sheet", url: "/dashboard/sheet", icon: PanelsTopLeft },
  { title: "skeleton", url: "/dashboard/skeleton", icon: Loader },
  { title: "slider", url: "/dashboard/slider", icon: SlidersHorizontal },
  { title: "sonner", url: "/dashboard/sonner", icon: OctagonAlert },
  { title: "toast", url: "/dashboard/toast", icon: Bell },
  { title: "tabs", url: "/dashboard/tabs", icon: NotebookTabs },
  { title: "data table", url: "/dashboard/data-table", icon: Table },
  { title: "form", url: "/dashboard/form", icon: ClipboardType },
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
                <SidebarMenuItem key={item.title} className="capitalize">
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
