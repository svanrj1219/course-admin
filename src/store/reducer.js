// 定义默认数据

const defaultState = {
  showToast: false,
  type: "success",
  content: "这是一条Toast",
};

// 导出函数
// eslint-disable-next-line
export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "showToast":
      newState.showToast = action.value.showToast;
      newState.type = action.value.type;
      newState.content = action.value.content;
      break;
    case "hideToast":
      newState.showToast = false;
      break;
    default:
      break;
  }
  return newState;
};
