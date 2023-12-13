import { ImageResponse } from "@vercel/og";
import { profileImg } from "@/assets/base64Img";
import fs from "fs";
import path from "path";

export const generateOG = async ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  const [font, fontBold] = await Promise.all([
    importFont("Oswald-Regular.ttf"),
    importFont("Oswald-Bold.ttf"),
  ]);

  return new ImageResponse(<OG title={title} subtitle={subtitle} />, {
    fonts: [
      { name: "Oswald", data: font, style: "normal", weight: 400 },
      { name: "Oswald", data: fontBold, style: "normal", weight: 700 },
    ],
  });
};

const OG = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div
      style={{
        fontFamily: "Oswald, sans-serif",
        width: "100%",
        height: "100%",
        backgroundColor: "#0e0b30",
        backgroundImage: "linear-gradient(160deg, #0e0b30 0%, #000000 74%)",
        display: "flex",
        flexDirection: "column",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: "50px",
          paddingRight: "50px",
          height: "25%",
        }}
      >
        <img
          src={profileImg}
          alt="profile"
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            border: "3px solid grey",
          }}
        />
        <p
          style={{
            fontWeight: 700,
            color: "hsl(240 3.8% 46.1%)",
            fontSize: "48px",
          }}
        >
          touha.dev
        </p>
      </div>
      <div
        style={{
          display: "flex",
          height: "75%",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "50px",
          lineHeight: "1",
        }}
      >
        <h3 style={{ fontSize: "56px", marginBottom: "30px", fontWeight: 400 }}>
          {title}
        </h3>
        <p
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            color: "hsl(240 3.8% 46.1%)",
          }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
};

const importFont = (name: string) => {
  const filePath = path.resolve(`src/assets/fonts/${name}`);
  return new Promise<ArrayBufferLike>((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) reject(err);
      else resolve(new Uint8Array(data).buffer);
    });
  });
};
