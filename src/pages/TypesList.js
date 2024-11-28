import React, { useEffect, useState } from 'react';
import { fetchTypes, createType, deleteType, fetchLabels, createLabel, deleteLabel } from '../services/apiService';
import { Modal, Button, Form } from 'react-bootstrap';

const TypesList = () => {
    const [types, setTypes] = useState([]);
    const [selectedRange, setSelectedRange] = useState('all');
    const [showTypeModal, setShowTypeModal] = useState(false);
    const [typeName, setTypeName] = useState('');
    const [typeRange, setTypeRange] = useState('home-office'); // Default range value for new type
    const [currentType, setCurrentType] = useState(null);
    const [labels, setLabels] = useState([]);
    const [newLabelName, setNewLabelName] = useState('');

    // Fetch types when the component mounts or when the selected range changes
    useEffect(() => {
        loadTypes();
    }, [selectedRange]);

    const loadTypes = () => {
        const range = selectedRange === 'all' ? '' : selectedRange;
        fetchTypes(range)
            .then((data) => {
                setTypes(data);
            })
            .catch((error) => console.error('Error loading types:', error));
    };

    const addType = () => {
        if (typeName.trim() === '') return;
        createType({ type_name: typeName, expenses_range: typeRange })
            .then((newType) => {
                setTypes([...types, newType]);
                setShowTypeModal(false);
                setTypeName('');
                setTypeRange('home-office');
            })
            .catch((error) => console.error('Error adding type:', error));
    };

    const removeType = (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this type?');
        if (confirmDelete) {
            deleteType(id)
                .then(() => {
                    setTypes(types.filter(type => type.id !== id));
                })
                .catch((error) => console.error('Error deleting type:', error));
        }
    };

    const openTypeModal = (type) => {
        setCurrentType(type);
        fetchLabels(type.id)
            .then((data) => setLabels(data))
            .catch((error) => console.error('Error fetching labels:', error));
    };

    const addLabel = () => {
        if (newLabelName.trim() === '') return;
        createLabel({ label_name: newLabelName, expense_type_id: currentType.id })
            .then((newLabel) => {
                setLabels([...labels, newLabel]);
                setNewLabelName('');
            })
            .catch((error) => console.error('Error adding label:', error));
    };

    const removeLabel = (labelId) => {
        deleteLabel(labelId)
            .then(() => {
                setLabels(labels.filter(label => label.id !== labelId));
            })
            .catch((error) => console.error('Error deleting label:', error));
    };

    return (
        <div className="container mt-4">
            <h2>Types</h2>
            <div className="mb-3">
                <Form.Select 
                    value={selectedRange} 
                    onChange={(e) => setSelectedRange(e.target.value)} 
                    className="form-select"
                >
                    <option value="all">All Ranges</option>
                    <option value="home-office">Home Office</option>
                    <option value="vehicles">Vehicles</option>
                </Form.Select>
            </div>
            <Button onClick={() => setShowTypeModal(true)}>Add Type</Button>

            <ul className="list-group mt-3">
                {types.map(type => (
                    <li 
                        key={type.id} 
                        className="list-group-item d-flex justify-content-between align-items-center"
                        onClick={() => openTypeModal(type)}
                        style={{ cursor: 'pointer' }}
                    >
                        {type.type_name} - {type.expenses_range}
                        <Button variant="danger" size="sm" onClick={(e) => {
                            e.stopPropagation(); // Prevent the click from opening the modal
                            removeType(type.id);
                        }}>Delete</Button>
                    </li>
                ))}
            </ul>

            {/* Add/Edit Type Modal */}
            <Modal show={showTypeModal} onHide={() => setShowTypeModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Type</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Type Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={typeName} 
                            onChange={(e) => setTypeName(e.target.value)} 
                        />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>Range</Form.Label>
                        <Form.Select 
                            value={typeRange} 
                            onChange={(e) => setTypeRange(e.target.value)}
                        >
                            <option value="home-office">Home Office</option>
                            <option value="vehicles">Vehicles</option>
                        </Form.Select>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowTypeModal(false)}>Cancel</Button>
                    <Button variant="primary" onClick={addType}>Save Type</Button>
                </Modal.Footer>
            </Modal>

            {/* View/Edit Labels Modal */}
            <Modal show={!!currentType} onHide={() => setCurrentType(null)}>
                <Modal.Header closeButton>
                    <Modal.Title>Labels for {currentType?.type_name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Control 
                            type="text" 
                            placeholder="New Label Name" 
                            value={newLabelName} 
                            onChange={(e) => setNewLabelName(e.target.value)} 
                        />
                        <Button className="mt-2" onClick={addLabel}>Add Label</Button>
                    </Form.Group>
                    <ul className="list-group mt-3">
                        {labels.map(label => (
                            <li 
                                key={label.id} 
                                className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                {label.label_name}
                                <Button variant="danger" size="sm" onClick={() => removeLabel(label.id)}>Delete</Button>
                            </li>
                        ))}
                    </ul>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default TypesList;
