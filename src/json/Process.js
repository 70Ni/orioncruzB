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
    Header: "Step 1: Empathize",
    Content:
      "First step in the Design Thinking process, a human-centered design approach that focuses on understanding the needs, desires, and behaviors of the people for whom we are designing a product or solution. This step is essential for gaining a deep and empathetic understanding of the end user.",
    Link: "/Cinecio",
    Image: Imagingz["Cine/01.png"],
  },
  {
    Id: "02",
    Header: "Step 2: Define",
    Content:
      "In the design thinking process, the \"Define\" step follows the \"Empathize\" step and we involve synthesizing the information and insights gathered during the empathize phase to create a clear and well-defined problem statement. This step is crucial in guiding the design process, so we ensure the definition is aligned with the needs",
    Link: "/casepro",
    Image: Imagingz["xbox/Xb02.png"],
  },
  {
    Id: "03",
    Header: "Step 3: Ideate",
    Content:
      "This step is all about generating creative and innovative solutions to the defined problem or challenge. It encourages brainstorming and ideation to explore a wide range of ideas without judgment. We use this phase to create the basic layout or plans for the projects",
    Link: "/success",
    Image: Imagingz["Success/03.png"],
  },
  {
    Id: "04",
    Header: "Step 4: Deliver",
    Content:
      "The deliver step of the design process is the turning point when designs begin to feel real because they are shared with others in the form of a project. This is where the importance of design delivery comes into play, because this determines how efficiently we can transform the design vision into a final outcome that solves your needs.",
    Link: "/space",
    Image: Imagingz["Space/02.png"],
  },
  {
    Id: "05",
    Header: "Step 5: Test/Check",
    Content:
      "The \"Test\" step in the design process is crucial for evaluating and validating the ideas and prototypes developed during the earlier stages of the design process. This step helps ensure that the solutions created actually meet your needs and are effective.",
    Link: "/space",
    Image: Imagingz["Space/02.png"],
  },
];

export default arr;
