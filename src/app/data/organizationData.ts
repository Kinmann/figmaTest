import { Department, Duty, Position } from './mockData';

// 부서 데이터 (61개)
export const departments: Department[] = [
  { department_idx: 1, organization_code: '0000', department_code: '0000-100', department_name: '미래성장R&D', department_parent_code: '0000', department_headcount: null, department_order: 1, department_status: 1, create_dt: '2026-02-23T07:11:24.000Z', update_dt: '2026-02-23T07:11:24.000Z', delete_dt: null },
  { department_idx: 2, organization_code: '0000', department_code: '0000-101', department_name: '글로벌사업개발본부', department_parent_code: '0000', department_headcount: null, department_order: 2, department_status: 1, create_dt: '2026-02-23T07:11:24.000Z', update_dt: '2026-02-23T07:11:24.000Z', delete_dt: null },
  { department_idx: 3, organization_code: '0000', department_code: '0000-102', department_name: '경영혁신본부', department_parent_code: '0000', department_headcount: null, department_order: 3, department_status: 1, create_dt: '2026-02-23T07:11:24.000Z', update_dt: '2026-02-23T07:11:24.000Z', delete_dt: null },
  { department_idx: 5, organization_code: '0000', department_code: '0000-103', department_name: '글로벌운영본부', department_parent_code: '0000', department_headcount: null, department_order: 5, department_status: 1, create_dt: '2026-02-23T07:11:24.000Z', update_dt: '2026-02-23T07:11:24.000Z', delete_dt: null },
  { department_idx: 6, organization_code: '0000', department_code: '0000-104', department_name: 'IT센터', department_parent_code: '0000', department_headcount: null, department_order: 6, department_status: 1, create_dt: '2026-02-23T07:11:24.000Z', update_dt: '2026-02-23T07:11:24.000Z', delete_dt: null },
  { department_idx: 7, organization_code: '0000', department_code: '0000-105', department_name: '마케팅본부', department_parent_code: '0000', department_headcount: null, department_order: 7, department_status: 1, create_dt: '2026-02-23T07:11:24.000Z', update_dt: '2026-02-23T07:11:24.000Z', delete_dt: null },
  { department_idx: 8, organization_code: '0000', department_code: '0000-106', department_name: '인사문화팀', department_parent_code: '0000-102', department_headcount: null, department_order: 1, department_status: 1, create_dt: '2026-02-23T07:13:40.000Z', update_dt: '2026-02-23T07:13:40.000Z', delete_dt: null },
  { department_idx: 9, organization_code: '0000', department_code: '0000-107', department_name: '재무회계팀', department_parent_code: '0000-102', department_headcount: null, department_order: 2, department_status: 1, create_dt: '2026-02-23T07:13:40.000Z', update_dt: '2026-02-23T07:13:40.000Z', delete_dt: null },
  { department_idx: 10, organization_code: '0000', department_code: '0000-108', department_name: '서비스전략실', department_parent_code: '0000-103', department_headcount: null, department_order: 1, department_status: 1, create_dt: '2026-02-23T07:15:24.000Z', update_dt: '2026-02-23T07:15:24.000Z', delete_dt: null },
  { department_idx: 11, organization_code: '0000', department_code: '0000-109', department_name: '운영실', department_parent_code: '0000-103', department_headcount: null, department_order: 2, department_status: 1, create_dt: '2026-02-23T07:15:24.000Z', update_dt: '2026-02-23T07:15:24.000Z', delete_dt: null },
  { department_idx: 12, organization_code: '0000', department_code: '0000-110', department_name: 'QA실', department_parent_code: '0000-104', department_headcount: null, department_order: 1, department_status: 1, create_dt: '2026-02-23T07:16:01.000Z', update_dt: '2026-02-23T07:16:01.000Z', delete_dt: null },
  { department_idx: 13, organization_code: '0000', department_code: '0000-111', department_name: '웹서비스실', department_parent_code: '0000-104', department_headcount: null, department_order: 2, department_status: 1, create_dt: '2026-02-23T07:16:01.000Z', update_dt: '2026-02-23T07:16:01.000Z', delete_dt: null },
  { department_idx: 14, organization_code: '0000', department_code: '0000-112', department_name: '글로벌서비스1팀', department_parent_code: '0000-108', department_headcount: null, department_order: 1, department_status: 1, create_dt: '2026-02-23T07:16:01.000Z', update_dt: '2026-02-23T07:16:01.000Z', delete_dt: null },
  { department_idx: 15, organization_code: '0000', department_code: '0000-113', department_name: '글로벌서비스2팀', department_parent_code: '0000-108', department_headcount: null, department_order: 2, department_status: 1, create_dt: '2026-02-23T07:16:01.000Z', update_dt: '2026-02-23T07:16:01.000Z', delete_dt: null },
  { department_idx: 16, organization_code: '0000', department_code: '0000-114', department_name: '글로벌서비스3팀', department_parent_code: '0000-108', department_headcount: null, department_order: 3, department_status: 1, create_dt: '2026-02-23T07:16:01.000Z', update_dt: '2026-02-23T07:16:01.000Z', delete_dt: null },
  { department_idx: 17, organization_code: '0000', department_code: '0000-115', department_name: '글로벌서비스4팀', department_parent_code: '0000-108', department_headcount: null, department_order: 4, department_status: 1, create_dt: '2026-02-23T07:16:01.000Z', update_dt: '2026-02-23T07:16:01.000Z', delete_dt: null },
  { department_idx: 18, organization_code: '0000', department_code: '0000-116', department_name: '중국어1파트', department_parent_code: '0000-112', department_headcount: null, department_order: 1, department_status: 1, create_dt: '2026-02-23T07:16:01.000Z', update_dt: '2026-02-23T07:16:01.000Z', delete_dt: null },
  { department_idx: 19, organization_code: '0000', department_code: '0000-117', department_name: '중국어2파트', department_parent_code: '0000-112', department_headcount: null, department_order: 2, department_status: 1, create_dt: '2026-02-23T07:16:01.000Z', update_dt: '2026-02-23T07:16:01.000Z', delete_dt: null },
  { department_idx: 20, organization_code: '0000', department_code: '0000-118', department_name: '중국어3파트', department_parent_code: '0000-112', department_headcount: null, department_order: 3, department_status: 1, create_dt: '2026-02-23T07:16:01.000Z', update_dt: '2026-02-23T07:16:01.000Z', delete_dt: null },
  { department_idx: 21, organization_code: '0000', department_code: '0000-119', department_name: '일본어1파트', department_parent_code: '0000-113', department_headcount: null, department_order: 1, department_status: 1, create_dt: '2026-02-23T07:16:01.000Z', update_dt: '2026-02-23T07:16:01.000Z', delete_dt: null },
  { department_idx: 22, organization_code: '0000', department_code: '0000-120', department_name: '일본어2파트', department_parent_code: '0000-113', department_headcount: null, department_order: 2, department_status: 1, create_dt: '2026-02-23T07:16:01.000Z', update_dt: '2026-02-23T07:16:01.000Z', delete_dt: null },
  { department_idx: 23, organization_code: '0000', department_code: '0000-121', department_name: '영어1파트', department_parent_code: '0000-114', department_headcount: null, department_order: 1, department_status: 1, create_dt: '2026-02-23T07:16:01.000Z', update_dt: '2026-02-23T07:16:01.000Z', delete_dt: null },
  { department_idx: 24, organization_code: '0000', department_code: '0000-122', department_name: '영어2파트', department_parent_code: '0000-114', department_headcount: null, department_order: 2, department_status: 1, create_dt: '2026-02-23T07:16:01.000Z', update_dt: '2026-02-23T07:16:01.000Z', delete_dt: null },
  { department_idx: 25, organization_code: '0000', department_code: '0000-123', department_name: '글로벌1파트', department_parent_code: '0000-115', department_headcount: null, department_order: 1, department_status: 1, create_dt: '2026-02-23T07:16:01.000Z', update_dt: '2026-02-23T07:16:01.000Z', delete_dt: null },
  { department_idx: 26, organization_code: '0000', department_code: '0000-124', department_name: '글로벌2파트', department_parent_code: '0000-115', department_headcount: null, department_order: 2, department_status: 1, create_dt: '2026-02-23T07:16:01.000Z', update_dt: '2026-02-23T07:16:01.000Z', delete_dt: null },
  { department_idx: 27, organization_code: '0000', department_code: '0000-125', department_name: '운영1팀', department_parent_code: '0000-109', department_headcount: null, department_order: 1, department_status: 1, create_dt: '2026-02-23T07:16:01.000Z', update_dt: '2026-02-23T07:16:01.000Z', delete_dt: null },
  { department_idx: 28, organization_code: '0000', department_code: '0000-126', department_name: '운영2팀', department_parent_code: '0000-109', department_headcount: null, department_order: 2, department_status: 1, create_dt: '2026-02-23T07:16:01.000Z', update_dt: '2026-02-23T07:16:01.000Z', delete_dt: null },
  { department_idx: 29, organization_code: '0000', department_code: '0000-127', department_name: '운영3팀', department_parent_code: '0000-109', department_headcount: null, department_order: 3, department_status: 1, create_dt: '2026-02-23T07:16:01.000Z', update_dt: '2026-02-23T07:16:01.000Z', delete_dt: null },
  { department_idx: 30, organization_code: '0000', department_code: '0000-128', department_name: '콘텐츠연구소', department_parent_code: '0000-104', department_headcount: null, department_order: 3, department_status: 1, create_dt: '2026-02-23T07:16:01.000Z', update_dt: '2026-02-23T07:16:01.000Z', delete_dt: null },
];

