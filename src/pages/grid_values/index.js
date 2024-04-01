import React from "react"
import "devextreme/dist/css/dx.light.css"
import PropTypes from "prop-types"
import { withRouter } from "react-router-dom"
import { withTranslation } from "react-i18next"
import { Container } from "reactstrap"
import DataGrid, {
  Column,
  ColumnChooser,
  Export,
  FilterRow,
  Grouping,
  GroupPanel,
  HeaderFilter,
  Item,
  LoadPanel,
  Pager,
  Paging,
  SearchPanel,
  Toolbar
} from "devextreme-react/data-grid"
import { exampleData } from "./data/data"
import CustomBreadcrumbs from "../../components/breadcrumbs"
import { formatDate } from "../../helpers/formatDate";

const GridValuePage = (props) => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid className="dash">
          <div>
            <CustomBreadcrumbs
              breadcrumbItems={[{ title: props.t("Grid Values"), url: "/grid-values" }]} />
          </div>
          <div className="bg-white mt-2 p-2 rounded-2">
            <DataGrid
              dataSource={exampleData}
              allowColumnResizing={true}
              allowColumnReordering={true}
              hoverStateEnabled={true}
              columnAutoWidth={true}
              showColumnLines={false}
              showRowLines={true}
              id="datagrid"
              columnResizingMode="widget"
              style={{ padding: "20px", backgroundColor: "white"}}>
              <Toolbar>
                <Item location="before" name="groupPanel" />
                <Item location="after" name="exportButton" />
                <Item location="after" name="columnChooserButton" />
                <Item location="after" name="searchPanel" />
              </Toolbar>
              <LoadPanel enabled={false}/>
              <Grouping contextMenuEnabled={true} autoExpandAll={false}/>
              <GroupPanel visible={true} emptyPanelText={props.t("Drag Here to Group")}/>
              <FilterRow visible={true}/>
              <Export enabled={true} fileName={props.t("Grid Values")}/>
              <Paging defaultPageSize={10}/>
              <Pager showInfo={true} showNavigationButtons={true} visible={true} allowedPageSizes={[10, 50, 100]}
                     showPageSizeSelector={true}/>
              <SearchPanel visible={true} placeholder={props.t("Search")}/>
              <HeaderFilter visible={true}/>
              <ColumnChooser enabled={true} allowSearch={true} mode="select"/>
              <Column dataField="area_name" caption={props.t("area_name")} />
              <Column dataField="transformer_name" caption={props.t("transformer_name")} />
              <Column dataField="production/consumption" caption={props.t("production/consumption")} />
              <Column dataField="total_power_generation" caption={props.t("total_power_generation")} />
              <Column dataField="total_power_consumption" caption={props.t("total_power_consumption")} />
              <Column dataField="L1N" caption={props.t("L1N")} />
              <Column dataField="L2N" caption={props.t("L2N")} />
              <Column dataField="L3N" caption={props.t("L3N")} />
              <Column dataField="L1L2" caption={props.t("L1L2")} />
              <Column dataField="L1L3" caption={props.t("L1L3")} />
              <Column dataField="L2L3" caption={props.t("L2L3")} />
              <Column dataField="I1" caption={props.t("I1")} />
              <Column dataField="I2" caption={props.t("I2")} />
              <Column dataField="I3" caption={props.t("I3")} />
              <Column dataField="frequency" caption={props.t("frequency")} />
              <Column dataField="power_factor" caption={props.t("power_factor")} />
              <Column dataField="apparent_power" caption={props.t("apparent_power")} />
              <Column dataField="reactive_power" caption={props.t("reactive_power")} />
              <Column dataField="total_reactive_generation" caption={props.t("total_reactive_generation")} />
              <Column dataField="total_reactive_consumption" caption={props.t("total_reactive_consumption")} />
              <Column dataField="instantaneous_power_generation" caption={props.t("instantaneous_power_generation")} />
              <Column dataField="instantaneous_power_consumption" caption={props.t("instantaneous_power_consumption")} />
              <Column dataField="date" caption={props.t("date")} dataType="datetime" format={formatDate} />



            </DataGrid>
          </div>

        </Container>
      </div>
    </React.Fragment>
  )
}

GridValuePage.propTypes = {
  location: PropTypes.any,
  t: PropTypes.any
}

export default withRouter(withTranslation()(GridValuePage))
