import React from "react";

const MemberMessage = () => {
  return (
    <div className="row" style={{ marginBottom: 10 }}>
      <div className="col-12">
        <div className="alert alert-info alert-dismissible">
          <h5>
            <i className="icon fas fa-info" /> ประกาศ !
          </h5>
          ให้สมาชิกตรวจสอบจำนวนหุ้นและจำนวนเงินหุ้น ได้ในคิวอาร์โค้ด
          หรือในลิงค์ตรวจสอบ หรือสอบถามได้ที่กลุ่มงานทรัพยากรบุคคล
          พร้อมกับลงลายมือชื่อเพื่อยืนยันจำนวนหุ้นและจำนวนเงินหุ้นที่ถูกต้อง
          ที่กลุ่มงานทรัพยากรบุคคล หากมีจำนวนหุ้นหรือจำนวนเงินหุ้นไม่ตรง
          หรือปัญหาอื่น ๆ ให้สอบถามได้ที่ร้านค้าสวัสดิการฯ
          และกลุ่มงานทรัพยากรบุคคล โดยกำหนดให้ตรวจสอบตั้งแต่บัดนี้จนถึงวันที่ 25
          ธค.63 หากพ้นกำหนดนี้แล้ว
          ท่านไม่ลงลายมือชื่อรับรองจำนวนหุ้นและจำนวนเงินหุ้นจะ
          ถือว่าจำนวนหุ้นและจำนวนเงินหุ้นของท่านถูกต้องแล้ว
          <u>&nbsp;จำนวนหุ้นและจำนวนเงินหุ้น&nbsp;</u>
          ของท่านถูกต้องแล้ว
        </div>
      </div>
    </div>
  );
};

export default MemberMessage;