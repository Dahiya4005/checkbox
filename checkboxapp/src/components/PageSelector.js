import React, { useState } from "react";

const PageSelector = () => {
  const [pages, setPages] = useState({
    selectAll: false,
    page1: false,
    page2: false,
    page3: false,
    page4: false,
    page5: false,
    page6: false,
    page7: false,
    page8: false,
  });

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    setPages({
      selectAll: checked,
      page1: checked,
      page2: checked,
      page3: checked,
      page4: checked,
      page5: checked,
      page6: checked,
      page7: checked,
      page8: checked,
    });
  };

  const handlePageChange = (page) => (e) => {
    const checked = e.target.checked;
    setPages((prevPages) => ({
      ...prevPages,
      [page]: checked,
      selectAll:
        Object.keys(prevPages)
          .filter((key) => key !== "selectAll" && key !== page)
          .every((key) => prevPages[key]) && checked,
    }));
  };

  const formatPageLabel = (page) => {
    // Splits the page key into the word and the number and joins them with a space
    return (
      page
        .replace(/(\D+)(\d+)/, "$1 $2")
        .charAt(0)
        .toUpperCase() + page.replace(/(\D+)(\d+)/, "$1 $2").slice(1)
    );
  };

  const style = {
    wrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      fontFamily: "'Montserrat', sans-serif",
    },
    container: {
      margin: "50px",
      padding: "5px",
      maxHeight: "300px",
      width: "300px",
      display: "flex",
      flexDirection: "column",
      border: "1px #ccc",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
      borderRadius: "5px",
    },
    header: {
      padding: "10px",
    },
    listContainer: {
      overflowY: "auto",
    },
    footer: {
      padding: "10px",
    },
    button: {
      backgroundColor: "#FFCE22",
      border: "none",
      padding: "10px 20px",
      margin: "10px 5px",
      width: "calc(100% - 10px)",
      borderRadius: "5px",
    },

    separator: {
      borderTop: "1px solid #ccc",
      margin: "5px 0",
    },
    pageItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "8px",
    },
    pageItemAll: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingBottom: "5px",
    },
    pageLabel: {
      marginLeft: "5px",
    },
    checkbox: {
      marginRight: "5px",
      borderRadius: "3px",
      opacity: "0.4",
    },
  };

  return (
    <div style={style.wrapper}>
      <div style={style.container}>
        <div style={style.header}>
          <div style={style.pageItemAll}>
            All pages
            <input
              type="checkbox"
              checked={pages.selectAll}
              onChange={handleSelectAll}
              style={style.checkbox}
            />
          </div>
          <div style={style.separator}></div>
        </div>
        <div style={style.listContainer}>
          {Object.keys(pages)
            .filter((key) => key !== "selectAll")
            .map((page) => (
              <div key={page} style={style.pageItem}>
                <label style={style.pageLabel}>{formatPageLabel(page)}</label>
                <input
                  type="checkbox"
                  checked={pages[page]}
                  onChange={handlePageChange(page)}
                  style={style.checkbox}
                />
              </div>
            ))}
        </div>
        <div style={style.footer}>
          <div style={style.separator}></div>
          <button style={style.button} onClick={() => console.log(pages)}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageSelector;
