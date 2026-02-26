import React, { useState } from 'react';
import { users as initialUsers, User, UserStatus } from '../../data/mock';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Search, Filter, Plus, UserPlus, FileSpreadsheet, MoreVertical, Edit2, ShieldAlert, Mail } from 'lucide-react';
import { cn } from '../../lib/utils';
import * as Popover from '@radix-ui/react-popover';

export function AdminMembersPage() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [filterStatus, setFilterStatus] = useState<UserStatus | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredUsers = users.filter((user) => {
    const matchesStatus = filterStatus === 'All' || user.status === filterStatus;
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          user.email.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getStatusBadge = (status: UserStatus) => {
    switch (status) {
      case 'Active': return <Badge variant="success">Active</Badge>;
      case 'Pending': return <Badge variant="warning">Pending</Badge>;
      case 'Inactive': return <Badge variant="neutral">Inactive</Badge>;
      default: return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Members</h1>
          <p className="text-sm text-gray-500 mt-1">Manage user access and accounts</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <FileSpreadsheet className="mr-2 h-4 w-4" />
            Bulk Import (CSV)
          </Button>
          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Invite Member
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row gap-4 justify-between items-center bg-gray-50/50">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input 
              type="text" 
              placeholder="Search members..." 
              className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto">
            <span className="text-sm text-gray-500 whitespace-nowrap">Filter by status:</span>
            <div className="flex bg-gray-100 p-1 rounded-md">
              {(['All', 'Active', 'Pending', 'Inactive'] as const).map((status) => (
                <button
                  key={status}
                  className={cn(
                    "px-3 py-1 text-xs font-medium rounded-sm transition-colors",
                    filterStatus === status 
                      ? "bg-white text-gray-900 shadow-sm" 
                      : "text-gray-500 hover:text-gray-900"
                  )}
                  onClick={() => setFilterStatus(status)}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 font-medium">User</th>
                <th className="px-6 py-3 font-medium">Role & Position</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Joined</th>
                <th className="px-6 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50 transition-colors group">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                          {user.avatarUrl ? (
                            <img src={user.avatarUrl} alt={user.name} className="h-full w-full object-cover" />
                          ) : (
                            <div className="h-full w-full flex items-center justify-center bg-blue-100 text-blue-600 font-bold text-xs">
                              {user.name.charAt(0)}
                            </div>
                          )}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{user.name}</div>
                          <div className="text-gray-500 text-xs">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-gray-900">{user.position}</div>
                      <div className="text-xs text-gray-500">{user.role}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(user.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                      {user.joinedAt}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <Popover.Root>
                        <Popover.Trigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-gray-600">
                            <MoreVertical size={16} />
                          </Button>
                        </Popover.Trigger>
                        <Popover.Portal>
                          <Popover.Content className="w-48 bg-white rounded-md shadow-lg border border-gray-200 p-1 z-50 flex flex-col gap-0.5 mr-4" align="end">
                            <button className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded w-full text-left">
                              <Edit2 size={14} /> Edit Details
                            </button>
                            <button className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded w-full text-left">
                              <Mail size={14} /> Resend Invite
                            </button>
                            <div className="h-px bg-gray-100 my-0.5" />
                            {user.status === 'Active' ? (
                              <button className="flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded w-full text-left">
                                <ShieldAlert size={14} /> Deactivate Account
                              </button>
                            ) : (
                              <button className="flex items-center gap-2 px-3 py-2 text-sm text-green-600 hover:bg-green-50 rounded w-full text-left">
                                <ShieldAlert size={14} /> Activate Account
                              </button>
                            )}
                          </Popover.Content>
                        </Popover.Portal>
                      </Popover.Root>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                    No members found matching your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">{filteredUsers.length}</span> of <span className="font-medium">{users.length}</span> members
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>Previous</Button>
            <Button variant="outline" size="sm" disabled>Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
