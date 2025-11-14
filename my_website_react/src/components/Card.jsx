import MyButton from "./Button";

export default function Card({ cardTitle, cardDescription }) {
  return (
    <div className=" hover:bg-neutral-300 transition-all duration-200 cursor-pointer border border-gray-300 w-[300px] rounded p-2 m-2 bg-gray-100 shadow-lg flex flex-col gap-4">
      <div className="card_header">
        <h1 className="font-bold">{cardTitle}</h1>
      </div>
      <div className="card_body">
        <p>{cardDescription}</p>
      </div>
      <div className="card_footer">
        <MyButton title="Pay" />
        <MyButton title="Cancel" />
      </div>
    </div>
  );
}
