using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using ReactJsApi.Data;
using ReactJsApi.ViewModel;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace ReactJsApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployee employee;
        private readonly IWebHostEnvironment env;

        public EmployeeController(IEmployee employee, IWebHostEnvironment env)
        {
            this.employee = employee;
            this.env = env;
        }
        [HttpGet("GetAllEmployee")]
        public async Task<ActionResult<IEnumerable<EmployeeViewModel>>> GetAllEmployee()
        {
            return Ok(await employee.GetEmployees());
        }
        [HttpGet("GetEmployee/{id:int}")]
        public async Task<ActionResult<EmployeeViewModel>> GetEmployee(int id)
        {
            return Ok(await employee.GetEmployeeById(id));
        }
        [HttpPost("PostEmployee")]
        public async Task<ActionResult<EmployeeViewModel>> PostEmployee(EmployeeViewModel model)
        {
            return Ok(await employee.InsertEmployee(model));
        }
        [HttpPut("UpdateEmployee")]
        public async Task<ActionResult<EmployeeViewModel>> UpdateEmployee(EmployeeViewModel model)
        {
            return Ok(await employee.UpdateEmployee(model));
        }
        [HttpDelete("DeleteEmployee/{id:int}")]
        public async Task<ActionResult> DeleteEmployee(int id)
        {
            await employee.DeleteEmployee(id);
            return Ok();
        }

        [HttpPost("SaveFile")]
        public async Task<JsonResult> SaveFile()
        {
            try
            {
                var httprequest = Request.Form;
                var postedFile = httprequest.Files[0];
                string fileName = postedFile.FileName;
                var physicalPath = env.ContentRootPath + "/Images/" + fileName;
                using (var stream = new FileStream(physicalPath, FileMode.Create))
                {
                    await postedFile.CopyToAsync(stream);
                }
                return new JsonResult(fileName);
            }
            catch (Exception ex)
            {
                return new JsonResult($"anonyumous.png {ex.Message}");
            }
        }

    }
}
