import { useState } from "react"
import { createType } from "../services/apiService"
const AddTypeModal = ({activeTab, isModalTypeOpen, unShowModalType }) => {

    const [subcategorie, setSubCategorie] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (subcategorie.trim() === '') return;
        createType({type_name : subcategorie, expenses_range: activeTab})
        unShowModalType()
    }


    return (
<div>
     {isModalTypeOpen &&<div
    id="myModal"
    className="modal fade show"
    tabindex="-1"
    role="dialog"
    aria-labelledby="myModalLabel"
    style={{ display: "block", paddingRight: "17px" }}
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
        <h5 className="modal-title mt-0" id="myModalLabel">{activeTab === "vehicles" ? "Vehicles" : "Home-office"}</h5>
          <button
            onClick={unShowModalType}
            type="button"
            className="close"
            data-dismiss="modal"
            aria-hidden="true"
          >
            ×
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit} className="">
            <div className="form-group">
              <label>Subcategories</label>
              <input
                name="first_name"
                type="text"
                className="form-control"
                required
                value={subcategorie}
                onChange={e=> {setSubCategorie(e.target.value)}} 
              />
            </div>
            <div className="form-group mb-0">
                    <div>
                      <button
                        type="submit"
                        className="btn btn-primary waves-effect waves-light"
                      >
                        Add
                      </button>
                    </div>
                  </div>
            </form>
            </div>
            </div>
            </div>
            </div>}
            </div>
    )

}



export default AddTypeModal