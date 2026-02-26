
// Type Definitions
export type Role = 'Super Admin' | 'General User' | 'System Admin';
export type UserStatus = 'Active' | 'Pending' | 'Inactive';

export interface User {
  id: string;
  name: string;
  role: Role;
  departmentId: string;
  position: string;
  contactEmail: string; // Used for address book
  ssoEmail: string;     // Used for login matching (ADM-202)
  status: UserStatus;
  phone?: string;
  joinedAt: string;
  avatarUrl?: string;
}

export interface Department {
  id: string;
  name: string;
  parentId: string | null;
  children?: Department[];
}

// Mock Departments (Tree Structure)
export const mockDepartments: Department[] = [
  {
    id: 'd1',
    name: 'Runway Corp (HQ)',
    parentId: null,
    children: [
      {
        id: 'd2',
        name: 'Management Division',
        parentId: 'd1',
        children: [
          { id: 'd3', name: 'HR Team', parentId: 'd2' },
          { id: 'd4', name: 'Finance Team', parentId: 'd2' },
        ],
      },
      {
        id: 'd5',
        name: 'Product Division',
        parentId: 'd1',
        children: [
          { id: 'd6', name: 'Service Planning Team', parentId: 'd5' },
          { id: 'd7', name: 'Design Team', parentId: 'd5' },
          { id: 'd8', name: 'Engineering Team', parentId: 'd5' },
        ],
      },
      {
        id: 'd9',
        name: 'Sales Division',
        parentId: 'd1',
        children: [],
      },
    ],
  },
];

// Mock Users
export const mockUsers: User[] = [
  {
    id: 'u1',
    name: 'Alice Kim',
    role: 'Super Admin',
    departmentId: 'd2',
    position: 'Chief of Staff',
    contactEmail: 'alice@runway.com',
    ssoEmail: 'alice.kim@gmail.com', // Mapped differently
    status: 'Active',
    phone: '010-1234-5678',
    joinedAt: '2025-01-10',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
  },
  {
    id: 'u2',
    name: 'David Lee',
    role: 'General User',
    departmentId: 'd8',
    position: 'Senior Engineer',
    contactEmail: 'david@runway.com',
    ssoEmail: 'david@runway.com',
    status: 'Active',
    phone: '010-9876-5432',
    joinedAt: '2025-02-01',
    avatarUrl: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150',
  },
  {
    id: 'u3',
    name: 'Sarah Park',
    role: 'General User',
    departmentId: 'd7',
    position: 'Product Designer',
    contactEmail: 'sarah@runway.com',
    ssoEmail: 'sarah.park@outlook.com',
    status: 'Pending', // Invited but not logged in
    joinedAt: '2026-02-20',
  },
  {
    id: 'u4',
    name: 'James Choi',
    role: 'General User',
    departmentId: 'd9',
    position: 'Sales Manager',
    contactEmail: 'james@runway.com',
    ssoEmail: 'james@runway.com',
    status: 'Inactive', // Left company
    phone: '010-5555-5555',
    joinedAt: '2024-12-01',
    avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150',
  },
  {
    id: 'u5',
    name: 'Minji Song',
    role: 'General User',
    departmentId: 'd6',
    position: 'PM',
    contactEmail: 'minji@runway.com',
    ssoEmail: 'minji@runway.com',
    status: 'Active',
    phone: '010-1111-2222',
    joinedAt: '2025-03-15',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150',
  },
];

// Helper to flatten departments for select inputs
export const flatDepartments = [
  { id: 'd1', name: 'Runway Corp (HQ)' },
  { id: 'd2', name: 'Management Division' },
  { id: 'd3', name: 'HR Team' },
  { id: 'd4', name: 'Finance Team' },
  { id: 'd5', name: 'Product Division' },
  { id: 'd6', name: 'Service Planning Team' },
  { id: 'd7', name: 'Design Team' },
  { id: 'd8', name: 'Engineering Team' },
  { id: 'd9', name: 'Sales Division' },
];
