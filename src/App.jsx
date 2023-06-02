import Header from "./assets/components/header";
import Section from "./assets/components/section";
import ListItem from "./assets/components/ListItem";

const gamesListData = [
  {
    a: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    src: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends",
  },
  {
    a: "https://www.twitch.tv/directory/game/VALORANT",
    src: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    alt: "Imagem do jogo Valorant",
  },
  {
    a: "https://www.twitch.tv/directory/game/Minecraft",
    src: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt: "Imagem do jogo Minecraft",
  },
  {
    a: "https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    src: "https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg",
    alt: "Imagem do jogo TFT",
  },

  {
    /* */
    /* */
    /* */
    /* */
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Section
          title="Meus Jogos Favoriros"
          subtitle="Os games que eu mais curto jogar!"
        ></Section>
        <Section
          title="Canais e Streamers"
          subtitle="Lista de canais e transmissões que não perco!"
        />
      </main>
    </div>
  );
}

export default App;
