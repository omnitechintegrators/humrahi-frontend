import { useState } from "react";
import api from "../utils/api";
import { Star, Upload, X, Loader2 } from "lucide-react";

const CommentForm = () =>
{

const [formData,setFormData]=useState({

name:"",
comment:"",
rating:5,
photo:null

});

const [preview,setPreview]=useState(null);

const [popup,setPopup]=useState(false);

const [email,setEmail]=useState("");

const [otp,setOtp]=useState("");

const [otpSent,setOtpSent]=useState(false);

const [message,setMessage]=useState("");

const [successPopup, setSuccessPopup] = useState(false);

const [loading,setLoading]=useState(false);



/* IMAGE PREVIEW */

const handlePhoto=(e)=>
{

const file=e.target.files[0];

if(file)
{

setFormData({...formData,photo:file});

setPreview(URL.createObjectURL(file));

}

};



/* SEND OTP */

const sendOTP=async()=>
{

try{

setLoading(true);

const res=await api.post(

"/api/comments/send-otp",

{email}

);

if(res.data.success)
{

setOtpSent(true);

setMessage("OTP sent successfully");

}

}
catch(err)
{

setMessage(

err.response?.data?.message ||

"Failed to send OTP"

);

}
finally{

setLoading(false);

}

};



/* SUBMIT COMMENT */

const submitComment=async()=>
{

try{

setLoading(true);

const data=new FormData();

data.append("name",formData.name);

data.append("comment",formData.comment);

data.append("rating",formData.rating);

data.append("email",email);

data.append("otp",otp);

data.append("photo",formData.photo);


const res=await api.post(

"/api/comments/verify-submit",

data

);


if(res.data.success)
{

setPopup(false);

setSuccessPopup(true);


// reset form

setFormData({

name:"",
comment:"",
rating:5,
photo:null

});

setPreview(null);

setEmail("");

setOtp("");

setOtpSent(false);

}

}
catch(err)
{

setMessage(

err.response?.data?.message ||

"Failed to submit review"

);

}
finally{

setLoading(false);

}

};



return(

<>

{/* MAIN FORM */}
<div className="bg-cream px-28 pb-40 pt-10">
<div className="bg-white p-10 rounded-[32px] mt-16 border flex flex-col items-center justify-center">

<h3 className="text-2xl font-bold mb-6 justify-center">

Share Your Experience

</h3>



{/* IMAGE */}
<h3>Select Profile</h3>
<div className="w-20 h-20 rounded-full overflow-hidden border mb-4">

{preview?

<img

src={preview}

className="w-full h-full object-cover"

/>

:

<div className="flex justify-center items-center h-full">

<Upload/>

</div>

}

</div>



<input

type="file"

accept="image/*"

onChange={handlePhoto}

/>



<input

placeholder="Name"

className="border p-2 w-full my-2 rounded-lg"

onChange={(e)=>

setFormData({

...formData,

name:e.target.value

})

}

/>



<textarea

placeholder="Comment"

className="border p-2 w-full my-2 rounded-lg"

onChange={(e)=>

setFormData({

...formData,

comment:e.target.value

})

}

/>



{/* RATING */}

<div className="flex gap-2 my-4">

{[1,2,3,4,5].map(star=>(

<Star

key={star}

className="cursor-pointer"

fill={

star<=formData.rating?

"#f59e0b":"none"

}

onClick={()=>

setFormData({

...formData,

rating:star

})

}

/>

))}

</div>



<button

onClick={()=>setPopup(true)}

className="bg-primary text-white px-6 py-3 rounded"

>

Submit Review

</button>



</div>
</div>


{/* POPUP */}

{/* SUCCESS POPUP */}

{successPopup && (

<div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

<div className="bg-white p-8 rounded-xl text-center">

<h3 className="text-2xl font-bold text-green-600 mb-4">

Comment Submitted Successfully 🎉

</h3>

<p>

Your review is now visible.

</p>

<button

onClick={() => {

setSuccessPopup(false);

window.location.reload();

}}

className="bg-primary text-white px-6 py-2 mt-4 rounded"

>

OK

</button>

</div>

</div>

)}



{popup&&(

<div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

<div className="bg-white p-8 rounded-xl w-96 relative">


<X

className="absolute right-3 top-3 cursor-pointer"

onClick={()=>setPopup(false)}

/>



<h3 className="text-xl font-bold mb-4">

Verify Email

</h3>



<input

placeholder="Email"

className="border p-2 w-full mb-3"

onChange={(e)=>setEmail(e.target.value)}

/>



{otpSent&&

<input

placeholder="Enter OTP"

className="border p-2 w-full mb-3"

onChange={(e)=>setOtp(e.target.value)}

/>

}



{/* BUTTON WITH LOADING USED */}

<button

onClick={otpSent?submitComment:sendOTP}

disabled={loading}

className="bg-primary text-white px-4 py-2 rounded w-full flex justify-center items-center gap-2"

>

{loading?

<>

<Loader2 className="animate-spin"/>

Processing...

</>

:

otpSent?

"Submit Review"

:

"Verify Email"

}

</button>



{message&&

<p className="mt-3 text-sm">

{message}

</p>

}



</div>

</div>

)}


</>

);

};

export default CommentForm;