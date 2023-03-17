import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import { editStaffData } from '../../../redux/slices/StaffSlice'
import axios from "axios";


export default function EditStaff() {
  const [staffData, setstaffData] = useState("")
  const [staffDataForState, setstaffDataForState] = useState("")

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const id = window.location.pathname.split('/')[3]

  const handleClose = () => navigate('/staffs');

  const handleSave = async () => {
    try {
      // if (staffData.name === "" || staffData.price === "" || staffData.img === "" || staffData.desc === "" || staffData.genre === "") {
      //   toast.error("Fields Cannot Be Empty !", {
      //     position: "top-right",
      //     theme: "colored"
      //   });
      // }
      const res = await axios.put(`/staff/editStaff/${id}`, staffDataForState)
      dispatch(editStaffData({id : id ,newData: staffData}))
      toast.success('Successfully Added', {
        position: "top-right",
        theme: "colored"
      })
      navigate("/staffs")
    } catch (error) {
      toast.error('Failed to post product', {
        position: "top-right",
        theme: "colored"
      })
      console.log(error)
    }
  }

  const handleChange = (e) => {
    setstaffData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setstaffDataForState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleChangeForStaff = (e) => {
    setstaffData(prev => ({ ...prev, ['staff']: { ...prev.staff, [e.target.name]: e.target.value } }))
    setstaffDataForState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  useEffect(() => {
    axios.get(`/staff/findOneStaff/${id}`).then(res => {
      setstaffData(res.data)
      setstaffDataForState(
        {
          id: res.data.id,
          username: res.data.username,
          email: res.data.email,
          role: res.data.role,
          full_name: res.data.staff.full_name,
          phone_number: res.data.staff.phone_number,
          age: res.data.staff.age,
          desc: res.data.staff.desc,
          gender: res.data.staff.gender,
          address: res.data.staff.address,
          position: res.data.staff.position,
          userId: res.data.staff.userId,
        }
      )
    }).catch(err => {
      toast.error(err, {
        position: "top-right",
        theme: "colored"
      });
    })

  }, [])

  console.log(staffDataForState)
  console.log(staffData)

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>

            </Button> */}

      <Modal
        show={true}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Staff</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className="modal-body">
            <div className="input-group mb-3">
              <input type="text" value={staffData?.staff?.full_name} name="full_name" onChange={handleChangeForStaff} className="form-control" placeholder="Enter Staff Name" id="StaffName" />
            </div>
            <div className="input-group mb-3">
              <input type="text" value={staffData?.username} name="username" onChange={handleChange} className="form-control" placeholder="Enter User Name" id="userName" />
            </div>
            <div className="input-group mb-3">
              <input type="text" value={staffData?.email} name="email" onChange={handleChange} className="form-control" placeholder="Enter Email" id="email" />
            </div>
            <div className="input-group mb-3">
              <input type="text" value={staffData?.staff?.phone_number} name="phone_number" onChange={handleChangeForStaff} className="form-control" placeholder="Enter Phone Number" id="phoneNumber" />
            </div>
            <div className="input-group mb-3">
              <input type="number" value={staffData?.staff?.age} name="age" onChange={handleChangeForStaff} className="form-control" placeholder="Enter Staff Age" id="StaffAge" />
            </div>

            <div className="input-group mb-3">
              <input type="text" value={staffData?.staff?.gender} name="gender" onChange={handleChangeForStaff} className="form-control" placeholder="Enter Gender" id="StaffGender" />
            </div>
            <div className="input-group mb-3">
              <input type="text" value={staffData?.staff?.address} name="address" onChange={handleChangeForStaff} className="form-control" placeholder="Enter Address" id="StaffAddress" />
            </div>

            <div className="input-group mb-3">
              <textarea type="text" value={staffData?.staff?.desc} name="desc" onChange={handleChangeForStaff} className="form-control" placeholder="Enter Staff Desciption" id="StaffDesc" />
            </div>



            <div class="input-group mb-3">

              <select class="form-select" id="inputGroupSelect01" value={staffData?.staff?.position} name="position" onChange={handleChangeForStaff}>
                <option selected>Select Position</option>
                <option value="Gaurd">Gaurd</option>
                <option value="Nurse">Nurse</option>
                <option value="Manager">Manager</option>
                <option value="Pharmasist">Pharmasist</option>
                <option value="Cleaner">Cleaner</option>
              </select>
            </div>
          </div>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={handleSave}>Edit</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  )
}