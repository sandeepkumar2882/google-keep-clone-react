import React from 'react';
import { Modal, Button } from "react-bootstrap";

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);