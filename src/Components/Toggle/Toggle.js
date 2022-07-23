import React, {useState} from 'react'
import { Form,Button,Accordion,Alert,Badge,Breadcrumb,ButtonGroup,Card,Carousel,CloseButton,Dropdown,Figure,Image,ListGroup,Modal,Nav, Navbar,Offcanvas, Overlay, Pagination,Placeholder, Popover, ProgressBar, Spinner, Table, Tab, Tooltip, Toast} from 'react-bootstrap';



export default function Toggle() {

    const [toggle, setToggle] = useState(true);

  return (
    <div>
        <Card style={{ width: '50rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
            {toggle && (<p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </p>) }
            
        </Card.Text>
        
        <Button variant="primary" onClick={()=>{setToggle(!toggle)}}>
        {toggle? "Hide" : "Show"}
        </Button>
      </Card.Body>
    </Card>
        
        
    </div>
  )
}
