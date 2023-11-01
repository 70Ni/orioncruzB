function importAll(r) {
  let stored = {};
  r.keys().map((item) => {
    stored[item.replace("./", "")] = r(item);
  });
  return stored;
}
const Imagingz = importAll(
  require.context("../Images/Img", true, /\.(png|jpe?g|svg)$/)
);
let arr = [
  {
    Id: "01",
    Header: "CineCio",
    Content:
      "Sharing Property and Spaces to the client. Made to notify, understand and updates with new listings",
    Link: "/Cinecio",
    Image: Imagingz["Cine/01.png"],
  },
  {
    Id: "02",
    Header: "Xbox console",
    Content:
      "Xbox console was a concept design. The project was to share the features and experience of new xbox console from a different prospective.",
    Link: "/casepro",
    Image: Imagingz["xbox/Xb02.png"],
  },
  {
    Id: "03",
    Header: "Success.ai",
    Content:
      "Success.ai is a conversational bot that enables companies to scale customer success with technology not people",
    Link: "/success",
    Image: Imagingz["Success/03.png"],
  },
  {
    Id: "04",
    Header: "Space",
    Content:
      "Sharing Property and Spaces to the client. Made to notify, understand and updates with new listings",
    Link: "/space",
    Image: Imagingz["Space/02.png"],
  },
];

export default arr;
