import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Footer";
import { withRouter, useHistory } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";
import Header from "./Header";
import { API_URL } from "../Services/Constants";
import { useForm } from "react-hook-form";
import { ListComponent } from "./ListComponent";

// import "react-datepicker/dist/react-datepicker.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

const userInfo = JSON.parse(localStorage.getItem("userInfo"));

function FeeProgramCreate() {
    const history = useHistory();
    const [roleType, setroleType] = useState("");
    const [roleName, setroleName] = useState("");
    const [features, setfeature] = useState([]);
    const [roleDescription, setroleDescription] = useState("");
    const [permissionsmulti, setpermissionsmulti] = useState([]);
    const dataFromFields = {
        features: features,
        permissions: permissionsmulti,
        roleDescription: roleDescription,
        roleName: roleName,
        roleType: roleType,
    };

    const [slabFields, setSlabFields] = useState([{ id: 1 }]);

    const addField = () => {
        const newId = slabFields.length + 1;
        const newField = { id: newId };
        setSlabFields([...slabFields, newField]);
    };

    const [confFields, setConfFields] = useState([{ id: 1 }]);
    const addConfField = () => {
        const newIds = confFields.length + 1;
        const newFields = { id: newIds };
        setConfFields([...confFields, newFields]);
    };


    const onclick = () => {
        if (!roleType) {
            setbooleanForrequierRoleType(true);
        }
        if (!roleName) {
            setbooleanForrequierRoleName(true);
        }
        if (!roleDescription) {
            setbooleanForrequierRoleDescription(true);
        }
        if (permissionsmulti.length == 0) {
            setbooleanForrequierRoleTypepermissionsmulti(true);
        } else {
            onSubmit(dataFromFields);
        }
    };
    const {
        register,
        handleSubmit,
        getValues,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            roleType: "",
            roleName: "",
            features: [],
            roleDescription: "",
            permissions: [],
        },
        reValidateMode: "onChange",
    });

    const [status, setstatus] = useState([]);
    const [permissions, setpermissions] = useState([]);

    const [responseMsg, setResponseMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    let featuresString = "";
    let featuresArray = [];

    let [roleTypesDropdownState, setRoleTypesDropdownState] = useState([]);

    const [roleTypeRef, setRoleTypeRef] = useState("");
    const [roleNameRef, setRoleNameRef] = useState("");
    const [roleNameExists, setRoleNameExists] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState("");
    const [booleanForrequierRoleType, setbooleanForrequierRoleType] = useState();
    const [booleanForrequierRoleName, setbooleanForrequierRoleName] = useState();
    const [
        booleanForrequierRoleDescription,
        setbooleanForrequierRoleDescription,
    ] = useState();
    const [
        booleanForrequierRoleTypepermissionsmulti,
        setbooleanForrequierRoleTypepermissionsmulti,
    ] = useState();

    const optionList = permissions.map((data) => {
        return { value: data, label: data };
    });
    let permissionValue = [];
    const handleChange = (data) => {
        setSelectedOptions(data);
        data.map((item, index) => {
            permissionValue[index] = item.value;
        });
        setpermissionsmulti(permissionValue);
        setbooleanForrequierRoleTypepermissionsmulti(false);
    };
    useEffect(() => {
        axios
            .get(`${API_URL}/userrole/getAllRoleTypes`, {
                headers: {
                    authorization: "Bearer " + userInfo.token,
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                setRoleTypesDropdownState(response.data);
            })
            .catch((error) => {
                console.log("errorsetRoleTypesDropdownState");
            });
    }, []);

    useEffect(() => {
        axios
            .get(`${API_URL}/dropdown/getStatusTypes`, {
                headers: {
                    authorization: "Bearer " + userInfo.token,
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                setstatus(response.data);
            })
            .catch((error) => {
                console.log("error");
            });
    }, []);

    useEffect(() => {
        axios
            .get(`${API_URL}/dropdown/getPermisionTypes`, {
                headers: {
                    authorization: "Bearer " + userInfo.token,
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                setpermissions(response.data);
            })
            .catch((error) => {
                setErrorMsg("option is not created");
            });
    }, []);

    useEffect(() => {
        axios
            .post(
                `${API_URL}/userrole/searchRoles`,
                { roleType: roleTypeRef, roleName: roleNameRef },
                {
                    headers: {
                        authorization: "Bearer " + userInfo.token,
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((response) => {
                console.log(response.data);
                if (roleNameRef === "") {
                } else {
                    setRoleNameExists(true);
                }
            })
            .catch((error) => {
                setRoleNameExists(false);
            });
    }, [roleNameRef]);

    useEffect(() => {
        setResponseMsg("");
        setErrorMsg("");
    }, [getValues]);

    const onSubmit = (data) => {
        axios
            .post(`${API_URL}/userrole/createRole`, data, {
                headers: {
                    authorization: "Bearer " + userInfo.token,
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                setErrorMsg(null);
                if (response.data.responseMsg) {
                    setResponseMsg(response.data.responseMsg);
                } else {
                    setResponseMsg("Bin is created successfully");
                }
            })
            .catch((error) => {
                setErrorMsg("Bin is not created");
                setResponseMsg("");
            });
    };
    const customStyles = {
        indicatorSeparator: (provided, state) => ({
            ...provided,
            display: "none",
        }),
        placeholder: (provided, state) => ({
            ...provided,
            color: "#000",
        }),
    };
    return (
        <div>
            <Header />
            <div className="outerFieldBorder">
                <div className="outerField">
                    <div>
                        <ul className="header">
                            <li>
                                <span href="/" style={{ color: "#0072c6", fontSize: "12px" }}>
                                    SetUp
                                </span>
                            </li>
                            <AiFillCaretRight fontSize="small" />
                            <li>
                                <span
                                    href="/stuff"
                                    style={{ color: "#0072c6", fontSize: "12px" }}
                                >
                                    Fee Program
                                </span>
                            </li>
                            <AiFillCaretRight fontSize="small" />
                            <li>
                                <span
                                    href="/stuff"
                                    style={{ color: "#0072c6", fontSize: "12px" }}
                                >
                                    Create
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="headerButtons">
                        <div className="subheaderButtons">
                            <section className="headerButtonsSection">
                                <div className="searchBtn">
                                    <button
                                        className="serachButtonCreate"
                                        onClick={() => {
                                            history.push("/FeeProgram");
                                        }}
                                    >
                                        Search
                                    </button>
                                </div>
                                <div className="createhBtn">
                                    <button className="createButtonCreate">Create</button>
                                </div>
                            </section>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="innerFieldBorder">
                            <div className="innerField">
                                {roleNameExists && (
                                    <div style={{ color: "red", width: "100%" }}>
                                        {" "}
                                        Rolename is already associated with selected roletype*{" "}
                                    </div>
                                )}
                                {errorMsg && (
                                    <div style={{ color: "red", width: "100%" }}>
                                        {" "}
                                        {errorMsg}*{" "}
                                    </div>
                                )}
                                {responseMsg && (
                                    <div style={{ color: "green", width: "100%" }}>
                                        {" "}
                                        {responseMsg}*{" "}
                                    </div>
                                )}
                                <label>
                                    <div style={{ marginLeft: "2.6rem", marginTop: "0.5rem" }}>
                                        <span className="textStyle">Fee Program Name</span>
                                        <div>
                                            <select
                                                style={{ width: "12rem" }}
                                                {...register("roleType")}
                                                onChange={(e) => {
                                                    setRoleTypeRef(e.target.value);
                                                    setroleType(e.target.value);
                                                    if (e.target.value) {
                                                        setbooleanForrequierRoleType(false);
                                                    }
                                                }}
                                            >
                                                <option value="">Select</option>
                                                {roleTypesDropdownState.map((roleType) => (
                                                    <option value={roleType}>{roleType}</option>
                                                ))}
                                            </select>
                                        </div>
                                        {booleanForrequierRoleType ? (
                                            <p style={{ color: "red" }}>
                                                {"This field is mandatory"}
                                            </p>
                                        ) : (
                                            <p>&nbsp;</p>
                                        )}
                                    </div>
                                </label>

                                <label>
                                    <div style={{ marginLeft: "2rem", marginTop: "0.5rem" }}>
                                        <div className="textStyle">
                                            Program Manager Name
                                            <span style={{ color: "red" }}>*</span>
                                        </div>
                                        <div>
                                            <select
                                                style={{ width: "12rem" }}
                                                {...register("roleType")}
                                                onChange={(e) => {
                                                    setRoleTypeRef(e.target.value);
                                                    setroleType(e.target.value);
                                                    if (e.target.value) {
                                                        setbooleanForrequierRoleType(false);
                                                    }
                                                }}
                                            >
                                                <option value="">Select</option>
                                                {roleTypesDropdownState.map((roleType) => (
                                                    <option value={roleType}>{roleType}</option>
                                                ))}
                                            </select>
                                        </div>
                                        {booleanForrequierRoleName ? (
                                            <p style={{ color: "red" }}>
                                                {"This feild is mandatory"}
                                            </p>
                                        ) : (
                                            <p>&nbsp;</p>
                                        )}
                                    </div>
                                </label>

                                <label>
                                    <div style={{ marginLeft: "2rem", marginTop: "0.5rem" }}>
                                        <div className="textStyle">
                                            ISO Name<span style={{ color: "red" }}>*</span>
                                        </div>
                                        <div>
                                            <select
                                                style={{ width: "12rem" }}
                                                {...register("roleType")}
                                                onChange={(e) => {
                                                    setRoleTypeRef(e.target.value);
                                                    setroleType(e.target.value);
                                                    if (e.target.value) {
                                                        setbooleanForrequierRoleType(false);
                                                    }
                                                }}
                                            >
                                                <option value="">Select</option>
                                                {roleTypesDropdownState.map((roleType) => (
                                                    <option value={roleType}>{roleType}</option>
                                                ))}
                                            </select>
                                        </div>
                                        {booleanForrequierRoleName ? (
                                            <p style={{ color: "red" }}>
                                                {"This feild is mandatory"}
                                            </p>
                                        ) : (
                                            <p>&nbsp;</p>
                                        )}
                                    </div>
                                </label>

                                <label>
                                    <div style={{ marginLeft: "2rem", marginTop: "0.5rem" }}>
                                        <div className="textStyle">
                                            MCC<span style={{ color: "red" }}>*</span>
                                        </div>
                                        <div>
                                            <select
                                                style={{ width: "12rem" }}
                                                {...register("roleType")}
                                                onChange={(e) => {
                                                    setRoleTypeRef(e.target.value);
                                                    setroleType(e.target.value);
                                                    if (e.target.value) {
                                                        setbooleanForrequierRoleType(false);
                                                    }
                                                }}
                                            >
                                                <option value="">Select</option>
                                                {roleTypesDropdownState.map((roleType) => (
                                                    <option value={roleType}>{roleType}</option>
                                                ))}
                                            </select>
                                        </div>
                                        {booleanForrequierRoleName ? (
                                            <p style={{ color: "red" }}>
                                                {"This feild is mandatory"}
                                            </p>
                                        ) : (
                                            <p>&nbsp;</p>
                                        )}
                                    </div>
                                </label>
                                <label>
                                    <div style={{ marginLeft: "2rem", marginTop: "0.5rem" }}>
                                        <div className="textStyle">
                                            Fee Type<span style={{ color: "red" }}>*</span>
                                        </div>
                                        <div>
                                            <select
                                                style={{ width: "12rem" }}
                                                {...register("roleType")}
                                                onChange={(e) => {
                                                    setRoleTypeRef(e.target.value);
                                                    setroleType(e.target.value);
                                                    if (e.target.value) {
                                                        setbooleanForrequierRoleType(false);
                                                    }
                                                }}
                                            >
                                                <option value="">Select</option>
                                                {roleTypesDropdownState.map((roleType) => (
                                                    <option value={roleType}>{roleType}</option>
                                                ))}
                                            </select>
                                        </div>
                                        {booleanForrequierRoleName ? (
                                            <p style={{ color: "red" }}>
                                                {"This feild is mandatory"}
                                            </p>
                                        ) : (
                                            <p>&nbsp;</p>
                                        )}
                                    </div>
                                </label>

                                <div>
                                    {confFields.map((field) => (
                                        <div key={field.id}>


                                            <div
                                                style={{
                                                    border: "1px solid #afafaf",
                                                    padding: "5px",
                                                    paddingTop: "15px",
                                                    marginTop: "10px",
                                                }}
                                            >
                                                <label>
                                                    <div
                                                        className="AddBox"
                                                        style={{
                                                            marginLeft: "2rem",
                                                            marginTop: "0.5rem",
                                                            padding: "5px",
                                                        }}
                                                    >
                                                        Configuration
                                                    </div>

                                                    <div
                                                        style={{
                                                            marginLeft: "2rem",
                                                            marginTop: "0.5rem",
                                                            border: "1px",
                                                            borderColor: "black",
                                                        }}
                                                    >
                                                        <div className="textStyle">
                                                            Scheme<span style={{ color: "red" }}>*</span>
                                                        </div>
                                                        <div>
                                                            <select
                                                                style={{ width: "12rem" }}
                                                                {...register("roleType")}
                                                                onChange={(e) => {
                                                                    setRoleTypeRef(e.target.value);
                                                                    setroleType(e.target.value);
                                                                    if (e.target.value) {
                                                                        setbooleanForrequierRoleType(false);
                                                                    }
                                                                }}
                                                            >
                                                                <option value="">Select</option>
                                                                {roleTypesDropdownState.map((roleType) => (
                                                                    <option value={roleType}>{roleType}</option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                        {booleanForrequierRoleName ? (
                                                            <p style={{ color: "red" }}>
                                                                {"This feild is mandatory"}
                                                            </p>
                                                        ) : (
                                                            <p>&nbsp;</p>
                                                        )}
                                                    </div>
                                                </label>
                                                <label>
                                                    <div style={{ marginLeft: "2rem", marginTop: "0.5rem" }}>
                                                        <div className="textStyle">
                                                            Txn Type<span style={{ color: "red" }}>*</span>
                                                        </div>
                                                        <div>
                                                            <select
                                                                style={{ width: "12rem" }}
                                                                {...register("roleType")}
                                                                onChange={(e) => {
                                                                    setRoleTypeRef(e.target.value);
                                                                    setroleType(e.target.value);
                                                                    if (e.target.value) {
                                                                        setbooleanForrequierRoleType(false);
                                                                    }
                                                                }}
                                                            >
                                                                <option value="">Select</option>
                                                                {roleTypesDropdownState.map((roleType) => (
                                                                    <option value={roleType}>{roleType}</option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                        {booleanForrequierRoleName ? (
                                                            <p style={{ color: "red" }}>
                                                                {"This feild is mandatory"}
                                                            </p>
                                                        ) : (
                                                            <p>&nbsp;</p>
                                                        )}
                                                    </div>
                                                </label>
                                                <label>
                                                    <div style={{ marginLeft: "2rem", marginTop: "0.5rem" }}>
                                                        <div className="textStyle">
                                                            Txn Volume<span style={{ color: "red" }}>*</span>
                                                        </div>
                                                        <div>
                                                            <select
                                                                style={{ width: "12rem" }}
                                                                {...register("roleType")}
                                                                onChange={(e) => {
                                                                    setRoleTypeRef(e.target.value);
                                                                    setroleType(e.target.value);
                                                                    if (e.target.value) {
                                                                        setbooleanForrequierRoleType(false);
                                                                    }
                                                                }}
                                                            >
                                                                <option value="">Select</option>
                                                                {roleTypesDropdownState.map((roleType) => (
                                                                    <option value={roleType}>{roleType}</option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                        {booleanForrequierRoleName ? (
                                                            <p style={{ color: "red" }}>
                                                                {"This feild is mandatory"}
                                                            </p>
                                                        ) : (
                                                            <p>&nbsp;</p>
                                                        )}
                                                    </div>
                                                </label>
                                                <label>
                                                    <div style={{ marginLeft: "2rem", marginTop: "0.5rem" }}>
                                                        <div className="textStyle">
                                                            PM Share<span style={{ color: "red" }}>*</span>
                                                        </div>
                                                        <div>
                                                            <select
                                                                style={{ width: "12rem" }}
                                                                {...register("roleType")}
                                                                onChange={(e) => {
                                                                    setRoleTypeRef(e.target.value);
                                                                    setroleType(e.target.value);
                                                                    if (e.target.value) {
                                                                        setbooleanForrequierRoleType(false);
                                                                    }
                                                                }}
                                                            >

                                                            </select>
                                                        </div>
                                                        {booleanForrequierRoleName ? (
                                                            <p style={{ color: "red" }}>
                                                                {"This feild is mandatory"}
                                                            </p>
                                                        ) : (
                                                            <p>&nbsp;</p>
                                                        )}
                                                    </div>
                                                </label>
                                                <label>
                                                    <div style={{ marginLeft: "2rem", marginTop: "0.5rem" }}>
                                                        <div className="textStyle">
                                                            MSP Share<span style={{ color: "red" }}>*</span>
                                                        </div>
                                                        <div>
                                                            <select
                                                                style={{ width: "12rem" }}
                                                                {...register("roleType")}
                                                                onChange={(e) => {
                                                                    setRoleTypeRef(e.target.value);
                                                                    setroleType(e.target.value);
                                                                    if (e.target.value) {
                                                                        setbooleanForrequierRoleType(false);
                                                                    }
                                                                }}
                                                            >

                                                            </select>
                                                        </div>
                                                        {booleanForrequierRoleName ? (
                                                            <p style={{ color: "red" }}>
                                                                {"This feild is mandatory"}
                                                            </p>
                                                        ) : (
                                                            <p>&nbsp;</p>
                                                        )}
                                                    </div>
                                                </label>

                                                <div>
                                                    {slabFields.map((field) => (
                                                        <div key={field.id}>
                                                            <label>
                                                                <div style={{ marginLeft: "2rem", marginTop: "0.5rem" }}>
                                                                    <div className="textStyle">
                                                                        Slab From<span style={{ color: "red" }}>*</span>
                                                                    </div>
                                                                    <div>
                                                                        <select
                                                                            style={{ width: "12rem" }}
                                                                            {...register("roleType")}
                                                                            onChange={(e) => {
                                                                                setRoleTypeRef(e.target.value);
                                                                                setroleType(e.target.value);
                                                                                if (e.target.value) {
                                                                                    setbooleanForrequierRoleType(false);
                                                                                }
                                                                            }}
                                                                        >

                                                                        </select>
                                                                    </div>
                                                                    {booleanForrequierRoleName ? (
                                                                        <p style={{ color: "red" }}>
                                                                            {"This feild is mandatory"}
                                                                        </p>
                                                                    ) : (
                                                                        <p>&nbsp;</p>
                                                                    )}
                                                                </div>
                                                            </label>
                                                            <label>
                                                                <div style={{ marginLeft: "2rem", marginTop: "0.5rem" }}>
                                                                    <div className="textStyle">
                                                                        Slab To<span style={{ color: "red" }}>*</span>
                                                                    </div>
                                                                    <div>
                                                                        <select
                                                                            style={{ width: "12rem" }}
                                                                            {...register("roleType")}
                                                                            onChange={(e) => {
                                                                                setRoleTypeRef(e.target.value);
                                                                                setroleType(e.target.value);
                                                                                if (e.target.value) {
                                                                                    setbooleanForrequierRoleType(false);
                                                                                }
                                                                            }}
                                                                        >

                                                                        </select>
                                                                    </div>
                                                                    {booleanForrequierRoleName ? (
                                                                        <p style={{ color: "red" }}>
                                                                            {"This feild is mandatory"}
                                                                        </p>
                                                                    ) : (
                                                                        <p>&nbsp;</p>
                                                                    )}
                                                                </div>
                                                            </label>

                                                            <label>
                                                                <div style={{ marginLeft: "2rem", marginTop: "0.5rem" }}>
                                                                    <div className="textStyle">
                                                                        Total Fee<span style={{ color: "red" }}>*</span>
                                                                    </div>
                                                                    <div>
                                                                        <select
                                                                            style={{ width: "12rem" }}
                                                                            {...register("roleType")}
                                                                            onChange={(e) => {
                                                                                setRoleTypeRef(e.target.value);
                                                                                setroleType(e.target.value);
                                                                                if (e.target.value) {
                                                                                    setbooleanForrequierRoleType(false);
                                                                                }
                                                                            }}
                                                                        ></select>
                                                                    </div>
                                                                    {booleanForrequierRoleName ? (
                                                                        <p style={{ color: "red" }}>
                                                                            {"This feild is mandatory"}
                                                                        </p>
                                                                    ) : (
                                                                        <p>&nbsp;</p>
                                                                    )}
                                                                </div>
                                                            </label>
                                                        </div>
                                                    ))}
                                                    <label>
                                                        <div style={{ marginLeft: "2rem", marginTop: "0.5rem" }}>
                                                            <button
                                                                type="button"
                                                                className="address-form"
                                                                id="address-form"
                                                                onClick={addField}
                                                            >
                                                                <span className="glyphicon glyphicon-plus">+</span>
                                                            </button>
                                                            <div className="textStyle">Add Range </div>

                                                        </div>

                                                    </label>
                                                </div>




                                            </div>




                                        </div>
                                    ))}

                                    <label>
                                        <div style={{ marginLeft: "2rem", marginTop: "0.5rem" }}>
                                            <button
                                                type="button"
                                                className="address-form"
                                                id="address-form"
                                                onClick={addConfField}
                                            >
                                                <span className="glyphicon glyphicon-plus">+</span>
                                            </button>
                                            <div className="textStyle">Add Config field </div>

                                        </div>

                                    </label>

                                   
                                </div>

                                <label>
                                    <div style={{ marginLeft: "2rem", marginTop: "0.5rem" }}>
                                        <div className="textStyle">Add Card Type </div>
                                    </div>
                                </label>
                                <button
                                    type="button"
                                    className="addSubRow add-btn-style"
                                    id="mainFeeValueBtn_0"
                                    onclick="addSubrow(this)"
                                >
                                    <span className="glyphicon glyphicon-plus">+</span>
                                </button>
                            </div>
                            <div className="Search_Button">
                                <div className="button_style">
                                    <button
                                        type="submit"
                                        className="button_border"
                                        onClick={onclick}
                                    >
                                        <div className="button_text">Reset</div>
                                    </button>
                                    <button
                                        type="submit"
                                        className="button_border"
                                        onClick={onclick}
                                    >
                                        <div className="button_text">Cancel</div>
                                    </button>
                                    <button
                                        type="submit"
                                        className="button_border"
                                        onClick={onclick}
                                    >
                                        <div className="button_text">create</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default withRouter(FeeProgramCreate);
