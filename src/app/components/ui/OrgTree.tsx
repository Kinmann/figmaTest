
import { useState } from 'react';
import { ChevronRight, ChevronDown, Folder, FolderOpen } from 'lucide-react';
import { clsx } from 'clsx';

interface Department {
  id: string;
  name: string;
  parentId: string | null;
  children?: Department[];
}

interface OrgTreeProps {
  data: Department[];
  selectedId?: string;
  onSelect?: (id: string) => void;
  className?: string;
  level?: number;
}

export function OrgTree({ data, selectedId, onSelect, className, level = 0 }: OrgTreeProps) {
  return (
    <div className={clsx('flex flex-col', className)}>
      {data.map((dept) => (
        <OrgTreeNode
          key={dept.id}
          node={dept}
          selectedId={selectedId}
          onSelect={onSelect}
          level={level}
        />
      ))}
    </div>
  );
}

function OrgTreeNode({
  node,
  selectedId,
  onSelect,
  level,
}: {
  node: Department;
  selectedId?: string;
  onSelect?: (id: string) => void;
  level: number;
}) {
  const [isOpen, setIsOpen] = useState(true);
  const hasChildren = node.children && node.children.length > 0;
  const isSelected = selectedId === node.id;

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleSelect = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onSelect) onSelect(node.id);
  };

  return (
    <div className="select-none">
      <div
        className={clsx(
          'flex items-center py-1.5 px-2 rounded-md cursor-pointer transition-colors text-sm',
          isSelected ? 'bg-indigo-50 text-indigo-700 font-medium' : 'hover:bg-gray-100 text-gray-700'
        )}
        style={{ paddingLeft: `${level * 16 + 8}px` }}
        onClick={handleSelect}
      >
        <button
          onClick={handleToggle}
          className={clsx(
            'p-0.5 rounded mr-1 hover:bg-gray-200 text-gray-400 transition-transform',
            !hasChildren && 'invisible'
          )}
        >
          {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
        </button>

        <span className={clsx('mr-2', isSelected ? 'text-indigo-500' : 'text-gray-400')}>
          {isOpen ? <FolderOpen size={16} /> : <Folder size={16} />}
        </span>
        <span className="truncate">{node.name}</span>
      </div>

      {hasChildren && isOpen && (
        <OrgTree
          data={node.children!}
          selectedId={selectedId}
          onSelect={onSelect}
          level={level + 1}
        />
      )}
    </div>
  );
}
