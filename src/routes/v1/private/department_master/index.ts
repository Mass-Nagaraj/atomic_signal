// DeptRoutes

import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import { $ref, DeptSchema, UpdateDeptSchema } from './schema';
import {  add_Deptartment, getDepts, update_dept } from '../../../../controllers/departments';



export const DeptRoutes: FastifyPluginAsync = async (
    fastify: FastifyInstance,
    options
  ): Promise<any> => {
    
    fastify.post("/addDept",{
        schema:{
            // preHandler:[fastify.authenticate],
            body:$ref("addDept"),
            response:{
                200:$ref("Added_deptResponse")
            }
        }
    }, add_Deptartment)
    
    fastify.put<{ Body:UpdateDeptSchema  }>("/editdept",update_dept) 
    fastify.get(
        "/getDepts",
        { preHandler: [fastify.authenticate] },
        getDepts
      );

}
