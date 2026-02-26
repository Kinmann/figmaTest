import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Folder, MoreHorizontal, Plus, Trash2, Edit2 } from 'lucide-react';
import { Department } from '../../data/mock';
import { Button } from './ui/button';
import { cn } from '../../lib/utils';
import * as Popover from '@radix-ui/react-popover';

interface OrgTreeProps {
  departments: Department[];
  onSelect?: (dept: Department) => void;
  selectedId?: string;
  isAdmin?: boolean;
}

const OrgTreeNode = ({ 
  dept, 
  level = 0, 
  onSelect, 
  selectedId, 
  isAdmin 
}: { 
  dept: Department; 
  level?: number; 
  onSelect?: (dept: Department) => void; 
  selectedId?: string;
  isAdmin?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const hasChildren = dept.children && dept.children.length > 0;

  return (
    <div className="select-none">
      <div 
        className={cn(
          "flex items-center group py-1.5 px-2 rounded-md transition-colors cursor-pointer hover:bg-gray-100",
          selectedId === dept.id ? "bg-blue-50 text-blue-700" : "text-gray-700"
        )}
        style={{ paddingLeft: `${level * 16 + 8}px` }}
        onClick={() => onSelect?.(dept)}
      >
        <div 
          className="mr-1 p-0.5 rounded hover:bg-gray-200 text-gray-400"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
        >
          {hasChildren ? (
            isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />
          ) : <div className="w-3.5" />}
        </div>
        
        <Folder size={16} className={cn("mr-2", selectedId === dept.id ? "text-blue-500 fill-blue-100" : "text-gray-400")} />
        <span className="text-sm font-medium flex-1 truncate">{dept.name}</span>
        
        {isAdmin && (
          <div className="opacity-0 group-hover:opacity-100 flex items-center gap-1">
            <Popover.Root>
              <Popover.Trigger asChild>
                <button className="p-1 hover:bg-gray-200 rounded text-gray-500">
                  <MoreHorizontal size={14} />
                </button>
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content className="w-32 bg-white rounded-md shadow-lg border border-gray-200 p-1 z-50 flex flex-col gap-0.5">
                  <button className="flex items-center gap-2 px-2 py-1.5 text-xs text-gray-700 hover:bg-gray-100 rounded w-full text-left">
                    <Plus size={12} /> Add Sub-dept
                  </button>
                  <button className="flex items-center gap-2 px-2 py-1.5 text-xs text-gray-700 hover:bg-gray-100 rounded w-full text-left">
                    <Edit2 size={12} /> Rename
                  </button>
                  <div className="h-px bg-gray-100 my-0.5" />
                  <button className="flex items-center gap-2 px-2 py-1.5 text-xs text-red-600 hover:bg-red-50 rounded w-full text-left">
                    <Trash2 size={12} /> Delete
                  </button>
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          </div>
        )}
      </div>
      
      {hasChildren && isOpen && (
        <div>
          {dept.children!.map((child) => (
            <OrgTreeNode 
              key={child.id} 
              dept={child} 
              level={level + 1} 
              onSelect={onSelect}
              selectedId={selectedId}
              isAdmin={isAdmin}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export function OrgTree({ departments, onSelect, selectedId, isAdmin = false }: OrgTreeProps) {
  return (
    <div className="py-2">
      {departments.map((dept) => (
        <OrgTreeNode 
          key={dept.id} 
          dept={dept} 
          onSelect={onSelect} 
          selectedId={selectedId} 
          isAdmin={isAdmin} 
        />
      ))}
    </div>
  );
}
