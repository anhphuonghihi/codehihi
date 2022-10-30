import React from "react";
import { useSelector } from "react-redux";
import Footer from "../../Footer";
import Header from "../Home/Header";
import Loading from "../../more/Loader";
import MetaData from "../../more/Metadata";
import "./About.css";
import BottomTab from "../../more/BottomTab";
import Humg from "../../Assets/HUMG.jpeg"
const About = () => {
  const { loading } = useSelector(
    (state) => state.profile
  );
  return (
    <>
      {loading ? <Loading /> :
        <>
          <MetaData title="Giới thiệu" />
          <div>
            <Header />
            <div
              style={{
                width: "100%",
                margin: "0px auto",
              }}
            >
              <div className="about__page">
                <div
                  style={{
                    fontSize: "40px",
                    fontWeight: "700",
                    lineHeight: "1.2",
                    textAlign: "center",
                  }}
                >
                  Chào mừng bạn đến với Đại học Mỏ -Địa Chất
                </div>
                <div className="row flex" style={{ gap: 30 }}>
                  <div className="col__2">
                    <img src={Humg} alt="Lỗi" />
                  </div>
                  <div className="col__3">
                    <div className="meta">
                      <p>
                        RTFT HUMG(Register for the topic of the University of Mining - Geology) Là 
                        hệ thống đăng kí đề tài tốt nghiệp cho sinh viên và giảng viên Trường Đại Học Mỏ-Địa chất.
                        RTFT HUMG giúp sinh viên và giảng viên thực hiện các chức năng liên quan đến đề tài...
                      </p>
                      <p>
                        Sản phẩm là kết quả của nhóm sinh viên :Lê Minh Phương,Đào Thùy Dương,Trương Thị Hoài Thương ,Đặng Thị Trang,Nguyễn Anh Tuấn
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2nd verse */}
                <div className="second">
                  <div className="heading">
                    <h2>Chúng tôi cung cấp những gì?</h2>
                  </div>
                  <div className="row flex">
                    <div className="col__3">
                      <div style={{
                        padding: "10px",
                        border: "1px solid rgb(0 0 0 / 14%)",
                        minHeight: "230px"
                      }}>
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-1.svg" />
                        </div>
                        <span>Best Prices & Offers</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration in some
                          form
                        </p>
                      </div>
                    </div>
                    <div className="col__3">
                      <div style={{
                        padding: "10px",
                        border: "1px solid rgb(0 0 0 / 14%)",
                        minHeight: "230px"
                      }}>
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-2.svg" />
                        </div>
                        <span>Best For Trust & Quality</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration in some
                          form
                        </p>
                      </div>
                    </div>
                    <div className="col__3">
                      <div style={{
                        padding: "15px",
                        border: "1px solid rgb(0 0 0 / 14%)",
                        minHeight: "230px"
                      }}>
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-3.svg" />
                        </div>
                        <span>Fast Delivery System</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration in some
                          form
                        </p>
                      </div>
                    </div>


                    <div className="col__3">
                      <div style={{
                        padding: "15px",
                        border: "1px solid rgb(0 0 0 / 14%)",
                        minHeight: "230px"
                      }}>
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-4.svg" />
                        </div>
                        <span>Easy Returns Service</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration in some
                          form
                        </p>
                      </div>
                    </div>

                    <div className="col__3">
                      <div style={{
                        padding: "15px",
                        border: "1px solid rgb(0 0 0 / 14%)",
                        minHeight: "230px"
                      }}>
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-5.svg" />
                        </div>
                        <span>100% satisfication</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration in some
                          form
                        </p>
                      </div>
                    </div>

                    <div className="col__3">
                      <div style={{
                        padding: "15px",
                        border: "1px solid rgb(0 0 0 / 14%)",
                        minHeight: "230px"
                      }}>
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-6.svg" />
                        </div>
                        <span>Great Daily Deal</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration in some
                          form
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
          <BottomTab />
        </>
      }
    </>
  );
};

export default About;
