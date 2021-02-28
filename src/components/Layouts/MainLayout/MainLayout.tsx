import React from "react";
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

interface IProps {
    children: React.ReactChildren
}

const MainLayout: React.FC<IProps> = ({ children }) => {
    return (
        <Layout>
            <Header>HEader</Header>
            <Content>{children}</Content>
            <Footer>Footer</Footer>
        </Layout>  
    );
};

export default MainLayout;
