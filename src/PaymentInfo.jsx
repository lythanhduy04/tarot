export default function PaymentInfo() {
  return (
    <div className="payment-info">
      <div className="payment-container">
        <div className="qr-section">
          <h3>Quét mã để donate</h3>
          <img 
            src={import.meta.env.BASE_URL + 'momo-qr.jpg'} 
            alt="Momo QR Code" 
            className="qr-code"
          />
          <p className="qr-name">Lý Thành Duy</p>
        </div>
        
        <div className="bank-section">
          <h3>Thông tin tài khoản</h3>
          <div className="bank-info">
            <p><strong>Ngân hàng:</strong> Momo</p>
            <p><strong>Tên:</strong> Lý Thành Duy</p>
            <p><strong>Số tài khoản:</strong></p>
            <span className="stk">0378152467</span>
            <button 
              className="copy-btn"
              onClick={() => copyToClipboard('0378152467')}
            >
              📋 Copy STK
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
  alert('✅ Đã copy: ' + text)
}
