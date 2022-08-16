using Microsoft.EntityFrameworkCore;
using ReactJsApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactJsApi.Data
{
    public class DepartmentRepo : IDepartment
    {
        private readonly ContextClass context;

        public DepartmentRepo(ContextClass context)
        {
            this.context = context;
        }
        public async Task Delete(int id)
        {
            await Task.Run(async () =>
            {
                var data = await GetDepartmentById(id);
                if (data != null)
                {
                    context.Departments.Remove(data);
                    await context.SaveChangesAsync();
                }
            });
        }

        public async Task<DepartmentModel> GetDepartmentById(int id)
        {
            return await context.Departments.Select(it => new DepartmentModel()
            {
                DepartmentId = it.DepartmentId,
                DepartmentName = it.DepartmentName
            }).FirstOrDefaultAsync(it => it.DepartmentId == id);
        }

        public async Task<IEnumerable<DepartmentModel>> GetDepartments()
        {
            return await context.Departments.Select(it => new DepartmentModel()
            {
                DepartmentId = it.DepartmentId,
                DepartmentName = it.DepartmentName
            }).ToListAsync();
        }

        public async Task<DepartmentModel> InsertDepat(DepartmentModel model)
        {
            int id = 0;
            if(model != null)
            {
                var data = await context.Departments.AddAsync(new DepartmentModel() { DepartmentName = model.DepartmentName });
                id = await context.SaveChangesAsync();
                return data.Entity;
            }
            return null;
        }

        public async Task<DepartmentModel> update(DepartmentModel model)
        {
            if(model !=null)
            {
                context.Entry(model).State = EntityState.Modified;
                await context.SaveChangesAsync();
                return model;
            }
            return model;
        }
    }
}
