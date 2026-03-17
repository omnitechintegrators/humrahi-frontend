import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, FileText, Download, X } from "lucide-react";
import axios from "axios";  
const API = "http://localhost:5000/api/donations";

/* ================= DONATION PAGE ================= */

const Donate = () => {
  /* ================= STATES ================= */

  const [amount, setAmount] = useState(1000);

  const [donor, setDonor] = useState({
 
name: "",
email: "",
phone: "",
address: "",
pan: "",
message: ""
  });

  const [showConfirm, setShowConfirm] = useState(false);

  const [showCertificatePopup, setShowCertificatePopup] = useState(false);
  

  const [otpStep, setOtpStep] = useState(false);

  const [otp, setOtp] = useState("");

  const [showSuccess, setShowSuccess] = useState(false);

  const [showError, setShowError] = useState(false);

  const [certificateUrl, setCertificateUrl] = useState("");
  const [certificateEmail, setCertificateEmail] = useState("");
const [certificatePhone, setCertificatePhone] = useState("");

const [certificateList,setCertificateList]=useState([]);
const [showList,setShowList]=useState(false);
const [loadingReceipt,setLoadingReceipt] = useState(false);
  /* ================= HANDLERS ================= */

  const handleDonateClick = () => {
    if (!donor.name || !donor.email || !donor.phone || !donor.address) {
      alert("Please fill all required fields");

      return;
    }

    setShowConfirm(true);
  };

const handleProceedPayment = async () => {

try {

setShowConfirm(false);

/* SHOW LOADING POPUP */

setLoadingReceipt(true);


/* CREATE ORDER */

const orderRes = await axios.post(`${API}/create-order`, {

amount: amount,

});

const order = orderRes.data;


/* OPEN RAZORPAY */

const options = {

key: import.meta.env.VITE_RAZORPAY_KEY,

amount: order.amount,

currency: "INR",

name: "Humrahi Foundation",

description: "Donation",

order_id: order.id,


handler: async function (response) {

try {

/* VERIFY PAYMENT */

const verifyRes = await axios.post(`${API}/verify-payment`, {

razorpay_payment_id:
response.razorpay_payment_id,

razorpay_order_id:
response.razorpay_order_id,

razorpay_signature:
response.razorpay_signature,


/* SEND FULL DONOR DATA */

donor: {

 name: donor.name,
 email: donor.email,
 phone: donor.phone,
 address: donor.address,
 pan: donor.pan,
 message: donor.message,
 amount: amount,

}

});


/* SAVE CERTIFICATE URL */

setCertificateUrl(
verifyRes.data.certificateUrl
);


/* STOP LOADING */

setLoadingReceipt(false);


/* SHOW SUCCESS POPUP */

setShowSuccess(true);


} catch (error) {

console.log(error);

setLoadingReceipt(false);

alert("Saving donation failed");

}

},


prefill: {

name: donor.name,

email: donor.email,

contact: donor.phone,

},

theme: {

color: "#D9272B",

},

};


const rzp = new window.Razorpay(options);

rzp.open();


} catch (error) {

console.log(error);

setLoadingReceipt(false);

alert("Payment failed");

}

};


const handleSendOtp = async () => {

try {

const res = await axios.post(

"http://localhost:5000/api/otp/send",

{
email: certificateEmail,
phone: certificatePhone
}

);

if (res.data.success) {

setOtpStep(true);

} else {

setShowError(true);

}

} catch (error) {
console.log(error);
setShowError(true);
}


};




const handleVerifyOtp = async () => {

try {

const res = await axios.post(

"http://localhost:5000/api/otp/verify",

{
email: certificateEmail,
otp: otp
}

);

if (res.data.success) {

setCertificateList(res.data.donations);

setShowList(true);

setShowCertificatePopup(false);

} else {

setShowError(true);

}

} catch {

setShowError(true);

}

};

const downloadCertificate = async(d)=>{

window.open(

`http://localhost:5000/${d.certificateUrl}`
);

await axios.post(

"http://localhost:5000/api/donations/send-certificate-email",

{
donationId:d._id
});

alert("Certificate sent on mail");

};


  /* ================= UI ================= */

  return (
    <main className="bg-cream overflow-hidden">
      {/* ================= HERO ================= */}

      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          alt="Donate Hero"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-red-950/70 via-red-950/60 to-black/50" />

        <div className="relative text-center text-white px-4 max-w-4xl">
          <p className="text-amber-400 uppercase tracking-widest text-sm mb-4 font-bold">
            Support Humanity
          </p>

          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Give Hope. Change Lives.
          </h2>

          <p className="text-lg opacity-90 mb-8">
            Your contribution empowers pepole with food, education  and
            healthcare support.
          </p>

          <a
            href="#donation-form"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-black font-bold px-10 py-4 rounded-full transition shadow-xl"
          >
            Donate Now
          </a>
        </div>
      </section>

      {/* ================= WHERE YOUR MONEY GOES ================= */}

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary uppercase text-sm font-bold tracking-widest mb-4">
              Transparency & Impact
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Where Your Money Is Used
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="/aboutimg.jpg"
                alt="Impact"
                className="rounded-3xl shadow-2xl"
              />
            </div>

            <div className="grid grid-cols-2 gap-8">
              <UsageCard
                percent="50%"
                title="Food Support"
                desc="Nutritious meals & hunger relief."
              />

              <UsageCard
                percent="25%"
                title="Education "
                desc=" Books, school fees, digital learning."
              />

              <UsageCard
                percent="15%"
                title="Healthcare"
                desc=" Medical camps & life-saving medicines."
              />

              <UsageCard
                percent="10%"
                title="Emergency Relief"
                desc="Disaster response & crisis aid."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= DONATION FORM ================= */}

      <section id="donation-form" className="py-28 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-[40px] shadow-xl p-10 md:p-16">
            <h2 className="text-4xl font-bold text-center mb-12">
              Make a Donation
            </h2>

            {/* AMOUNT BUTTONS */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[500, 1000, 2000, 5000].map((amt) => (
                <button
                  key={amt}
                  onClick={() => setAmount(amt)}
                  className={`py-4 rounded-xl font-bold transition ${
                    amount === amt
                      ? "bg-primary text-white"
                      : "bg-slate-100 hover:bg-slate-200"
                  }`}
                >
                  ₹ {amt}
                </button>
              ))}
            </div>

            {/* CUSTOM AMOUNT */}

            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="form-input mb-8"
              placeholder="Enter custom amount"
            />

            {/* DONOR DETAILS */}

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                placeholder="Full Name"
                className="form-input"
                value={donor.name}
                onChange={(e) => setDonor({ ...donor, name: e.target.value })}
              />

              <input
                placeholder="Email"
                className="form-input"
                value={donor.email}
                onChange={(e) => setDonor({ ...donor, email: e.target.value })}
              />

              <input
                placeholder="Phone"
                className="form-input"
                value={donor.phone}
                onChange={(e) => setDonor({ ...donor, phone: e.target.value })}
              />

            

              

<input
placeholder="PAN Number"
className="form-input"
value={donor.pan}
onChange={(e)=>
setDonor({...donor,pan:e.target.value})
}
/>
  
            </div>
<input
                placeholder="Address"
                className="form-input input-address mb-8"
                value={donor.address}
                onChange={(e) =>
                  setDonor({ ...donor, address: e.target.value })
                }
              />
            <textarea
              placeholder="Message"
              className="form-input mb-8"
              value={donor.message}
              onChange={(e) => setDonor({ ...donor, message: e.target.value })}
            />

            {/* DONATE BUTTON */}

            <button
              onClick={handleDonateClick}
              className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-5 rounded-full transition shadow-lg"
            >
              Donate ₹ {amount}
            </button>

            <div className="flex items-center justify-center gap-2 mt-6 text-sm text-slate-500">
              <ShieldCheck size={16} />
              Secure Payment Powered by Razorpay
            </div>
          </div>
        </div>
      </section>

      {/* ================= CERTIFICATE SECTION ================= */}

      <section className="py-24 bg-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-slate-600 mb-10 text-lg leading-relaxed">
            Thank you for your generous donation! You can download your
            certificate below.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button
              onClick={() => {
                if (certificateUrl) {
                  window.open(`http://localhost:5000/${certificateUrl}`);
                } else {
                  setShowCertificatePopup(true);
                }
              }}
              className="flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg"
            >
              <Download size={18} />
              Download Certificate
            </button>

            <Link
              to="/contact#contact-form"
              className="flex items-center gap-3 bg-amber-500 text-black px-8 py-4 rounded-full font-bold shadow-lg"
            >
              <FileText size={18} />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
{showList && (

<Modal onClose={()=>setShowList(false)}>

<h2>Select Certificate</h2>

<table>

<thead>

<tr>

<th>Date & Time</th>
<th>Amount</th>
<th>Action</th>

</tr>

</thead>

<tbody>

{certificateList.map(d=>(

<tr key={d._id}>

<td>

{new Date(d.createdAt)
.toLocaleString("en-IN")}

</td>

<td>₹ {d.amount}</td>

<td>

<button

onClick={()=>downloadCertificate(d)}

>

Download

</button>

</td>

</tr>

))}

</tbody>

</table>

</Modal>

)}

{loadingReceipt && (

<Modal>

<h2>Please wait</h2>

<p>We are generating your receipt</p>

<div className="loader"></div>

</Modal>

)}


      {/* ================= CONFIRM POPUP ================= */}

      {showConfirm && (
        <Modal onClose={() => setShowConfirm(false)}>
          <h2 className="text-xl font-bold mb-4">Confirm Donation</h2>

  <p>Name: {donor.name}</p>
<p>Email: {donor.email}</p>
<p>Phone: {donor.phone}</p>
<p>Address: {donor.address}</p>
<p>PAN: {donor.pan}</p>
<p>Amount: ₹{amount}</p>

          <button
            onClick={handleProceedPayment}
            className="mt-4 bg-primary text-white px-6 py-3 rounded-full"
          >
            Proceed to Payment
          </button>
        </Modal>
      )}

      {/* ================= CERTIFICATE POPUP ================= */}

      {showCertificatePopup && (
        <Modal onClose={() => setShowCertificatePopup(false)}>
          {!otpStep ? (
            <>
             <input
placeholder="Email"
className="form-input mb-4"
value={certificateEmail}
onChange={(e)=>setCertificateEmail(e.target.value)}
/>

              <input
placeholder="Phone"
className="form-input mb-4"
value={certificatePhone}
onChange={(e)=>setCertificatePhone(e.target.value)}
/>


              <button
                onClick={handleSendOtp}
                className="bg-primary text-white px-6 py-3 rounded-full"
              >
                Send OTP
              </button>
            </>
          ) : (
            <>
             <input
placeholder="Enter OTP"
className="form-input mb-4"
value={otp}
onChange={(e)=>setOtp(e.target.value)}
/>


              <button
                onClick={handleVerifyOtp}
                className="bg-primary text-white px-6 py-3 rounded-full"
              >
                Verify OTP
              </button>
            </>
          )}
        </Modal>
      )}

      {/* ================= SUCCESS ================= */}

      {showSuccess && (
        <Modal onClose={() => setShowSuccess(false)}>
          <h2 className="text-xl font-bold mb-4">Donation Successful</h2>

          <button
            onClick={() =>
              window.open(`http://localhost:5000/${certificateUrl}`)
            }
            className="bg-primary text-white px-6 py-3 rounded-full flex items-center gap-2"
          >
            <Download size={18} />
            Download Certificate
          </button>
        </Modal>
      )}

      {/* ================= ERROR ================= */}

      {showError && (
        <Modal onClose={() => setShowError(false)}>
          Your details do not match donor record
        </Modal>
      )}
    </main>
  );
};

/* ================= MODAL ================= */

const Modal = ({ children, onClose }) => (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white p-8 rounded-xl relative">
      <button onClick={onClose} className="absolute top-3 right-3">
        <X size={18} />
      </button>

      {children}
    </div>
  </div>
);

/* ================= CARD ================= */

const UsageCard = ({ percent, title, desc }) => (
  <div className="bg-slate-50 p-8 rounded-2xl shadow-sm text-center hover:shadow-lg transition">
    <h3 className="text-3xl font-bold text-primary mb-3">{percent}</h3>

    <h4 className="font-bold mb-2">{title}</h4>

    <p className="text-sm text-slate-500">{desc}</p>
  </div>
);

export default Donate;


