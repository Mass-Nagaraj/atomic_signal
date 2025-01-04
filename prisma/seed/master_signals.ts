import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { v4 as uuidv4 } from "uuid";

const data = [
  {
    id: "f583872d-6676-4b42-b425-75d26bfb0d37",
    name: "Prioritizing",
    is_active: true,
  },
  {
    id: "5ab7de54-6b53-474d-957f-c11bac31ec2f",
    name: "Planning",
    is_active: true,
  },
  {
    id: "e2aeef07-645c-44b8-8996-d3edce2768c3",
    name: "Communication",
    is_active: true,
  },
  {
    id: "8cf92cd4-e034-4ef3-a942-a2b7f71dc771",
    name: "Presentation",
    is_active: true,
  },
  {
    id: "62aa550d-3727-4402-bf27-a62502134b62",
    name: "Constructive feedback",
    is_active: true,
  },
  {
    id: "a317c9ec-19aa-491e-8f77-b07e2e542bad",
    name: "Active listening",
    is_active: true,
  },
  {
    id: "d7b9b667-f26b-4902-b6cc-a3ac18f366d2",
    name: "Stress Management",
    is_active: true,
  },
  {
    id: "48909c15-084b-45e9-be3b-68ef13bbd352",
    name: "Collaboration",
    is_active: true,
  },
  {
    id: "cb5df2a4-3325-4e41-b2ef-d04a1854b4e1",
    name: "Team Play",
    is_active: true,
  },
  {
    id: "9e1fcda2-b8fa-4327-afe8-5810948dcdd0",
    name: "Innovation",
    is_active: true,
  },
  {
    id: "b8c2c8e3-9d4f-4f18-8d10-1c7aab522f93",
    name: "Aesthetics",
    is_active: true,
  },
  {
    id: "ab8448aa-8f7a-437b-9c1a-d2eaa7a1354c",
    name: "Problem Solving",
    is_active: true,
  },
  {
    id: "59c810be-da50-4eb4-a1a5-fd95169d5c70",
    name: "Availability",
    is_active: true,
  },
  {
    id: "baa775fb-2a90-4b96-b9af-6680a771c516",
    name: "Dependability",
    is_active: true,
  },
  {
    id: "a29f7da8-a93e-4045-a6b8-9f9feeaf02d3",
    name: "Commitment",
    is_active: true,
  },
  {
    id: "9d6bd457-46ae-4236-8c36-4000ce8d6502",
    name: "Professionalism",
    is_active: true,
  },
  {
    id: "85b7516d-0c9d-46eb-80bc-e3e38fde2b04",
    name: "Solutioning",
    is_active: true,
  },
  {
    id: "44e64e18-4c00-4d2a-b546-6cba91e27932",
    name: "Work Quality",
    is_active: true,
  },
  {
    id: "c7678946-e7fd-4d4d-8e43-2e5fecc25c28",
    name: "Knowledge sharing",
    is_active: true,
  },
  {
    id: "3bdb2af4-3f7a-47f1-a845-6672ebe4102d",
    name: "Code quality",
    is_active: true,
  },
  {
    id: "b82e6bc8-35bb-4685-b5f2-689facc22a3e",
    name: "Technical Skills",
    is_active: true,
  },
  {
    id: "00ab27ac-11fe-484a-850e-43ca191d5934",
    name: "Logical Thinking",
    is_active: true,
  },
  {
    id: "829d8722-e9e7-42c9-b45c-bb904b262d14",
    name: "Attitude",
    is_active: true,
  },
  {
    id: "b5f6d7ae-207f-4d04-b290-74ab1ec7e5e5",
    name: "Aspiration",
    is_active: true,
  },
  {
    id: "1510144d-3003-4fc1-9a1d-93d34873544d",
    name: "Open Mindedness",
    is_active: true,
  },
  {
    id: "5fd97392-2041-4205-9fad-7a75b5d17226",
    name: "Learnability",
    is_active: true,
  },
  {
    id: "d3648434-8e23-4cae-97f9-b9ff420b2dbe",
    name: "Productivity",
    is_active: true,
  },
  {
    id: "43abfe1b-1887-46ba-8d3f-dbac4709ea5b",
    name: "Efficiency",
    is_active: true,
  },
  {
    id: "520b868a-317a-4763-bf4c-6980e84eaf5d",
    name: "Leadership",
    is_active: true,
  },
];

async function createMasterSignals() {
  for (const record of data) {
    await prisma.signals_master.upsert({
      where: { id: record.id },
      update: record,
      create: record,
    });
  }
}

export default createMasterSignals;
