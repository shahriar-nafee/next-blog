import Feature from "@/components/Feature";
import styles from "./homepage.module.css";
import CategoryList from "@/components/CategoryList";
import CardList from "@/components/CardList";
import Menu from "@/components/Menu";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  return (
    <div>
      <Feature />
      <CategoryList />
      <div className="row gx-4">
        <div className="col-8">
          <CardList page={page} />
        </div>
        <div className="col-4">
          <Menu />
        </div>
      </div>
    </div>
  );
}
