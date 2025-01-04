import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { v4 as uuidv4 } from "uuid";

const data = [
  {
    id: `0c329743-5c30-4daa-81c9-c5dc1e8ff711`,
    name: "Chief Executive Officer",
    is_active: true,
    created_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
    updated_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
  },
  {
    id: `6d76a796-7d45-412f-93b4-194a2008b5c5`,
    name: "Technical Architect",
    is_active: true,
    created_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
    updated_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
  },
  {
    id: `9bfdbe10-f52a-4bf2-953a-836c0c05399b`,
    name: "HR Generalist",
    is_active: true,
    created_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
    updated_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
  },
  {
    id: `ca25ce9f-6809-460d-a557-7145e0bda9cc`,
    name: "Growth Hacker",
    is_active: true,
    created_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
    updated_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
  },
  {
    id: `db76bd92-6b14-43aa-9b9a-d62ce3a9e47f`,
    name: "Full Stack Developer",
    is_active: true,
    created_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
    updated_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
  },
  {
    id: `088b7392-4eee-41a4-a152-bd0dc5933795`,
    name: "Front-End Developer",
    is_active: true,
    created_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
    updated_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
  },
  {
    id: `f2285a36-e8ea-4eb2-8c48-48d95f2f1ea9`,
    name: "Visual Designer",
    is_active: true,
    created_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
    updated_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
  },
  {
    id: `3ff09cfe-407f-474e-844a-fab9964d0e5c`,
    name: "Content Writer",
    is_active: true,
    created_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
    updated_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
  },
  {
    id: `f8cb98d9-5bba-498f-af65-8a2b8373a079`,
    name: "Business Analyst",
    is_active: true,
    created_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
    updated_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
  },
  {
    id: `fc7552e9-041c-4a69-b568-5809ad729a31`,
    name: "Junior Product Marketer",
    is_active: true,
    created_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
    updated_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
  },
  {
    id: `c3b36a44-e402-4dda-a34e-5f7a82425e44`,
    name: "Product Analyst",
    is_active: true,
    created_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
    updated_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
  },
  {
    id: `84ae540c-32bb-4207-9f96-8924f9bbfd42`,
    name: "Process Associate",
    is_active: true,
    created_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
    updated_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
  },
  {
    id: `07c8e66e-8891-4608-92be-3bf8389c6f1b`,
    name: "Back-End Developer",
    is_active: true,
    created_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
    updated_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
  },
  {
    id: `dcd195fb-bd7e-47e3-901b-03e26b68efaa`,
    name: "Front-End Developer Trainee",
    is_active: true,
    created_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
    updated_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
  },
  {
    id: `a65f4b20-9a4c-43de-b22a-8daa6ca70d89`,
    name: "Back-End Developer Trainee",
    is_active: true,
    created_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
    updated_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
  },
  {
    id: `a6cd999e-c803-4650-a409-b4d255ded499`,
    name: "Software Developer Trainee",
    is_active: true,
    created_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
    updated_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
  },
  {
    id: `0472fd8e-bc6c-4f5b-87b6-85580b64ae6c`,
    name: "Product Manager",
    is_active: true,
    created_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
    updated_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
  },
  {
    id: `66738be1-748c-40ba-b5ef-884d6c34830c`,
    name: "Product Analyst Intern",
    is_active: true,
    created_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
    updated_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
  },
];

async function createMasterDesignations() {
  for (const record of data) {
    await prisma.designation_master.upsert({
      where: { id: record.id },
      update: record,
      create: record,
    });
  }
}

export default createMasterDesignations;
