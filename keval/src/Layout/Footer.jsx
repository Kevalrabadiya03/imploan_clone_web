import React from 'react'
import copy from "../image/copyscape.png";
import geotrust from "../image/geotrust.png";

function Footer() {
  return (
    <> 
    <section classNameName="footer m-5 p-5">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-12 col-md-4 mb-4">
                            <div
                                classNameName="text-footer-1"
                                style={{ textAlign: "start", margin: "13px 0px" }}
                            >
                                <h6 style={{ fontSize: "18px", fontWeight: "600" }}>About</h6>
                            </div>
                            <div
                                style={{
                                    textAlign: "start",
                                    lineHeight: "1.8",
                                    fontSize: "14px",
                                    color: "#898989",
                                }}
                            >
                                <p>Private Policy</p>
                                <p>Terms and Condition</p>
                                <p>Unsubscribe</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <div
                                classNameName="text-footer-2"
                                style={{ textAlign: "start", margin: "13px 0px" }}
                            >
                                <h6 style={{ fontSize: "18px", fontWeight: "600" }}>Need Help?</h6>
                            </div>
                            <div
                                classNameName="text-footer-2"
                                style={{ textAlign: "start", fontSize: "14px", color: "#898989" }}
                            >
                                <p>
                                    9/860 Nepean Highway
                                    <br />
                                    Hampton East
                                    <br />
                                    Victoria 3188
                                    <br />
                                    USA
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="row">
                                <div className="col-6 d-flex justify-content-start">
                                    <div classNameName="img p-3">
                                        <img src={copy} alt="" />
                                    </div>
                                    <div classNameName="img p-3">
                                        <img src={geotrust} width="150px" alt="" />
                                    </div>
                                </div>
                                <div
                                    className="col-6 text-end"
                                    style={{ margin: "20px", color: "#898989", fontSize: "12px" }}
                                >
                                    <p>
                                        Made in USA.
                                        <br />
                                        Imploan Com.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Footer