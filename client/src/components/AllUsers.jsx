import { Card, Col, Row, Spin } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const getData = async () => {
    try {
      setLoading(true);

      const res = await axios.get("http://localhost:5000/api/v1/allusers");
      if (res.data) {
        console.log(res.data);
        setUsers(res.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  console.log("user data ",users)

  return (
    <>
      { loading ? (
        <Spin size="large" />
      ) : (
        <Row gutter={[16, 16]}>
         {
            users.map((item)=>(<>
                <Col xs={24} sm={4} md={6} lg={6} xl={6}>
                <Card
    style={{width: 300,}}>
    <p>{item.name}</p>
    <p>{item.email}</p>
    <p>{item.isAdmin? "true": "false"}</p>

  </Card>
             </Col>
             </>))
         }
        </Row>
      )}
    </>
  );
};

export default AllUsers;
