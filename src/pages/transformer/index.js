import React, { useEffect, useState } from "react";
import "devextreme/dist/css/dx.light.css";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Container } from "reactstrap";
import { getAreaService } from "../../services/area/areaService";
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
} from "devextreme-react/data-grid";
import { exampleData } from "./data/data";
import { formatDate } from "../../helpers/formatDate";
import CustomBreadcrumbs from "../../components/breadcrumbs";

const TransformerPage = (props) => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(0);

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  useEffect(() => {
    getAreaService().then(response => {
      setData(response);
    });
  }, []);

  const getStatusColor = (status) => {
    return status ? "#4caf50" : "#f44336"; // true ise yeşil, false ise kırmızı
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid className="dash">
          <div>
            <CustomBreadcrumbs
              breadcrumbItems={[{ title: props.t("Transformer Substation (I/O)"), url: "/transformer" }]} />
          </div>
          <Accordion open={open} toggle={toggle} style={{ borderRadius: "6px 6px 0 0" }} className="mt-2 border-0">
            {data && data.map((item, index) => (
              <AccordionItem key={index} style={{ borderRadius: "6px 6px 0 0" }} className="border-0 mt-3">
                <AccordionHeader accordionId={index}
                                 className="border-0 d-flex p-2 align-items-center text-uppercase"
                                 style={{ backgroundColor: "#02203e", borderRadius: "6px 6px 0 0" }}
                                 targetId={index}>
                  <div className="font-size-18 fw-400 text-white">
                    <i className="bx bx-bar-chart me-2 text-white"></i>
                    {item.name}
                  </div>
                </AccordionHeader>
                <AccordionBody accordionId={index} className="bg-white" style={{ borderRadius: "0 0 6px 6px" }}>
                  <div>
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
                      style={{ backgroundColor: "white" }}>
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
                      <Export enabled={true} fileName={props.t("Transformator")} />
                      <Paging defaultPageSize={5} />
                      <Pager showInfo={true} showNavigationButtons={true} visible={true} />
                      <SearchPanel visible={true} placeholder={props.t("Search")} />
                      <HeaderFilter visible={true} />
                      <ColumnChooser enabled={true} allowSearch={true} mode="select" />
                      <Column dataField="transformer_name" caption={props.t("transformer_name")} />
                      <Column dataField="status" caption={props.t("status")} cellRender={({ data }) => (
                        <div style={{ color: getStatusColor(data.status) }}>{data.status ? props.t("active") : props.t("inactive") }</div>
                      )} />
                      <Column dataField="last_change" caption={props.t("last_change")} dataType="datetime" format={formatDate} />
                    </DataGrid>
                  </div>
                </AccordionBody>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </div>
    </React.Fragment>
  );
};

TransformerPage.propTypes = {
  location: PropTypes.any,
  t: PropTypes.any
};

export default withRouter(withTranslation()(TransformerPage));
