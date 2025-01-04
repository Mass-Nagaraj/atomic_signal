import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { v4 as uuidv4 } from "uuid";

const data = [
  {
    id: `b8afcb93-23fa-4c0f-a2be-7154ba1b96ab`,
    name: "Completely away",
    is_active: true,
  },
  {
    id: `d4e5f041-f142-456b-927d-dd9c3bc8a721`,
    name: "Need to improve a lot",
    is_active: true,
  },
  {
    id: `0828cc89-3a55-41b7-9642-3328b1e81f30`,
    name: "Need to improve",
    is_active: true,
  },
  {
    id: `284c1be8-47ae-4145-94df-1d82298e9a19`,
    name: "Good",
    is_active: true,
  },
  {
    id: `1379b3e7-2021-49d5-8421-86911fdd65fc`,
    name: "Very good",
    is_active: true,
  },
  {
    id: `09ef6091-2ad7-486a-b6a2-31de6b85cd7c`,
    name: "Spectacular",
    is_active: true,
  },
];

async function createMasterPerformance() {
  for (const record of data) {
    await prisma.performance_master.upsert({
      where: { id: record.id },
      update: record,
      create: record,
    });
  }
}

export default createMasterPerformance;
