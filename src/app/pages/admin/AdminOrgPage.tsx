import React, { useState } from 'react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Badge } from '../../components/ui/badge';
import {
  mockOrganization,
  mockMembers,
  departments as initialDepartments,
  getSubDepartments,
  Department,
} from '../../data/mockData';
import {
  Building2,
  Globe,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Users,
  Edit,
  Save,
  X,
  Plus,
  ChevronRight,
  ChevronDown,
  Trash2,
  FolderTree,
} from 'lucide-react';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../components/ui/dialog';

export function AdminOrgPage() {
  const [activeTab, setActiveTab] = useState<'info' | 'departments'>('info');
  const [isEditing, setIsEditing] = useState(false);
  const [orgData, setOrgData] = useState(mockOrganization);
  const [departments, setDepartments] = useState(initialDepartments);
  const [expandedDepts, setExpandedDepts] = useState<Set<string>>(new Set(['0000']));
  const [isAddDeptOpen, setIsAddDeptOpen] = useState(false);
  const [editingDept, setEditingDept] = useState<Department | null>(null);
  const [newDept, setNewDept] = useState({
    name: '',
    parentCode: '0000',
  });

  const handleSave = () => {
    toast.success('조직 정보가 성공적으로 업데이트되었습니다!');
    setIsEditing(false);
  };

  const handleCancel = () => {
    setOrgData(mockOrganization);
    setIsEditing(false);
  };

  const toggleExpand = (deptCode: string) => {
    const newExpanded = new Set(expandedDepts);
    if (newExpanded.has(deptCode)) {
      newExpanded.delete(deptCode);
    } else {
      newExpanded.add(deptCode);
    }
    setExpandedDepts(newExpanded);
  };

  const handleAddDepartment = () => {
    if (!newDept.name.trim()) {
      toast.error('부서명을 입력해주세요');
      return;
    }

    const newDeptCode = `${newDept.parentCode}-${Math.random().toString(36).substr(2, 3)}`;
    const newDepartment: Department = {
      department_idx: departments.length + 1,
      organization_code: '0000',
      department_code: newDeptCode,
      department_name: newDept.name,
      department_parent_code: newDept.parentCode,
      department_headcount: null,
      department_order: departments.filter((d) => d.department_parent_code === newDept.parentCode).length + 1,
      department_status: 1,
      create_dt: new Date().toISOString(),
      update_dt: new Date().toISOString(),
      delete_dt: null,
    };

    setDepartments([...departments, newDepartment]);
    setNewDept({ name: '', parentCode: '0000' });
    setIsAddDeptOpen(false);
    toast.success('부서가 추가되었습니다');
  };

  const handleEditDepartment = (dept: Department) => {
    if (!editingDept) return;

    const updatedDepartments = departments.map((d) =>
      d.department_code === dept.department_code
        ? { ...d, department_name: editingDept.department_name, update_dt: new Date().toISOString() }
        : d
    );

    setDepartments(updatedDepartments);
    setEditingDept(null);
    toast.success('부서 정보가 수정되었습니다');
  };

  const handleDeleteDepartment = (deptCode: string) => {
    // Check if department has sub-departments
    const hasSubDepts = departments.some((d) => d.department_parent_code === deptCode);
    if (hasSubDepts) {
      toast.error('하위 부서가 있는 부서는 삭제할 수 없습니다');
      return;
    }

    // Check if department has members
    const hasMembers = mockMembers.some((m) => m.departmentCode === deptCode);
    if (hasMembers) {
      toast.error('구성원이 있는 부서는 삭제할 수 없습니다');
      return;
    }

    setDepartments(departments.filter((d) => d.department_code !== deptCode));
    toast.success('부서가 삭제되었습니다');
  };

  const renderDepartmentTree = (parentCode: string | null, level: number = 0) => {
    const depts = departments.filter((d) => d.department_parent_code === parentCode);
    if (depts.length === 0) return null;

    return depts.map((dept) => {
      const subDepts = departments.filter((d) => d.department_parent_code === dept.department_code);
      const hasChildren = subDepts.length > 0;
      const isExpanded = expandedDepts.has(dept.department_code);
      const memberCount = mockMembers.filter((m) => m.departmentCode === dept.department_code).length;
      const isEditing = editingDept?.department_code === dept.department_code;

      return (
        <div key={dept.department_code}>
          <div
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors gap-2"
            style={{ marginLeft: `${level * 24}px` }}
          >
            <div className="flex items-center space-x-2 flex-1 min-w-0">
              {hasChildren ? (
                <button
                  onClick={() => toggleExpand(dept.department_code)}
                  className="p-1 hover:bg-gray-200 rounded transition-colors flex-shrink-0"
                >
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4 text-gray-600" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-gray-600" />
                  )}
                </button>
              ) : (
                <div className="w-6 flex-shrink-0" />
              )}
              <Building2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
              {isEditing ? (
                <Input
                  value={editingDept.department_name}
                  onChange={(e) =>
                    setEditingDept({ ...editingDept, department_name: e.target.value })
                  }
                  className="h-8 flex-1"
                  autoFocus
                />
              ) : (
                <span className="font-medium text-gray-900 truncate">{dept.department_name}</span>
              )}
              <Badge variant="outline" className="text-xs flex-shrink-0">
                {memberCount}명
              </Badge>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 ml-8 sm:ml-0">
              {isEditing ? (
                <>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleEditDepartment(dept)}
                    className="h-8 px-2"
                  >
                    <Save className="w-4 h-4 text-green-600" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setEditingDept(null)}
                    className="h-8 px-2"
                  >
                    <X className="w-4 h-4 text-gray-600" />
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => {
                      setNewDept({ ...newDept, parentCode: dept.department_code });
                      setIsAddDeptOpen(true);
                    }}
                    className="h-8 px-2"
                    title="하위 부서 추가"
                  >
                    <Plus className="w-4 h-4 text-blue-600" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setEditingDept(dept)}
                    className="h-8 px-2"
                    title="수정"
                  >
                    <Edit className="w-4 h-4 text-gray-600" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleDeleteDepartment(dept.department_code)}
                    className="h-8 px-2"
                    title="삭제"
                  >
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </Button>
                </>
              )}
            </div>
          </div>
          {hasChildren && isExpanded && renderDepartmentTree(dept.department_code, level + 1)}
        </div>
      );
    });
  };

  const topLevelDepartments = departments.filter((d) => d.department_parent_code === '0000');

  return (
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">조직 설정</h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1">조직 정보 및 부서를 관리합니다</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-full sm:w-fit overflow-x-auto">
        <button
          onClick={() => setActiveTab('info')}
          className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
            activeTab === 'info'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <div className="flex items-center justify-center space-x-2">
            <Building2 className="w-4 h-4" />
            <span>조직 정보</span>
          </div>
        </button>
        <button
          onClick={() => setActiveTab('departments')}
          className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
            activeTab === 'departments'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <div className="flex items-center justify-center space-x-2">
            <FolderTree className="w-4 h-4" />
            <span>부서 관리</span>
          </div>
        </button>
      </div>

      {/* Organization Info Tab */}
      {activeTab === 'info' && (
        <>
          <div className="flex justify-end">
            {!isEditing ? (
              <Button
                onClick={() => setIsEditing(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 flex items-center space-x-2"
              >
                <Edit className="w-4 h-4" />
                <span>정보 수정</span>
              </Button>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="outline" onClick={handleCancel} className="flex items-center space-x-2">
                  <X className="w-4 h-4" />
                  <span>취소</span>
                </Button>
                <Button
                  onClick={handleSave}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 flex items-center space-x-2"
                >
                  <Save className="w-4 h-4" />
                  <span>저장</span>
                </Button>
              </div>
            )}
          </div>

          {/* Organization Banner */}
          <Card className="overflow-hidden border-gray-100">
            <div className="h-32 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
            <div className="p-6 -mt-16">
              <div className="flex items-end space-x-6">
                <div className="h-24 w-24 bg-white rounded-2xl shadow-xl flex items-center justify-center border-4 border-white">
                  <Building2 className="w-12 h-12 text-blue-600" />
                </div>
                <div className="pb-2 flex-1">
                  <h2 className="text-2xl font-bold text-gray-900">{orgData.name}</h2>
                  <p className="text-gray-600">{orgData.industry}</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Organization Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Basic Information */}
            <Card className="p-6 border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Building2 className="w-5 h-5 mr-2 text-blue-600" />
                기본 정보
              </h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                    조직명
                  </Label>
                  <Input
                    id="name"
                    value={orgData.name}
                    onChange={(e) => setOrgData({ ...orgData, name: e.target.value })}
                    disabled={!isEditing}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="industry" className="text-sm font-medium text-gray-700">
                    산업 분야
                  </Label>
                  <Input
                    id="industry"
                    value={orgData.industry}
                    onChange={(e) => setOrgData({ ...orgData, industry: e.target.value })}
                    disabled={!isEditing}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="size" className="text-sm font-medium text-gray-700">
                    조직 규모
                  </Label>
                  <Input
                    id="size"
                    value={orgData.size}
                    onChange={(e) => setOrgData({ ...orgData, size: e.target.value })}
                    disabled={!isEditing}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="founded" className="text-sm font-medium text-gray-700">
                    설립 연도
                  </Label>
                  <Input
                    id="founded"
                    value={orgData.founded}
                    onChange={(e) => setOrgData({ ...orgData, founded: e.target.value })}
                    disabled={!isEditing}
                    className="mt-1"
                  />
                </div>
              </div>
            </Card>

            {/* Contact Information */}
            <Card className="p-6 border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-blue-600" />
                연락처 정보
              </h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    이메일
                  </Label>
                  <div className="mt-1 relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      value={orgData.email}
                      onChange={(e) => setOrgData({ ...orgData, email: e.target.value })}
                      disabled={!isEditing}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    전화번호
                  </Label>
                  <div className="mt-1 relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="phone"
                      value={orgData.phone}
                      onChange={(e) => setOrgData({ ...orgData, phone: e.target.value })}
                      disabled={!isEditing}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="website" className="text-sm font-medium text-gray-700">
                    웹사이트
                  </Label>
                  <div className="mt-1 relative">
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="website"
                      value={orgData.website}
                      onChange={(e) => setOrgData({ ...orgData, website: e.target.value })}
                      disabled={!isEditing}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address" className="text-sm font-medium text-gray-700">
                    주소
                  </Label>
                  <div className="mt-1 relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Textarea
                      id="address"
                      value={orgData.address}
                      onChange={(e) => setOrgData({ ...orgData, address: e.target.value })}
                      disabled={!isEditing}
                      className="pl-10 min-h-[80px]"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Description */}
          <Card className="p-6 border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">조직 소개</h3>
            <Textarea
              value={orgData.description}
              onChange={(e) => setOrgData({ ...orgData, description: e.target.value })}
              disabled={!isEditing}
              className="min-h-[120px]"
              placeholder="조직을 소개해주세요..."
            />
          </Card>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="p-6 border-gray-100 bg-gradient-to-br from-blue-50 to-blue-100">
              <Users className="w-8 h-8 text-blue-600 mb-2" />
              <div className="text-2xl font-bold text-gray-900">{mockMembers.length}</div>
              <div className="text-sm text-gray-600">전체 구성원</div>
            </Card>
            <Card className="p-6 border-gray-100 bg-gradient-to-br from-purple-50 to-purple-100">
              <Building2 className="w-8 h-8 text-purple-600 mb-2" />
              <div className="text-2xl font-bold text-gray-900">{topLevelDepartments.length}</div>
              <div className="text-sm text-gray-600">최상위 부서</div>
            </Card>
            <Card className="p-6 border-gray-100 bg-gradient-to-br from-green-50 to-green-100">
              <Calendar className="w-8 h-8 text-green-600 mb-2" />
              <div className="text-2xl font-bold text-gray-900">10+</div>
              <div className="text-sm text-gray-600">운영 년수</div>
            </Card>
            <Card className="p-6 border-gray-100 bg-gradient-to-br from-orange-50 to-orange-100">
              <Globe className="w-8 h-8 text-orange-600 mb-2" />
              <div className="text-2xl font-bold text-gray-900">글로벌</div>
              <div className="text-sm text-gray-600">서비스 범위</div>
            </Card>
          </div>
        </>
      )}

      {/* Departments Tab */}
      {activeTab === 'departments' && (
        <>
          {/* Department Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-4 border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-600">전체 부서</div>
                  <div className="text-2xl font-bold text-gray-900 mt-1">{departments.length}</div>
                </div>
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
            </Card>
            <Card className="p-4 border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-600">최상위 부서</div>
                  <div className="text-2xl font-bold text-gray-900 mt-1">
                    {topLevelDepartments.length}
                  </div>
                </div>
                <FolderTree className="w-8 h-8 text-purple-600" />
              </div>
            </Card>
            <Card className="p-4 border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-600">평균 구성원</div>
                  <div className="text-2xl font-bold text-gray-900 mt-1">
                    {Math.round(mockMembers.length / departments.length)}명
                  </div>
                </div>
                <Users className="w-8 h-8 text-green-600" />
              </div>
            </Card>
          </div>

          {/* Department Tree */}
          <Card className="p-6 border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <FolderTree className="w-5 h-5 mr-2 text-blue-600" />
                부서 구조
              </h3>
              <Dialog open={isAddDeptOpen} onOpenChange={setIsAddDeptOpen}>
                <DialogTrigger asChild>
                  <div>
                    <Button
                      onClick={() => {
                        setNewDept({ name: '', parentCode: '0000' });
                        setIsAddDeptOpen(true);
                      }}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      최상위 부서 추가
                    </Button>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>부서 추가</DialogTitle>
                    <DialogDescription>새로운 부서를 추가합니다.</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div>
                      <Label htmlFor="dept-name">부서명</Label>
                      <Input
                        id="dept-name"
                        value={newDept.name}
                        onChange={(e) => setNewDept({ ...newDept, name: e.target.value })}
                        placeholder="부서명을 입력하세요"
                        className="mt-2"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsAddDeptOpen(false)}>
                      취소
                    </Button>
                    <Button onClick={handleAddDepartment}>추가</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <div className="space-y-1">
              {/* Root level */}
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Building2 className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-gray-900">{orgData.name}</span>
                  <Badge variant="outline" className="text-xs">
                    {mockMembers.length}명
                  </Badge>
                </div>
              </div>
              {renderDepartmentTree('0000', 0)}
            </div>
          </Card>
        </>
      )}
    </div>
  );
}