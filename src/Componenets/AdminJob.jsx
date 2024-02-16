import { useEffect, useState } from "react";
import { Alert, Button, Container, Modal, Table } from "react-bootstrap";
import styled from "styled-components";
import { deleteJobFromDatabase, getAllJobsFromDatabase } from "../Service/controller";

export function AdminJob() {

    const [jobList, setJobList] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState('');
    const [isModalOpened,setIsModalOpened] = useState(false);

    const openModal = ()=>{
        setIsModalOpened(true);
    }
    const closeModal = ()=>{
        setIsModalOpened(false);
    }

    async function getAllJobs() {
        const response = await getAllJobsFromDatabase();
        setJobList(response.data);
    }

    const deleteJob = async()=>{
        const response = await deleteJobFromDatabase(selectedUserId);
        console.log(response.data);
        closeModal();
        getAllJobs();
    }

    useEffect(() => {
        getAllJobs();
    }, []);

    return (
        <>
        <AllContactContainer>
            <section className="alltestlist">
            <Container className="mt-4 mb-4 text-center">
                <Alert>
                    All Job Details
                </Alert>
            </Container>
            <Container>
                <Table>
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Location</th>
                            <th>Mobile Number</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobList.map((postjob) => {
                                return (
                                    <tr>
                                        <td>{postjob.id}</td>
                                        <td>{postjob.title}</td>
                                        <td>{postjob.date}</td>
                                        <td>{postjob.location}</td>
                                        <td>{postjob.mobno}</td>
                                        <td><Button variant="danger" className="btn-sm" onClick={() => {
                                            setSelectedUserId(postjob.id);
                                           openModal();
                                        }}>Delete</Button></td>
                            
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                <div className="row">
                      <div className="col">
                        <div id="postJob" className="col-1 m-auto">
                          <button
                            type="submit"
                            className="btn btn-dark mt-5"
                          ><a href= "/adminhome">
                             BACK
                          </a>
                           
                          </button>
                        </div>
                      </div>
                    </div>
            </Container>
            </section>
            </AllContactContainer>
            <Modal show={isModalOpened} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete job with {selectedUserId} ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={deleteJob}>
                       Yes, Delete
                    </Button>
                    <Button variant="danger" onClick={closeModal}>
                       No
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}

const AllContactContainer = styled.section`

section{

    padding-top: 100px;
    min-height: 80vh;
}

`;