import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import {v4 as uuidv4} from 'uuid';

const data = [
  {
    id: `0ab91d5c-1a39-4a7f-bf58-8bbb1e15f59c`,
    name: "admin",
    is_active:true
  },
  {
    id: `0e870998-16a7-4711-8584-532bb3f409af`,
    name: "manager",
    is_active:true
  },
  {
    id: `10f39ac9-be8a-4553-a18c-64ce1bf5278e`,
    name: "employee",
    is_active:true
  },
];

async function createMasterRoles() {
  for (const record of data) {
    await prisma.role_master.upsert({
      where: { id: record.id },
      update: record,
      create: record,
    });
  }
}

export default createMasterRoles;
