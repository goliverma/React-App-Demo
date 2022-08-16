using Microsoft.AspNetCore.Mvc;
using ReactJsApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactJsApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DepartmentController : ControllerBase
    {
        private readonly IDepartment department;

        public DepartmentController(IDepartment department)
        {
            this.department = department;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DepartmentModel>>> GetDepart()
        {
            return Ok(await department.GetDepartments());
        }
        [HttpPost]
        public async Task<ActionResult> postDepat(DepartmentModel model)
        {
            return Ok(await department.InsertDepat(model));
        }
        [HttpPut]
        public async Task<ActionResult<DepartmentModel>> UpdateDepartment(DepartmentModel model)
        {
            return Ok(await department.update(model));
        }
        [HttpDelete("{id:int}")]
        public async Task<ActionResult> DeleteDepartment(int id)
        {
            await department.Delete(id);
            return Ok(id);
        }
    }
}
