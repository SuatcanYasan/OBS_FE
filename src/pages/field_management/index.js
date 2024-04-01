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

const FieldManagement = (props) => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid className="dash">
          <div>
            <CustomBreadcrumbs
              breadcrumbItems={[{ title: props.t("Field Management"), url: "/field-management" }]} />
          </div>
          <div className="bg-white mt-2 rounded-2 p-2">
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
              style={{ padding: "20px", backgroundColor: "white" }}>
              <Toolbar>
                <Item location="before" name="groupPanel" />
                <Item location="after" name="exportButton" />
                <Item location="after" name="columnChooserButton" />
                <Item location="after" name="searchPanel" />
              </Toolbar>
              <LoadPanel enabled={false} />
              <Grouping contextMenuEnabled={true} autoExpandAll={false} />
              <GroupPanel visible={true} emptyPanelText={props.t("Drag Here to Group")} />
              <FilterRow visible={true} />
              <Export enabled={true} fileName={props.t("Field Management")} />
              <Paging defaultPageSize={50} />
              <Pager showInfo={true} showNavigationButtons={true} visible={true} allowedPageSizes={[50, 100, 200]}
                     showPageSizeSelector={true} />
              <SearchPanel visible={true} placeholder={props.t("Search")} />
              <HeaderFilter visible={true} />
              <ColumnChooser enabled={true} allowSearch={true} mode="select" />
              <Column dataField="" caption={props.t("Project Information")}
                      cssClass="text-center text-black main-header">
                <Column dataField="field_name" caption={props.t("Field Name")} />
                <Column dataField="device_title" caption={props.t("Device Title")} />
                <Column dataField="city" caption={props.t("Area City")} />
              </Column>
              <Column caption={props.t("Yearly")} cssClass="text-center text-black main-header">
                <Column dataField="ac_power" caption={props.t("AC Installed Capacity")} />
                <Column dataField="dc_power" caption={props.t("DC Installed Capacity")} />
                <Column dataField="production_forecast" caption={props.t("Production Forecast")} />
              </Column>
              <Column caption={props.t("Central Information")} cssClass="text-center text-black main-header">
                <Column dataField="transformator_count" caption={props.t("Transformator Count")} />
                <Column dataField="device_count" caption={props.t("Device Count")} />
              </Column>
            </DataGrid>
          </div>
        </Container>
      </div>
    </React.Fragment>
  )
}

FieldManagement.propTypes = {
  location: PropTypes.any,
  t: PropTypes.any
}

export default withRouter(withTranslation()(FieldManagement))
