import React, { useState } from 'react';
import { OrgTree } from '../../components/OrgTree';
import { departments, users, User, Department } from '../../data/mock';
import { Button } from '../../components/ui/button';
import { Search, Mail, Phone, MapPin, X } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import { Badge } from '../../components/ui/badge';

export function AddressBookPage() {
  const [selectedDept, setSelectedDept] = useState<Department | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const filteredUsers = users.filter((user) => {
    // Filter by department if selected
    const matchesDept = selectedDept ? user.departmentId === selectedDept.id : true;
    // Filter by search query
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          user.position.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch && user.status !== 'Inactive'; // Hide inactive users
  });

  return (
    <div className="flex h-full gap-6">
      {/* Sidebar - Organization */}
      <div className="w-1/4 min-w-[250px] bg-white rounded-lg border border-gray-200 shadow-sm flex flex-col h-full">
        <div className="p-4 border-b border-gray-200 bg-gray-50/50">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Organization</h2>
        </div>
        <div className="p-2 overflow-y-auto flex-1">
          <div 
            className={`flex items-center px-3 py-2 rounded-md cursor-pointer mb-1 ${!selectedDept ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
            onClick={() => setSelectedDept(null)}
          >
            All Company
          </div>
          <OrgTree 
            departments={departments} 
            onSelect={setSelectedDept} 
            selectedId={selectedDept?.id} 
          />
        </div>
      </div>

      {/* Main Content - User List */}
      <div className="flex-1 flex flex-col h-full">
        {/* Search Header */}
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4 flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input 
              type="text" 
              placeholder="Search colleagues by name, email, or position..." 
              className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="text-sm text-gray-500">
            {filteredUsers.length} colleagues found
          </div>
        </div>

        {/* User Grid */}
        <div className="flex-1 overflow-y-auto pr-2">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredUsers.map((user) => (
              <div 
                key={user.id} 
                className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col"
                onClick={() => setSelectedUser(user)}
              >
                <div className="p-5 flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-gray-100 flex-shrink-0 overflow-hidden border border-gray-200">
                    {user.avatarUrl ? (
                      <img src={user.avatarUrl} alt={user.name} className="h-full w-full object-cover" />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center bg-blue-100 text-blue-600 font-bold text-lg">
                        {user.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-gray-900 truncate">{user.name}</h3>
                    <p className="text-sm text-blue-600 font-medium truncate">{user.position}</p>
                    <p className="text-xs text-gray-500 mt-1 truncate">{user.email}</p>
                  </div>
                </div>
                <div className="mt-auto border-t border-gray-100 bg-gray-50/50 px-5 py-3 flex justify-between items-center">
                  <Badge variant="secondary" className="text-xs font-normal bg-white border border-gray-200">
                     {departments.find(d => d.id === user.departmentId)?.name || 'Department'}
                  </Badge>
                  <Button size="sm" variant="ghost" className="h-7 text-xs text-gray-500 hover:text-blue-600 p-0 hover:bg-transparent">
                    View Profile
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredUsers.length === 0 && (
            <div className="h-64 flex flex-col items-center justify-center text-gray-400">
              <Search size={48} className="mb-4 text-gray-300" />
              <p className="text-lg font-medium text-gray-500">No colleagues found</p>
              <p className="text-sm">Try adjusting your search or filter</p>
            </div>
          )}
        </div>
      </div>

      {/* User Profile Dialog */}
      <Dialog.Root open={!!selectedUser} onOpenChange={(open) => !open && setSelectedUser(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-xl shadow-2xl z-50 overflow-hidden outline-none">
            {selectedUser && (
              <>
                <div className="relative h-32 bg-gradient-to-r from-blue-600 to-indigo-600">
                  <button 
                    onClick={() => setSelectedUser(null)}
                    className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="px-6 pb-6">
                  <div className="relative -mt-16 mb-4 flex justify-between items-end">
                    <div className="h-32 w-32 rounded-full border-4 border-white bg-white shadow-md overflow-hidden">
                      {selectedUser.avatarUrl ? (
                        <img src={selectedUser.avatarUrl} alt={selectedUser.name} className="h-full w-full object-cover" />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center bg-gray-100 text-gray-400 font-bold text-4xl">
                          {selectedUser.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    {/* <Button>Send Message</Button> */}
                  </div>
                  
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">{selectedUser.name}</h2>
                    <p className="text-blue-600 font-medium text-lg">{selectedUser.position}</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-600">
                      <div className="w-8 flex justify-center"><Mail size={18} /></div>
                      <div>
                        <div className="text-xs text-gray-400 uppercase font-semibold">Email</div>
                        <a href={`mailto:${selectedUser.email}`} className="text-sm hover:text-blue-600 hover:underline">{selectedUser.email}</a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 text-gray-600">
                      <div className="w-8 flex justify-center"><Phone size={18} /></div>
                      <div>
                        <div className="text-xs text-gray-400 uppercase font-semibold">Phone</div>
                        <div className="text-sm">{selectedUser.phoneNumber || 'Not provided'}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-gray-600">
                      <div className="w-8 flex justify-center"><MapPin size={18} /></div>
                      <div>
                        <div className="text-xs text-gray-400 uppercase font-semibold">Department</div>
                        <div className="text-sm">{departments.find(d => d.id === selectedUser.departmentId)?.name || 'Unknown'}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end gap-3">
                    <Button variant="outline" onClick={() => setSelectedUser(null)}>Close</Button>
                    <Button className="bg-blue-600 hover:bg-blue-700">Contact</Button>
                  </div>
                </div>
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
