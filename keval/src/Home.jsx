import React from "react";
import "./App.css";
import computer from "./image/computer.svg";
import money from "./image/save money.svg";
import provide from "./image/provide help.svg";
import small from "./image/small business loan.png";
import exportin from "./image/expert analaysis.png";
import certi from "./image/certification.png";
import footer1 from "./image/footer.png";
import footer2 from "./image/footer2.png";
import footer3 from "./image/footer3.png";
import footer4 from "./image/footer4.png";
import footer5 from "./image/footer5.png";
import success from "./image/success.svg";
import girl from "./image/girl.jpg";
import city from "./image/city.png";
import Layout from "./Layout/Layout";

function Home() {
    return (
        <>
        <Layout>
            
            
            
            <section classNameName="home-first">
                <div
                    classNameName="home-quick"
                    style={{ textAlign: "center", color: "#556B88", paddingTop: "100px" }}
                >
                    <h1 style={{ fontSize: "60px" }}>Quick Loan Offers $100-$5000</h1>
                    <br />
                    <h4
                        style={{
                            color: "black",
                            fontSize: "20px",
                            marginTop: "12.5px",
                            marginBottom: "30.5px",
                        }}
                    >
                        All Credit Types Welcome!
                    </h4>
                </div>
            </section>
            <section classNameName="home-secound">
                <div
                    classNameName="load-text"
                    style={{
                        textAlign: "center",
                        backgroundColor: "rgb(80, 55, 245)",
                        padding: "40px 15px",
                        color: "#fff",
                    }}
                >
                    <h3 style={{ fontWeight: "600" }}>
                        Your loan could be just a few steps away!
                    </h3>
                    <h4>Bad Credit? We Could Help. You could Get Approved in Minutes!</h4>
                </div>
            </section>

            <div
                classNameName="space"
                style={{ padding: "8px", backgroundColor: "#f5f3fa" }}
            ></div>

            <section className="home-three">
                <div className="get">
                    <h3
                        style={{
                            fontFamily: "Raleway",
                            textAlign: "center",
                            fontSize: "26px",
                            marginTop: "32px",
                        }}
                    >
                        Get A Decision Online In Minutes With No Paperwork
                    </h3>
                </div>
                <div className="form">
                    <form style={{ width: "100%" }}>
                        <div
                            className="row"
                            style={{ display: "flex", justifyContent: "center", width: "100%" }}
                        >
                            <div className="col-12 col-md-4 mb-3" style={{ marginBottom: "20px" }}>
                                <label
                                    style={{
                                        fontSize: "17px",
                                        color: "#7a759c",
                                        textAlign: "center",
                                        marginLeft: "10px",
                                        width: "100%",
                                    }}
                                >
                                    Your Loan
                                </label>
                            </div>
                            <div className="col-12 col-md-4 mb-3">
                                <label
                                    for="exampleInputEmail1"
                                    className="form-label"
                                    style={{
                                        color: "#2c4b5d",
                                        fontSize: "14px",
                                        textAlign: "left",
                                        display: "block",
                                    }}
                                >
                                    Loan Amount
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Select"
                                    style={{ borderColor: "rgb(60, 181, 129)" }}
                                />
                            </div>
                            <div className="col-12 col-md-4 mb-3">
                                <label
                                    for="exampleInputPassword1"
                                    className="form-label"
                                    style={{
                                        color: "#2c4b5d",
                                        fontSize: "14px",
                                        textAlign: "left",
                                    }}
                                >
                                    Email Address
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    style={{ borderColor: "rgb(60, 181, 129)" }}
                                />
                            </div>
                            <div className="col-12 text-center">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    style={{
                                        backgroundColor: "#00cf88",
                                        borderColor: "#00cf88",
                                        padding: "10px 60px",
                                        marginTop: "24px",
                                    }}
                                >
                                    Continue
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

            <div
                classNameName="space"
                style={{ padding: "15px", backgroundColor: "#f5f3fa" }}
            ></div>

            <section classNameName="with employ mb-4">
                <div classNameName="text">
                    <p
                        style={{
                            fontSize: "0.8em",
                            textAlign: "center",
                            margin: "0px 80px",
                            paddingBottom: "48px",
                        }}
                    >
                        Representative Example: $1,000 loan over a 12-month term would have
                        a total cost, including interest, a total payback amount of
                        $1,134.72. APR 29.82%. Rates between 5.99% APR and 35.99% APR. Loan
                        term lengths from 61 Days to 72 months for qualified consumers.
                    </p>
                </div>
                <div
                    classNameName="withimploy"
                    style={{
                        fontWeight: "600",
                        fontSize: "30px",
                        fontFamily: "inherit",
                        paddingBottom: "48px",
                        margin: "0px 1em",
                        textAlign: "center",
                    }}
                >
                    <h1>With imploan we will...</h1>
                </div>
                <div classNameName="grid">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col">
                                <div classNameName="img">
                                    <img src={computer} />
                                </div>
                                <div classNameName="text">
                                    <h4 style={{ fontSize: "23px", margin: "12.5px 0px" }}>
                                        Save you house
                                    </h4>
                                    <p
                                        style={{
                                            margin: "0px 25px",
                                            color: "#7e8186",
                                            textAlign: "center",
                                        }}
                                    >
                                        Our expert credit analysis means you get the best deal first
                                        time.
                                    </p>
                                </div>
                            </div>
                            <div className="col">
                                <div classNameName="img">
                                    <img src={money} alt="" />
                                    <div classNameName="text">
                                        <h4 style={{ fontSize: "23px", margin: "12.5px 0px" }}>
                                            Save you money
                                        </h4>
                                        <p
                                            style={{
                                                margin: "0px 25px",
                                                color: "#7e8186",
                                                textAlign: "center",
                                            }}
                                        >
                                            Our free process can literally save you $1000’s in
                                            interest & fees.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div classNameName="img">
                                    <img src={provide} alt="" />
                                    <div classNameName="text">
                                        <h4 style={{ fontSize: "23px", margin: "12.5px 0px" }}>
                                            Provide expert help{" "}
                                        </h4>
                                        <p
                                            style={{
                                                margin: "0px 25px",
                                                color: "#7e8186",
                                                textAlign: "center",
                                            }}
                                        >
                                            We will help you decipher which Personal Loan is best for
                                            you.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section classNameName="process">
                <div
                    classNameName="text"
                    style={{
                        fontWeight: "600",
                        lineHeight: "1.5",
                        marginTop: "23px 0px",
                        backgroundColor: "#601eef",
                        padding: "55px 0px",
                        textAlign: "center",
                        color: "white",
                        fontSize: "40px",
                    }}
                >
                    Our process makes it simple for you
                </div>
            </section>

            <section className="personalloan">
                <div className="text" style={{ margin: "25px 0px", textAlign: "center" }}>
                    <h1 style={{ fontSize: "34px", fontWeight: "600" }}>Personal Loan</h1>
                </div>
                <div className="grid">
                    <div className="text-center">
                        <div className="row" style={{ margin: "0px 20px" }}>
                            <div className="col" style={{ marginBottom: "20px" }}>
                                <div className="text">
                                    <h2 style={{ lineHeight: "1.5", textAlign: "justify", fontSize: "24px" }}>
                                        Repayment and APR Information
                                    </h2>
                                    <div className="paragraf" style={{ textAlign: "justify", fontSize: "13px" }}>
                                        <p>
                                            The lenders on our network offer flexible repayment terms in
                                            multiple installments. If you feel the need to pay off your loan
                                            earlier you may do so without any fees.
                                        </p>
                                        <br />
                                        <p>Our lenders give you as much as 72 months to repay your loan.</p>
                                        <br />
                                        <p>
                                            Lending Period: 6 months to 72 months Payment Options: Once to
                                            Twice a month Maximum APR: APR range from 5.99%-35.99%
                                            Application Fee: None Pre-Payment Penalty: None
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="text">
                                    <h2
                                        style={{
                                            fontSize: "28px",
                                            fontWeight: "600",
                                            lineHeight: "1.2",
                                            margin: "25px 0px",
                                            textAlign: "start",
                                        }}
                                    >
                                        Representative Example
                                    </h2>
                                </div>
                                <div className="table" style={{ margin: "auto", width: "100%" }}>
                                    <table style={{ width: "100%", textAlign: "left", fontSize: "14px" }}>
                                        <thead>
                                            <tr>
                                                <th>Amount</th>
                                                <th>Period</th>
                                                <th>APR</th>
                                                <th>Monthly</th>
                                                <th>Total Paid</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={{ backgroundColor: "#f6f6f6" }}>$2,000</td>
                                                <td style={{ backgroundColor: "#f6f6f6" }}>12 mo</td>
                                                <td style={{ backgroundColor: "#f6f6f6" }}>24%</td>
                                                <td style={{ backgroundColor: "#f6f6f6" }}>$189.12</td>
                                                <td style={{ backgroundColor: "#f6f6f6" }}>$2269.44</td>
                                            </tr>
                                            <tr>
                                                <td>$4,000</td>
                                                <td>14 mo</td>
                                                <td>12%</td>
                                                <td>$188.29</td>
                                                <td>$4,518.96</td>
                                            </tr>
                                            <tr>
                                                <td style={{ backgroundColor: "#f6f6f6" }}>$6,000</td>
                                                <td style={{ backgroundColor: "#f6f6f6" }}>36 mo</td>
                                                <td style={{ backgroundColor: "#f6f6f6" }}>12%</td>
                                                <td style={{ backgroundColor: "#f6f6f6" }}>$199.29</td>
                                                <td style={{ backgroundColor: "#f6f6f6" }}>$7,174.29</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-last">
                    <small style={{ color: "#333", fontSize: "85%", margin: "0px 20px" }}>
                        * This is an example and does not represent the APR and/or fees that the
                        consumer will be given if approved by a lender within our network
                    </small>
                </div>
            </section>
            <section classNameName="requst">
                <div className="container text-center">
                    <div className="row">
                        <div className="col" style={{ margin: "120px 0px" }}>
                            <div
                                classNameName="one-edit"
                                style={{
                                    border: "3px solid #EFF1F1",
                                    fontSize: "30px",
                                    fontWeight: "bold",
                                    width: "58px",
                                    height: "58px",
                                    borderRadius: "99px",
                                    color: "#395BFD",
                                }}
                            >
                                1
                            </div>
                            <div
                                classNameName="text-form"
                                style={{
                                    textAlign: "start",
                                    margin: "25px 0px",
                                    fontWeight: "600",
                                    fontSize: "32px",
                                }}
                            >
                                <h3>One Request Form</h3>
                            </div>
                            <div
                                classNameName="para"
                                style={{ textAlign: "start", color: "#7E8186" }}
                            >
                                <p>
                                    Simply complete one form and get connected to multiple
                                    Personal Loan options
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <img src={small} alt="" style={{ margin: "60px 0px" }} />
                        </div>
                    </div>
                </div>
            </section>

            <section classNameName="requst">
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            <img src={exportin} alt="" style={{ margin: "60px 0px" }} />
                        </div>
                        <div className="col" style={{ margin: "120px 0px" }}>
                            <div
                                classNameName="2"
                                style={{
                                    textAlign: "end",
                                    justifyContent: "end",
                                    display: "flex",
                                }}
                            >
                                <div
                                    classNameName="one-edit"
                                    style={{
                                        border: "3px solid #EFF1F1",
                                        fontSize: "30px",
                                        fontWeight: "bold",
                                        width: "58px",
                                        height: "58px",
                                        borderRadius: "99px",
                                        color: "#395BFD",
                                        textAlign: "center",
                                    }}
                                >
                                    2
                                </div>
                            </div>
                            <div
                                classNameName="one"
                                style={{
                                    textAlign: "end",
                                    justifyContent: "end",
                                    display: "flex",
                                }}
                            >
                                <div
                                    classNameName="text-form"
                                    style={{
                                        textAlign: "start",
                                        margin: "25px 0px",
                                        fontWeight: "600",
                                        fontSize: "32px",
                                    }}
                                >
                                    <h3>One Request Form</h3>
                                </div>
                            </div>
                            <div
                                classNameName="para"
                                style={{ textAlign: "end", fontSize: "15px", color: "#7E8186" }}
                            >
                                <p>
                                    Once you filled the Request Form Our "Lending Partners" will
                                    analyse your requirements quickly to work out how much you can
                                    borrow and on what terms.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section classNameName="requst" style={{ backgroundColor: "#f6f6f6" }}>
                <div className="container text-center">
                    <div className="row">
                        <div className="col" style={{ margin: "120px 0px" }}>
                            <div
                                classNameName="one-edit"
                                style={{
                                    border: "3px solid #EFF1F1",
                                    fontSize: "30px",
                                    fontWeight: "bold",
                                    width: "58px",
                                    height: "58px",
                                    borderRadius: "99px",
                                    color: "#395BFD",
                                }}
                            >
                                3
                            </div>
                            <div
                                classNameName="text-form"
                                style={{
                                    textAlign: "start",
                                    margin: "25px 0px",
                                    fontWeight: "600",
                                    fontSize: "32px",
                                }}
                            >
                                <h3>Best Lender Match™</h3>
                            </div>
                            <div
                                classNameName="para"
                                style={{ textAlign: "start", color: "#7E8186" }}
                            >
                                <p>
                                    We match you to the finance lender who will give you the best
                                    deal, first time.
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <img src={certi} alt="" style={{ margin: "60px 0px" }} />
                        </div>
                    </div>
                </div>
                <div
                    className="text"
                    style={{ textAlign: "center", fontWeight: "500", fontSize: "15px" }}
                >
                    <p>As featured in</p>
                </div>
                <div className="footer" style={{ padding: "20px 0px" }}>
                    <div className="container text-center">
                        <div className="row pt-3 m-1 p-1">
                            <div className="col-6 col-sm-4 col-md-2 mb-3">
                                <img
                                    src={footer1}
                                    width="100%"
                                    style={{ padding: "10px" }}
                                    alt=""
                                />
                            </div>
                            <div className="col-6 col-sm-4 col-md-2 mb-3">
                                <img
                                    src={footer2}
                                    width="100%"
                                    style={{ padding: "10px" }}
                                    alt=""
                                />
                            </div>
                            <div className="col-6 col-sm-4 col-md-2 mb-3">
                                <img
                                    src={footer3}
                                    width="100%"
                                    style={{ padding: "10px" }}
                                    alt=""
                                />
                            </div>
                            <div className="col-6 col-sm-4 col-md-2 mb-3">
                                <img
                                    src={footer4}
                                    width="100%"
                                    style={{ padding: "10px" }}
                                    alt=""
                                />
                            </div>
                            <div className="col-6 col-sm-4 col-md-2 mb-3">
                                <img
                                    src={footer5}
                                    width="100%"
                                    style={{ padding: "10px" }}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="footer-2" style={{ padding: "40px 20px" }}>
                <div
                    style={{
                        textAlign: "center",
                        justifyContent: "center",
                        display: "flex",
                        marginBottom: "24px",
                    }}
                >
                    <img src={success} style={{ maxWidth: "100%", height: "auto" }} alt="Success" />
                </div>
                <div
                    style={{
                        color: "#395bfd",
                        fontSize: "20px",
                        margin: "0px 20px",
                        textAlign: "center",
                    }}
                >
                    <p>
                        At imploan, we’ve set out to make USA people successful. After all,
                        it's the backbone of the US economy. We know firsthand what it’s
                        like to be struggling to meet your needs at the end of the next payday
                        deadlines.
                    </p>
                </div>
                <div>
                    <hr style={{ width: "80%", margin: "20px auto" }} />
                </div>
                <div className="container text-center">
                    <div className="row m-3">
                        <div
                            className="col-md-6"
                            style={{
                                fontSize: "16px",
                                color: "#7E8186",
                                textAlign: "start",
                                marginBottom: "20px",
                            }}
                        >
                            <p>
                                Often, we have everything “on the line”. Big bank processes
                                make it challenging for you to get access to funding when your
                                score is not up to the mark. Fortunately, there has been a
                                surge in non-bank lending to USA citizens with multiple
                                financing options.
                            </p>
                        </div>
                        <div
                            className="col-md-6"
                            style={{
                                fontSize: "16px",
                                color: "#7E8186",
                                textAlign: "start",
                                marginBottom: "20px",
                            }}
                        >
                            <p>
                                These small Personal Loans from non-bank lenders include
                                unsecured Personal Loans, invoice financing, short term
                                finance, and a business line of credit.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="footerpara"
                style={{ backgroundColor: "#F6F6F6", padding: "40px 20px" }}
            >
                <div style={{ margin: "0 auto", maxWidth: "100%", padding: "0 20px" }}>
                    <blockquote />
                    <h4
                        style={{
                            fontSize: "24px",
                            color: "#808184",
                            textAlign: "center",
                            lineHeight: "1.4",
                        }}
                    >
                        imploan really helped me understand my Personal Loan options, I had no
                        idea there were so many! I was matched with a lender who made it really
                        simple.
                    </h4>
                </div>
                <div
                    className="img"
                    style={{
                        textAlign: "center",
                        justifyContent: "center",
                        display: "flex",
                        margin: "30px 0px",
                    }}
                >
                    <img
                        src={girl}
                        alt=""
                        style={{ borderRadius: "50%", width: "60px", height: "60px" }}
                    />
                </div>
            </section>


            <section
                classNameName="getstart"
                style={{
                    backgroundColor: "#601eef",
                    position: "relative",
                    color: "#601eef",
                    width: "100%",
                    height: "24rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <img
                    src={city}
                    alt=""
                    width="100%"
                    style={{
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        height: "inherit",
                        objectFit: "cover",
                    }}
                />
                <div
                    style={{
                        zIndex: 500,
                        textAlign: "center",
                        padding: "0 20px",
                        width: "100%",
                        boxSizing: "border-box",
                    }}
                >
                    <h2
                        style={{
                            fontSize: "24px",
                            color: "#ffffff",
                            lineHeight: "1.2",
                        }}
                    >
                        Get your funds as soon as next 2 business days
                    </h2>

                    <button
                        style={{
                            padding: "12px 24px",
                            color: "#ffffff",
                            backgroundColor: "#00CF72",
                            borderColor: "transparent",
                            fontSize: "14px",
                            fontWeight: "500",
                            borderRadius: "4px",
                            margin: "20px auto",
                            display: "block",
                            maxWidth: "200px",
                            width: "100%",
                        }}
                    >
                        GET STARTED
                    </button>
                </div>
            </section>

            </Layout>
        </>
    );
}

export default Home;
