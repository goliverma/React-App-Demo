import React,{Component} from 'react';
import {variables} from '../Variables.js';

export class Employee extends Component{

    constructor(props){
        super(props);
        this.state={
            departments:[],
            employees:[],
            modelTitle:"",
            EmployeeName:"",
            EmployeeId:"",
            Department:"",
            DateOfJoining:"",
            PhotoFileName:"",
            PhotoPath:variables.PHOTO_URL
        }
    }
    refreshList(){
        fetch(variables.API_URL+'Department')
        .then(response => response.json())
        .then(data => {
            this.setState({departments:data});
        });

        fetch(variables.API_URL+'Employee/GetAllEmployee')
        .then(response => response.json())
        .then(data => {
            this.setState({employees:data});
        });
    }

    changeEmployeeName = (e)=>{
        this.setState({EmployeeName:e.target.value});
    }

    changeDepartment = (e)=>{
        this.setState({Department:e.target.value});
    }

    changeDateOfJoining = (e)=>{
        this.setState({DateOfJoining:e.target.value});
    }

    componentDidMount(){
        this.refreshList();
    }

    addClick(){
        this.setState({
            modelTitle:"Add Employee",
            EmployeeId:0,
            EmployeeName:"",
            Department:"",
            DateOfJoining:"",
            PhotoFileName:""
        });
    }

    editClick(emp){
        this.setState({
            modelTitle:"Edit Employee",
            EmployeeId:emp.EmployeeId,
            EmployeeName:emp.EmployeeName,
            Department:emp.DepartmentId,
            DateOfJoining:emp.DateOfJoining,
            PhotoFileName:emp.PhotoFileName
        });
    }

    createClick(){
        fetch(variables.API_URL+'Employee/PostEmployee',{
            method:"POST",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                EmployeeName:this.state.EmployeeName,
                Department:this.state.Department,
                DateOfJoining:this.state.DateOfJoining,
                PhotoFileName:this.state.PhotoFileName
            })
        })
        .then(response => response.json())
        .then((result)=>{
            alert('add Successfull');
            this.refreshList();
        },(error => {
            alert('fail');
        }));
    }

    updateClick(){
        fetch(variables.API_URL+'Employee/UpdateEmployee',{
            method:"PUT",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                EmployeeId:this.state.EmployeeId,
                EmployeeName:this.state.EmployeeName,
                Department:this.state.Department,
                DateOfJoining:this.state.DateOfJoining,
                PhotoFileName:this.state.PhotoFileName
            })
        })
        .then(response => response.json())
        .then((result)=>{
            alert('Update Successfull');
            this.refreshList();
        },(error => {
            alert('fail');
        }));
    }

    deleteClick(id){
        if(window.confirm('are you sure ?'))
        {
            fetch(variables.API_URL+'Employee/DeleteEmployee/'+id,{
                method:"DELETE",
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            })
            .then(response => response.json())
            .then((result)=>{
                alert('Delete Successfull');
                this.refreshList();
            },(error => {
                alert('fail');
            }));
        }
    }

    ImageUploda = (e)=>{
        e.preventDefault();

        const formData = new FormData();
        formData.append('file',e.target.files[0],e.target.files[0].name);

        fetch(variables.API_URL+'Employee/SaveFile',{
            method:"POST",
            body:formData
        })
        .then(res => res.json())
        .then(data => {
            this.setState({PhotoFileName:data});
        });
    }

    render(){
        const {
            departments,
            employees,
            modelTitle,
            EmployeeName,
            EmployeeId,
            Department,
            DateOfJoining,
            PhotoFileName,
            PhotoPath
        }=this.state;
        return(
            <div>
                <button type="button" className="btn btn-primary m-2 float-end" 
                data-bs-toggle="modal" 
                data-bs-target="#exampleModal" 
                onClick={()=>this.addClick()}>
                    Add Employee
                </button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>
                                Employee Id
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Department
                            </th>
                            <th>
                                Date Of Joining
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(emp =>
                            <tr key={emp.EmployeeId}>
                                <td>{emp.EmployeeId}</td>
                                <td>{emp.EmployeeName}</td>
                                <td>{emp.DepartmentName}</td>
                                <td>{emp.DateOfJoiningS}</td>
                                <td>
                                    <button type="button" className="btn btn-light mr-1"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal" onClick={()=>this.editClick(emp)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                        </svg>
                                    </button>
                                    <button type="button" className="btn btn-light mr-1" onClick={()=>this.deleteClick(emp.EmployeeId)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria_hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{modelTitle}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">

                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="d-flex flex-row bd-highlight mb-3">
                                    <div className="p-2 w-50 bd-highlight">
                                        <div className="input-group mb-3">
                                            <span className="input-group-text">Employee Name</span>
                                            <input type="text" className="from-control" value={EmployeeName}
                                            onChange={this.changeEmployeeName} />
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text">Department</span>
                                            <select className="form-select" onChange={this.changeDepartment}
                                            value={Department}>
                                                {departments.map(dep => 
                                                    <option key={dep.DepartmentId}>{dep.DepartmentName}</option>
                                                    )}
                                            </select>
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text">Date Of Joining</span>
                                            <input type="date" className="from-control" value={DateOfJoining}
                                            onChange={this.changeDateOfJoining} />
                                        </div>
                                    </div>
                                    <div className="p-2 w-50 bd-highlight">
                                        <img width="250px" height="250px" src={PhotoPath+PhotoFileName}/>
                                        <input type="file" className="m-2" onChange={this.ImageUploda}/>
                                    </div>
                                </div>
                                {
                                    EmployeeId == 0?
                                    <button type="button" className="btn btn-primary float-start"
                                    onClick={()=>this.createClick()}>Create</button>:
                                    null
                                }
                                {
                                    EmployeeId != 0?
                                    <button type="button" className="btn btn-primary float-start"
                                    onClick={()=>this.updateClick()}>Update</button>:
                                    null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}