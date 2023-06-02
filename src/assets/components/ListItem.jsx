export default function ListItem(props) {
  return (
    <>
      <li>
        <a
          target="_blank"
          // href="https://www.twitch.tv/directory/game/League%20of%20Legends"
          href={props.url}
        >
          <img
            src={props.imgUrl}
            // alt="Imagem do jogo League of Legends"
            alt={props.alt}
          />
        </a>
      </li>
    </>
  );
}
