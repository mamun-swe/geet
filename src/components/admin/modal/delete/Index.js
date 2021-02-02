import React from 'react'
import './style.scss'
import Modal from 'react-bootstrap/Modal'

const Index = (props) => {
    return (
        <div>
            {/* Delete Modal */}
            <Modal
                show={props.show}
                onHide={() => props.hide({ value: null, status: false })}
                dialogClassName="custom-delete-modal"
            >
                <Modal.Header>
                    <Modal.Title>
                        <h6 className="mb-0">Are you sure ?</h6>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-4">
                    <p className="mb-4">Want to delete {props.value} item .</p>

                    <div>
                        <button
                            type="button"
                            className="btn shadow-none yes-btn"
                            onClick={() => alert(props.value)}
                        >Yes</button>
                        <button
                            type="button"
                            className="btn shadow-none no-btn"
                            onClick={() => props.hide({ value: null, status: false })}
                        >No</button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Index;