// ApplicantList.js
import {useState} from 'react';
import { Table } from 'antd';
import Applicants from "../Applicants.json"
import "../App.css"

const columns = [
  { title: 'Name', dataIndex: 'first_name', key: 'name' },

];




const ApplicantList = ({ onRowClick }:any) => {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (record:any) => {
    setSelectedRow(record);
    if (onRowClick) {
      onRowClick(record);
    }
  };
  
  return <Table   onRow={(record) => ({
    onClick: () => handleRowClick(record),
  })} style={{ width: 200 }} rowClassName={() => 'table-row'} columns={columns} dataSource={Applicants} />;
};

export default ApplicantList;
