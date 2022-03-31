// toast显示隐藏
export const ToastmapDispatchToProps = (dispatch) => {
  return {
    showToastFn(value, dispatch) {
      dispatch({
        type: "showToast",
        value: value,
      });
    },
    hideToastFn(dispatch) {
      dispatch({
        type: "hideToast",
      });
    },
  };
};

export const showToast = (value,props) => {
  props.showToastFn(
    value,
    props.dispatch
  );
  setTimeout(() => {
    props.hideToastFn(props.dispatch);
  }, 2000);
};
