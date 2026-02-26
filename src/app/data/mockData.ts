export interface Member {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  departmentCode?: string;
  status: 'Active' | 'Inactive' | 'Pending';
  avatar: string;
  joinDate: string;
  lastActive: string;
  phone?: string;
  location?: string;
  memberCode?: string;
  birthday?: string;
  duty?: string;
  dutyCode?: string;
  position?: string;
  positionCode?: string;
}

export interface Organization {
  id: string;
  name: string;
  industry: string;
  size: string;
  website: string;
  address: string;
  phone: string;
  email: string;
  founded: string;
  description: string;
}

export interface Department {
  department_idx: number;
  organization_code: string;
  department_code: string;
  department_name: string;
  department_parent_code: string | null;
  department_headcount: number | null;
  department_order: number;
  department_status: number;
  create_dt: string;
  update_dt: string;
  delete_dt: string | null;
}

export interface Duty {
  duty_idx: number;
  duty_code: string;
  duty_name: string;
  duty_order: number;
  organization_code: string;
  duty_status: number;
  create_dt: string;
  update_dt: string;
  delete_dt: string | null;
}

export interface Position {
  position_idx: number;
  position_code: string;
  position_name: string;
  organization_code: string;
  position_status: number;
  position_order: number;
  create_dt: string;
  update_dt: string;
  delete_dt: string | null;
}

export const mockOrganization: Organization = {
  id: 'org-0000',
  name: '게임덱스',
  industry: 'Game Publishing & Development',
  size: '50-100 employees',
  website: 'https://gamedex.co.kr',
  address: 'Seoul, South Korea',
  phone: '+82-2-1234-5678',
  email: 'contact@gamedex.co.kr',
  founded: '2016',
  description: 'A leading game publishing and service company specializing in global game operations.',
};

// Helper function to format date
const formatDate = (dateStr: string | null) => {
  if (!dateStr) return '2026-02-24';
  return dateStr.split('T')[0];
};

// Helper function to calculate last active (random for demo)
const getLastActive = () => {
  const options = ['방금', '5분 전', '1시간 전', '2시간 전', '오늘', '어제', '2일 전', '1주일 전'];
  return options[Math.floor(Math.random() * options.length)];
};

// Convert status
const convertStatus = (status: string): 'Active' | 'Inactive' | 'Pending' => {
  if (status === 'PENDING') return 'Pending';
  if (status === 'ACTIVE') return 'Active';
  if (status === 'INACTIVE') return 'Inactive';
  return 'Pending';
};

