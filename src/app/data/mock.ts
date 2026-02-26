
export type UserStatus = 'Pending' | 'Active' | 'Inactive';
export type UserRole = 'System Admin' | 'Super Admin' | 'General User';

export interface User {
  id: string;
  name: string;
  email: string; // Contact email
  ssoEmail: string; // Login email
  departmentId: string;
  position: string;
  role: UserRole;
  status: UserStatus;
  joinedAt: string;
  phoneNumber?: string;
  avatarUrl?: string;
}

export interface Department {
  id: string;
  name: string;
  parentId: string | null;
  children?: Department[];
}

export const departments: Department[] = [
  {
    id: 'd1',
    name: 'Runway Corp',
    parentId: null,
    children: [
      {
        id: 'd2',
        name: 'Management',
        parentId: 'd1',
        children: [
          { id: 'd3', name: 'HR', parentId: 'd2' },
          { id: 'd4', name: 'Finance', parentId: 'd2' },
        ]
      },
      {
        id: 'd5',
        name: 'Product Division',
        parentId: 'd1',
        children: [
          { id: 'd6', name: 'Engineering', parentId: 'd5' },
          { id: 'd7', name: 'Design', parentId: 'd5' },
          { id: 'd8', name: 'Product Management', parentId: 'd5' },
        ]
      },
      {
        id: 'd9',
        name: 'Sales & Marketing',
        parentId: 'd1',
        children: [
          { id: 'd10', name: 'Sales', parentId: 'd9' },
          { id: 'd11', name: 'Marketing', parentId: 'd9' },
        ]
      }
    ]
  }
];

export const users: User[] = [
  {
    id: 'u1',
    name: 'Alice Admin',
    email: 'alice@runway.com',
    ssoEmail: 'alice.admin@gmail.com',
    departmentId: 'd2',
    position: 'CEO',
    role: 'Super Admin',
    status: 'Active',
    joinedAt: '2025-01-01',
    phoneNumber: '010-1234-5678',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 'u2',
    name: 'Bob Builder',
    email: 'bob@runway.com',
    ssoEmail: 'bob.dev@gmail.com',
    departmentId: 'd6',
    position: 'Senior Engineer',
    role: 'General User',
    status: 'Active',
    joinedAt: '2025-02-15',
    phoneNumber: '010-9876-5432',
    avatarUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 'u3',
    name: 'Charlie Designer',
    email: 'charlie@runway.com',
    ssoEmail: 'charlie.design@gmail.com',
    departmentId: 'd7',
    position: 'Product Designer',
    role: 'General User',
    status: 'Pending',
    joinedAt: '2026-02-20',
    phoneNumber: '010-1111-2222',
  },
  {
    id: 'u4',
    name: 'David Inactive',
    email: 'david@runway.com',
    ssoEmail: 'david.old@gmail.com',
    departmentId: 'd10',
    position: 'Sales Manager',
    role: 'General User',
    status: 'Inactive',
    joinedAt: '2024-05-10',
    phoneNumber: '010-3333-4444',
  },
  {
    id: 'u5',
    name: 'Eve Manager',
    email: 'eve@runway.com',
    ssoEmail: 'eve.pm@gmail.com',
    departmentId: 'd8',
    position: 'Product Manager',
    role: 'General User',
    status: 'Active',
    joinedAt: '2025-03-01',
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];
