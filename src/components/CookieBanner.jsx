import React from "react";
import CookieConsent from "react-cookie-consent";

const CookieBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept All"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="avs_user_consent"
      style={{
        background: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderTop: "1px solid rgba(0,0,0,0.05)",
        color: "#0f172a", // slate-900
        boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.05)",
        padding: "1rem",
        alignItems: "center",
        zIndex: 9999,
      }}
      buttonStyle={{
        background: "#14b8a6", // primary-500
        color: "white",
        fontSize: "14px",
        fontWeight: "600",
        borderRadius: "8px",
        padding: "10px 24px",
        transition: "background 0.3s ease",
      }}
      declineButtonStyle={{
        background: "transparent",
        color: "#64748b", // slate-500
        fontSize: "14px",
        fontWeight: "600",
        borderRadius: "8px",
        padding: "10px 24px",
        border: "1px solid #e2e8f0",
        transition: "all 0.3s ease",
      }}
      expires={365}
    >
      <div className="flex items-center gap-4">
        <span className="text-xl">🍪</span>
        <div>
          <h4 className="font-semibold text-base mb-1">We value your privacy</h4>
          <p className="text-sm text-slate-600 m-0">
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
          </p>
        </div>
      </div>
    </CookieConsent>
  );
};

export default CookieBanner;
