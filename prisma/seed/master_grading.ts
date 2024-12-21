import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import {v4 as uuidv4} from 'uuid';

const data = [
    {
      id:`7a6a3b3b-d96c-4ae5-a247-b64ae9e75280`,
      name: "Completely awayefk",
      is_active: true,
      created_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
      updated_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
    },
    {
      id:`274f6332-07c1-4f39-8dd1-ac13f13fe4d3`, 
      name: "Need to improve a lot",
      is_active: true,
      created_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
      updated_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
    },
    {
      id:`4d64b3b0-75f0-47a5-8724-a3b2376585eb`,
      name: "Need to improve",
      is_active: true,
      created_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
      updated_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
    },
    {
      id:`bea3216b-99fb-4af7-a0ab-1865538ca9cb`,
      name: "Good",
      is_active: true,
      created_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
      updated_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
    },
    {
      id:`b2bcc150-5c18-4058-ac3a-f2249f472c41`,
      name: "Very Good",
      is_active: true,
      created_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
      updated_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
    },
    {
      id:`9597bee4-5463-4876-a42a-1ffac489816b`,
      name: "Marketing",
      is_active: true,
      created_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
      updated_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
    },
    {
      id:`95fcf9c1-cd0b-40c1-929c-2ee13953beb0`,
      name: "Spectacular",
      is_active: true,
      created_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
      updated_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
    },
    {
      id:`eb0bbdd4-d781-4699-86ef-58ce9fbdd944`,
      name: "Impactful",
      is_active: true,
      created_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
      updated_by: "4aeb412b-f445-4a1a-96aa-37055e693ec7",
    },
    
  ];
  
async function createMasterGrading() {
  try{

    for (const record of data) {
      await prisma.grading_master.upsert({
        where: { id: record.id },
        update: record,
        create: record,
      });
    }
     console.log("seed completed"); 
  }catch(e){
    console.log("Error occurs ",e)
  }
}

export default createMasterGrading;


