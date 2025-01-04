import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const data = [
  {
    id: 1,
    name: "Reporting to",
    is_active: true,
    created_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
    updated_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
  },
  {
    id: 2,
    name: "Peer to peer",
    is_active: true,
    created_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
    updated_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
  },
  {
    id: 3,
    name: "360°",
    is_active: true,
    created_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
    updated_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
  },
];

async function createFeedBackTypes() {
  for (const record of data) {
    await prisma.feedback_type_master.upsert({
      where: { id: record.id },
      update: record,
      create: record,
    });
  }
}

export default createFeedBackTypes;
