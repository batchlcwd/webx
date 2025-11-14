import MyButton from "./Button";

function Footer() {
  return (
    <footer className="  my-2  flex items-center justify-between  py-5 px-2 bg-neutral-900 text-neutral-200">
      <h1 className="text-xl font-bold">Substring Technologies</h1>
      <p className="font-light underline">Made with 💘 in India</p>
      <MyButton />
    </footer>
  );
}

export default Footer;
