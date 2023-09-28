// ApplicantDetail.js
import { Card } from 'antd';

const ApplicantDetail = ({selectedApplicant}:any) => {
  
  return (
    <Card style={{minHeight:"100vh"}} title="Applicant Information">
     {selectedApplicant ? (
        <>
          <h2>Applicant Details</h2>
          <p>ID: {selectedApplicant.id} {selectedApplicant.last_name}</p>
          <p>First Name: {selectedApplicant.first_name} {selectedApplicant.last_name}</p>
          <p>Last Name: {selectedApplicant.last_name} {selectedApplicant.last_name}</p>
          <p>Email: {selectedApplicant.email}</p>
          <p>Address: {selectedApplicant.address}</p>
          <p>Education: {selectedApplicant.education}</p>
          <p>Gender: {selectedApplicant.gender}</p>
     
        </>
      ) : (
        <p>Select an applicant to view details.</p>
      )}

    </Card>
  );
};

export default ApplicantDetail;
