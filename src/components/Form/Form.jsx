import React, { useRef } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, FormGroup, Input } from "@mui/material";
import { useLoginMutation, useRegisterMutation } from "../../store/shipmentApi";
import { useDispatch } from "react-redux";
import { login } from "../../store/reducer/authSlice";
import { useNavigate } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Form() {
  const [regFn, { error: regError }] = useRegisterMutation();
  const [loginFn, { error: loginError }] = useLoginMutation();

  console.log(loginFn);
  const userNameInput = useRef();
  const passWordInput = useRef();
  const emailInput = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //註冊
  const signUpSubmitHandler = (e) => {
    e.preventDefault();
    // approach users input (單向綁定)
    const username = userNameInput.current.value;
    const password = passWordInput.current.value;
    const email = emailInput.current.value;
    regFn({ username, password, email }).then((res) => {
      if (!res.error) {
        alert("註冊成功，請前往登入頁面登入");
      } else {
        alert(res.error.data.error.message);
      }
    });
  };

  //登入
  const loginSubmitHandler = (e) => {
    e.preventDefault();
    const username = userNameInput.current.value;
    const password = passWordInput.current.value;
    //Strapi可用信箱or帳號登入，他指定要用identfier收
    loginFn({ identifier: username, password }).then((res) => {
      if (!res.error) {
        alert("登入成功");
        dispatch(
          login({
            token: res.data.jwt,
            user: res.data.user,
          })
        );
        navigate("/", { replace: true });
      } else {
        alert(res.error.data.error.message);
      }
    });
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Login" {...a11yProps(0)} />
          <Tab label="Signup" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {/* 登入 */}
        <Box>
          <FormGroup onSubmit={loginSubmitHandler}>
            <Input
              inputRef={userNameInput}
              type="text"
              placeholder="Account or Email"
            />
            <Input
              inputRef={passWordInput}
              type="password"
              placeholder="Password"
            />
            <Button onClick={loginSubmitHandler}>Login</Button>
          </FormGroup>
        </Box>
      </TabPanel>
      {/* 註冊 */}
      <TabPanel value={value} index={1}>
        <FormGroup onSubmit={signUpSubmitHandler}>
          <Input inputRef={emailInput} type="email" placeholder="Email" />
          <Input inputRef={userNameInput} type="text" placeholder="Account" />
          <Input
            inputRef={passWordInput}
            type="password"
            placeholder="Password"
          />
          <Button onClick={signUpSubmitHandler}>Signup</Button>
        </FormGroup>
      </TabPanel>
    </Box>
  );
}
