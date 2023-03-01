import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function AddProducts() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [quantity, setQuantity] = useState("")
  const [desc, setDesc] = useState("")
  const [genre, setGenre] = useState("")

  const navigate = useNavigate()
  const handleClose = () => navigate('/products');

  const newData = {
    name,
    price: Number(price),
    genre
  }
  const handleSave = async () => {
    // e.preventDefault()
    try {
      navigate("/product")
    } catch (error) {
      console.log(error)
    }
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
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body">
            <div className="input-group mb-3">
              <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter Product Name" id="productName" />
            </div>
            <div className="input-group mb-3">
              <input type="text" onChange={(e) => setPrice(e.target.value)} className="form-control" placeholder="Enter Product Price" id="productPrice" />
            </div>
            <div className="input-group mb-3">
              <input type="text" onChange={(e) => setQuantity(e.target.value)} className="form-control" placeholder="Enter Available Quantity" id="productQuantity" />
            </div>

            <div className="input-group mb-3">
              <textarea type="text" onChange={(e) => setDesc(e.target.value)} className="form-control" placeholder="Enter Product Desciption" id="productDesc" />
            </div>



            <div class="input-group mb-3">

              <select class="form-select" id="inputGroupSelect01" onChange={(e) => setGenre(e.target.value)}>
                <option selected>Select Product Genre</option>
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