import React, { useState } from 'react';
import { OrgTree } from '../../components/OrgTree';
import { departments as initialDepartments, Department } from '../../data/mock';
import { Button } from '../../components/ui/button';
import { Plus, Upload, Download, Search } from 'lucide-react';
import { Badge } from '../../components/ui/badge';

export function AdminOrgPage() {
  const [departments, setDepartments] = useState<Department[]>(initialDepartments);
  const [selectedDept, setSelectedDept] = useState<Department | null>(null);

  return (
    <div className="flex h-full gap-6">
      {/* Sidebar - Tree */}
      <div className="w-1/3 bg-white rounded-lg border border-gray-200 shadow-sm flex flex-col">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Organization</h2>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" title="Export Structure">
              <Download size={16} />
            </Button>
            <Button size="sm" title="Add Root Department">
              <Plus size={16} />
            </Button>
          </div>
        </div>
        <div className="p-2 overflow-y-auto flex-1">
          <OrgTree 
            departments={departments} 
            onSelect={setSelectedDept} 
            selectedId={selectedDept?.id} 
            isAdmin={true} 
          />
        </div>
      </div>

      {/* Main Content - Details */}
      <div className="flex-1 bg-white rounded-lg border border-gray-200 shadow-sm p-6">
        {selectedDept ? (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{selectedDept.name}</h2>
                <p className="text-gray-500 text-sm mt-1">Department ID: {selectedDept.id}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">Edit Details</Button>
                <Button variant="destructive">Delete Department</Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">Members</span>
                <div className="text-3xl font-bold text-gray-900">12</div>
                <div className="text-sm text-gray-500 mt-1">Active users in this department</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">Sub-departments</span>
                <div className="text-3xl font-bold text-gray-900">{selectedDept.children?.length || 0}</div>
                <div className="text-sm text-gray-500 mt-1">Direct child departments</div>
              </div>
            </div>

            <h3 className="text-lg font-medium text-gray-900 mb-4">Department Members</h3>
            <div className="border rounded-md overflow-hidden">
              <div className="bg-gray-50 px-4 py-3 border-b text-xs font-medium text-gray-500 uppercase flex justify-between">
                <span>Name</span>
                <span>Role</span>
              </div>
              {/* Mock member list for dept */}
              <div className="divide-y">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="px-4 py-3 flex justify-between items-center hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                        U{i}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">User Name {i}</div>
                        <div className="text-xs text-gray-500">user{i}@runway.com</div>
                      </div>
                    </div>
                    <Badge variant="secondary">Member</Badge>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-gray-400">
            <Search size={48} className="mb-4 text-gray-300" />
            <p className="text-lg font-medium text-gray-500">Select a department to view details</p>
          </div>
        )}
      </div>
    </div>
  );
}
