using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ReactJsApi.Models
{
    public class EmployeeModel
    {
        [Key]
        public int EmployeeId { get; set; }
        public string EmployeeName { get; set; }
        public int DepartmentId { get; set; }
        public DateTime DateOfJoining { get; set; }
        public string PhotoPath { get; set; }
        public virtual DepartmentModel Department { get; set; }
    }
}
