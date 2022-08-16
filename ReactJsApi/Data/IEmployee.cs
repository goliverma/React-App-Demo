using ReactJsApi.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactJsApi.Data
{
    public interface IEmployee
    {
        Task<EmployeeViewModel> GetEmployeeById(int id);
        Task<IEnumerable<EmployeeViewModel>> GetEmployees();
        Task<EmployeeViewModel> InsertEmployee(EmployeeViewModel model);
        Task<EmployeeViewModel> UpdateEmployee(EmployeeViewModel model);
        Task DeleteEmployee(int id);
    }
}
