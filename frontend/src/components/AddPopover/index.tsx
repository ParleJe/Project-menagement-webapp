import { MDBBtn, MDBBtnGroup, MDBContainer, MDBDropdown, MDBDropdownDivider, MDBDropdownItem, MDBDropdownLink, MDBDropdownMenu, MDBDropdownToggle, MDBInput, MDBInputGroup, MDBInputGroupElement, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle, MDBRadio, MDBRange, MDBSpinner } from 'mdb-react-ui-kit';
import React, { useState } from 'react';

interface props {
    show: boolean,
    setShow: Function,
    exitFunction: Function
}

enum types {
    project = "Project",
    task = 'Task'
}

const AddPopover = ({show, setShow, exitFunction}: props) => {
    const [selectedType, setSelectedType] = useState<types>(types.project);
    const [range, setRange] = useState<number>(2);

    return(
            <MDBModal backdrop show={show} getOpenState={(e: any) => setShow(e)} tabIndex='1'>
                <MDBModalDialog centered size='lg'>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Create New Task!</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <MDBInput label='title' id='title' type='text' />
                            <br />
                            <MDBInput label='description' id='desc' textarea rows={4} />
                            <br />
                            <MDBRange
                                value={range}
                                min='0'
                                max='5'
                                step='1'
                                id='priority'
                                label='Prioritize value'
                                onChange={(e: any ) => setRange(e.target.value)}
                            />
                            <hr />
                            <div className='d-flex justify-content-center'>
                                <MDBRadio onClick= {() => setSelectedType(types.task)} name='flexRadioDefault' id='flexRadioDefault1' label='Default radio' inline />
                                <MDBRadio onClick= {() => setSelectedType(types.project)} name='flexRadioDefault' id='flexRadioDefault2' label='Default checked radio' defaultChecked inline />
                            </div>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color={selectedType === types.project?"info":"success"}>
                                Submit!
                                {/* <MDBSpinner grow /> */}
                            </MDBBtn>
                        </MDBModalFooter >
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
    )
}

export default AddPopover;