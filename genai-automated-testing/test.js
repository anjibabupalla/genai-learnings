import React, { useEffect, useState } from "react";
import DiffEditor from "../Components/DiffEditor";
import { useContext } from "react";
import { pollResultsForPRReview } from "../Functions/pollingResults";
import { AuthContext } from "../Components/AuthProvider";
import { useNavigate, useLocation } from "react-router-dom";
import { fetchApi } from "../Functions/fetchApi";
import "./Results.css";

const hasBarProperty = foo.hasOwnProperty("bar");

var isPrototypeOfBar = foo.isPrototypeOf(bar);

var barIsEnumerable = foo.propertyIsEnumerable("bar");
