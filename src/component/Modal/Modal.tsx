import React from "react";
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/esm/Button";

interface ModalProps {
	header: String;
	children: React.ReactNode;
	footer?:any
}

export default ({ header, children,footer }: ModalProps) => {
	return <>
		<Modal.Header closeButton>
			<Modal.Title>{header}</Modal.Title>
		</Modal.Header>
		<Modal.Body>
			{children}
		</Modal.Body>
		{footer && <Modal.Footer>
			<Button onClick={() => {
				//history.go(-1);
			}}>Cancel</Button>
		</Modal.Footer>}
	</>
}