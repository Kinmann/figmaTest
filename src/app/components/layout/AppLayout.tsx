import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router';
import { 
  Building2, 
  Users, 
  UserCircle, 
  LogOut, 
  Menu,
  ChevronRight,
  Settings
} from 'lucide-react';
import { cn } from '../../../lib/utils';
import { Button } from '../ui/button';

export function AppLayout() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  const adminLinks = [
    { to: '/admin/org', icon: Building2, label: 'Organization' },
    { to: '/admin/members', icon: Users, label: 'Members' },
  ];

  const userLinks = [
    { to: '/app/address-book', icon: Users, label: 'Address Book' },
    { to: '/app/profile', icon: UserCircle, label: 'My Profile' },
  ];

  const links = isAdmin ? adminLinks : userLinks;

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
      {/* Sidebar */}
      <aside 
        className={cn(
          "bg-white border-r border-gray-200 transition-all duration-300 flex flex-col z-20",
          sidebarOpen ? "w-64" : "w-16"
        )}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
          <div className={cn("flex items-center gap-2", !sidebarOpen && "hidden")}>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">R</div>
            <span className="font-semibold text-lg text-gray-900">Runway</span>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={cn(!sidebarOpen && "mx-auto")}
          >
            {sidebarOpen ? <Menu size={20} /> : <ChevronRight size={20} />}
          </Button>
        </div>

        <div className="flex-1 py-6 overflow-y-auto">
          <div className="px-3 space-y-1">
            <div className={cn("text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-3", !sidebarOpen && "hidden")}>
              {isAdmin ? "Admin Console" : "Workspace"}
            </div>
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-blue-50 text-blue-700" 
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                  !sidebarOpen && "justify-center px-0"
                )}
              >
                <link.icon size={20} />
                {sidebarOpen && <span>{link.label}</span>}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="p-4 border-t border-gray-200">
          <NavLink
            to="/"
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-red-600 hover:bg-red-50 transition-colors",
              !sidebarOpen && "justify-center px-0"
            )}
          >
            <LogOut size={20} />
            {sidebarOpen && <span>Sign out</span>}
          </NavLink>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 z-10">
          <h1 className="text-xl font-semibold text-gray-800">
            {isAdmin ? 'System Administration' : 'Runway Workspace'}
          </h1>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="text-right hidden md:block">
                <p className="text-sm font-medium text-gray-900">Alice Admin</p>
                <p className="text-xs text-gray-500">Super Admin</p>
              </div>
              <div className="h-9 w-9 rounded-full bg-gray-200 overflow-hidden border border-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                  alt="Avatar" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto bg-gray-50 p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
