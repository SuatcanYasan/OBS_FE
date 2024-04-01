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
import i18n from "../../i18n"
import CustomBreadcrumbs from "../../components/breadcrumbs"

const t = i18n.t;
const customizeRowBackground = (e) => {
  const currentDate = new Date();
  const givenDate = new Date(e.data?.last_update);
  const diffInMilliseconds = currentDate - givenDate;
  const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));

  let backgroundColor = "";

  if (diffInMinutes <= 5) {
    backgroundColor = "#34c38f30";
  } else if (5 < diffInMinutes && diffInMinutes < 60) {
    backgroundColor = "#f1b44c30";
  } else if (60 < diffInMinutes) {
    backgroundColor = "#f46a6a30";
  }

  e.rowElement.style.backgroundColor = backgroundColor;
}

const differenceColumn = (e) => {
  const currentDate = new Date();
  const givenDate = new Date(e.data?.last_update);
  const diffInMilliseconds = currentDate - givenDate;
  const diffInSeconds = Math.floor((diffInMilliseconds / 1000) % 60);
  const diffInMinutes = Math.floor((diffInMilliseconds / (1000 * 60)) % 60);
  const diffInHours = Math.floor((diffInMilliseconds / (1000 * 60 * 60)) % 24);
  const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

  const timeUnits = [
    { value: diffInDays, label: t('D') },
    { value: diffInHours, label: t('H') },
    { value: diffInMinutes, label: t('Min.') },
    { value: diffInSeconds, label: t('S') }
  ];

  let result = timeUnits.reduce((acc, unit) => {
    if (unit.value > 0) {
      acc.push(`${unit.value} ${unit.label}`);
    }
    return acc;
  }, []).join(' ');

  result += ` ${t('ago')}`;

  return result;
};

const LastUpdateStatus = [
  {text: t("Updated within 5 minutes"), value: ["difference", "<=", 5],},
  {text: t("Updated within 60 minutes"), value: [["difference", ">", 5], ["difference", "<=", 60]],},
  {text: t("It hasn't been updated for 60 minutes"), value: ["difference", ">",60],
  }]
const InverterPage = (props) => {
    return (
      <React.Fragment>
          <div className="page-content">
            <Container fluid className="dash">
                <div>
                  <CustomBreadcrumbs
                    breadcrumbItems={[{title: props.t("Inverters"), url: "/inverters"}]}/>
                </div>
              <div className="bg-white mt-2 rounded-2 p-4">
                <div className="d-flex gap-4">
                  <div className="avatar-mini rounded-2" style={{ backgroundColor: "#34C38F30" }} />
                  <div className="align-self-center">{props.t("Updated within 5 minutes")}</div>
                  <div className="avatar-mini rounded-2" style={{ backgroundColor: "#F1B44C30" }} />
                  <div className="align-self-center">{props.t("Updated within 60 minutes")}</div>
                  <div className="avatar-mini rounded-2" style={{ backgroundColor: "#f46a6a30" }} />
                  <div className="align-self-center">{props.t("It hasn't been updated for 60 minutes")}</div>
                </div>
                <DataGrid
                  dataSource={exampleData}
                  allowColumnResizing={true}
                  allowColumnReordering={true}
                  hoverStateEnabled={true}
                  columnAutoWidth={true}
                  showColumnLines={false}
                  showRowLines={true}
                  className="mt-4"
                  id="datagrid"
                  columnResizingMode="widget"
                  onRowPrepared={customizeRowBackground}
                  style={{backgroundColor: "white"}}>
                  <Toolbar>
                    <Item location="before" name="groupPanel"/>
                    <Item location="after" name="exportButton"/>
                    <Item location="after" name="columnChooserButton"/>
                    <Item location="after" name="searchPanel"/>
                  </Toolbar>
                  <LoadPanel enabled={false}/>
                  <Grouping contextMenuEnabled={true} autoExpandAll={false}/>
                  <GroupPanel visible={true} emptyPanelText={props.t("Drag Here to Group")}/>
                  <FilterRow visible={true}/>
                  <Export enabled={true} fileName={props.t("Inverters")}/>
                  <Paging defaultPageSize={50}/>
                  <Pager showInfo={true} showNavigationButtons={true} visible={true} allowedPageSizes={[50, 100, 200]}
                         showPageSizeSelector={true}/>
                  <SearchPanel visible={true} placeholder={props.t("Search")}/>
                  <HeaderFilter visible={true}/>
                  <ColumnChooser enabled={true} allowSearch={true} mode="select"/>
                  <Column dataField="field_name" caption={props.t("Field Name")}/>
                  <Column dataField="transformator" caption={props.t("Transformator")}/>
                  <Column dataField="device_name" caption={props.t("Device Name")}/>
                  <Column dataField="status" caption={props.t("Status")}/>
                  <Column dataField="serial_no" caption={props.t("Serial No")}/>
                  <Column dataField="creator" caption={props.t("Creator")}/>
                  <Column dataField="dev_version" caption={props.t("Software Version")}/>
                  <Column dataField="total_count" caption={props.t("Total Count")}/>
                  <Column dataField="last_update" caption={props.t("Last Update")} dataType="string" cellRender={differenceColumn}>
                    <HeaderFilter dataSource={LastUpdateStatus} visible={true}/>
                  </Column>
                </DataGrid>
              </div>
            </Container>
          </div>
      </React.Fragment>
    );
};

InverterPage.propTypes = {
  location: PropTypes.any,
  t: PropTypes.any,
};

export default withRouter(withTranslation()(InverterPage));
