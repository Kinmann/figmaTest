import { NavLink } from "react-router";
import { cn } from "../../lib/utils";
import { Users, Building, Shield, User, Briefcase } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export function Sidebar() {
  const { currentUser } = useAuth();
  
  if (!currentUser) return null;

  const isAdmin = currentUser.role === "SuperAdmin" || currentUser.role === "SystemAdmin";

  return (
    <div className="w-64 border-r border-slate-200 bg-white h-screen flex flex-col fixed left-0 top-0 pt-16 z-30">
      <div className="px-4 py-4 space-y-1">
        {isAdmin && (
          <>
            <div className="px-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 mt-2">
              Management
            </div>
            <NavLink
              to="/admin/members"
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                )
              }
            >
              <Users className="h-4 w-4" />
              Member Management
            </NavLink>
            <NavLink
              to="/admin/organization"
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                )
              }
            >
              <Building className="h-4 w-4" />
              Organization Chart
            </NavLink>
          </>
        )}

        <div className="px-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 mt-6">
          Directory
        </div>
        <NavLink
          to="/address-book"
          className={({ isActive }) =>
            cn(
              "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors",
              isActive
                ? "bg-slate-100 text-slate-900"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            )
          }
        >
          <Briefcase className="h-4 w-4" />
          Address Book
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            cn(
              "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors",
              isActive
                ? "bg-slate-100 text-slate-900"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            )
          }
        >
          <User className="h-4 w-4" />
          My Profile
        </NavLink>
      </div>
      
      <div className="mt-auto p-4 border-t border-slate-200">
        <div className="flex items-center gap-3 px-2 py-2">
          <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-medium text-xs overflow-hidden">
             {currentUser.avatarUrl ? (
                <img src={currentUser.avatarUrl} alt="avatar" className="h-full w-full object-cover" />
             ) : (
                currentUser.name.substring(0,2).toUpperCase()
             )}
          </div>
          <div className="flex flex-col overflow-hidden">
             <span className="text-sm font-medium truncate">{currentUser.name}</span>
             <span className="text-xs text-slate-500 truncate">{currentUser.contactEmail}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
