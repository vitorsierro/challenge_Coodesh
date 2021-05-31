import { useEffect, useState } from "react";
import { pegarPost } from "../api/api";
import { Typography, Image } from "antd";
import styled from '../Styles/SingleWiki.module.css'


const { Title } = Typography;

export default function SingleWiki() {
  const location = window.location.pathname.split('/')[2];
  const [dados, setDados] = useState({});
    
  useEffect(() => {
    if (location !== undefined) {
      pegarPost(setDados, location);}
  }, [location]);
  
    const conteudo = dados.content
    return (
      <>
      { dados.id !== undefined ? 
      <div className={styled.Container}>
        <header>
          <Title>{dados.title}</Title>
          <Title level={4} className={styled.h4}>{dados.headline}</Title>
          
        </header>
        <main>
          <Image className={styled.Image} src={dados.featured_media['large']} preview={false} />
          <div className={styled.Item} dangerouslySetInnerHTML={{__html: conteudo}} />
        </main>
        <footer>
          {dados.tags.map(({ id, name, link }) => (
            <p key={id}><a href={link}>{name}</a></p>
          ))}
          <p className={styled.Name}>{dados.author.name}</p>
          <div className={styled.Biografiph} dangerouslySetInnerHTML={{__html: dados.author.description}} />
        </footer>
      </div>
      : null }
      </>
    )
};
