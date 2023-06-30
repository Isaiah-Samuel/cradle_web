import Dropdown from 'react-bootstrap/Dropdown';
import '../styles/DropdownButton.css'
import DropdownButton from 'react-bootstrap/DropdownButton';

function BasicButtonExample() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Sign In To Portal">
      <Dropdown.Item id='drop-item' style={{width:'90%', marginBottom:'2px'}} href="http://cradlehighportal.etslportal.com/admin">Student</Dropdown.Item>
      <Dropdown.Item id='drop-item' style={{width:'90%', marginBottom:'2px'}} href="http://cradlehighportal.etslportal.com/admin">Parent</Dropdown.Item>
      <Dropdown.Item id='drop-item' style={{width:'90%', marginBottom:'2px'}} href="http://cradlehighportal.etslportal.com/admin">Teacher</Dropdown.Item>
      <Dropdown.Item id='drop-item' style={{width:'90%', marginBottom:'2px'}} href="http://cradlehighportal.etslportal.com/admin">Admin</Dropdown.Item>
    </DropdownButton>
  );
}

export default BasicButtonExample;