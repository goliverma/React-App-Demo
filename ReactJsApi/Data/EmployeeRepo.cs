using Microsoft.EntityFrameworkCore;
using ReactJsApi.Models;
using ReactJsApi.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactJsApi.Data
{
    public class EmployeeRepo : IEmployee
    {
        private readonly ContextClass context;

        public EmployeeRepo(ContextClass context)
        {
            this.context = context;
        }

        public async Task DeleteEmployee(int id)
        {
            if(id > 0)
            {
                await Task.Run(async () =>
                {
                    var data = await GetEmployeeById(id);
                    if (data != null)
                    {
                        context.Employees.Remove(data);
                        await context.SaveChangesAsync();
                    }
                });
            }
        }

        public async Task<EmployeeViewModel> GetEmployeeById(int id)
        {
            if (id != 0)
            {
                return await context.Employees
                    .Include(it => it.Department)
                    .Select(it => new EmployeeViewModel()
                    {
                        EmployeeId = it.EmployeeId,
                        DateOfJoining = it.DateOfJoining,
                        DepartmentId = it.DepartmentId,
                        DepartmentName = it.Department.DepartmentName,
                        EmployeeName = it.EmployeeName,
                        PhotoPath = it.PhotoPath
                    })
                    .FirstOrDefaultAsync(it => it.EmployeeId == id);
            }
            return null;
        }

        public async Task<IEnumerable<EmployeeViewModel>> GetEmployees()
        {
            return await context.Employees
                .Include(it => it.Department)
                .Select(it => new EmployeeViewModel()
                {
                    EmployeeId = it.EmployeeId,
                    DateOfJoining = it.DateOfJoining,
                    DepartmentId = it.DepartmentId,
                    DepartmentName = it.Department.DepartmentName,
                    EmployeeName = it.EmployeeName,
                    PhotoPath = it.PhotoPath,
                    DateOfJoiningS = it.DateOfJoining.ToString("dd.MM.yyyy")
                }).ToListAsync();
        }

        public async Task<EmployeeViewModel> InsertEmployee(EmployeeViewModel model)
        {
            if(model != null)
            {
                var data = await context.Employees.AddAsync(new EmployeeModel()
                {
                    DateOfJoining = model.DateOfJoining,
                    DepartmentId = model.DepartmentId,
                    EmployeeName = model.EmployeeName,
                    PhotoPath = model.PhotoPath
                });
                await context.SaveChangesAsync();
                var data2 = await GetEmployeeById(data.Entity.EmployeeId);
                return data2;
            }
            return null;
        }

        public async Task<EmployeeViewModel> UpdateEmployee(EmployeeViewModel model)
        {
            if(model!=null)
            {
                context.Entry(model).State = EntityState.Modified;
                await context.SaveChangesAsync();
                return model;
            }
            return model;
        }
    }
}
