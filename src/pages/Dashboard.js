import React, { useEffect, useState } from "react";
import {
  fetchAllLabels,
  fetchAllTypes,
  fetchAllBusinesses,
  fetchUsers,
  fetchIncome,
  fetchExpenseRecords
} from "../services/apiService.js";

import LineChart from "../components/LineChart.js";
import DoughnutChart from "../components/DoughnutChart.js";
import BarDataChart from "../components/BarDataChart.js";
const Dashboard = () => {
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [labelsLength, setLabelsLength] = useState(0);
  const [typesLength, setTypesLength] = useState(0);
  const [typesAndLabelsLength, setTypesAndLabelsLength] = useState(null);
  const [businessesLength, setBusinessesLength] = useState(null);
  const [usersLength, setusersLength] = useState(null);
  const [newUsers, setNewUsers] = useState(null);
  const [yearIncome, setYearIncome] = useState(null);
  const [yearExpenseRecords, setYearExpenseRecords] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    fetchAllLabels().then(data => {
      setLabelsLength(data.length);
    });

    fetchAllTypes().then(data => {
      setTypesLength(data.length);
    });
    fetchAllBusinesses().then(data => {
      setBusinessesLength(data.length);
    });

    fetchUsers().then(data => {
      setusersLength(data.length);
      setNewUsers(
        data
          .sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
          .slice(0, 8)
      );
    });
    fetchIncome().then(data => {
      setYearIncome(
        data
          .filter(
            income => new Date(income.income_date).getFullYear() == currentYear
          )
          .reduce((total, income) => {
            return total + parseFloat(income.gross_receipts_sales);
          }, 0)
      );
    });

    fetchExpenseRecords().then(data => {
      setYearExpenseRecords(
        data
          .filter(expense => expense.year == currentYear)
          .reduce((total, expense) => {
            return total + parseFloat(expense.amount);
          }, 0)
      );
      setIsLoading(false)
    });
  }, []);

  useEffect(
    () => {
      setTypesAndLabelsLength(labelsLength + typesLength);
    },
    [labelsLength, typesLength]
  );

  return (

   
    <div>
       {isLoading ? <div id="preloader">
      <div id="status">
        <div className="spinner" />
      </div>
    </div> :
      <div class="page-content-wrapper ">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12">
              <div class="page-title-box">
{/*                 <div class="btn-group float-right">
                  <ol class="breadcrumb hide-phone p-0 m-0">
                    <li class="breadcrumb-item">
                      <a href="#">Zoogler</a>
                    </li>
                    <li class="breadcrumb-item active">Dashboard</li>
                  </ol>
                </div> */}
                <h4 class="page-title">Dashboard</h4>
              </div>
            </div>
          </div>
          {/* <!-- end page title end breadcrumb --> */}
          <div class="row">
            <div class="col-lg-9">
              <div class="row">
                <div class="col-lg-3">
                  <div class="card">
                    <div class="card-body">
                      <div class="icon-contain">
                        <div class="row">
                          <div class="col-2 align-self-center">
                            <i class="fas fa-tasks text-gradient-success" />
                          </div>
                          <div class="col-10 text-right">
                            <h5 class="mt-0 mb-1">
                              {typesAndLabelsLength && typesAndLabelsLength}
                            </h5>
                            <p class="mb-0 font-12 text-muted">
                              Types and labels
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="card">
                    <div class="card-body justify-content-center">
                      <div class="icon-contain">
                        <div class="row">
                          <div class="col-2 align-self-center">
                            <i class="far fa-gem text-gradient-danger" />
                          </div>
                          <div class="col-10 text-right">
                            <h5 class="mt-0 mb-1">
                              {businessesLength && businessesLength}
                            </h5>
                            <p class="mb-0 font-12 text-muted">Companies</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="card">
                    <div class="card-body">
                      <div class="icon-contain">
                        <div class="row">
                          <div class="col-2 align-self-center">
                            <i class="fas fa-users text-gradient-warning" />
                          </div>
                          <div class="col-10 text-right">
                            <h5 class="mt-0 mb-1">
                              {usersLength && usersLength}
                            </h5>
                            <p class="mb-0 font-12 text-muted">Users</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="card ">
                    <div class="card-body">
                      <div class="icon-contain">
                        <div class="row">
                          <div class="col-2 align-self-center">
                            <i class="fas fa-database text-gradient-primary" />
                          </div>
                          <div class="col-10 text-right">
                            <h5 class="mt-0 mb-1">${yearExpenseRecords && yearExpenseRecords}</h5>
                            <p class="mb-0 font-12 text-muted">Expenses</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <div
                    class="btn-group btn-group-toggle float-right"
                    data-toggle="buttons"
                  />
                  <h5 class="header-title mb-4 mt-0">Current year records</h5>

                  {/* <canvas id="lineChart" height="82" /> */}
                  <LineChart />
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="header-title mb-4 mt-0">Activity</h5>
                  <div>
                    <DoughnutChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="header-title pb-3 mt-0">New Clients</h5>
                  <div
                    class="table-responsive boxscroll"
                    style={{ overflow: "hidden", outline: "none" }}
                  >
                    <table class="table mb-0">
                      <tbody>
                        {newUsers &&
                          newUsers.map(user =>
                            <tr>
                              <td class="border-top-0">
                                <div class="media">
                                  <img
                                    src={
                                      user.profile_pitcure ||
                                      "assets/images/users/avatar-2.jpg"
                                    }
                                    alt=""
                                    class="thumb-md rounded-circle"
                                  />
                                  <div class="media-body ml-2">
                                    <p class="mb-0">
                                      {`${user.first_name} ${user.last_name}`}
                                    </p>
                                    <span class="font-12 text-muted">
                                      {user.email}
                                    </span>
                                    <br />
                                    <span class="font-12 text-muted">
                                      {user.businesses.map(business => {
                                        return business.business_name + " ";
                                      })}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td class="border-top-0 text-right">
                                <a href="#" class="btn btn-light btn-sm">
                                  {/* <i class="far fa-comments mr-2 text-success" /> */}
                                  View
                                </a>
                              </td>
                            </tr>
                          )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="header-title mb-4 mt-0">Monthly Income</h5>
                  <h4 class="mb-4">
                    Total: ${yearIncome && yearIncome}
                  </h4>
                  {/* <canvas id="bar-data" height="132" /> */}
                  <BarDataChart />
                </div>
              </div>
            </div>
          </div>

          {/* <!-- end row --> */}
        </div>
        {/* <!-- container --> */}
      </div>}
      {/* <!-- Page content Wrapper --> */}
                        
    </div>
  );
};

export default Dashboard;
