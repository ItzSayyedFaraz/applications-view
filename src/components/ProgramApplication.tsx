// Dashboard.js
import {useState} from 'react';
import { Layout, Menu } from 'antd';
import ApplicantList from './ApplicantList';
import ApplicantDetail from './ApplicantDetail';

const {  Content, Footer, Sider } = Layout;

const Dashboard = () => {
  const [selectedApplicant, setSelectedApplicant] = useState(null);

  // Callback function to receive selected data from ApplicantList
  const handleRowClick = (data:any) => {
    setSelectedApplicant(data);
    
  };
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={200} theme="dark">
        <Menu mode="vertical" theme="dark" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Applicant List</Menu.Item>
          {/* Add more menu items for different sections */}
        </Menu>
      </Sider>
      <Layout >
        <Content style={{ padding: '16px' }}>
          {/* Content for selected section */}
          <div  style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ flex: '1', marginRight: '0px' }}>
          <ApplicantList onRowClick={handleRowClick}/>
          </div>
          <div  style={{ flex: '3',minHeight: '500px' }}>
          <ApplicantDetail  selectedApplicant={selectedApplicant} />
          </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Recruitment System ©2023</Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
