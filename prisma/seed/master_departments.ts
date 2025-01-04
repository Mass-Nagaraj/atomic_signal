import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { v4 as uuidv4 } from "uuid";

const data = [
  {
    id: `008b797b-464f-4293-a106-8a0a22409acb`,
    name: "DeliveryOps",
    is_active: true,
    created_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
    updated_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
  },
  {
    id: `14d49f34-bef8-4907-ba8c-327e89ce5ff1`,
    name: "Design",
    is_active: true,
    created_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
    updated_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
  },
  {
    id: `319dbaa2-0f93-4e51-b8e5-dfca48dcfcdd`,
    name: "Engineering",
    is_active: true,
    created_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
    updated_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
  },
  {
    id: `495396e9-4f15-4e09-a883-4ffd3712c4d2`,
    name: "HR",
    is_active: true,
    created_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
    updated_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
  },
  {
    id: `5897e543-b538-4248-aed1-2910491e5e9b`,
    name: "Management",
    is_active: true,
    created_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
    updated_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
  },
  {
    id: `9597bee4-5463-4876-a42a-1ffac489816b`,
    name: "Marketing",
    is_active: true,
    created_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
    updated_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
  },
  {
    id: `aad6ece7-21d0-4ae4-9f2e-e1fade7f2fae`,
    name: "Product",
    is_active: true,
    created_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
    updated_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
  },
];

async function createMasterDepartments() {
  for (const record of data) {
    await prisma.departments_master.upsert({
      where: { id: record.id },
      update: record,
      create: record,
    });
  }
}

export default createMasterDepartments;
