import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { fetchSheetData } from "../../actions/sheetAction";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { sheetData, loading, error } = useSelector((state) => state.sheetData);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    dispatch(fetchSheetData());
  }, [dispatch, error]);

  return loading ? (
    <p>loading</p>
  ) : (
    <Fragment>
      <div>
        <h1>Dashboard</h1>
        {sheetData.loading ? (
          <p>Loading...</p>
        ) : sheetData.error ? (
          <p>Error: {sheetData.error}</p>
        ) : (
          <ul>
            {sheetData.sheetData.map((row, index) => (
              <li key={index}>{row.join(", ")}</li>
            ))}
          </ul>
        )}
      </div>
    </Fragment>
  );
};

export default Dashboard;
