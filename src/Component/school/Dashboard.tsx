import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Dashboard, Default } from "../../utils/Constant";
import RevenueGrowth from "../Dashboard/ProjectManagement/RevenueGrowth/RevenueGrowth";
import BoostUpYourSale from "../Dashboard/ProjectManagement/BoostUpYourSale/BoostUpYourSale";
import TopProduct from "../Dashboard/ProjectManagement/TopProduct/TopProduct";
import NewUser from "../Dashboard/ProjectManagement/NewUser/NewUser";
import TeamActivity from "../Dashboard/ProjectManagement/TeamActivity/TeamActivity";
import UserVisitsByDay from "../Dashboard/ProjectManagement/UserVisitsByDay/UserVisitsByDay";
import LatestTransaction from "../Dashboard/ProjectManagement/LatestTransaction/LatestTransaction";
import BestSellingProduct from "../Dashboard/ProjectManagement/BestSellingProduct/BestSellingProduct";

const ContainerDefault = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Default} parent={Dashboard} />
      <Container fluid>
        <Row>
         kjzghdsfsdbjn
        </Row>
      </Container>
    </>
  );
};

export default ContainerDefault;
