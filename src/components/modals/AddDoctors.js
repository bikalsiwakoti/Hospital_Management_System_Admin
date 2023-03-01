import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function AddDoctors() {
  const [doctorData, setDoctorData] = useState("")

  const navigate = useNavigate()
  const handleClose = () => navigate('/doctors');

  const handleSave = async () => {
    // e.preventDefault()
    console.log(doctorData)
    try {
      navigate("/doctors")
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    setDoctorData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }


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
            <Modal.Title>Add Doctor</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <div className="modal-body">
              <div className="input-group mb-3">
                <input type="text" name="fullname" onChange={handleChange} className="form-control" placeholder="Enter Doctor Name" id="doctorName" />
              </div>
              <div className="input-group mb-3">
                <input type="text" name="phone_number" onChange={handleChange} className="form-control" placeholder="Enter Phone Number" id="phoneNumber" />
              </div>
              <div className="input-group mb-3">
                <input type="text" name="age" onChange={handleChange} className="form-control" placeholder="Enter Doctor Age" id="doctorAge" />
              </div>

              <div className="input-group mb-3">
                <input type="text" name="gender" onChange={handleChange} className="form-control" placeholder="Enter Gender" id="doctorGender" />
              </div>
              <div className="input-group mb-3">
                <input type="text" name="address" onChange={handleChange} className="form-control" placeholder="Enter Address" id="doctorAddress" />
              </div>

              <div className="input-group mb-3">
                <textarea type="text" name="desc" onChange={handleChange} className="form-control" placeholder="Enter Doctor Desciption" id="doctorDesc" />
              </div>



              <div class="input-group mb-3">

                <select class="form-select" id="inputGroupSelect01" name="specialist" onChange={handleChange}>
                  <option selected>Select Specialist</option>
                  <option value="snacks_nonveg">Snacks Non-Veg</option>
                  <option value="snacks_veg">Snacks Veg</option>
                  <option value="drinks">Drinks</option>
                  <option value="alcohol">Alcohol</option>
                  <option value="dessert">Dessert</option>
                  <option value="extra">Extra</option>
                </select>
              </div>
            </div>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="secondary" onClick={handleSave}>Add</Button>
          </Modal.Footer>
        </Modal>
    </>
  )
}