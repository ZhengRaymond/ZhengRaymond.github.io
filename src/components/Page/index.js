import React from 'react';

const Page = (props) => {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
    margin: "10vh",
    width: '80%',
    height: props.unlimited ? "auto" : "100vh",
    backgroundColor: props.backgroundColor || "white",
    zIndex: props.top ? -1 : -2
  }

  return (
    <div style={style}>
      { props.children }
    </div>
  )
}

export default Page;
