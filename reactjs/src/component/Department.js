import React,{Component} from 'react';
import {variables} from '../Variables.js';

export class Department extends Component{

    constructor(props){
        super(props);
        this.state={
            departments:[],
            modelTitle:"",
            DepartmentName:"",
            DepartmentId:""
        }
    }
    refreshList(){
        fetch(variables.API_URL+'Department')
        .then(response => response.json())
        .then(data => {
            this.setState({departments:data});
        });
    }

    changeDepartmentName = (e)=>{
        this.setState({DepartmentName:e.target.value});
    }

    componentDidMount(){
        this.refreshList();
    }

    addClick(){
        this.setState({
            modelTitle:"Add Department",
            DepartmentId:0,
            DepartmentName:""
        });
    }

    editClick(dep){
        this.setState({
            modelTitle:"Edit Department",
            DepartmentId:dep.DepartmentId,
            DepartmentName:dep.DepartmentName
        });
    }

    createClick(){
        fetch(variables.API_URL+'Department',{
            method:"POST",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                DepartmentName:this.state.DepartmentName
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
        fetch(variables.API_URL+'Department',{
            method:"PUT",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                DepartmentId:this.state.DepartmentId,
                DepartmentName:this.state.DepartmentName
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
            fetch(variables.API_URL+'Department/'+id,{
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

    render(){
        const {
            departments,
            modelTitle,
            DepartmentName,
            DepartmentId
        }=this.state;
        return(
            <div>
                <button type="button" className="btn btn-primary m-2 float-end" 
                data-bs-toggle="modal" 
                data-bs-target="#exampleModal" 
                onClick={()=>this.addClick()}>
                    Add Department
                </button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>
                                Department Id
                            </th>
                            <th>
                                Department Name
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {departments.map(dep =>
                            <tr key={dep.DepartmentId}>
                                <td>{dep.DepartmentId}</td>
                                <td>{dep.DepartmentName}</td>
                                <td>
                                    <button type="button" className="btn btn-light mr-1"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal" onClick={()=>this.editClick(dep)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                        </svg>
                                    </button>
                                    <button type="button" className="btn btn-light mr-1" onClick={()=>this.deleteClick(dep.DepartmentId)}>
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
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Department Name</span>
                                    <input type="text" className="from-control" value={DepartmentName}
                                    onChange={this.changeDepartmentName} />
                                </div>
                                {
                                    DepartmentId == 0?
                                    <button type="button" className="btn btn-primary float-start"
                                    onClick={()=>this.createClick()}>Create</button>:
                                    null
                                }
                                {
                                    DepartmentId != 0?
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