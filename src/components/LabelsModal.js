import { useState, useEffect } from "react";
import { fetchLabels, deleteLabel, createLabel } from "../services/apiService";


const LabelsModal = ({ idType, activeTab, isModalLabelOpen, unShowModalLabel }) => {


  const [newLabel, setNewLabel] = useState();
  const [labels, setLabels] = useState();

  useEffect(() => {
    fetchLabels(idType)
      .then(data => setLabels(data))
      .catch(error => console.error("Error fetching labels:", error));
  },[idType]);


  const removeLabel = (labelId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this label?');
        if (confirmDelete) {
    deleteLabel(labelId)
        .then(() => {
            setLabels(labels.filter(label => label.id !== labelId));
        })
        .catch((error) => console.error('Error deleting label:', error));
    }
};


const handleSubmit = (e) => {
    e.preventDefault()
    if (newLabel.trim() === '') return;
    createLabel({ label_name: newLabel, expense_type_id: idType })
   };
  

  


  return (

    <div>
    {isModalLabelOpen &&  <div
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
              <h5 className="modal-title mt-0" id="myModalLabel">
                {activeTab === "vehicles" ? "Vehicles labels" : "Home-office labels"}
              </h5>
              <button
                onClick={unShowModalLabel}
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
                  <label>Label</label>
                  <input
                    name="first_name"
                    type="text"
                    className="form-control"
                    required
                    value={newLabel}
                    onChange={e => {
                      setNewLabel(e.target.value);
                    }}
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
              <ul className="list-group mt-3">
                        {labels.map(label => (
                            <li 
                                key={label.id} 
                                className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                {label.label_name}
                                <button variant="danger" size="sm" onClick={() => removeLabel(label.id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
            </div>
          </div>
        </div>
      </div>}
    </div>
  );
};

export default LabelsModal;
