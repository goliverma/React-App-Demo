using ReactJsApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactJsApi.ViewModel
{
    public class EmployeeViewModel : EmployeeModel
    {
        public string DepartmentName { get; set; }
        public string DateOfJoiningS { get; set; }
    }
}
