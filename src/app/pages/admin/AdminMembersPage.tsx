import React, { useState } from 'react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';
import { mockMembers, Member } from '../../data/mockData';
import {
  Search,
  MoreVertical,
  UserPlus,
  Filter,
  Download,
  Mail,
  Phone,
  MapPin,
  Calendar,
} from 'lucide-react';

export function AdminMembersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const filteredMembers = mockMembers.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment =
      selectedDepartment === 'all' || member.department === selectedDepartment;
    const matchesStatus = selectedStatus === 'all' || member.status === selectedStatus;
    return matchesSearch && matchesDepartment && matchesStatus;
  });

  const departments = ['all', ...Array.from(new Set(mockMembers.map((m) => m.department)))];
  const statuses = ['all', 'Active', 'Inactive', 'Pending'];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Inactive':
        return 'bg-gray-100 text-gray-700 border-gray-200';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Admin':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Manager':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">구성원 관리</h1>
          <p className="text-gray-600 mt-1">조직의 구성원을 관리합니다</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>내보내기</span>
          </Button>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 flex items-center space-x-2">
            <UserPlus className="w-4 h-4" />
            <span>구성원 추가</span>
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 border-gray-100">
          <div className="text-sm text-gray-600">전체 구성원</div>
          <div className="text-2xl font-bold text-gray-900 mt-1">{mockMembers.length}</div>
        </Card>
        <Card className="p-4 border-gray-100">
          <div className="text-sm text-gray-600">활성</div>
          <div className="text-2xl font-bold text-green-600 mt-1">
            {mockMembers.filter((m) => m.status === 'Active').length}
          </div>
        </Card>
        <Card className="p-4 border-gray-100">
          <div className="text-sm text-gray-600">대기</div>
          <div className="text-2xl font-bold text-yellow-600 mt-1">
            {mockMembers.filter((m) => m.status === 'Pending').length}
          </div>
        </Card>
        <Card className="p-4 border-gray-100">
          <div className="text-sm text-gray-600">비활성</div>
          <div className="text-2xl font-bold text-gray-600 mt-1">
            {mockMembers.filter((m) => m.status === 'Inactive').length}
          </div>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-4 border-gray-100">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="구성원 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div>
                  <Button variant="outline" className="flex items-center space-x-2">
                    <Filter className="w-4 h-4" />
                    <span>부서</span>
                  </Button>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {departments.map((dept) => (
                  <DropdownMenuItem
                    key={dept}
                    onClick={() => setSelectedDepartment(dept)}
                  >
                    {dept}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div>
                  <Button variant="outline" className="flex items-center space-x-2">
                    <Filter className="w-4 h-4" />
                    <span>상태</span>
                  </Button>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {statuses.map((status) => (
                  <DropdownMenuItem
                    key={status}
                    onClick={() => setSelectedStatus(status)}
                    className={selectedStatus === status ? 'bg-gray-100' : ''}
                  >
                    {status === 'all' ? '전체 상태' : status === 'Active' ? '활성' : status === 'Pending' ? '대기' : '비활성'}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </Card>

      {/* Members Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filteredMembers.map((member) => (
          <Card key={member.id} className="p-6 border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-4">
                <Avatar className="h-14 w-14 ring-2 ring-blue-100">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback className="bg-gradient-to-br from-blue-600 to-purple-600 text-white text-lg">
                    {member.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.department}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {member.position && member.duty ? `${member.position} / ${member.duty}` : member.position || member.duty || member.role}
                    </Badge>
                    <Badge variant="outline" className={getStatusColor(member.status)}>
                      {member.status === 'Active' ? '활성' : member.status === 'Pending' ? '대기' : '비활성'}
                    </Badge>
                  </div>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>프로필 보기</DropdownMenuItem>
                  <DropdownMenuItem>수정</DropdownMenuItem>
                  <DropdownMenuItem>메시지 보내기</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600">제거</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center text-gray-600">
                <Mail className="w-4 h-4 mr-2 text-gray-400" />
                <a href={`mailto:${member.email}`} className="hover:text-blue-600">
                  {member.email}
                </a>
              </div>
              {member.phone && (
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-2 text-gray-400" />
                  <span>{member.phone}</span>
                </div>
              )}
              {member.memberCode && (
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                  <span>사번: {member.memberCode}</span>
                </div>
              )}
              <div className="flex items-center text-gray-600">
                <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                <span>입사일 {member.joinDate}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>최근 활동</span>
                <span className="font-medium">{member.lastActive}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredMembers.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-2">구성원을 찾을 수 없습니다</div>
          <p className="text-sm text-gray-500">검색어나 필터를 조정해보세요</p>
        </div>
      )}
    </div>
  );
}