// 직책 데이터 (11개)
export const duties: Duty[] = [
  { duty_idx: 1, duty_code: 'D-G01', duty_name: 'CEO', duty_order: 1, organization_code: '0000', duty_status: 1, create_dt: '2026-02-23T07:02:29.000Z', update_dt: '2026-02-23T07:02:29.000Z', delete_dt: null },
  { duty_idx: 2, duty_code: 'D-G02', duty_name: '부장', duty_order: 2, organization_code: '0000', duty_status: 1, create_dt: '2026-02-23T07:02:29.000Z', update_dt: '2026-02-23T07:02:29.000Z', delete_dt: null },
  { duty_idx: 3, duty_code: 'D-G03', duty_name: '과장', duty_order: 3, organization_code: '0000', duty_status: 1, create_dt: '2026-02-23T07:02:29.000Z', update_dt: '2026-02-23T07:02:29.000Z', delete_dt: null },
  { duty_idx: 4, duty_code: 'D-G04', duty_name: '대리', duty_order: 4, organization_code: '0000', duty_status: 1, create_dt: '2026-02-23T07:02:29.000Z', update_dt: '2026-02-23T07:02:29.000Z', delete_dt: null },
  { duty_idx: 5, duty_code: 'D-G05', duty_name: '주임', duty_order: 5, organization_code: '0000', duty_status: 1, create_dt: '2026-02-23T07:02:29.000Z', update_dt: '2026-02-23T07:02:29.000Z', delete_dt: null },
  { duty_idx: 6, duty_code: 'D-G06', duty_name: '사원', duty_order: 6, organization_code: '0000', duty_status: 1, create_dt: '2026-02-23T07:02:29.000Z', update_dt: '2026-02-23T07:02:29.000Z', delete_dt: null },
  { duty_idx: 7, duty_code: 'D-G07', duty_name: '수석연구원', duty_order: 3, organization_code: '0000', duty_status: 1, create_dt: '2026-02-23T07:05:07.000Z', update_dt: '2026-02-23T07:05:07.000Z', delete_dt: null },
  { duty_idx: 8, duty_code: 'D-G08', duty_name: '책임연구원', duty_order: 4, organization_code: '0000', duty_status: 1, create_dt: '2026-02-23T07:05:07.000Z', update_dt: '2026-02-23T07:05:07.000Z', delete_dt: null },
  { duty_idx: 9, duty_code: 'D-G09', duty_name: '전임연구원', duty_order: 5, organization_code: '0000', duty_status: 1, create_dt: '2026-02-23T07:05:07.000Z', update_dt: '2026-02-23T07:05:07.000Z', delete_dt: null },
  { duty_idx: 10, duty_code: 'D-G10', duty_name: '연구원', duty_order: 6, organization_code: '0000', duty_status: 1, create_dt: '2026-02-23T07:05:07.000Z', update_dt: '2026-02-23T07:05:07.000Z', delete_dt: null },
  { duty_idx: 11, duty_code: 'GUEST', duty_name: '게스트', duty_order: 9999, organization_code: '9999', duty_status: 1, create_dt: '2026-02-23T07:05:07.000Z', update_dt: '2026-02-23T07:05:07.000Z', delete_dt: null },
];

