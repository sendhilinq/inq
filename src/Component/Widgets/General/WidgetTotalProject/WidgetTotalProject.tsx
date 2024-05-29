import { Col, Row } from 'reactstrap'
import TotalProjectCard from '../../../Dashboard/Ecommerce/TotalProject/TotalProjectCard'
import TotalSalesCard from '../../../Dashboard/Default/TotalSales/TotalSalesCard'


const WidgetTotalProject = () => {
  return (
    <Col xxl="12" className="box-col-12">
      <Row>
        <TotalProjectCard />
        <TotalSalesCard changeClass={true}   />
        <TotalSalesCard changeClass={true} />
        <TotalSalesCard changeClass={true} />
        <TotalSalesCard changeClass={true} />
      
      </Row>
    </Col>
  )
}

export default WidgetTotalProject