import { Container } from "reactstrap";
import TotalSaleWidgets from "./TotalSaleWidgets/TotalSaleWidgets";
import MonthlyHistory from "./MonthlyHistory/MonthlyHistory";
import LiveProducts from "./LiveProducts/LiveProducts";
import StockMarket from "./StockMarket/StockMarket";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { schooluser,Master } from "../../../utils/Constant";

const ContainerChart = () => {
  return (
    <>
      <Breadcrumbs mainTitle={schooluser} parent={Master} />
      <Container fluid>
        <TotalSaleWidgets />
        <MonthlyHistory />
        <LiveProducts />
        <StockMarket />
      </Container>
    </>
  );
};

export default ContainerChart;
