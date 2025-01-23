import React, { Component } from "react";

export class Chatbot extends Component {
  componentDidMount() {
    (function (d, m) {
      var kommunicateSettings = {
        appId: "3bd8dc9b643b9c6b1a1beeb33e6d6e295",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
        widgetBackgroundColor: "#4CAF50",
        buttonBackgroundColor: "#FF5722",
        buttonIconColor: "#ffffff",
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }

  clearMessages = () => {
    if (window.kommunicate) {
      window.kommunicate.clearConversation((response) => {
        console.log("Messages cleared:", response);
      });
    } else {
      console.error("Kommunicate is not loaded yet.");
    }
  };
  render() {
    return (
      <div>
        <button
          onClick={this.clearMessages}
          style={{
            padding: "10px 20px",
            backgroundColor: "#FF5722",
            color: "#ffffff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Clear Messages
        </button>
      </div>
    );
  }
}

export default Chatbot;

// import React from "react";
// import "./Chatbot.css";

// const Chatbot = () => {
//   return (
//     <div className="container">
//       <div className="chatbot-popup">
//         <div className="chat-header">
//           <div className="header-info">
//             <i className="ri-chat-smile-ai-fill"></i>
//             <h2 className="logo-text">Chatbot</h2>
//             <button className="material-symbols-rounded">
//               <i className="ri-arrow-drop-down-line"></i>
//             </button>
//           </div>
//           <div className="chat-body">
//             <div className="message bot-message">
//               <i className="ri-chat-smile-ai-fill"></i>
//               <p className="message-text">
//                 Hey there <br /> How can I help you ?
//               </p>
//             </div>
//           </div>
//           <div className="message user-message">
//             <p className="message-text">
//               Lorem ipsum dolor, laudantium in modi quod recusandae obcaecati
//               esse, veniam laborum sequi.
//             </p>
//           </div>
//         </div>
//         <div className="chat-footer">
//           <form action="#" className="chat-form">
//             <input
//               type="text"
//               placeholder="Message..."
//               className="input-message"
//               required
//             />
//             <button className="material-symbols-rounded">
//               <i className="ri-arrow-drop-up-line"></i>
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;