// 직급 데이터 (7개)
export const positions: Position[] = [
  { position_idx: 1, position_code: 'P-G01', position_name: 'CEO', organization_code: '0000', position_status: 1, position_order: 1, create_dt: '2026-02-23T07:26:23.000Z', update_dt: '2026-02-23T07:26:23.000Z', delete_dt: null },
  { position_idx: 2, position_code: 'P-G02', position_name: '본부장', organization_code: '0000', position_status: 1, position_order: 2, create_dt: '2026-02-23T07:26:23.000Z', update_dt: '2026-02-23T07:26:23.000Z', delete_dt: null },
  { position_idx: 3, position_code: 'P-G03', position_name: '센터장', organization_code: '0000', position_status: 1, position_order: 3, create_dt: '2026-02-23T07:26:23.000Z', update_dt: '2026-02-23T07:26:23.000Z', delete_dt: null },
  { position_idx: 4, position_code: 'P-G04', position_name: '실장', organization_code: '0000', position_status: 1, position_order: 4, create_dt: '2026-02-23T07:26:23.000Z', update_dt: '2026-02-23T07:26:23.000Z', delete_dt: null },
  { position_idx: 5, position_code: 'P-G05', position_name: '팀장', organization_code: '0000', position_status: 1, position_order: 5, create_dt: '2026-02-23T07:26:23.000Z', update_dt: '2026-02-23T07:26:23.000Z', delete_dt: null },
  { position_idx: 6, position_code: 'P-G06', position_name: '파트장', organization_code: '0000', position_status: 1, position_order: 6, create_dt: '2026-02-23T07:26:23.000Z', update_dt: '2026-02-23T07:26:23.000Z', delete_dt: null },
  { position_idx: 7, position_code: 'P-G07', position_name: '님', organization_code: '0000', position_status: 1, position_order: 7, create_dt: '2026-02-23T07:26:23.000Z', update_dt: '2026-02-23T07:26:23.000Z', delete_dt: null },
];

// Helper functions
export const getDepartmentByCode = (code: string): Department | undefined => {
  return departments.find((d) => d.department_code === code);
};

export const getDutyByCode = (code: string): Duty | undefined => {
  return duties.find((d) => d.duty_code === code);
};

export const getPositionByCode = (code: string): Position | undefined => {
  return positions.find((p) => p.position_code === code);
};

export const getTopLevelDepartments = (): Department[] => {
  return departments.filter((d) => d.department_parent_code === '0000');
};

export const getSubDepartments = (parentCode: string): Department[] => {
  return departments.filter((d) => d.department_parent_code === parentCode);
};