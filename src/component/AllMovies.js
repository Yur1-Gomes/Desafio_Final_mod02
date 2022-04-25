import React from "react";
import styled from "styled-components";
import Heart from "../assets/Heart.png";
import Shrek from "../assets/Shrek.png";
import Hoje from "../assets/Hoje.png";
import Miranha from "../assets/Miranha.png";
import Sonho from "../assets/Sonho.png";
import Horas from "../assets/Horas.png";
import Galinhas from "../assets/Galinhas.jpg";
import Amarelo from "../assets/Amarelo.jpg";
import Rocketman from "../assets/Rocketman.jpg";
import JoiaVerde from "../assets/Joia.svg";
import JoiaBranco from "../assets/JoiaBranco.svg";
import JoiaMarelo from "../assets/JoiaMarelo.svg";
import JoiaVermeio from "../assets/JoiaVermeio.svg";

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3.4rem;
  margin-top: 2.5rem;
`;
const H2 = styled.h2`
  font-size: 1.8rem;
`;
const MovieBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 0.9rem;
`;
const Box = styled.div`
  height: 15.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const Image = styled.div`
  position: relative;
`;
const Poster = styled.img`
  width: 16.2rem;
  border-radius: 4px;
  position: relative;
`;
const Fav = styled.img`
  height: 1.4rem;
  position: absolute;
  top: 0.3rem;
  left: 14.5rem;
`;
const Desc = styled.div`
  width: 16.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Grade = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;
const Thumb = styled.img`
  height: 1rem;
`;
const Text = styled.p`
  font-size: 0.75rem;
`;
const H3 = styled.h3`
  font-size: 1rem;
`;

export default class AllMovies extends React.Component {
  state = {
    movies: [
      {
        Name: "Shrek",
        Image: Shrek,
        Desc:
          "Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.",
        Rate: "4/5",
        Img: JoiaVerde,
        id: 0
      },
      {
        Name: "Hoje Eu Quero Voltar…",
        Image: Hoje,
        Desc:
          "Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga.",
        Rate: "-",
        Img: JoiaBranco,
        id: 1
      },
      {
        Name: "Spider-man",
        Image: Miranha,
        Desc:
          "Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo.",
        Rate: "3/5",
        Img: JoiaMarelo,
        id: 2
      },
      {
        Name: "Um Sonho de Liberdade",
        Image: Sonho,
        Desc:
          "Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão.",
        Rate: "4,5/5",
        Img: JoiaVerde,
        id: 3
      },
      {
        Name: "Que Horas Ela Volta?",
        Image: Horas,
        Desc:
          "Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel.",
        Rate: "-",
        Img: JoiaBranco,
        id: 4
      },
      {
        Name: "A Fuga das Galinhas",
        Image: Galinhas,
        Desc:
          "O galo Rocky e a galinha Ginger querem ajudar todas as outras galinhas a fugirem da granja onde vivem em cativeiro.",
        Rate: "2/5",
        Img: JoiaVermeio,
        id: 5
      },
      {
        Name: "AmarElo",
        Image: Amarelo,
        Desc:
          "Nos bastidores do show no Theatro Municipal de São Paulo, o rapper e ativista Emicida celebra o grande legado da cultura negra brasileira.",
        Rate: "5/5",
        Img: JoiaVerde,
        id: 6
      },
      {
        Name: "Rocketman",
        Image: Rocketman,
        Desc:
          "Em reabilitação, Elton John relembra suas origens humildes, as músicas atemporais e os momentos de inspiração e excesso. Baseado em sua verdadeira história.",
        Rate: "-",
        Img: JoiaBranco,
        id: 7
      }
    ]
  };
  render() {
    return (
      <MainBox>
        <H2>Todos</H2>
        <MovieBox>
          {this.state.movies.map((item, pos) => (
            <Box key={pos}>
              <Image>
                <Poster src={item.Image} alt="" />
                <Fav src={Heart} alt="" />
              </Image>
              <Desc>
                <Title>
                  <H3>{item.Name}</H3>
                  <Grade>
                    <p>{item.Rate}</p>
                    <Thumb src={item.Img} alt="" />
                  </Grade>
                </Title>
                <Text>{item.Desc}</Text>
              </Desc>
            </Box>
          ))}
        </MovieBox>
      </MainBox>
    );
  }
}
