import React from "react";
import Modal from "react-bootstrap/Modal";
import { useHistory } from "react-router-dom";

interface RouteModalProps {
	children: React.ReactNode
}

const RouteModal: React.FC<any> = ({
	children,
}: RouteModalProps) => {
	const history = useHistory();
	return <Modal
		show={true}
	//	size="lg"
		onHide={() => {
			history.go(-1);
		}}
	>
		{children}
	</Modal>
}

export default RouteModal;