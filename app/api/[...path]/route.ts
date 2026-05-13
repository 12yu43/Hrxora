import { NextRequest, NextResponse } from "next/server";

type HandlerContext = {
  params: {
    path?: string[];
  };
};

const roles = [
  {
    id: "admin",
    name: "Admin",
    permissions: ["all"],
  },
  {
    id: "hr",
    name: "HR",
    permissions: ["employees", "attendance", "leave", "payroll", "reports"],
  },
  {
    id: "manager",
    name: "Manager",
    permissions: ["team", "approvals", "timesheets", "production-review"],
  },
  {
    id: "employee",
    name: "Employee",
    permissions: ["ess", "leave-apply", "attendance-punch", "production-entry"],
  },
];

const employees = [
  {
    id: "HRX-0001",
    name: "Anita Verma",
    department: "HR",
    designation: "HR Executive",
    manager: "Meera Singh",
    status: "Active",
  },
  {
    id: "HRX-0002",
    name: "Ravi Kumar",
    department: "Production",
    designation: "Contractor",
    manager: "Amit Sharma",
    status: "Active",
  },
  {
    id: "HRX-0003",
    name: "Kabir Khan",
    department: "Payroll",
    designation: "Payroll Officer",
    manager: "Meera Singh",
    status: "On Notice",
  },
];

const productionItems = [
  { id: "item-1", item: "CENTER RULA", rate: 80, unit: "pieces" },
  { id: "item-2", item: "CUTT RULA", rate: 180, unit: "pieces" },
  { id: "item-3", item: "DABBI SET", rate: 280, unit: "sets" },
];

function json(data: unknown, status = 200) {
  return NextResponse.json(data, { status });
}

function ok(message: string, payload: Record<string, unknown> = {}) {
  return json({
    success: true,
    message,
    ...payload,
  });
}

async function readBody(request: NextRequest) {
  try {
    return await request.json();
  } catch {
    return {};
  }
}

function routePath(context: HandlerContext) {
  return `/${(context.params.path ?? []).join("/")}`;
}

export async function GET(request: NextRequest, context: HandlerContext) {
  const path = routePath(context);
  const search = request.nextUrl.searchParams;

  if (path === "/roles") {
    return ok("Roles fetched", { roles });
  }

  if (path === "/employees") {
    const query = search.get("q")?.toLowerCase();
    const department = search.get("department")?.toLowerCase();
    const filtered = employees.filter((employee) => {
      const matchesQuery = query
        ? `${employee.id} ${employee.name} ${employee.designation}`
            .toLowerCase()
            .includes(query)
        : true;
      const matchesDepartment = department
        ? employee.department.toLowerCase() === department
        : true;

      return matchesQuery && matchesDepartment;
    });

    return ok("Employee directory fetched", { employees: filtered });
  }

  if (path.match(/^\/employees\/[^/]+$/)) {
    const id = path.split("/")[2];
    const employee = employees.find((item) => item.id === id) ?? employees[0];
    return ok("Employee details fetched", { employee });
  }

  if (path === "/employees/export") {
    return ok("Employee export generated", {
      format: "csv",
      downloadUrl: "/exports/hrxora-employees.csv",
    });
  }

  if (path === "/attendance/logs") {
    return ok("Attendance logs fetched", {
      logs: [
        {
          employeeId: "HRX-0002",
          date: "2026-05-13",
          status: "Present",
          punchIn: "09:28",
          punchOut: "18:42",
          overtimeMinutes: 74,
        },
      ],
    });
  }

  if (path === "/attendance/overtime") {
    return ok("Overtime calculated", {
      rule: "Standard workday is 8 hours",
      totalOvertimeHours: 32,
    });
  }

  if (path.match(/^\/leaves\/balance\/[^/]+$/)) {
    return ok("Leave balance fetched", {
      balance: {
        casual: 6,
        sick: 4,
        paid: 12,
        unpaid: 0,
      },
    });
  }

  if (path === "/leaves/pending") {
    return ok("Pending leaves fetched", {
      leaves: [
        {
          id: "leave-102",
          employeeId: "HRX-0001",
          type: "Sick",
          days: 2,
          status: "Pending",
        },
      ],
    });
  }

  if (path.match(/^\/timesheets\/project\/[^/]+$/)) {
    return ok("Project-wise timesheets fetched", {
      projectId: path.split("/")[3],
      hours: 124,
      approvedHours: 116,
    });
  }

  if (path === "/production/items") {
    return ok("Production items fetched", { items: productionItems });
  }

  if (path === "/production/logs") {
    return ok("Production logs fetched", {
      logs: [
        {
          id: "prod-901",
          employeeId: "HRX-0002",
          item: "CENTER RULA",
          quantity: 120,
          rate: 80,
          payment: 9600,
          status: "Pending Manager Approval",
        },
      ],
    });
  }

  if (path === "/payroll/reports") {
    return ok("Payroll reports fetched", {
      cycle: "May 2026",
      salaryExpense: 4280000,
      productionEarnings: 184000,
      statutoryDeductions: 312000,
    });
  }

  return ok("Hrxora API is running", {
    requestedPath: path,
    hint: "Use /api/roles, /api/employees, /api/production/items, or /api/payroll/reports",
  });
}

