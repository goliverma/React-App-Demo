using Microsoft.EntityFrameworkCore;
using ReactJsApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactJsApi.Data
{
    public class ContextClass : DbContext
    {
        public ContextClass(DbContextOptions<ContextClass> options) : base(options)
        {

        }

        public DbSet<EmployeeModel> Employees { get; set; }
        public DbSet<DepartmentModel> Departments { get; set; }
    }
}
