// import "./Board.css";
import Card from "./Card.jsx";

const Board = () => {
  return (
    <div className="Board">
      <table>
        <tbody>
          <tr>
            <Card
              img="../src/assets/a thousand splendid suns.jpg"
              title="A Thousand Splendid Suns"
              author="Khaled Hosseini"
            />
            <Card
              img="../src/assets/heavens offical blessing.jpg"
              title="Heavens Offical Blessing"
              author="MXTX"
            />
            <Card
              img="../src/assets/they both die at the end.jpg"
              title="They Both Die at the End"
              author="Adam Silvera"
            />
          </tr>
          <tr>
            <Card
              img="../src/assets/the song of achilles.jpg"
              title="The Song of Achilles"
              author="Madeline Miller"
            />
            <Card
              img="../src/assets/pride and prejudice.jpg"
              title="Pride and Prejudice"
              author="Jane Austen"
            />
            <Card
              img="../src/assets/six of crows.jpg"
              title="six of crows"
              author="Leigh Bardugo"
            />
          </tr>
          <tr>
            <Card
              img="../src/assets/cruel prince.jpg"
              title="Cruel Prince"
              author="Holly Black"
            />
            <Card
              img="../src/assets/dog man.jpg"
              title="Dog Man"
              author="Dav Pilkey"
            />
            <Card
              img="../src/assets/shatter me.jpg"
              title="Shatter Me"
              author="Tahereh Mafi"
            />
          </tr>
          <tr>
            <Card
              img="../src/assets/fourth wing.jpg"
              title="Fourth Wing"
              author="Rebecca Yarros"
            />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Board;
