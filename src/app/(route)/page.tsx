import styles from "./page.module.css";
import MainContent from "@app/_components/mainContent/MainContent";
import ArticleList from "@app/_components/articleList/ArticleList";

const App = async () => {
  return (
    <MainContent>
      <ArticleList category={0}/>
    </MainContent>
  );
}

export default App;