"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Card } from "@/components/ui/card";

const Register = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("ethiopia");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("female");

  const router = useRouter();

  const isValidate = () => {
    let isProceed = true;
    let errorMessage = "Please enter a value in ";
    if (id === null || id === "") {
      isProceed = false;
      errorMessage += "Username";
    }
    if (name === null || name === "") {
      isProceed = false;
      errorMessage += "Fullname";
    }
    if (password === null || password === "") {
      isProceed = false;
      errorMessage += "Password";
    }
    if (email === null || email === "") {
      isProceed = false;
      errorMessage += "Email";
    }

    if (!isProceed) {
      toast.warning(errorMessage);
    } else {
      if (true) {
        // Valid email address
      } else {
        isProceed = false;
        toast.warning("Please enter a valid email address");
      }
    }
    return isProceed;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let regObj = {
      id,
      name,
      password,
      email,
      phone,
     
    };

    if (isValidate()) {
      fetch("http://localhost:4000/user", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regObj),
      })
        .then((res) => res.json())
        .then((data) => {
          // Handle successful response
          console.log(data);
          toast.success("Registration successful");
          router.push("/signin"); // Redirect to home page
        })
        .catch((err) => {
          // Handle error
          console.error(err);
          toast.error("Registration failed");
        });
    }
  };

  return (
    <div className="bg-gray-300">
      <Card className="flex justify-center items-center">
        <div className="w-1/2 my-10">
          <form className="bg-white rounded-lg shadow-md p-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <h1 className="text-2xl font-bold text-center">User Registration</h1>
            </div>
            <div className="flex flex-col justify-center items-center p-4">
              <div>
                <div className="mb-4">
                  <label className="block">User Name</label>
                  <input
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    className="border border-gray-200 rounded-md px-3 py-2 w-full"
                  />
                  
                </div>
                <div className="mb-4">
                  <label className="block">Full Name</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-200 rounded-md px-3 py-2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label className="block">Email</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-200 rounded-md px-3 py-2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label className="block">Phone</label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="border border-gray-200 rounded-md px-3 py-2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label className="block">Password</label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="border border-gray-200 rounded-md px-3 py-2 w-full"
                  />
                </div>
              </div>
              <div>
                
                
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-gray-600 hover:bg-white text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline border border-gray-700"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Register;

// import { useEffect, useState } from "react";
// import { useRouter } from 'next/navigation'
// import { toast } from "react-toastify";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const router = useRouter();

//   useEffect(() => {
//     sessionStorage.clear();
//   }, []);

//   const proceedLogin = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       // Implementation
//       fetch("http://localhost:4000/user/" + username)
//         .then((res) => res.json())
//         .then((resp) => {
//           if (Object.keys(resp).length === 0) {
//             toast.error("Please enter a valid username");
//           } else {
//             if (resp.password === password) {
//               toast.success("Success");
//               sessionStorage.setItem("username", username);
//               sessionStorage.setItem("userrole", resp.role);
//               router.push("/");
//             } else {
//               toast.error("Please enter valid credentials");
//             }
//           }
//         })
//         .catch((err) => {
//           toast.error("Login failed due to: " + err.message);
//         });
//     }
//   };

//   const proceedLoginUsingAPI = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       const inputObj = { username, password };
//       fetch("https://localhost:44308/User/Authenticate", {
//         method: "POST",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify(inputObj),
//       })
//         .then((res) => res.json())
//         .then((resp) => {
//           if (Object.keys(resp).length === 0) {
//             toast.error("Login failed, invalid credentials");
//           } else {
//             toast.success("Success");
//             sessionStorage.setItem("username", username);
//             sessionStorage.setItem("jwttoken", resp.jwtToken);
//             router.push("/");
//           }
//         })
//         .catch((err) => {
//           toast.error("Login failed due to: " + err.message);
//         });
//     }
//   };

//   const validate = () => {
//     let result = true;
//     if (username === "" || username === null) {
//       result = false;
//       toast.warning("Please enter a username");
//     }
//     if (password === "" || password === null) {
//       result = false;
//       toast.warning("Please enter a password");
//     }
//     return result;
//   };

//   return (
//     <div className="flex justify-center">
//     <div className="w-1/3 my-10">
//       <form onSubmit={proceedLogin} className="bg-white rounded-lg shadow-md p-6">
//         <div className="mb-4">
//           <h2 className="text-2xl font-bold">User Login</h2>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="username" className="block mb-2">
//             User Name <span className="errmsg">*</span>
//           </label>
//           <input
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="border border-gray-300 rounded-md px-3 py-2 w-full"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="password" className="block mb-2">
//             Password <span className="errmsg">*</span>
//           </label>
//           <input
//             id="password"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="border border-gray-300 rounded-md px-3 py-2 w-full"
//           />
//         </div>
//         <div className="flex justify-between">
//           <button
//             onClick={proceedLogin}
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Login
//           </button>
//         </div>
//       </form>
//     </div>
//   </div>
//   );
// };

// export default Login;