export async function POST(request: NextRequest, context: HandlerContext) {
  const path = routePath(context);
  const body = await readBody(request);

  if (path === "/auth/login") {
    return ok("Login successful", {
      token: "demo-jwt-token",
      refreshToken: "demo-refresh-token",
      user: {
        id: "HRX-ADMIN",
        name: "Hrxora Admin",
        role: "Admin",
      },
    });
  }

  if (path === "/auth/refresh") {
    return ok("Token refreshed", {
      token: "new-demo-jwt-token",
    });
  }

  if (path === "/roles") {
    return ok("Role created", {
      role: {
        id: "custom-role",
        ...body,
      },
    });
  }

  if (path === "/employees") {
    return ok("Employee created with auto ID", {
      employee: {
        id: "HRX-0004",
        status: "Active",
        ...body,
      },
    });
  }

  if (path.match(/^\/employees\/[^/]+\/documents$/)) {
    return ok("Employee document uploaded", {
      employeeId: path.split("/")[2],
      documents: ["aadhaar", "pan", "resume"],
    });
  }

  if (path === "/attendance/sync") {
    return ok("Biometric logs synced", {
      syncedRecords: 48,
      source: "biometric-device",
    });
  }

  if (path === "/attendance/punch") {
    return ok("Attendance punch recorded", {
      punch: {
        employeeId: body.employeeId ?? "HRX-0002",
        type: body.type ?? "in",
        channel: "ESS",
        timestamp: new Date().toISOString(),
      },
    });
  }

  if (path === "/attendance/import") {
    return ok("Attendance import queued", {
      records: body.records ?? 0,
    });
  }

  if (path === "/shifts") {
    return ok("Shift created", {
      shift: {
        name: body.name ?? "Morning",
        start: body.start ?? "09:30",
        end: body.end ?? "18:30",
        standardHours: 8,
      },
    });
  }

  if (path === "/leaves/policy") {
    return ok("Leave policy saved", {
      policy: body,
    });
  }

  if (path === "/leaves/apply") {
    return ok("Leave application submitted", {
      leave: {
        id: "leave-103",
        status: "Pending Manager Approval",
        ...body,
      },
    });
  }

  if (path === "/timesheets") {
    return ok("Timesheet submitted", {
      timesheet: {
        id: "ts-501",
        status: "Pending Manager Approval",
        ...body,
      },
    });
  }

  if (path === "/production/items") {
    return ok("Production item created", {
      item: {
        id: "item-4",
        ...body,
      },
    });
  }

  if (path === "/production/logs") {
    const item =
      productionItems.find((entry) => entry.item === body.item) ??
      productionItems[0];
    const quantity = Number(body.quantity ?? 0);

    return ok("Production log submitted", {
      log: {
        id: "prod-902",
        employeeId: body.employeeId ?? "HRX-0002",
        item: item.item,
        quantity,
        rate: item.rate,
        payment: quantity * item.rate,
        status: "Pending Manager Approval",
      },
    });
  }

  return ok("POST route handled", {
    requestedPath: path,
    body,
  });
}

export async function PUT(request: NextRequest, context: HandlerContext) {
  const path = routePath(context);
  const body = await readBody(request);

  if (path.match(/^\/roles\/[^/]+$/)) {
    return ok("Role permissions updated", {
      roleId: path.split("/")[2],
      permissions: body.permissions ?? [],
    });
  }

  if (path.match(/^\/employees\/[^/]+$/)) {
    return ok("Employee updated", {
      employeeId: path.split("/")[2],
      updates: body,
    });
  }

  if (path.match(/^\/leaves\/[^/]+\/status$/)) {
    return ok("Leave status updated", {
      leaveId: path.split("/")[2],
      status: body.status ?? "Approved",
      comments: body.comments ?? "",
    });
  }

  if (path.match(/^\/timesheets\/[^/]+\/approve$/)) {
    return ok("Timesheet approved", {
      timesheetId: path.split("/")[2],
      status: body.status ?? "Approved",
      comments: body.comments ?? "",
    });
  }

  if (path.match(/^\/production\/logs\/[^/]+\/status$/)) {
    return ok("Production log status updated", {
      logId: path.split("/")[3],
      status: body.status ?? "Approved",
      comments: body.comments ?? "",
    });
  }

  return ok("PUT route handled", {
    requestedPath: path,
    body,
  });
}

export async function DELETE(_request: NextRequest, context: HandlerContext) {
  const path = routePath(context);

  if (path.match(/^\/employees\/[^/]+$/)) {
    return ok("Employee deactivated", {
      employeeId: path.split("/")[2],
      status: "Inactive",
    });
  }

  return ok("DELETE route handled", {
    requestedPath: path,
  });
}
