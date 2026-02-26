
import { clsx } from 'clsx';
import { UserStatus } from '../../mockData';

interface StatusBadgeProps {
  status: UserStatus;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const styles = {
    Active: 'bg-green-100 text-green-700 border-green-200',
    Pending: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    Inactive: 'bg-gray-100 text-gray-500 border-gray-200',
  };

  return (
    <span
      className={clsx(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border',
        styles[status],
        className
      )}
    >
      <span
        className={clsx(
          'w-1.5 h-1.5 rounded-full mr-1.5',
          status === 'Active' ? 'bg-green-500' :
          status === 'Pending' ? 'bg-yellow-500' : 'bg-gray-400'
        )}
      />
      {status}
    </span>
  );
}
