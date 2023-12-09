import { profileImg } from "@/assets/base64Img";

export const OG = ({ title }: { title: string }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "black",
        display: "flex",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "30%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "hsl(240 3.7% 15.9%)",
        }}
      >
        <img
          src={profileImg}
          alt="profile"
          style={{
            width: "128px",
            height: "128px",
            borderRadius: "50%",
            border: "3px solid white",
            marginRight: "20px",
          }}
        />
        <p style={{ fontWeight: "bold", color: "lightgrey", fontSize: "56px" }}>
          touha.dev
        </p>
      </div>
      <div
        style={{
          display: "flex",
          width: "70%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "50px",
        }}
      >
        <h3 style={{ fontSize: "48px" }}>{title}</h3>
      </div>
    </div>
  );
};
