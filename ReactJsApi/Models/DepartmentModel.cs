using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ReactJsApi.Models
{
    public class DepartmentModel
    {
        [Key]
        public int DepartmentId { get; set; }
        public string DepartmentName { get; set; }
        public virtual IEnumerable<EmployeeModel> Employee { get; set; }
    }
}
