import React from "react";
import styled from "styled-components";
import Carousel from "nuka-carousel";
import Cap from "../assets/Cap.png";
import ThumbsGreen from "../assets/ThumbsGreen.png";
import Heart from "../assets/Heart.png";
import Shrek from "../assets/Shrek.png";
import Hoje from "../assets/Hoje.png";
import Miranha from "../assets/Miranha.png";
import Sonho from "../assets/Sonho.png";
import Horas from "../assets/Horas.png";
import Galinhas from "../assets/Galinhas.jpg";
import Amarelo from "../assets/Amarelo.jpg";
import Rocketman from "../assets/Rocketman.jpg";
import Seta from "../assets/Seta.svg";
import JoiaVerde from "../assets/Joia.svg";
import JoiaBranco from "../assets/JoiaBranco.svg";
import JoiaMarelo from "../assets/JoiaMarelo.svg";
import JoiaVermeio from "../assets/JoiaVermeio.svg";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
`;
const ContainerMain = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 3rem;
  margin-left: 3.4rem;
  margin-top: 6.4rem;
`;
const PosterMain = styled.img`
  height: 15.1rem;
  width: 26.5rem;
`;
const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
`;
const HeartIcon = styled.img`
  height: 1.4rem;
`;
const H3 = styled.h3`
  font-size: 1rem;
`;
const P = styled.p`
  width: 25.3rem;
`;
const Rate = styled.div`
  display: flex;
  gap: 0.6rem;
`;
const Joia = styled.img`
  height: 1rem;
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
const H2 = styled.h2`
  font-size: 1.12rem;
  margin-left: 3.4rem;
  margin-top: 4.75rem;
  margin-bottom: 0.6rem;
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
const Next = styled.button`
  height: 15.1rem;
  border: none;
  background-color: transparent;
`;
const NextImg = styled.img`
  height: 3.5rem;
  width: 2.6rem;
  position: relative;
  bottom: 2.5rem;
`;

export default class Home extends React.Component {
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
      <Main>
        <ContainerMain>
          <PosterMain src={Cap} alt="" />
          <ContainerInfo>
            <HeartIcon src={Heart} alt="" />
            <H3>Visto recentemente</H3>
            <h1>Capitao Fantástico</h1>
            <P>
              Nas florestas do estado de Washington, um pai cria seus seis
              filhos longe da civilização, em uma rígida rotina de aventuras.
              Ele é forçado a deixar o isolamento e leva sua família para
              encarar o mundo, desafiando sua ideia do que significa ser pai.
            </P>
            <Rate>
              <p>4/5</p>
              <Joia src={ThumbsGreen} alt="" />
            </Rate>
          </ContainerInfo>
        </ContainerMain>
        <div>
          <H2>Destaques</H2>
          <Carousel
            slidesToShow={5}
            wrapAround={true}
            adaptiveHeight={true}
            autoplay={true}
            autoplayInterval={2000}
            defaultControlsConfig={{
              nextButtonText: " ",
              prevButtonStyle: {
                display: "none"
              },
              nextButtonStyle: {
                fontSize: "2.1rem",
                background: "transparent"
              },
              nextButtonClassName: "Arrow",
              pagingDotsStyle: {
                display: "none"
              }
            }}
            style={{
              marginLeft: "3.4rem",
              width: "95%"
            }}
            renderCenterRightControls={({ nextSlide }) => (
              <Next onClick={nextSlide}>
                <NextImg src={Seta} alt="" />
              </Next>
            )}
          >
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
          </Carousel>
        </div>
      </Main>
    );
  }
}
