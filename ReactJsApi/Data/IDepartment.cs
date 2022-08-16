using ReactJsApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactJsApi
{
    public interface IDepartment
    {
        Task<DepartmentModel> GetDepartmentById(int id);
        Task<IEnumerable<DepartmentModel>> GetDepartments();
        Task<DepartmentModel> update(DepartmentModel model);
        Task Delete(int id);
        Task<DepartmentModel> InsertDepat(DepartmentModel model);
    }
}
