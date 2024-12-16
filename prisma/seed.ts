import { PrismaClient } from "@prisma/client";
import createFeedBackTypes from "./seed/master_feedback_type";
import createMasterDepartments from "./seed/master_departments";
import createMasterDesignations from "./seed/master_designations";
import createMasterRoles from "./seed/master_role";
import createMasterSignals from "./seed/master_signals";
import createMasterPerformance from "./seed/master_performance";

const prisma = new PrismaClient();


async function main(){
    await createFeedBackTypes();
    await createMasterRoles();
    await createMasterDepartments();
    await createMasterDesignations();
    await createMasterSignals();
    await createMasterPerformance();
}

main()
.then(async ()=>{
    await prisma.$disconnect();

})
.catch(async (e)=>{
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);    
})