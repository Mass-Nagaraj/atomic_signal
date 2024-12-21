import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import { $ref, UpdateGrade } from './schema';
import { edit_grading } from '../../../../controllers/Grades';

interface Grade{
    grade_id:string
}


export const GradingRoutes: FastifyPluginAsync = async (
    fastify: FastifyInstance,
    options
  ): Promise<any> => {
    
    // This Param variable names and controll function variable name should be same 
    
    fastify.put<{ Params: Grade,Body:UpdateGrade  }>("/update_grades/:grade_id", edit_grading)
   
}
