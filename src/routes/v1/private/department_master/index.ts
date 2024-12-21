// DeptRoutes

import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import { $ref, DeptSchema, UpdateDeptSchema } from './schema';
import { addSignal, update_signal } from '../../../../controllers/signals';
import {  add_Deptartment, update_dept } from '../../../../controllers/departments';


interface dept{
    dept_id:string
}

export const DeptRoutes: FastifyPluginAsync = async (
    fastify: FastifyInstance,
    options
  ): Promise<any> => {
    
    fastify.post("/addDept",{
        schema:{
            preHandler:[fastify.authenticate],
            body:$ref("addDept"),
            response:{
                200:$ref("Added_deptResponse")
            }
        }
    }, add_Deptartment)
    
    fastify.put<{ Params: dept,Body:UpdateDeptSchema  }>("/editdept/:dept_id",update_dept)
   
}
