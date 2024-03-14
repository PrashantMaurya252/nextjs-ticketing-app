import Image from "next/image";
import TicketCard from "./(components)/TicketCard";

export default function Home() {
  return (
    <div>
      <div className="lg:grid lg:grid-cols-2 xl:grid-cols-4">
      <TicketCard/>
      <TicketCard/>
      <TicketCard/>
      <TicketCard/>
      <TicketCard/>
      <TicketCard/>
      </div>
      
    </div>
  );
}
