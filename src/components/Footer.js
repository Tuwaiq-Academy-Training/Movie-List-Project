import React from "react";
import { Row, Col, Container } from "react-bootstrap";
export default function Footer() {
  return (
    <div className="Footer">
      <hr style={{ padding: "5px" }}></hr>
      <Container>
        <Row>
          <Col xs={6}>
            <div class="our-story-card-text">
              <h1
                id=""
                class="our-story-card-title"
                data-uia="animation-card-title"
              >
                استمتع بالمشاهدة على تلفزيونك.
              </h1>
              <h3
                id=""
                class="our-story-card-subtitle"
                data-uia="our-story-card-subtitle"
              >
                شاهد على أجهزة التلفزيون الذكية و PlayStation و Xbox و
                Chromecast و Apple TV ومشغلات Blu-ray والمزيد.
              </h3>
            </div>
          </Col>
          <Col xs={5}>
            <div class="our-story-card-img-container">
              <div class="our-story-card-animation-container">
                <img
                  alt=""
                  class="our-story-card-img"
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                  data-uia="our-story-card-img"
                />
                <div
                  class="our-story-card-animation"
                  data-uia="our-story-card-animation"
                >
                  <video
                    class="our-story-card-video"
                    data-uia="our-story-card-video"
                    autoPlay
                    muted
                    playsinline=""
                    loop=""
                  >
                    <source
                      src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                      type="video/mp4"
                    />
                  </video>
                  <div class="our-story-card-animation-text"></div>
                  <div
                    class="our-story-card-animation-custom"
                    data-uia="our-story-card-custom"
                    aria-hidden="true"
                  ></div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <hr style={{ padding: "5px" }}></hr>
      <Container>
        <p style={{ marginBottom: "20px", paddingTop: "20px" }}>
          هل لديك أسئلة؟ اتصل بالرقم ‎800-850-1261
        </p>
        <Row>
          <Col>
            <ul>
              <li>
                <a target={"_blank"} target={"_blank"} href="https://help.netflix.com/support/412">
                  الأسئلة الشائعة
                </a>
              </li>
              <li>
                <a target={"_blank"} target={"_blank"} href="http://ir.netflix.com/">علاقات المستثمرين</a>
              </li>
              <li>
                <a target={"_blank"} href="https://www.netflix.com/sa/browse/genre/839338">
                  حصريًا على Netflix
                </a>
              </li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>
                <a target={"_blank"} href="https://help.netflix.com/">مركز خدمة العملاء</a>
              </li>
              <li>
                <a target={"_blank"} href="https://jobs.netflix.com/jobs">الوظائف</a>
              </li>
              <li>
                <a target={"_blank"} href="https://help.netflix.com/legal/termsofuse">
                  بنود الاستخدام
                </a>
              </li>
              <li>
                <a target={"_blank"} href="https://help.netflix.com/contactus"> اتصل بنا</a>
              </li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>
                <a target={"_blank"} href="https://help.netflix.com/legal/privacy"> الخصوصية </a>
              </li>
              <li>
                <a target={"_blank"} href="https://help.netflix.com/legal/notices">
                  إشعارات قانونية
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <select>
          <option>English</option>
          <option>العربية</option>
        </select>
        <p style={{ marginTop: "20px", paddingBottom: "20px" }}>
          Netflix المملكة العربية السعودية
        </p>
      </Container>
    </div>
  );
}