// Original API response data
const apiData = {
  "userList": [
    {
      "member_idx": 51,
      "member_code": null,
      "member_name": "관리자",
      "member_email": "gwadmin@gamedex.co.kr",
      "member_phone_number": null,
      "member_birthday": null,
      "member_department_code": null,
      "department_name": null,
      "department_parent_code": null,
      "member_organization_code": "0000",
      "member_duty_code": null,
      "duty_name": null,
      "member_position_code": null,
      "position_name": null,
      "member_status": "PENDING",
      "create_dt": "2026-02-24T05:07:15.000Z",
      "update_dt": "2026-02-24T05:07:15.000Z"
    },
    {
      "member_idx": 93,
      "member_code": "160401",
      "member_name": "배준석",
      "member_email": "jun@gamedex.co.kr",
      "member_phone_number": "010-4065-2951",
      "member_birthday": "1972-12-02T00:00:00.000+09:00",
      "member_department_code": null,
      "department_name": null,
      "department_parent_code": null,
      "member_organization_code": "0000",
      "member_duty_code": null,
      "duty_name": null,
      "member_position_code": "P-G01",
      "position_name": "CEO",
      "member_status": "PENDING",
      "create_dt": "2026-02-24T05:07:15.000Z",
      "update_dt": "2026-02-24T05:07:15.000Z"
    },
    {
      "member_idx": 36,
      "member_code": "GAMEDEX",
      "member_name": "게임덱스",
      "member_email": "gamedex@gamedex.co.kr",
      "member_phone_number": "010-9509-7303",
      "member_birthday": null,
      "member_department_code": null,
      "department_name": null,
      "department_parent_code": null,
      "member_organization_code": "0000",
      "member_duty_code": null,
      "duty_name": null,
      "member_position_code": "P-G07",
      "position_name": "님",
      "member_status": "PENDING",
      "create_dt": "2026-02-24T05:07:15.000Z",
      "update_dt": "2026-02-24T05:07:15.000Z"
    },
    {
      "member_idx": 219,
      "member_code": "230202",
      "member_name": "김영준",
      "member_email": "yjkim@gamedex.co.kr",
      "member_phone_number": "010-5110-8126",
      "member_birthday": null,
      "member_department_code": null,
      "department_name": null,
      "department_parent_code": null,
      "member_organization_code": "0000",
      "member_duty_code": "D-G04",
      "duty_name": "대리",
      "member_position_code": "P-G07",
      "position_name": "님",
      "member_status": "PENDING",
      "create_dt": "2026-02-24T05:07:15.000Z",
      "update_dt": "2026-02-24T05:07:15.000Z"
    },
    {
      "member_idx": 217,
      "member_code": "251202",
      "member_name": "김용현",
      "member_email": "yhkim@gamedex.co.kr",
      "member_phone_number": "010-2290-3112",
      "member_birthday": null,
      "member_department_code": "0000-100",
      "department_name": "미래성장R&D",
      "department_parent_code": "0000",
      "member_organization_code": "0000",
      "member_duty_code": null,
      "duty_name": null,
      "member_position_code": "P-G04",
      "position_name": "실장",
      "member_status": "PENDING",
      "create_dt": "2026-02-24T05:07:15.000Z",
      "update_dt": "2026-02-24T05:07:15.000Z"
    },
    {
      "member_idx": 237,
      "member_code": "999999",
      "member_name": "테스트",
      "member_email": "test@gamedex.co.kr",
      "member_phone_number": "010-1234-1234",
      "member_birthday": "1978-02-16",
      "member_department_code": "0000-100",
      "department_name": "미래성장R&D",
      "department_parent_code": "0000",
      "member_organization_code": "0000",
      "member_duty_code": "D-G02",
      "duty_name": "부장",
      "member_position_code": "P-G02",
      "position_name": "본부장",
      "member_status": "PENDING",
      "create_dt": "2026-02-25T04:32:49.000Z",
      "update_dt": "2026-02-25T04:32:49.000Z"
    },
    {
      "member_idx": 238,
      "member_code": "9999",
      "member_name": "테스트",
      "member_email": "test2@gamedex.co.kr",
      "member_phone_number": "010-1234-1234",
      "member_birthday": "1991-02-25",
      "member_department_code": "0000-100",
      "department_name": "미래성장R&D",
      "department_parent_code": "0000",
      "member_organization_code": "0000",
      "member_duty_code": "D-G04",
      "duty_name": "대리",
      "member_position_code": "P-G06",
      "position_name": "파트장",
      "member_status": "PENDING",
      "create_dt": "2026-02-25T04:37:21.000Z",
      "update_dt": "2026-02-25T04:37:21.000Z"
    },
    {
      "member_idx": 239,
      "member_code": "999",
      "member_name": "테스트",
      "member_email": "test3@gamedex.co.kr",
      "member_phone_number": "010-1234-1234",
      "member_birthday": "2003-02-25",
      "member_department_code": "0000-100",
      "department_name": "미래성장R&D",
      "department_parent_code": "0000",
      "member_organization_code": "0000",
      "member_duty_code": "D-G05",
      "duty_name": "주임",
      "member_position_code": "P-G06",
      "position_name": "파트장",
      "member_status": "PENDING",
      "create_dt": "2026-02-25T04:38:50.000Z",
      "update_dt": "2026-02-25T04:38:50.000Z"
    },
    {
      "member_idx": 240,
      "member_code": "99",
      "member_name": "테스트",
      "member_email": "test4@gamedex.co.kr",
      "member_phone_number": "010-1234-1234",
      "member_birthday": "2006-02-25",
      "member_department_code": "0000-100",
      "department_name": "미래성장R&D",
      "department_parent_code": "0000",
      "member_organization_code": "0000",
      "member_duty_code": "D-G10",
      "duty_name": "연구원",
      "member_position_code": "P-G07",
      "position_name": "님",
      "member_status": "PENDING",
      "create_dt": "2026-02-25T04:40:12.000Z",
      "update_dt": "2026-02-25T04:40:12.000Z"
    },
    {
      "member_idx": 241,
      "member_code": "88888",
      "member_name": "테스트",
      "member_email": "test5@gamedex.co.kr",
      "member_phone_number": "010-1234-1234",
      "member_birthday": "2026-02-03",
      "member_department_code": "0000-100",
      "department_name": "미래성장R&D",
      "department_parent_code": "0000",
      "member_organization_code": "0000",
      "member_duty_code": "GUEST",
      "duty_name": "게스트",
      "member_position_code": "P-G07",
      "position_name": "님",
      "member_status": "PENDING",
      "create_dt": "2026-02-25T04:54:19.000Z",
      "update_dt": "2026-02-25T04:54:19.000Z"
    },
    {
      "member_idx": 97,
      "member_code": "250902",
      "member_name": "백정우",
      "member_email": "jwbaek@gamedex.co.kr",
      "member_phone_number": "010-8728-3327",
      "member_birthday": null,
      "member_department_code": "0000-101",
      "department_name": "글로벌사업개발본부",
      "department_parent_code": "0000",
      "member_organization_code": "0000",
      "member_duty_code": "D-G02",
      "duty_name": "부장",
      "member_position_code": "P-G02",
      "position_name": "본부장",
      "member_status": "PENDING",
      "create_dt": "2026-02-24T05:07:15.000Z",
      "update_dt": "2026-02-24T05:07:15.000Z"
    },
    {
      "member_idx": 117,
      "member_code": "180903",
      "member_name": "권순남",
      "member_email": "ksn0903@gamedex.co.kr",
      "member_phone_number": "010-3433-1723",
      "member_birthday": "1977-07-21T00:00:00.000+09:00",
      "member_department_code": "0000-102",
      "department_name": "경영혁신본부",
      "department_parent_code": "0000",
      "member_organization_code": "0000",
      "member_duty_code": "D-G02",
      "duty_name": "부장",
      "member_position_code": "P-G02",
      "position_name": "본부장",
      "member_status": "PENDING",
      "create_dt": "2026-02-24T05:07:15.000Z",
      "update_dt": "2026-02-24T05:07:15.000Z"
    },
    {
      "member_idx": 167,
      "member_code": "210303",
      "member_name": "송호준",
      "member_email": "shj@gamedex.co.kr",
      "member_phone_number": "010-9688-4912",
      "member_birthday": "1976-09-10T00:00:00.000+09:00",
      "member_department_code": "0000-103",
      "department_name": "글로벌운영본부",
      "department_parent_code": "0000",
      "member_organization_code": "0000",
      "member_duty_code": "D-G02",
      "duty_name": "부장",
      "member_position_code": "P-G02",
      "position_name": "본부장",
      "member_status": "PENDING",
      "create_dt": "2026-02-24T05:07:15.000Z",
      "update_dt": "2026-02-24T05:07:15.000Z"
    },
    {
      "member_idx": 199,
      "member_code": "170602",
      "member_name": "남희욱",
      "member_email": "troiing@gamedex.co.kr",
      "member_phone_number": "010-6221-3881",
      "member_birthday": "1981-10-25T00:00:00.000+09:00",
      "member_department_code": "0000-104",
      "department_name": "IT센터",
      "department_parent_code": "0000",
      "member_organization_code": "0000",
      "member_duty_code": "D-G07",
      "duty_name": "수석연구원",
      "member_position_code": "P-G03",
      "position_name": "센터장",
      "member_status": "PENDING",
      "create_dt": "2026-02-24T05:07:15.000Z",
      "update_dt": "2026-02-24T05:07:15.000Z"
    },
    {
      "member_idx": 142,
      "member_code": "180502",
      "member_name": "장주상",
      "member_email": "nunkamas@gamedex.co.kr",
      "member_phone_number": "010-4870-4421",
      "member_birthday": "1978-08-09T00:00:00.000+09:00",
      "member_department_code": "0000-105",
      "department_name": "마케팅본부",
      "department_parent_code": "0000",
      "member_organization_code": "0000",
      "member_duty_code": "D-G02",
      "duty_name": "부장",
      "member_position_code": "P-G02",
      "position_name": "본부장",
      "member_status": "PENDING",
      "create_dt": "2026-02-24T05:07:15.000Z",
      "update_dt": "2026-02-24T05:07:15.000Z"
    },
    {
      "member_idx": 155,
      "member_code": "220902",
      "member_name": "김시현",
      "member_email": "sean@gamedex.co.kr",
      "member_phone_number": "010-9317-8387",
      "member_birthday": "1983-05-08T00:00:00.000+09:00",
      "member_department_code": "0000-106",
      "department_name": "인사문화팀",
      "department_parent_code": "0000-102",
      "member_organization_code": "0000",
      "member_duty_code": null,
      "duty_name": null,
      "member_position_code": "P-G05",
      "position_name": "팀장",
      "member_status": "PENDING",
      "create_dt": "2026-02-24T05:07:15.000Z",
      "update_dt": "2026-02-24T05:07:15.000Z"
    },
    {
      "member_idx": 77,
      "member_code": "220906",
      "member_name": "임재학",
      "member_email": "jhlim@gamedex.co.kr",
      "member_phone_number": "010-5467-4566",
      "member_birthday": "1992-01-23T00:00:00.000+09:00",
      "member_department_code": "0000-106",
      "department_name": "인사문화팀",
      "department_parent_code": "0000-102",
      "member_organization_code": "0000",
      "member_duty_code": "D-G04",
      "duty_name": "대리",
      "member_position_code": "P-G07",
      "position_name": "님",
      "member_status": "PENDING",
      "create_dt": "2026-02-24T05:07:15.000Z",
      "update_dt": "2026-02-24T05:07:15.000Z"
    },
    {
      "member_idx": 15,
      "member_code": "250501",
      "member_name": "김다은",
      "member_email": "dekim@gamedex.co.kr",
      "member_phone_number": "010-3375-8186",
      "member_birthday": "1991-06-01T00:00:00.000+09:00",
      "member_department_code": "0000-106",
      "department_name": "인사문화팀",
      "department_parent_code": "0000-102",
      "member_organization_code": "0000",
      "member_duty_code": "D-G04",
      "duty_name": "대리",
      "member_position_code": "P-G07",
      "position_name": "님",
      "member_status": "PENDING",
      "create_dt": "2026-02-24T05:07:15.000Z",
      "update_dt": "2026-02-24T05:07:15.000Z"
    },
    {
      "member_idx": 1,
      "member_code": "230303",
      "member_name": "백주현",
      "member_email": "100c@gamedex.co.kr",
      "member_phone_number": "010-7177-1207",
      "member_birthday": null,
      "member_department_code": "0000-107",
      "department_name": "재무회계팀",
      "department_parent_code": "0000-102",
      "member_organization_code": "0000",
      "member_duty_code": null,
      "duty_name": null,
      "member_position_code": "P-G05",
      "position_name": "팀장",
      "member_status": "PENDING",
      "create_dt": "2026-02-24T05:07:15.000Z",
      "update_dt": "2026-02-24T05:07:15.000Z"
    },
    {
      "member_idx": 221,
      "member_code": "250802",
      "member_name": "박윤정",
      "member_email": "yjpark1@gamedex.co.kr",
      "member_phone_number": "010-2048-7238",
      "member_birthday": null,
      "member_department_code": "0000-107",
      "department_name": "재무회계팀",
      "department_parent_code": "0000-102",
      "member_organization_code": "0000",
      "member_duty_code": "D-G06",
      "duty_name": "사원",
      "member_position_code": "P-G07",
      "position_name": "님",
      "member_status": "PENDING",
      "create_dt": "2026-02-24T05:07:15.000Z",
      "update_dt": "2026-02-24T05:07:15.000Z"
    }
  ]
};

// Transform API data to Member format
export const mockMembers: Member[] = apiData.userList.map((user) => ({
  id: user.member_idx.toString(),
  name: user.member_name,
  email: user.member_email,
  role: user.position_name || user.duty_name || '님',
  department: user.department_name || '미배정',
  departmentCode: user.member_department_code,
  status: convertStatus(user.member_status),
  avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.member_name}`,
  joinDate: formatDate(user.create_dt),
  lastActive: getLastActive(),
  phone: user.member_phone_number || undefined,
  location: undefined,
  memberCode: user.member_code || undefined,
  birthday: user.member_birthday ? formatDate(user.member_birthday) : undefined,
  duty: user.duty_name || undefined,
  dutyCode: user.member_duty_code,
  position: user.position_name || undefined,
  positionCode: user.member_position_code,
}));

// Re-export organization data for convenience
export { departments, duties, positions, getDepartmentByCode, getDutyByCode, getPositionByCode, getTopLevelDepartments, getSubDepartments } from './organizationData';