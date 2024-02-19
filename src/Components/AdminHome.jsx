import styled from "styled-components";
import { Link } from "react-router-dom";

export function AdminHome() {
  
  return (
    <>
      <AdminHomeContainer>
        <section>
          <div className="header_emp">
            <div className="navbar_emp container-fluid">
              <div className="navigation_bar_emp">
                <div className="headtag">
                  <p>Welcome</p>
                </div>
                <br></br>
                <br></br>
                <div className="headcontent">
                  <p>
                    AllServiceHub is a comprehensive housing services company that excels in providing a wide range of essential home maintenance solutions. From plumbing and painting to housekeeping, water tank cleaning, pest control, and AC repair, they offer a one-stop solution for all household needs. Their services are distinguished by their excellent quality and reliability, ensuring that customers can rely on them for efficient and effective solutions to their home maintenance challenges. Whether it's fixing a leaky faucet, repainting a room, or ensuring a pest-free environment, AllServiceHub is committed to delivering top-notch service to homeowners, making them a trusted partner for maintaining and enhancing the quality of residential spaces.
                  </p>
                </div>
                <br></br>
                <div className="nav_menu_emp buttons">
                  <div>
                    <Link to="/adminalluser" className="btn btn-success">
                      All users
                    </Link>
                  </div>
                  <div>
                    <Link to="/alladmins" className="btn btn-info">
                      All Admins
                    </Link>
                  </div>
                  <div>
                    <Link to="/adminjob" className="btn btn-info">
                      Posted Services
                    </Link>
                  </div>
                  <div>
                    <Link to="/admincontact" className="btn btn-info">
                      Contact Info
                    </Link>
                  </div>
                  <div>
                    <Link to="/adminfeedback" className="btn btn-info">
                      Feedbacks
                    </Link>
                  </div>
                  <div>
                    <Link to="/adminlog" className="btn btn-danger">
                      Log Out
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AdminHomeContainer>
    </>
  );
}

const AdminHomeContainer = styled.section`
  section {
    padding-top: 70px;
    height: 80vh;
    background: url("/img/home/categories.jpg");
  }

  .headtag p {
    margin-left: 45%;
    font-size : 50px;
    font-weight : 600;
    color : white;
  }

  .headcontent p {
    color : white;
    font-size : 20px;
    font-weight : 600;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }
  
`;