// import { Button, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import './App.css';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import Navbar1 from "./static/view/navBar"
// import Carousell from './static/view/carousel';
// import Footer from './static/view/footer';
import '../src/static/css/page1.css'
import '../src/static/css/ggfont.css'
import logo from '../src/static/img/—Pngtree—beauty salon logo vector_9234686.png'
import '../src/static/css/describer.scss'
import logoo from "../src/static/img/8666632_phone_icon.svg";
import qr from "../src/static/img/qrcode_108689299_8ee670b41bd70479f4eae0f015042ab4.png"
import bg from '../src/static/img/note2.png'
import pro1 from '../src/static/img/product1.png'
import pro2 from '../src/static/img/product2.png'

function Page1() {
  return (
    <>
      <meta charset="UTF-8" />

      <div className='container background1' >
        <div>
          <img className="logo" src={logo} alt='logo' />
        </div>
        <div className='nabla heading1 '> <h1>WELLA</h1></div>
        <div className='caveat heading1'><h3>MỪNG NGÀY GIẢI PHÓNG</h3></div>
        <div className='honk heading1 '> <h1>  ƯU ĐÃI CỰC NÓNG</h1></div>
        <div className='pt-sans-regular-italic heading1'><h3><b>DÀNH CHO CÁN BỘ, NHÂN VIÊN TẬP ĐOÀN PHÚ THÁI</b></h3></div>
        <div style={{ backgroundColor: "white", borderRadius: '25px', color: '#c71414 ', textAlign: 'center', margin: '0 40% 0 40%' }}><p style={{ fontSize: 20 }}><b>ÁP DỤNG ĐẾN NGÀY 1/5</b></p></div>
        <div className="animated-box in"><p>Wella là thương hiệu chăm sóc tóc đến từ Đức, xuất hiện trên thị trường từ hơn 140 năm trước và đang dẫn đầu thế giới về chất lượng, độ an toàn cho người dùng và bảo vệ môi trường</p></div>
        <div className='pt-sans-regular-italic' style={{ textAlign: 'center', color: 'white' }}>
          <h3><p style={{ fontSize: '20px' }}> NHÂN DỊP LỄ 30/4 & 1/5, PHÚ THÁI HBC GỬI ĐẾN TOÀN BỘ CÁN BỘ NHÂN VIÊN TẬP ĐOÀN PHÚ THÁI</p></h3>
        </div>
        <div className='pt-sans-regular-italic' style={{ textAlign: 'center', color: 'white' }}>
          <h3><p style={{ fontSize: '40px' }}>Ưu ĐÃI LÊN ĐẾN 70%</p></h3>
        </div>
        <div className='pt-sans-regular-italic' style={{ textAlign: 'center', color: 'white' }}>
          <h3><p style={{ fontSize: '20px' }}><b>CHO CÁC SẢN PHẨM CHĂM SÓC TÓC ĐẾN TỪ THƯƠNG HIỆU WELLA.</b></p></h3>
        </div>
        <div className="animated-box in">
          <div><p><h4><b>LIÊN HỆ MUA HÀNG TẠI:</b></h4></p></div>
          <div><p style={{ fontSize: '15pt' }}><img style={{ backgroundColor: 'white', borderRadius: '5pt', width: '20px' }} src={logoo} /> 0902671177</p></div>
          <div><p style={{ fontSize: '15pt' }}> hoặc Quét QR Code tại App Zalo</p></div>
          <div><p style={{ fontSize: '15pt' }}><img style={{ backgroundColor: 'white', borderRadius: '5pt', width: '20px' }} src={logoo} /> https://www.facebook.com/wellaprovn</p></div>
          <div><p style={{ fontSize: '15pt' }}> hoặc Quét QR Code </p></div>
          <div className='row' style={{ justifyContent: "center" }}>
            <div className='col-4'> <img src={qr} style={{ width: '100%' }} />
              <br /> <h2><b>QR zalo</b></h2>
            </div>
            <div className='col-2'> </div>
            <div className='col-4'> <img src={qr} style={{ width: '100%' }} />
              <br /> <h2><b>QR zalo</b></h2>
            </div>

          </div>
        </div>
        <div className='pt-sans-regular-italic' style={{ textAlign: 'center', color: 'white' }}>
          <h3><p style={{ fontSize: '40px' }}>Ưu ĐÃI SẢN PHẨM MỚI</p></h3>
        </div>
        <div className='pt-sans-regular-italic border-radius-yellow' style={{ textAlign: 'center', color: 'black' }}>
          <h3><p style={{ fontSize: '40px' }}>SẢN PHẨM DÀNH CHO TÓC NHUỘM</p></h3>
        </div>
        <div className='product row ' >
          <div className='col-6'>
            <div className='product-card-text'>
              <h5>COMBO BẢO VỆ MÀU TÓC TỚI 8 TUẦN</h5>
              <div className='img-product'>
                <div classname="card" style={{ position: 'relative' }}>
                  <img src={pro1} style={{ width: '50%' }} />

                  <img src={bg} style={{ width: '50%' }} />
                  {/* <div className='text-images'>222</div>         */}
                   <div className='text-images'>product beautiful  250ml, xả 200, 1265 800k</div>
                  <div className='icon-salebot'><div style={{ paddingTop: '5pt' }}>30% </div></div>
                  <div className='icon-saletop'>1</div>
                </div>
              </div>
            </div>

          </div>

          <div className='col-6'>
            <div className='product-card-text'>
              <h5>COMBO BẢO VỆ MÀU TÓC TỚI 8 TUẦN</h5>
              <div className='img-product'>
                <div classname="card" style={{ position: 'relative' }}>
                  <img src={pro2} style={{ width: '50%' }} />

                  <img src={bg} style={{ width: '50%' }} />
                  {/* <div className='text-images'>222</div> */}
                  <div className='text-images'>product beautiful  250ml, xả 200, 1265 800k</div>

                  <div className='icon-salebot'><div style={{ paddingTop: '5pt' }}>30% </div></div>
                  <div className='icon-saletop'>2</div>

                </div>
              </div>
            </div>

          </div>
        </div>
        <br/>
        <div className="animated-box in">
          <div><p><h4><b>LIÊN HỆ MUA HÀNG TẠI:</b></h4></p></div>
          <div><p style={{ fontSize: '15pt' }}><img style={{ backgroundColor: 'white', borderRadius: '5pt', width: '20px' }} src={logoo} /> 0902671177</p></div>
          <div><p style={{ fontSize: '15pt' }}> hoặc Quét QR Code tại App Zalo</p></div>
          <div><p style={{ fontSize: '15pt' }}><img style={{ backgroundColor: 'white', borderRadius: '5pt', width: '20px' }} src={logoo} /> https://www.facebook.com/wellaprovn</p></div>
          <div><p style={{ fontSize: '15pt' }}> hoặc Quét QR Code </p></div>
          <div className='row' style={{ justifyContent: "center" }}>
            <div className='col-4'> <img src={qr} style={{ width: '100%' }} />
              <br /> <h2><b>QR zalo</b></h2>
            </div>
            <div className='col-2'> </div>
            <div className='col-4'> <img src={qr} style={{ width: '100%' }} />
              <br /> <h2><b>QR zalo</b></h2>
            </div>

          </div>
        </div>
      </div>

    </>
  );
}

function App() {
  return (
    <>
      {/* <Navbar1/>
  <Carousell/>
  <Footer/> */}
      <Page1 />
    </>
  );
}

export default App;
