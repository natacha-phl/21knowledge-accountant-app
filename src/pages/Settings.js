import DataTable from "react-data-table-component";
import { fetchTypes, deleteType, patchTypes } from "../services/apiService";
import AddTypeModal from "../components/AddTypeModal";
import LabelsModal from "../components/LabelsModal";
import { toast } from "react-toastify";

import { useEffect, useState } from "react";

const Settings = () => {
  const [listTypeHomeOffice, setListTypeHomeOffice] = useState([]);
  const [listTypeVehicules, setListTypeVehicules] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [type, setType] = useState([]);
  const styleOnClick = {
    color: "#495057",
    backgroundColor: "#fff",
    borderColor: "#dee2e6 #dee2e6 #fff"
  };

  const [activeTab, setActiveTab] = useState("home-office");

  const [isModalTypeOpen, setIsModalTypeOpen] = useState(false);
  const [isModalLabelOpen, setIsModalLabelOpen] = useState(false);
  const [idType, setIdType] = useState(null);
  const [editingRowId, setEditingRowId] = useState(null);
  const [validateButton, setValidateButton] = useState(null);
  const [cancelButton, setCancelButton] = useState(null);
  const [reloadData, setReloadData] = useState(null);

  console.log(reloadData);

  const unShowModalType = () => {
    setIsModalTypeOpen(false);
  };

  const unShowModalLabel = () => {
    setIsModalLabelOpen(false);
  };

  const removeType = id => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this type?"
    );
    if (confirmDelete) {
      deleteType(id)
        .then(() => {
          setType(type.filter(type => type.id !== id));
        })
        .catch(error => console.error("Error deleting type:", error));
    }
  };

  const editType = id => {
    setEditingRowId(id);
    setValidateButton(id);
    setCancelButton(id);
  };

  const cancelEditType = () => {
    setValidateButton(null);
    setCancelButton(null);
    setReloadData(true);
    setEditingRowId(null);
  };

  const handleEdit = (id, newValue) => {
    const updatedType = type.map(
      item => (item.id === id ? { ...item, type_name: newValue } : item)
    );
    setType(updatedType);
  };

  const handleSubmitEdit = id => {
    const modifiedTypeToBeSubmit = type.find(typeItem => typeItem.id === id);

    patchTypes(id, modifiedTypeToBeSubmit)
      .then(response => {
        toast("The types name has been modifyied successly", {
          type: "success"
        });
        setCancelButton(null);
        setValidateButton(null);
        setEditingRowId(null);
      })
      .catch(error => {
        toast("Error modifying type name. Please try again.", {
          type: "error"
        });
        console.error("Error modifying type name:", error);
      });
  };

  const showModalLabels = id => {
    setIsModalLabelOpen(true);
    setIdType(id);
  };

  useEffect(
    () => {
      if (reloadData) {
        setReloadData(null);
      }
      fetchTypes("home-office")
        .then(data => {
          setType(data);
          setListTypeHomeOffice(data);
          setIsLoading(false);
        })
        .catch(error =>
          console.error("Error loading type home-office:", error)
        );

      fetchTypes("vehicles")
        .then(data => {
          setListTypeVehicules(data);
        })
        .catch(error => console.error("Error loading type vehicules:", error));
    },
    [reloadData]
  );

  const columns = [
    {
      name: "Name",
      selector: row => row.type_name,
      cell: row =>
        <input
          style={{
            all: "unset",
            border: "none",
            outline: "none",
            background: editingRowId === row.id ? "#e6f7ff" : "transparent",
            font: "inherit",
            padding: "0"
          }}
          type="text"
          value={row.type_name}
          onChange={e => handleEdit(row.id, e.target.value)}
          disabled={editingRowId !== row.id}
        />,
      sortable: true,
    },
    {
      name: "Actions",
      cell: row =>
        <div className="d-flex">
          <button
            className="btn btn-success waves-effect waves-light"
            onClick={e => handleSubmitEdit(row.id)}
            hidden={validateButton !== row.id}
          >
            <i style={{ cursor: "pointer" }} className="fa-solid fa-check" />
          </button>
          <button
            className="btn btn-danger waves-effect waves-light"
            onClick={cancelEditType}
            hidden={cancelButton !== row.id}
          >
            <i style={{ cursor: "pointer" }} class="fa-solid fa-ban" />
          </button>

          <button
            className="btn btn-primary waves-effect waves-light"
            onClick={() => editType(row.id)}
            style={{ marginRight: "10px" }}
            hidden={cancelButton || validateButton}
          >
            <i
              style={{ cursor: "pointer" }}
              className="fa-solid fa-pen-to-square"
            />
          </button>
          <button
            className="btn btn-primary waves-effect waves-light"
            onClick={() => showModalLabels(row.id)}
            style={{ marginRight: "10px" }}
          >
            <i style={{ cursor: "pointer" }} className="fa-solid fa-tag" />
          </button>

          <button
            className="btn btn-primary waves-effect waves-light"
            onClick={() => removeType(row.id)}
          >
            <i style={{ cursor: "pointer" }} className="fa-solid fa-trash" />
          </button>
        </div>,
      ignoreRowClick: true,
      // allowOverflow: true,
      button: true
    }
  ];

  return (
    <div>
      <AddTypeModal
        activeTab={activeTab}
        isModalTypeOpen={isModalTypeOpen}
        unShowModalType={unShowModalType}
      />
      <LabelsModal
        idType={idType}
        activeTab={activeTab}
        isModalLabelOpen={isModalLabelOpen}
        unShowModalLabel={unShowModalLabel}
      />

      <div className="row">
        <div className="col-sm-12">
          <div className="page-title-box">
{/*             <div className="btn-group float-right">
              <ol className="breadcrumb hide-phone p-0 m-0">
                <li className="breadcrumb-item">
                  <a href="#">Zoogler</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Tables</a>
                </li>
                <li className="breadcrumb-item active">Datatable</li>
              </ol>
            </div> */}
            {/*             <h4 className="page-title">
              {activeTab === "home-office"
                ? "Home-office subcategories"
                : "Vehicles subcategories"}
            </h4> */}
            <h4 className="page-title">Types</h4>
          </div>
        </div>
      </div>

      {isLoading &&
        <div id="preloader">
          <div id="status">
            <div className="spinner" />
          </div>
        </div>}

      <ul class="nav nav-tabs">
        <li className="nav-item">
          <a
            onClick={() => {
              setActiveTab("home-office");
              setType(listTypeHomeOffice);
            }}
            className="nav-link "
            aria-current="page"
            style={activeTab === "home-office" ? styleOnClick : {}}
          >
            <h2>Expenses cat 1</h2>
          </a>
        </li>
        <li class="nav-item">
          <a
            onClick={() => {
              setActiveTab("vehicles");
              setType(listTypeVehicules);
            }}
            class="nav-link"
            style={activeTab === "vehicles" ? styleOnClick : {}}
          >
            <h2>Expenses cat 2</h2>
          </a>
        </li>
      </ul>

      <div className="row">
        <div className="col-12 d-flex">
          <div className="card col-6">
            <div className="card-body d-flex flex-wrap justify-content-end">
              <div >
                <button
                  onClick={() => setIsModalTypeOpen(true)}
                  className="btn btn-primary waves-effect waves-light ms-auto"
                >
                  {" "}Add
                </button>
              </div>
              <DataTable
                columns={columns}
                data={type}
                pagination
                highlightOnHover
                responsive
                dense
              />
            </div>
          </div>
        </div>
      </div>
      {/* } */}
    </div>
  );
};

export default Settings;
