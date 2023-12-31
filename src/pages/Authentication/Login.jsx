import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import displaySlice from "../../features/Display/displaySlice";
import { loginBackground } from "../../assets/img/index";
import { Link, useNavigate, Navigate } from "react-router-dom";
import useToken from "../../hooks/useToken";

//css
import "../../assets/css/Pages/login.css";
import { Input } from "../../components/index";
import { loginCustomer } from "../../services/UserService";
import consumerSlice from "../../features/consumer/consumerSlice";
import toast, { Toaster } from "react-hot-toast";
import { URL_SHIPPER_PAGE } from "../../utils/constraint";

function Login(props) {
  const dispatch = useDispatch();
  const [account, setAccount] = useState("");
  const [pass, setPass] = useState("");
  const navigation = useNavigate();
  const { setToken } = useToken();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const checkLogin = await loginCustomer({ account, password: pass });
      if (checkLogin.status === 200) {
        dispatch(consumerSlice.actions.setUserCurrentInfo(checkLogin.data));
        toast.success("Login successfully");
        await sessionStorage.setItem(
          "user_payload",
          JSON.stringify(checkLogin.data),
        );
        dispatch(displaySlice.actions.displaySidebar(true));

        //set token into session storage
        setToken(checkLogin.data.userID);
        if (checkLogin.data?.role === "admin") {
          navigation("/");
        } else if (checkLogin.data?.role === "customer") {
          navigation("/customer/store");
        } else if (checkLogin.data?.role === "shipper") {
          navigation(URL_SHIPPER_PAGE);
        } else {
          //staff
          navigation("/order");
        }
      } else {
        console.log("failed");
        toast.error("Login failed");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error from server" + error);
    }
  };

  useEffect(() => {
    sessionStorage.clear();
    dispatch(displaySlice.actions.displaySidebar(false));
    dispatch(displaySlice.actions.displayHeader(false));
  }, []);
  return (
    <>
      <Toaster />

      <div className="login_container flex-center-between">
        <div className="login_img_container">
          <img src={loginBackground} alt="" />
        </div>
        <div className="login_form flex-center-center">
          <h6 className="margin-none font-weight-b title_size text_primary">
            Sign-In
          </h6>
          <dd>
            If you need account for staff, shipper. Please contact to Admin
          </dd>
          <form>
            <Input
              value={account}
              onChange={(e) => setAccount(e.target.value)}
              label="Account"
              placeholder="Enter account"
            />
            <Input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              label="Password"
              type="password"
              placeholder="Enter password"
            />
            <Link to="/forget" className="forget_pass text_decoration_none">
              Forgot password
            </Link>
            <button
              onClick={handleLogin}
              className="button_login button button_primary font-weight-b"
            >
              Sign In
            </button>
            <div className="text_center">
              You don't have an account?
              <Link
                to="/register"
                className="go_back_login text_decoration_none"
              >
                Register as customer
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
