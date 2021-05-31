import { Menu, Layout } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { Link, Route,  Routes, useNavigate } from 'react-router-dom';
import Home from "./Pages/Home"
import SingleWiki from "./Pages/SingleWiki"
import PaginaErrors from "./Pages/PaginaErrors"

const { Header, Footer } = Layout;

function App() {
  const navigate = useNavigate()
  return (
    <Layout className="layout">
    <Header>
      <HomeOutlined style={{marginLeft:'.5rem', width:'2rem', height:'2rem', color:'white'}} onClick={() => (navigate('/'))}/>
      <Menu theme="dark" mode="horizontal">
      </Menu>
    </Header>
    
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/posts/:id" exact element={<SingleWiki />} />
      <Route path="*" element={<PaginaErrors />} />
    </Routes>
    
    <Footer style={{ textAlign: 'center' }}>Created in <Link to="github.com/vitorsierro">Vitor Sierro</Link></Footer>
    </Layout>
  );
}

export default App;
