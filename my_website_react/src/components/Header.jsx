let x = 10;

function Header() {
  function get_brand_name() {
    return "Learn Code With Durgesh";
  }
  let brand_name = "String technologies";

  return (
    <>
      <div className="p-5  border-b m-2 border-gray-300">
        <h1 className="text-3xl font-bold underline">
          Welcome to react basics
        </h1>
        <p className="font-light">
          Wow , we are welcoming you on this website...
        </p>
        <h1>Brand Name : {brand_name}</h1>
        <h1>Another Brand name: {get_brand_name()}</h1>
      </div>
      {/* <p>Header ends</p> */}
    </>
  );
}

// jsx--> javascript ke ander html like structure
// tools-->  jsx[className]--> js[class]:

/*


1. Must have one parent element;
2. Remember the js keywords: class---> className
for--> forHtml
3. use dynamic values --> { }






*/
export default Header;
