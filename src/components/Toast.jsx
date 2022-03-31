import React from "react";
import Alert from "@mui/material/Alert";
import "../style/Toast.scss";
import { connect } from "react-redux";

/***
 * @severity 提示样式
 * error 错误
 * warning 警告
 * info 提示
 * success 成功
 */
function Toast(props) {
  return (
    <Alert
      style={{ display: props.showToast ? "flex" : "none" }}
      severity={props.type}
    >
      {props.content}
    </Alert>
  );
}
const mapStateToProps = (state) => {
  return {
    showToast: state.showToast,
    type: state.type,
    content: state.content,
  };
};
export default connect(mapStateToProps, null)(Toast);
